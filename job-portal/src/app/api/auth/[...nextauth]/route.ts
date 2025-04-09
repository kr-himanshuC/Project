import NextAuth, { Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/dbConfig";
import bcrypt from "bcryptjs";
import { JWT } from "next-auth/jwt";


const handler = NextAuth({
    
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "email",
                    type: "text",
                    placeholder: "Email..."
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "Password..."
                },
            },

            async authorize(credentials) {
                try {

                    const user = await prisma.user.findUnique({
                        where: {
                            email: credentials?.email
                        }
                    })
                    console.log("🚀 ~ authorize ~ user:", user)

                    if (!user) {
                        throw new Error("user not found")
                    }
                    const isValidPassword = await bcrypt.compare(
                        credentials?.password ?? "", user.password as string
                    );

                    if (!isValidPassword) {
                        throw new Error("Invalid password")
                    }

                    return user;

                } catch (error) {
                    return null;
                }
            },
        })
    ],
    session:{
        strategy : "jwt"
    },
    callbacks: {
        async jwt({ token, user }) {
           
            if (user) {
                token.email = user.email;
                token.role = user.role;
                token.id = user.id;
            }
           

            return token;
        },
        async session({ session, token }) {
           
            if (token) {
                session.user = {
                    id: token.id,
                    email: token.email,
                    role: token.role
                }
            }
           
            return session;
        }
    },
    pages: {
        signIn: "/login"
    },
    secret: process.env.NEXTAUTH_SECRET as string


})

export { handler as GET, handler as POST } 