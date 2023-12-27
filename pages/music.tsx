import React, { useEffect, useState, useRef } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import Body from "../components/Body";
const Music = () => {

  // @ts-ignore
  return (
    <Body title="Music">
      <div>
        <h1 className="text-6xl font-extrabold tracking-tight">Music</h1>
        <p className="mt-1 text-lg">List of my favorite songs.</p>
      </div>
      <iframe className="border-radius:6px border-collapse"
              src="https://open.spotify.com/embed/playlist/2umNHMx8CzUpZmwC0NST0b?utm_source=generator"
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
      >
      </iframe>
    </Body>
  );
};
export default Music;
