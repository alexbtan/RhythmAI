"use client";

import { Fragment } from 'react';
import Image from 'next/image';

import { Dialog, Transition } from '@headlessui/react';

import { PlaylistProps, TracksProps } from '@/types';
import { fetchTracks } from '@/utils';
import { GetServerSideProps } from 'next';

interface PlaylistDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  playlist: PlaylistProps;
  allTracks: TracksProps[];
}
const PlaylistDetails = ({ isOpen, closeModal, playlist, allTracks }: PlaylistDetailsProps) => {

  const isDataEmpty = !Array.isArray(allTracks) || allTracks.length < 1 || ! allTracks;
  var imgsrc = "/spotai-logo.png"
  if(playlist.images[0])
  {
    imgsrc = playlist.images[0].url;
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opactiy-0"
            enterTo="ease-in duration-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25"></div>
          </Transition.Child>

          <div className="fixed inset-0 bg-black bg-opacity-25">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opactiy-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto
                transform rounded-2xl bg-white p-6 text-left shadow-xsl transition-all flex flex-col gap-5">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
                  >
                    <Image
                      src="/close.svg"
                      alt="close"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </button>
                  <div className="flex-1 flex flex-col gap-3">
                    <div className="relative w-full h-40 bg-cover bg-center rounded-lg">
                      <Image src={imgsrc} alt="Playlist Icon" fill priority className="object-contain my-4"/>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col gap-2 text-center font-bold text-lg">
                    <h2>
                      {playlist.name}
                    </h2>
                  </div>
                    <div>
                      {!isDataEmpty ? (
                        <section>
                          <div className="mt-3 flex flex-wrap gap-4">
                            {allTracks?.map((track) => <div className="flex justify-between gap-5 w-full text-left"><h4 className="text-grey capitalize">{track.track.name}</h4></div>
                            )}
                          </div>
                        </section>
                      ) : (
                        <div className="home__error-container">
                          <h2 className="text-black text-xl font-bold">Oops, no tracks found</h2>
                        </div>
                      )}
                    </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default PlaylistDetails