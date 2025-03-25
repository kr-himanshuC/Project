import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/userModel";
import {connect} from "@/lib/dbConfig"
import bcrypt from "bcryptjs";
import Github from "next-auth/providers/github";

const handler = NextAuth({
    session:{
        strategy:"jwt",
    },
    providers: [
            Github({
                clientId: process.env.GITHUB_ID as string,
                clientSecret: process.env.GITHUB_SECRET as string,
            }),
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
        async signIn({account, profile}){
            if(account?.provider === "github"){
                await connect();
                const user = await User.findOne({email: profile?.email});
                if(!user){
                    // router.push("/signup")
                    await User.create({
                        name: profile?.name,
                        email: profile?.email,
                    })
                }
            }
            return true;
        },
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