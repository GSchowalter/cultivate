import { HistoryData } from './types'

interface HistoryProps {
  historyData: HistoryData[];
}

export default function History({ historyData }: HistoryProps) {
    return (
        <div
            className="max-h-[70vh] overflow-y-auto w-full"
            style={{ minWidth: 300 }}
        >
            <div>
                <ol className="space-y-2">
                    <li className="grid grid-cols-4 p-2 border-b-2 border-gray-400 font-bold bg-gray-900">
                        <span className="border-r border-gray-300 flex items-center px-2">Title</span>
                        <span className="border-r border-gray-300 flex items-center px-2">Album</span>
                        <span className="border-r border-gray-300 flex items-center px-2">Artist(s)</span>
                        <span className="flex items-center justify-center px-2">Rating</span>
                    </li>
                    {historyData.map((track) => (
                        <li
                            key={track.spotify.id}
                            className="grid grid-cols-4 p-2 border-b border-gray-300"
                        >
                            <span className="border-r border-gray-300 flex items-center px-2">{track.title}</span>
                            <span className="border-r border-gray-300 flex items-center px-2">{track.album}</span>
                            <span className="border-r border-gray-300 flex items-center px-2">
                                {Array.isArray(track.artist)
                                    ? track.artist.join(', ')
                                    : track.artist}
                            </span>
                            <span className="flex items-center justify-center px-2">
                                {track.rating}
                            </span>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}