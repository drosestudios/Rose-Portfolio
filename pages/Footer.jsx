import Link from 'next/link'

import { RiInstagramFill } from "react-icons/ri";
import { SiGithub } from "react-icons/si";

export default function Footer() {
  return (
    <footer>
      <div className="mb-[10px] flex minxs:flex max-w-full overflow-y-auto">

        {/* Copyright Credits Information */}
        <p className="text-md notranslate max-[390px]:text-[16px] text-[18px]"> &copy;&ensp;{new Date().getFullYear()}&thinsp;Studios&thinsp;D'Rose.</p>

        <div className="flex-1 gap-1"></div>
        
        {/* Social Medias Icons Footer */}

        <div className="text-[22px]">
          <Link
            className=" text-gray-500 dark:text-white hover:text-gray-900 dark:hover:text-gray-300 transition items-center inline-flex pl-2"
            target="_blank" href="https://www.instagram.com/studiosdrose"
          > <RiInstagramFill/> </Link>
        </div>

        <div className="text-[20px]">
          <Link
            className=" text-gray-500 dark:text-white hover:text-gray-900 dark:hover:text-gray-300 transition items-center inline-flex pl-2"
            target="_blank" href="https://github.com/drosestudios"
          > <SiGithub/> </Link>
        </div>

      </div>
    </footer>
  );
}
