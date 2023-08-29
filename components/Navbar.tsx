import Link from 'next/link';
import Image from 'next/image';

import CustomButton from './CustomButton';

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
        <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
            <Link href="/login" className="flex justify-center items-center">
                <Image
                    src="/robologo-icon.png"
                    alt="RhythmAI Logo"
                    width={74}
                    height={10}
                    className="object-contain"
                />
                <h2 className="hero__subtitle">RhythmAI</h2>
            </Link>
        </nav>
    </header>
  )
}

export default Navbar