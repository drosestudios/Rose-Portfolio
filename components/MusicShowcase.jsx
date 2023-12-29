import React from 'react';
import Image from 'next/image';

import '@vidstack/react/player/styles/default/theme.css';
import { MdOutlineFolderOpen } from "react-icons/md";
import { MdOutlineInsertPhoto } from "react-icons/md";

import ID_ArcadePlayers from "../artworks/ID_ArcadePlayers.jpg"
import ID_SaphIndustries from "../artworks/ID_SaphIndustries.png"
import ID_UsedToBeOkay from "../artworks/ID_UsedToBeOkay.png"
import ID_HeWasAGoodStalker from "../artworks/ID_HeWasAGoodStalker.jpg"
import ID_LastSignals from "../artworks/ID_LastSignals.png"
import ID_LastExpedition from "../artworks/ID_LastExpedition.png"
import ID_Erased from "../artworks/ID_Erased.png"

const MusicShowcase = () => {

    // All Albums Main Data Information
    const albums = [
        { 
            title: 'Erased', cover: ID_Erased, 
            description: 'Nu Disco - 27/12/2023', 

            linktrack: 'https://cdn.discordapp.com/attachments/1189859786385276998/1190202650331983982/Ayl_Rose_-_Erased.mp3',
            linkartwork: 'https://cdn.discordapp.com/attachments/1189853695463137381/1190218299355697152/Wallpapers_Erased.rar'
        },
        { 
            title: 'Last Expedition', cover: ID_LastExpedition, 
            description: 'Synthwave - 11/12/2023', 

            linktrack: 'https://cdn.discordapp.com/attachments/1189859786385276998/1190202710033711124/Ayl_Rose__Teirrel_-_Last_Expedition.mp3',
            linkartwork: 'https://cdn.discordapp.com/attachments/1189853695463137381/1190218492432093204/Wallpapers_Last_Expedition.rar'
        },
        { 
            title: 'Last Signals', cover: ID_LastSignals, 
            description: 'Synthwave - 10/12/2023', 

            linktrack: 'https://cdn.discordapp.com/attachments/1189859786385276998/1190202903848308736/Ayl_Rose_-_Last_Signals.mp3',
            linkartwork: 'https://cdn.discordapp.com/attachments/1189853695463137381/1190218532571598948/Wallpapers_Last_Signals.rar'
        },
        { 
            title: 'Used To Be Okay', cover: ID_UsedToBeOkay, 
            description: 'Deep House - 22/11/2023', 

            linktrack: 'https://cdn.discordapp.com/attachments/1189859786385276998/1190202983804305438/Ayl_Rose_-_Used_To_Be_Okay.mp3',
            linkartwork: 'https://cdn.discordapp.com/attachments/1189853695463137381/1190218781297999954/Wallpapers_Used_To_Be_Okay.rar'
        },
        { 
            title: 'Saph Industries', cover: ID_SaphIndustries, 
            description: 'Synthwave - 14/11/2023', 

            linktrack: 'https://cdn.discordapp.com/attachments/1189859786385276998/1190202938329681972/Ayl_Rose_-_Saph_Industries.mp3',
            linkartwork: 'https://cdn.discordapp.com/attachments/1189853695463137381/1190218667930165429/Wallpapers_Saph_Industries.rar'
        },
        { 
            title: 'Arcade Players', cover: ID_ArcadePlayers, 
            description: 'Dance & EDM - 10/10/2023', 

            linktrack: 'https://cdn.discordapp.com/attachments/1189859786385276998/1190203023784415254/Ayl_Rose__Maexev_-_Arcade_Players.mp3',
            linkartwork: 'https://cdn.discordapp.com/attachments/1189853695463137381/1190219797724663849/Wallpapers_Arcade_Players.rar'
        },
        { 
            title: 'He Was A Good Stalker', cover: ID_HeWasAGoodStalker, 
            description: 'Vaporwave - 19/01/2023', 

            linktrack: 'https://cdn.discordapp.com/attachments/1189859786385276998/1190203072169918614/Ayl_Rose_-_He_Was_A_Good_Stalker.mp3',
            linkartwork: 'https://cdn.discordapp.com/attachments/1189853695463137381/1190219809099620452/Wallpapers_He_Was_A_Good_Stalker.rar'
        },
    ];

    return (
        // Grid Music Showcase Display
        <section className="mt-5s">

            {/* Discography Paragraph Text */}
            <h2 className="text-3xl text-center font-bold mb-6">Discography</h2>

            {/* Discography Main Display Panel */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {albums.map((album, index) => (
                    <div key={index} className="rounded-lg overflow-hidden shadow-md border-gray-300">

                        {/* Discography Artwork */}
                        <div className="relative h-48"> (
                                <Image 
                                    src={album.cover}
                                    alt={album.title}
                                    layout="fill"
                                    objectFit="cover"
                                    quality={100} />
                            )
                        </div>

                        {/* Discography Texts */}
                        <div className="p-4">
                            <h3 className="text-xl font-bold mb-2">{album.title}</h3>
                            <p className="text-gray-600">{album.description}</p>

                            {/* Discography Buttons */}
                            <div className='flex'>
                                 <a target="_blank" href={album.linktrack} download={album.title}>
                                     <button
                                           className="mt-3 hover-button"
                                           isIconOnly radius="sm">
                                           <MdOutlineFolderOpen className='w-[17px] h-[17px] buttons-resize'/>
                                     </button>
                                 </a>

                                 <a target="_blank" href={album.linkartwork} download={album.title}>
                                     <button
                                          className="mt-3 ml-2 hover-button" 
                                          isIconOnly radius="sm">
                                          <MdOutlineInsertPhoto className='w-[17px] h-[17px] buttons-resize'/>
                                    </button>
                                </a>

                            </div>       
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MusicShowcase;
