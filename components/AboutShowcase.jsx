import Image from "next/image";

const AboutShowcase = () => {
 
    return (
         <section className="mt-5">
              {/* Category Text Panel */}
              <h2 className="text-2xl text-center font-bold mb-6">BIOGRAPHY</h2>

              {/* Information Text Panel */}
              <div className="rounded w-full md:w-[845px] h-auto md:h-[150px] shadow-md mb-6 flex flex-col md:flex-row">
                  <Image src="/ID_AboutProfile.png" width={200} height={200} className="w-full h-[150px] object-cover rounded-l-[4px] image-rounded md:w-48 md:h-auto"/>
                  <div className="text-justify">
                       <p className="m-3 whitespace-wrap text-gray-500 dark:text-gray-400">
                       <a href="https://hyperfollow.com/aylrose" target="_blank" className=" text-rose-300">Ayl Rose </a> 
                       is an independent composer, producer and artist, who highlights genres such as synth-wave, 
                       vapor-wave and some others that are currently considered nostalgic or retro in the music sector, as 
                       a separate hobby, include skills like graphic illustration exactly digital drawings (anime style) and in 
                       windows application programming and website development with various modern technologies.</p>
                 </div>
              </div>
        </section>
    );

}

export default AboutShowcase;