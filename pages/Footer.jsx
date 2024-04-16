import Link from 'next/link'

import { RiInstagramFill } from "react-icons/ri";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { SiApplemusic } from "react-icons/si";
import { FaSpotify } from "react-icons/fa";
import { PiSoundcloudLogoFill } from "react-icons/pi";
import { SiGithub } from "react-icons/si";

export default function Footer() {
  return (
    <footer>
      <div className="mb-[20px] mt-[60px] flex minxs:flex max-w-full overflow-y-auto">

        {/* Copyright Credits Information */}
        <div className='max-[390px]:text-[16px] text-[17px]'>
           <p className="text-md notranslate"> &copy;&ensp;{new Date().getFullYear()}&thinsp;D'Rose&thinsp;Studios.</p>
        </div>

        <div className="flex-1"></div>
        
        {/* Social Medias Icons Footer */}
        <div className="text-[19px]">
          <Link
            className=" text-gray-500 hover:text-gray-900 dark:hover:text-white transition items-center inline-flex"
            target="_blank" href="https://www.youtube.com/@ayl-rose"
          > <TbBrandYoutubeFilled/> </Link>
        </div>

        <div className="text-[19px]">
          <Link
            className=" text-gray-500 hover:text-gray-900 dark:hover:text-white transition items-center inline-flex pl-2"
            target="_blank" href="https://www.instagram.com/aylrose_official"
          > <RiInstagramFill/> </Link>
        </div>

        <div className="text-[19px]">
          <Link
            className=" text-gray-500 hover:text-gray-900 dark:hover:text-white transition items-center inline-flex pl-2"
            target="_blank" href="https://open.spotify.com/artist/2Mzep1WkFKae6L0sM4nhN6"
          > <FaSpotify/> </Link>
        </div>

        <div className="text-[19px]">
          <Link
            className=" text-gray-500 hover:text-gray-900 dark:hover:text-white transition items-center inline-flex pl-2"
            target="_blank" href="https://soundcloud.com/aylrose"
          > <PiSoundcloudLogoFill/> </Link>
        </div>

        <div className="text-[19px]">
          <Link
            className=" text-gray-500 hover:text-gray-900 dark:hover:text-white transition items-center inline-flex pl-2"
            target="_blank" href="https://music.apple.com/us/artist/ayl-rose/1654995460"
          > <SiApplemusic/> </Link>
        </div>

        <div className="text-[19px]">
          <Link
            className=" text-gray-500 hover:text-gray-900 dark:hover:text-white transition items-center inline-flex pl-2"
            target="_blank" href="https://github.com/drosestudios"
          > <SiGithub/> </Link>
        </div>

      </div>
    </footer>
  );
}
