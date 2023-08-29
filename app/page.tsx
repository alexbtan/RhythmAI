import { CustomerFilter, Hero, PlaylistHolder, SearchBar } from '@/components'
import Image from 'next/image'

export default function Home() {
  const handleScroll = {

  }
  
  return (
    <main className="overflow-hidden bg-violet-500">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Your Playlists</h1>
          <p>Check your vibes</p>
        </div>

        <div className="home__filters"  id='discover'>
          <SearchBar />
          <div className="home__filter-container">
          </div>
        </div>
        <PlaylistHolder />
      </div>
    </main>
  )
}