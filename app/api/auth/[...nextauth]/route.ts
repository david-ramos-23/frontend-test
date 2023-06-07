import NextAuth, { Session } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import GithubProvider, { type GithubProfile } from 'next-auth/providers/github'

const handler = NextAuth({
  providers: [
    GithubProvider<GithubProfile>({
      clientId: process.env.GITHUB_CLIENT_ID ?? '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET ?? ''
    })
  ],
  secret: process.env.JWT_SECRET,
  callbacks: {
    async jwt ({ token, account, profile }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account != null) {
        token.account = account
        token.profile = profile
      }
      return token
    },
    async session ({ session, token }: { session: Session, token: JWT }) {
      // Send properties to the client, like an access_token and user id from a provider.
      if (session.user !== undefined) {
        session.user.account = token.account
        session.user.profile = token.profile
      }
      return session
    }
  }
})

export { handler as GET, handler as POST }
