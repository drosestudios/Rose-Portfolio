import Image from "next/image";

const AppShowcase = () => {
  return (
    <section className="mt-5">

      <div className="rounded-[8px] w-full md:w-[870px] h-auto shadow-md mb-6 flex flex-col">

        {/* IMAGE BACK AND PREVIEW */}
        <div className="relative w-full md:w-[870px] h-[340px] overflow-hidden">
            <Image quality={100} src={"/background.webp"} layout="fill" objectFit="cover"
            className="bg-blend-overlay object-cover brightness-100 rounded" />

            <Image quality={100} src={"/appimg.webp"} width={600} height={600} className=" z-10 mt-[50px] relative ml-[130px]"/>
        </div>

        {/* TITLE & LOGO */}
        <div className="m-4 mt-5 flex flex-row">
          <Image quality={100} src={"/icon.webp"} width={30} height={30} className="mr-3"/>
          <h1 className=" text-[20px] font-bold ">ROSEY ORGANIZER</h1>
        </div>

        {/* INFORMATION & BUTTONS */}
        <div className="text-justify">

          <p className="m-4 mt-[-1px] text-[16px] whitespace-wrap text-gray-600 dark:text-gray-100">
                Manage your viewed show list in this fast, easy to use organizer! Rosey alows you do so without complications 
                of external databases such as AniList or other available options. You can add shows yourself and customize
                it to your liking in a grid-like gallery. You will have an minimal view of all the shows you've watched.
          </p>
          
          <div className="m-4 flex flex-shrink flex-row">

            <a download="">
              <button className="button-app overflow-hidden mr-2 bg-[#282828] hover:bg-[#5d5d5d] rounded-[6px] items-center h-[35px] w-[153px] md:w-[185px] font-bold text-[12px] text-white cursor-pointer transition duration-100 ease-in-out">
                DOWNLOAD WINDOWS
              </button>
            </a>
            <a download="">
              <button className="button-app overflow-hidden mr-2 bg-[#282828] hover:bg-[#5d5d5d] rounded-[6px] items-center h-[35px] w-[153px] md:w-[185px] font-bold text-[12px] text-white cursor-pointer transition duration-100 ease-in-out"> 
                DOWNLOAD MACOS
              </button>
            </a>

          </div>

        </div>
      </div>

    </section>
  );
};

export default AppShowcase;