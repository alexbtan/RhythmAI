"use client";

import { useState } from 'react';
import Image from 'next/image';
import { PlaylistProps, TracksProps } from '@/types';
import { CustomButton, PlaylistDetails } from '.';

interface PlaylistCardProps {
  playlist: PlaylistProps;
  allTracks: TracksProps[];
}

const PlaylistCard = ({playlist, allTracks} :  PlaylistCardProps) => {
  const { name, images } = playlist;
  const [isOpen, setIsOpen] = useState(false);
  var imgsrc = "/robologo-icon.png"
  if(images[0])
  {
    imgsrc = images[0].url;
  }

  return (
    <div className="car-card group">
      <div className="card-card__content">
        <h2 className="car-card__content-title">
          {name}
        </h2>
      </div>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image src={imgsrc} alt="Playlist Icon" fill priority className="object-contain"/>
      </div>
      <div className="relative flex w-full mt-2">
        <div className="car-card__btn-container">
          <CustomButton
            title="AMPLIFY"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          ></CustomButton>
        </div>
      </div>
      <PlaylistDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} playlist={playlist} allTracks={allTracks} />
    </div>
  )
}

export default PlaylistCard