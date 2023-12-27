import React from 'react';
import Image from 'next/image';

import ID_ArcadePlayers from "../artworks/ID_ArcadePlayers.jpg"
import ID_SaphIndustries from "../artworks/ID_SaphIndustries.png"
import ID_UsedToBeOkay from "../artworks/ID_UsedToBeOkay.png"
import ID_HeWasAGoodStalker from "../artworks/ID_HeWasAGoodStalker.jpg"
import ID_LastSignals from "../artworks/ID_LastSignals.png"
import ID_LastExpedition from "../artworks/ID_LastExpedition.png"
import ID_Erased from "../artworks/ID_Erased.png"

import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';

const MusicShowcase = () => {

    const albums = [
        { title: 'Erased', cover: ID_Erased, description: 'Nu Disco - 27/12/2023', },
        { title: 'Last Expedition', cover: ID_LastExpedition, description: 'Synthwave - 11/12/2023', },
        { title: 'Last Signals', cover: ID_LastSignals, description: 'Synthwave - 10/12/2023', },
        { title: 'Used To Be Okay', cover: ID_UsedToBeOkay, description: 'Deep House - 22/11/2023', },
        { title: 'Saph Industries', cover: ID_SaphIndustries, description: 'Synthwave - 14/11/2023', },
        { title: 'Arcade Players', cover: ID_ArcadePlayers, description: 'Dance & EDM - 10/10/2023', },
        { title: 'He Was A Good Stalker', cover: ID_HeWasAGoodStalker, description: 'Vaporwave - 19/01/2023', },
    ];

    return (
        // Grid Music Showcase Display
        <section className="mt-5s">

            {/* Discography Text Panel */}
            <h2 className="text-3xl text-center font-bold mb-6">Discography</h2>

            {/* Discography Main Display Panel */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {albums.map((album, index) => (
                    <div key={index} className="rounded-lg overflow-hidden shadow-md border-gray-300">

                        {/* Discography Image Panel */}
                        <div className="relative h-48"> (
                                <Image 
                                    src={album.cover}
                                    alt={album.title}
                                    layout="fill"
                                    objectFit="cover"
                                    quality={100} />
                            )
                        </div>

                        {/* Discography Text Panel */}
                        <div className="p-4">
                            <h3 className="text-xl font-bold mb-2">{album.title}</h3>
                            <p className="text-gray-600">{album.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MusicShowcase;
