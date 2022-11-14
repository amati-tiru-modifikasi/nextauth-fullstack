import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import jwt from "jsonwebtoken"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
  jwt: {
    // The maximum age of the NextAuth.js issued JWT in seconds.
    // Defaults to `session.maxAge`.
    maxAge: 60 * 60 * 24 * 30,
    // You can define your own encode/decode functions for signing and encryption
    async encode({ secret, token }) {
        return jwt.sign(token, secret)
    },
    async decode({ secret, token }) {
        return jwt.verify(token, secret)
    },
  }
}

export default NextAuth(authOptions)