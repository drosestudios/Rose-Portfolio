// All Main Components Imports
import React from 'react';
import Image from 'next/image';

// All Discography Icons Imports
import { MdOutlineFolderOpen } from "react-icons/md";
import { MdOutlineInsertPhoto } from "react-icons/md";
import { MdOutlineAnalytics } from "react-icons/md";

// All Badges Icons Imports
import { FaSpotify } from "react-icons/fa";
import { SiApplemusic } from "react-icons/si";
import { ImSoundcloud2 } from "react-icons/im";

// All Portraits Imports
import ID_ArcadePlayers from "../artworks/ID_ArcadePlayers.png"
import ID_SaphIndustries from "../artworks/ID_SaphIndustries.png"
import ID_UsedToBeOkay from "../artworks/ID_UsedToBeOkay.png"
import ID_HeWasAGoodStalker from "../artworks/ID_HeWasAGoodStalker.png"
import ID_LastSignals from "../artworks/ID_LastSignals.jpg"
import ID_LastExpedition from "../artworks/ID_LastExpedition.jpg"
import ID_Erased from "../artworks/ID_Erased.jpg"
import ID_EmptyStreets from "../artworks/ID_EmptyStreets.jpg"

const MusicShowcase = () => {

    // Albums Main Data Information
    const albums = [
        { 
            title: 'Empty Streets', cover: ID_EmptyStreets, 
            description: 'Synthwave - 10/01/2024', 

            linktrack: 'https://cdn.discordapp.com/attachments/1189859786385276998/1194875797014577192/Ayl_Rose_-_Empty_Streets.mp3',
            linkartwork: 'https://cdn.discordapp.com/attachments/1189853695463137381/1194876324691595294/Wallpaper_Empty_Streets.png',
            linkyoutube: 'https://youtu.be/SnQYPVbQ23U?si=8HZXNvvt5jOCInX-'
        },
        { 
            title: 'Erased', cover: ID_Erased, 
            description: 'Nu Disco - 22/12/2023', 

            linktrack: 'https://cdn.discordapp.com/attachments/1189859786385276998/1194875797719228466/Ayl_Rose_-_Erased.mp3',
            linkartwork: 'https://cdn.discordapp.com/attachments/1189853695463137381/1194875957614489701/Wallpaper_Erased.png',
            linkyoutube: 'https://youtu.be/hvG3smQ3JQ8?si=xxKuLn_EmM-Xso4D'
        },
        { 
            title: 'Last Expedition', cover: ID_LastExpedition, 
            description: 'Synthwave - 11/12/2023', 

            linktrack: 'https://cdn.discordapp.com/attachments/1189859786385276998/1190202710033711124/Ayl_Rose__Teirrel_-_Last_Expedition.mp3',
            linkartwork: 'https://cdn.discordapp.com/attachments/1189853695463137381/1191147357484613813/Wallpaper_-_Last_Expedition.png',
            linkyoutube: 'https://youtu.be/pEfy2EPUGgg?si=UYCZTUvewt8ZdPnG'
        },
        { 
            title: 'Last Signals', cover: ID_LastSignals, 
            description: 'Synthwave - 10/12/2023', 

            linktrack: 'https://cdn.discordapp.com/attachments/1189859786385276998/1190202903848308736/Ayl_Rose_-_Last_Signals.mp3',
            linkartwork: 'https://cdn.discordapp.com/attachments/1189853695463137381/1191147274596786196/Wallpaper_-_Last_Signals.png',
            linkyoutube: 'https://youtu.be/ZmXYV-SUC8A?si=A5H15eY5Lrh0sfdp'
        },
        { 
            title: 'Used To Be Okay', cover: ID_UsedToBeOkay, 
            description: 'Deep House - 22/11/2023', 

            linktrack: 'https://cdn.discordapp.com/attachments/1189859786385276998/1190202983804305438/Ayl_Rose_-_Used_To_Be_Okay.mp3',
            linkartwork: 'https://cdn.discordapp.com/attachments/1189853695463137381/1191147256691298394/Wallpaper_-_Used_To_Be_Okay.png',
            linkyoutube: 'https://youtu.be/mnQQ4TVVnV0?si=QZxJsAm6gHVQ3U35'
        },
        { 
            title: 'Saph Industries', cover: ID_SaphIndustries, 
            description: 'Synthwave - 14/11/2023', 

            linktrack: 'https://cdn.discordapp.com/attachments/1189859786385276998/1190202938329681972/Ayl_Rose_-_Saph_Industries.mp3',
            linkartwork: 'https://cdn.discordapp.com/attachments/1189853695463137381/1191147145441595412/Wallpaper_-_Saph_Industries.png',
            linkyoutube: 'https://youtu.be/ivHL_jartLk?si=et2d6yQ-QPs41wbr'
        },
        { 
            title: 'Arcade Players', cover: ID_ArcadePlayers, 
            description: 'Dance & EDM - 10/10/2023', 

            linktrack: 'https://cdn.discordapp.com/attachments/1189859786385276998/1190203023784415254/Ayl_Rose__Maexev_-_Arcade_Players.mp3',
            linkartwork: 'https://cdn.discordapp.com/attachments/1189853695463137381/1191147004559118426/Wallpaper_-_Arcade_Players.png',
            linkyoutube: 'https://youtu.be/cuek2ua4fg8?si=d4iUO-yO82wZ3Aeg'
        },
        { 
            title: 'He Was A Good Stalker', cover: ID_HeWasAGoodStalker, 
            description: 'Vaporwave - 19/01/2023', 

            linktrack: 'https://cdn.discordapp.com/attachments/1189859786385276998/1190203072169918614/Ayl_Rose_-_He_Was_A_Good_Stalker.mp3',
            linkartwork: 'https://cdn.discordapp.com/attachments/1189853695463137381/1191146926616363038/Wallpaper_-_He_Was_A_Good_Stalker.png',
            linkyoutube: 'https://youtu.be/Dpr2Xh3U_ck?si=8FaFtA8eFZ--6cr6'
        },
    ];

    return (
        // Grid Music Showcase Display
        <section className="mt-5s">

            {/* Discography Paragraph Text */}
            <h2 className="text-2xl text-center font-bold mb-6">DISCOGRAPHY</h2>

            {/* Discography Main Display Panel */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {albums.map((album, index) => (
                    <div key={index} className="rounded-lg overflow-hidden shadow-md discographyAnim">

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

                            {/* Discography Actions Panel */}
                            <div className='flex flex-row mt-[14px]'>
                                 {/* Discography Buttons */}
                                 <a target="_blank" href={album.linktrack} download={album.title}>
                                     <button
                                           className="hover-button button-margin-response"
                                           isIconOnly radius="sm">
                                           <MdOutlineFolderOpen className='w-[20px] h-[20px] buttons-resize'/>
                                     </button>
                                 </a>

                                 <a target="_blank" href={album.linkartwork} download={album.title}>
                                     <button
                                          className="ml-2 hover-button button-margin-response" 
                                          isIconOnly radius="sm">
                                          <MdOutlineInsertPhoto className='w-[20px] h-[20px] buttons-resize'/>
                                    </button>
                                 </a>

                                 <a target="_blank" href={album.linkyoutube} download={album.title}>
                                    <button 
                                          className="mt-[1px] mr-1 ml-2 hover-button youtube-button rounded flex items-center h-[18px]" style={{ width: 'fit-content' }}>                                      
                                          <MdOutlineAnalytics className='ml-[2px] mr-[5px] w-[14.5px] h-[14.5px] buttons-resize button-size-response'/>
                                          <span className='font-bold text-[10px] mr-1'>Youtube</span>
                                    </button>
                                 </a>

                                 {/* Discography Divisor and Badges */}
                                 <div class="mt-[3px] ml-[15px] h-[14px] w-0.5 opacity-100 division-prop"></div>  
                                 <div className='flex'>   
                                    <span class="ml-[15px] rounded inline-flex items-center justify-center w-5 h-5 text-sm font-semibold text-green-400 "><FaSpotify></FaSpotify></span>
                                    <span class="ml-[2px] rounded inline-flex items-center justify-center w-5 h-5 text-sm font-semibold text-red-400 "><SiApplemusic></SiApplemusic></span>  
                                    <span class="ml-[2px] rounded inline-flex items-center justify-center w-5 h-5 text-sm font-semibold text-orange-400 "><ImSoundcloud2></ImSoundcloud2></span>  
                                 </div>
                            </div>       
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MusicShowcase;
