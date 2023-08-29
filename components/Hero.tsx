"use client";

import Image from 'next/image';
import { CustomButton } from '.';

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="hero">
        <div className=" flex-1 pt-36 padding-x">
            <h1 className="hero__title">
              RhytmnAI - The AI based Music Platform
            </h1>

            <p className="hero__subtitle">
              Analyse your tastes and generate new playlist based on your vibe
            </p>

            <CustomButton 
              title="Explore Playlists"
              containerStyles="bg-primary-blue text-white
              rounded-full mt-10"
              handleClick={handleScroll}
            />
        </div>
        <div className="hero__image-container">
          <div className="hero__image">
            <Image src="/robologo-icon.png" alt = "hero"
            fill className="object-contain"/>
          </div>
        </div>

        <div className="hero__image-overlay" />
    </div>
  )
}

export default Hero