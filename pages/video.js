import React, { useEffect, useRef } from 'react';
import Body from '/components/Body.tsx';
import '@vidstack/react/player/styles/base.css';
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';

import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';

const Video = () => {
    const videoUrl1 = 'youtube/vLKT6KzGV0g'; // Replace with your actual video URL
    const videoUrl2 = 'youtube/vLKT6KzGV0g'; // Replace with another video URL

    return (
        <Body title="video">
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {/* First row */}
                <div style={{ display: 'flex' }}>
                    <MediaPlayer title="Sprite Fight" src={videoUrl1} sload="visible">
                        <MediaProvider />
                        <DefaultVideoLayout icons={defaultLayoutIcons} />
                    </MediaPlayer>

                    <MediaPlayer title="Another Video" src={videoUrl2} sload="visible">
                        <MediaProvider />
                        <DefaultVideoLayout icons={defaultLayoutIcons} />
                    </MediaPlayer>
                </div>

                {/* Second row */}
                <div style={{ display: 'flex' }}>
                    <MediaPlayer title="Sprite Fight" src={videoUrl1} sload="visible">
                        <MediaProvider />
                        <DefaultVideoLayout icons={defaultLayoutIcons} />
                    </MediaPlayer>

                    <MediaPlayer title="Another Video" src={videoUrl2} sload="visible">
                        <MediaProvider />
                        <DefaultVideoLayout icons={defaultLayoutIcons} />
                    </MediaPlayer>
                </div>
            </div>
        </Body>
    );
};

export default Video;
