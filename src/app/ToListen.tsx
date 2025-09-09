
'use client'
import { useState } from 'react'
import { ToListenData } from './types'
import RatingModal from './RatingModal'
import static_data from '../../public/to_listen_test_data.json'

interface ToListenProps {
    toListenData: ToListenData[];
    onListened: (track: ToListenData, rating: number) => void;
}

export default function ToListen({ toListenData, onListened }: ToListenProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

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
                        <span className="flex items-center justify-center px-2">Listened</span>
                    </li>
                    {toListenData.map((track) => (
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
                                <button
                                    className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                                    onClick={() => onListened(track, 90)}>
                                    Listened
                                </button>
                            </span>
                        </li>
                    ))}
                </ol>
                
            </div>
        </div>
    )
}
