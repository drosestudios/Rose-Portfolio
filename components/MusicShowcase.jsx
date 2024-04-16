// All Main Components Imports
import React from "react";
import Image from "next/image";

// All Portraits Imports
import ID_01 from "../artworks/ar1.png";
import ID_02 from "../artworks/ar2.png";
import ID_03 from "../artworks/ar3.png";
import ID_04 from "../artworks/ar4.png";
import ID_05 from "../artworks/ar5.png";

const MusicShowcase = () => {
  // Albums Main Data Information
  const albums = [
    {
      title: "SUNSET (REMIX)",
      cover: ID_01,
      description: "FUTURE FUNK",
      linkyoutube: "https://youtu.be/CkJ83fKi3m4?si=SkZsD2HHWZ7XLa2y",
    },
    {
      title: "SUMMER DAYS (REMIX)",
      cover: ID_02,
      description: "FUTURE FUNK",
      linkyoutube: "https://youtu.be/LP3WiWiY3SE?si=63WA7th_3EE2U27g",
    },
    {
      title: "BEST FRIEND (REMIX)",
      cover: ID_03,
      description: "FUTURE FUNK",
      linkyoutube: "https://youtu.be/aoKojjaPoOk?si=EBTWSGILVML0cOw2",
    },
    {
      title: "IF YOU (REMIX)",
      cover: ID_04,
      description: "FUTURE FUNK",
      linkyoutube: "https://youtu.be/YhI6T5xCv7U?si=O7tyB2ELpcoDPxH-",
    },
    {
      title: "STAY BY ME (REMIX)",
      cover: ID_05,
      description: "FUTURE FUNK",
      linkyoutube: "https://youtu.be/-0VcHgOtqTk?si=q2IEfBoPzsJHeGG7",
    },
  ];

  return (
    // Grid Music Showcase Display
    <section className="mt-5s">
      {/* Discography Paragraph Text */}
      <h2 className="text-2xl text-center font-bold mb-6">DISCOGRAPHY</h2>

      {/* Discography Main Display Panel */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {albums.map((album, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden shadow-md discographyAnim h-auto"
          >
            {/* Discography Artwork */}
            <div className="relative h-48">
              {" "}
              (
              <Image
                src={album.cover}
                alt={album.title}
                layout="fill"
                objectFit="cover"
                quality={100}
              />
              )
            </div>

            {/* Discography Texts */}
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2 card-header">
                {album.title}
              </h3>
              <p className="text-gray-600">{album.description}</p>

              {/* Discography Actions Panel */}
              <div className="flex flex-row mt-[14px]">
                <a
                  target="_blank"
                  href={album.linkyoutube}
                  download={album.title}
                >
                  <button className="hover-button youtube-button rounded items-center h-[30px] w-[70px] font-bold text-[12px] text-white">
                    Youtube
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
