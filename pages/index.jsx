import React, { useEffect, useState } from "react";

import Image from "next/image";
import Head from "next/head";
import Body from "/components/Body.tsx";
import Skeleton from "react-loading-skeleton";

import AboutShowcase from "../components/AboutShowcase";
import YoutubeShowcase from "../components/YoutubeShowcase";
import MusicShowcase from "../components/MusicShowcase";
import SiteTransitions from "../components/SiteTransitions";

import "@vidstack/react/player/styles/base.css";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";

// Home Page Information
export default function HomePage() {
  const [mode] = useState("image");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });

  const loadingdisplay = (
    // Loading Display Constant
    <Body title="Projects">
      <h1 className="font-extrabold text-6xl tracking-tight">
        {loading ? <Skeleton width={200} /> : "Projects"}
      </h1>

      <div className="mt-[20px]"></div>

      <Skeleton baseColor="#202020" width="100px" highlightColor="#666" />

      <div className="mt-[40px]"></div>
      <Skeleton
        baseColor="#202020"
        height="42px"
        className="rounded-lg"
        highlightColor="#666"
      />

      <div className="mt-10">
        <Skeleton
          height="122px"
          count={3}
          className="w-full my-2 rounded-lg"
          baseColor="#202020"
          borderRadius="10px"
          highlightColor="#666"
        />
      </div>
    </Body>
  );

  return (
    // Main Page HTML Data
    <main>
      <Head>
        <title>D'Rose Studios</title>
      </Head>

      <SiteTransitions />

      {/* Artwork Main Data */}
      <div className="relative">
        <div className="flex items-start my-5 relative">
          <div className="w-full left-0 h-[30vh] md:h-[40vh] overflow-hidden relative rounded">
            {/* Artwork Display Panel */}
            <div
              className={`media-container relative h-full w-full ${
                mode === "image" ? "" : "hidden"
              }`}
            >
              {loading ? (
                <Skeleton height={400} width={400} />
              ) : (
                <Image
                  quality={100} width={850} height={300}
                  src="/banner.jpg"
                  Flayout="fill"
                  objectFit="cover"
                  className="bg-blend-overlay object-cover brightness-100"
                />
              )}
            </div>
          </div>
        </div>

        <div className="mt-5 md:mt-[-0vh]">
          {loading ? <> {loadingdisplay} </> : <AboutShowcase />}
        </div>

        <div className="mt-5 md:mt-[-0vh]">
          {loading ? <> {loadingdisplay} </> : <YoutubeShowcase />}
        </div>

        {/* Discography Display Panel */}
        <div className="mt-5 md:mt-[-0vh]">
          {loading ? <> {loadingdisplay} </> : <MusicShowcase />}
        </div>
      </div>
    </main>
  );
}
