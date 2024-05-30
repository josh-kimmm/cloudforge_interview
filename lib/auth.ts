import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.NEXTAUTH_GITHUB_ID,
      clientSecret: process.env.NEXTAUTH_GITHUB_SECRET
    })
  ]
});

// Can be used on both client/server components to determine if a user is signed on or not
export const isSignedOn = async () => {
  try {
    const session = await auth();
    if (session?.user?.email) return true;

    return false;
  } catch (error) {
    console.error('Unable to verify if user is authenticated');
    return error;
  }
};
