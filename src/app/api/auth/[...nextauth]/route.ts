import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  
  // Provider google
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        authorization:{params:{scope:'read:userinfo'}} //get only escope profile
      })
  ],

//Our secret
secret:process.env.NEXTAUTH_SECRET,
  
  }
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };