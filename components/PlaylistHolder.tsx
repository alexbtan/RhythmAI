import { getServerSession } from 'next-auth'
import { authOptions } from '../pages/api/auth/[...nextauth]'
import { PlaylistCard } from '.';
import PlaylistTrackAdder from './PlaylistTrackAdder';

const PlaylistHolder = async () => {
    const session = await getServerSession(authOptions);
    const result = await fetch("https://api.spotify.com/v1/me/playlists", {
            method: "GET", headers: { Authorization: `Bearer ${session.user.accessToken}` }
        });
    const response = await result.json();
    const allPlaylists = response.items;
    const isDataEmpty = !Array.isArray(allPlaylists) || allPlaylists.length < 1 || ! allPlaylists;

    return (
    <div>
        {!isDataEmpty ? (
            <section>
            <div className="home__cars-wrapper">
                {allPlaylists?.map((playlist) => <PlaylistTrackAdder playlist={playlist} accessToken={session.user.accessToken} />
                )}
            </div>
            </section>
        ) : (
            <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no playlists found</h2>
            </div>
        )}
    </div>
  )
}

export default PlaylistHolder