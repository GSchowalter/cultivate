'use client'
import { useState } from 'react'
import { HistoryData, ToListenData } from './types'
import ToListen from "./ToListen";
import static_to_listen_data from '../../public/to_listen_test_data.json'
import History from "./History";
import static_history_data from '../../public/history_test_data.json'

export default function Home() {

  const [toListenData, setToListenData] = useState<ToListenData[]>(static_to_listen_data);
  const [historyData, setHistoryData] = useState<HistoryData[]>(static_history_data);


  const onListened = (track: ToListenData, rating: number) => {
    setToListenData(prev => prev.filter(t => t.spotify.id !== track.spotify.id))
    const new_track: HistoryData = {
      ...track,
      rating: rating

    }
    setHistoryData(prev => [...prev, new_track])
  }

  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main>
        <h1>Hello Grant!</h1>
        <p>Here's what you should listen to today:</p>
        <ToListen toListenData={toListenData} onListened={onListened}/>
        <br/>
        <p>
          Here's what you have already listened to:
        </p>
        <History historyData={historyData}/>
      </main>
    </div>
  );
}
