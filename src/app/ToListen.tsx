import { SpotifyData } from './types'
import static_data from '../../public/to_listen_test_data.json'

export default async function toListen() {

    // Temporary for no db setup
    const toListenData = static_data

    return (
        <>
            {toListenData ? (
                <ol>
                    {toListenData.map(track => (
                        <li key={track.spotify.id}>{track.title}</li>
                    ))}
                </ol>
            ) : (
                <p>To Listen list loading...</p>
        )}
        </>
    )
}
