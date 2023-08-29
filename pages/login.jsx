import { getProviders, signIn } from "next-auth/react";
import { Footer, Navbar, CustomButton } from '@/components'
import '../app/globals.css' 

export default function login({ providers }) {
  return (
      <div>
        <Navbar />
        <div className="bg-violet-500 flex flex-col justify-center items-center items-end">
          <img className="w-96 mb-5 mt-12" src="https://links.papareact.com/9xl" alt="" />
          {Object.values(providers).map((provider) => (
            <div key={provider.name} className="object-center">
              <CustomButton
              title="Login with Spotify"
              containerStyles="bg-primary-blue text-white
              rounded-full mt-10"
              handleClick={() => signIn(provider.id, { callbackUrl: "/"})}
              />
            </div>
          ))}
        </div>
        <Footer />
      </div>
  )
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}