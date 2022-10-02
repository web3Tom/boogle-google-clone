import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';

export default function User() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className="flex items-center justify-center basis-auto flex-grow-0 flex-shrink-1 h-[40px ]">
        <Image
          className="rounded-full hover:bg-gray-200 cursor-pointer p-1"
          layout="intrinsic"
          width="32px"
          height="32px"
          onClick={signOut}
          src={session.user.image}
          alt=""
        />
      </div>
    );
  }
  return (
    <>
      <button
        className="px-6 py-2 font-medium rounded-md bg-blue-500 text-white hover:brightness-105 hover:shadow-md"
        onClick={signIn}
      >
        Sign In
      </button>
    </>
  );
}
