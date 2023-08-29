import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { TracksProps } from "@/types";
import { getServerSession } from "next-auth";

export async function fetchTracks(playlist_id: string, accessToken: string) : Promise<TracksProps> {
    const result = await fetch(`https://api.spotify.com/v1/playlists/${playlist_id}/tracks`, {
            method: "GET", headers: { Authorization: `Bearer ${accessToken}` }
        });
    const response = await result.json();
    const allTracks = response.items;
    return allTracks;
}
