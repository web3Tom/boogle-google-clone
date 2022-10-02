import React from 'react';
import Header from '../components/Header';
import Image from 'next/image';
import { getProviders, signIn } from 'next-auth/react';

import logo from '../../public/assets/images/boogle-page-logo.png';

export default function SignIn({ providers }) {
  return (
    <>
      <Header />
      {/* server side rendering function here */}
      <div className="mt-32">
        {Object.values(providers).map((providers) => (
          <div key={providers.name} className="flex flex-col items-center">
            <Image
              className="left-2/4"
              src={logo}
              layout="fixed"
              alt="logo"
              width="272px"
              height="92px"
            />
            <p className="text-sm italic my-10 text-center">
              This website is created for learning purposes
            </p>
            <button
              className="rounded-lg bg-blue-500 text-white hover:brightness-105 hover:shadow-md p-3"
              onClick={() => signIn(providers.id, { callbackUrl: '/' })}
            >
              Sign in with {providers.name}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
