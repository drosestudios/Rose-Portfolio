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
          <p className="m-4 whitespace-wrap text-gray-500 dark:text-gray-300">
              Organize your animes already seen easily, rosey offers you a simple and fast way to do this task, 
              without complications of external databases such as AniList or other available options, add them yourself, 
              your own personalization visually, do it to your liking, Using a grid visually as a gallery, you will have an 
              adorable preview of your already completed animes.
          </p>

          <ul className="m-7 whitespace-wra text-gray-500 dark:text-gray-300">
            <li><strong className="text-gray-800 dark:text-white">Elegantly Minimalistic (UI) - </strong>
            Interact with the program in a simple and visually beautiful way thanks to its minimalist user interface design of achromatic colors, enjoy an orderly and visually pleasant experience that focuses on what is most important, your collection of already watched animes.</li>

            <li><strong className="text-gray-800 dark:text-white">Gallery User Inferface (UI) - </strong>
            Visually look at your animes, add your own covers and names to your liking, order them your way or by raffle from the available options, it all depends on your creativity.</li>

            <li><strong className="text-gray-800 dark:text-white">User-Friendly Interface (UI) - </strong>
            Add and remove animes from your list easily and quickly thanks to its interface design in the animes that you have added with just a few steps, you are ready. Enjoy a seamless process that keeps your anime list looking perfect and cute for you!</li>

            <li><strong className="text-gray-800 dark:text-white">Efficient/Simple Offline Mode - </strong>
            Take your list of animes without the need for an external database or internet connection, create or add what you want from your computer with your own downloaded files or from the internet through a url, through its addition panel</li>
          </ul>
          
          <div className="m-7 flex flex-row">
            <a download="">
              <button className="button-panel overflow-hidden mr-2 bg-blue-400 hover:bg-blue-500 rounded items-center h-[32px] w-[150px] font-bold text-[12px] text-white cursor-pointer transition duration-100 ease-in-out"> Download (Windows)</button>
            </a>
            <a download="">
              <button className="button-panel overflow-hidden mr-2 bg-red-400 hover:bg-red-500 rounded items-center h-[32px] w-[150px] font-bold text-[12px] text-white cursor-pointer transition duration-100 ease-in-out"> Download (MacOS)</button>
            </a>
            <a href="https://github.com/drosestudios/rosey" target="_blank">
              <button className="button-panel overflow-hidden mr-2 border-4 dark:border-none dark:bg-slate-600 dark:hover:bg-slate-700 dark:text-white border-slate-600 hover:bg-slate-600 hover:text-white rounded items-center h-[32px] w-[150px] font-bold text-[12px] text-black cursor-pointer transition duration-100 ease-in-out"> Github Repo </button>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutShowcase;
