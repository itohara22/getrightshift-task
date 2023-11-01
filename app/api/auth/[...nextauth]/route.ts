import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "your username"
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "your password"
        }
      },
      async authorize(credentials) {
        // WE CAN ADD ;OGIC FOR RESITERING OR FETCHING USER FROM THE DATABSE HERE

        const user = { id: "22", name: "Shubham", password: "textuser" };

        if (
          credentials?.username === user.name &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          return null;
        }
      }
    })
  ]
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
