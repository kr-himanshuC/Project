import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/userModel";
import {connect} from "@/lib/dbConfig"
import bcrypt from "bcryptjs";

const handler = NextAuth({
    session:{
        strategy:"jwt",
    },
    providers: [
            // GitHubProvider({
            //     clientId: process.env.GITHUB_ID as string,
            //     clientSecret: process.env.GITHUB_SECRET as string,
            // }),
            CredentialsProvider({
                name:"Credentials",
                credentials: {
                    email: {
                        label: "email",
                        type: "text",
                        placeholder: "Email..."
                    },
                    password:{
                        label: "Password",
                        type: "password",
                        placeholder:"Password..."
                    }
                },
    
                async authorize(credentials, req) {
                    try {
                        await connect()
                        const user = await User.findOne({email: credentials?.email});
                        if(!user){
                            throw new Error("")
                        }
                        const isValidPassword = await bcrypt.compare(
                            credentials?.password ?? "", user.password as string
                        );

                        if(!isValidPassword){
                            throw new Error("")
                        }

                        return user;
                    } catch (error) {
                        return null;
                    }
                },
            })
        ],
    callbacks:{
        async jwt({token, user}){
            if(user){
                token.id = user.id;
                token.email = user.email;
            }
            return token;
        },
        async session({session, token}){
            if(token){
                session.user = {
                    email: token.email,
                    name: token.name,
                    image: token.picture,
                }
            }
            return session;
        }
    },
    pages: {
        signIn: "/signin"
    },
    secret: process.env.NEXTAUTH_SECRET


})

export { handler as GET, handler as POST } 