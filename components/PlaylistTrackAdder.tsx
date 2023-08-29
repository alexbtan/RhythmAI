import { PlaylistProps } from '@/types';
import React from 'react'
import { PlaylistCard } from '.';

interface PlaylistTrackAdderProps {
    playlist: PlaylistProps;
    accessToken: string;
  }

const PlaylistTrackAdder = async ({playlist, accessToken} :  PlaylistTrackAdderProps) => {
    const result = await fetch(`https://api.spotify.com/v1/playlists/${playlist.id}/tracks`, {
        method: "GET", headers: { Authorization: `Bearer ${accessToken}` }
    });
    const response = await result.json();
    const allTracks = response.items;

  return (
    <div>
        <PlaylistCard playlist={playlist} allTracks={allTracks}/>
    </div>
  )
}

export default PlaylistTrackAdder