import NextAuth, { Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// import User from "@/models/userModel";
import { prisma } from "@/lib/dbConfig";
import bcrypt from "bcryptjs";
import { JWT } from "next-auth/jwt";


const handler = NextAuth({
    session: {
        strategy: "jwt",
    },
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
                student: {
                    type: "text"
                }
            },

            async authorize(credentials, req) {
                try {

                    console.log(credentials?.student);
                    
                    if (credentials?.student === "true") {
                        const user = await prisma.user.findUnique({
                            where: {
                                email: credentials?.email
                            }
                        })
                        console.log("🚀 ~ authorize ~ user:", user)
                        
                        if (!user) {
                            throw new Error("")
                        }
                        const isValidPassword = await bcrypt.compare(
                            credentials?.password ?? "", user.password as string
                        );

                        if (!isValidPassword) {
                            throw new Error("")
                        }

                        return user;
                    }
                    else{
                        const admin = await prisma.admin.findUnique({
                            where: {
                                email: credentials?.email
                            }
                        })
                        console.log("🚀 ~ authorize ~ admin:", admin)
                        if (!admin) {
                            throw new Error("")
                        }
                        const isValidPassword = await bcrypt.compare(
                            credentials?.password ?? "", admin.password as string
                        );

                        if (!isValidPassword) {
                            throw new Error("")
                        }

                        return admin;
                    }
                } catch (error) {
                    return null;
                }
            },
        })
    ],
    callbacks: {
        async jwt({ token, user }): Promise<JWT> {
            if (user) {
                token.email = user.email;
            }
            return token;
        },
        async session({ session, token }): Promise<Session> {
            if (token) {
                session.user = {
                    email: token.email,
                }
            }
            return session;
        }
    },
    pages: {
        signIn: "/login"
    },
    secret: process.env.NEXTAUTH_SECRET


})

export { handler as GET, handler as POST } 