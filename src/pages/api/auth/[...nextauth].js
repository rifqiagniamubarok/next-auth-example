import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        // const res = await fetch('http://localhost:3660/auth/login', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify({
        //     email: credentials.email,
        //     password: credentials.password,
        //   }),
        // });

        // const result = await res.json();

        // if (!res.ok || !result.token) {
        //   throw new Error(result.message || 'Login failed');
        // }

        // const user = { id: result.token, email: 'rifqi@gmail.com', type: 'admin' };
        const user = { id: 1, email: credentials.email };
        return user;
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (account) {
        token.accessToken = account.access_token; // GitHubProvider
      } else if (user) {
        token.accessToken = user.token; // CredentialsProvider
      }

      return token;
    },
    async session({ session, token }) {
      // session.accessToken = token.accessToken;
      // console.log({ session, token: token });
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
export default NextAuth(authOptions);
