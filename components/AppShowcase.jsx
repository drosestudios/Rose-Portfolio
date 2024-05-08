import Image from "next/image";

const AboutShowcase = () => {
  return (
    <section className="mt-5">
      {/* Category Text Panel */}
      <h2 className="text-2xl text-center font-bold mb-6">ROSEY ORGANIZER</h2>

      {/* Information Text Panel */}
      <div className="rounded w-full md:w-[845px] h-auto shadow-md mb-6 flex flex-col">
        <Image quality={100} width={850} height={300} src="/app.webp" Flayout="fill" objectFit="cover" className="bg-blend-overlay object-cover brightness-100" />

        <div className="text-justify">
          <p className="m-4 mt-5 whitespace-wrap text-gray-500 dark:text-gray-300">
                Manage your viewed show list in this fast, easy to use organizer! Rosey alows you do so without complications 
                of external databases such as AniList or other available options. You can add shows yourself and customize
                it to your liking in a grid-like gallary. You will have an adorable view of all the shows you've watched.
          </p>

          <ul className="m-7 whitespace-normal text-gray-500 dark:text-gray-300">
            <li><strong className="text-gray-800 dark:text-white">Stylish Design - </strong>
                Interact with the program in a simple and visually beautiful way thanks to
                its minimalist user interface design of achromatic colors. Enjoy an orderly and visually pleasant experience
                that focuses on what is most important, your collection of viewed anime shows.</li>

            <li className="mt-2"><strong className="text-gray-800 dark:text-white">Gallery Panel - </strong>
                Visually see your shows and add your own covers and names to your liking. 
                Order them your way or choose from the available options. The possibilities are endless!</li>

            <li className="mt-2"><strong className="text-gray-800 dark:text-white mt-1">Offline Mode - </strong>
                Take your library with you! Without the need for an external database or internet connection, this app can work 100% offline.
                Create or add what you want from your computer with your own local files or from the internet.</li>
          </ul>
          
          <div className="m-7 flex flex-row">
            <a download="">
              <button className="button-panel overflow-hidden mr-2 bg-gray-400 hover:bg-gray-500 rounded items-center h-[32px] w-[150px] font-bold text-[12px] text-white cursor-pointer transition duration-100 ease-in-out"> Download (Windows)</button>
            </a>
            <a download="">
              <button className="button-panel overflow-hidden mr-2 bg-gray-400 hover:bg-gray-500 rounded items-center h-[32px] w-[150px] font-bold text-[12px] text-white cursor-pointer transition duration-100 ease-in-out"> Download (MacOS)</button>
            </a>
            <a href="https://github.com/drosestudios/rosey" target="_blank">
              <button className="button-panel overflow-hidden mr-2 border-4 dark:border-none dark:bg-gray-500 hover:bg-gray-500 dark:hover:bg-slate-600 dark:text-white border-gray-500 hover:text-white rounded items-center h-[32px] w-[150px] font-bold text-[12px] text-black cursor-pointer transition duration-100 ease-in-out"> Github Repo </button>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutShowcase;
