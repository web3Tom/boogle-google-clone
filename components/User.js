import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';

export default function User({ className }) {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className={`px-1 ${className}`}>
        <Image
          className={`h-10 w-10 rounded-full hover:bg-gray-200 cursor-pointer`}
          width="32px"
          height="32px"
          onClick={signOut}
          src={session.user.image}
          alt="user-image"
        />
      </div>
    );
  }
  return (
    <>
      <button
        className={`bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md ${className}`}
        onClick={signIn}
      >
        Sign In
      </button>
    </>
  );
}
