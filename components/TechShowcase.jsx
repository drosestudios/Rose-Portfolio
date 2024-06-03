
const TechShowcase = () => {
  return (
    <section className="mt-5">
      {/* Information Text Panel */}
      <div className="rounded-[8px] w-full md:w-[870px] h-auto shadow-md mb-6 flex flex-col">

        <h1 className="m-4 text-[20px] font-bold">TECH STACK</h1>

        <div className="grid grid-cols-5 md:grid-cols-10 m-4 mt-[1px]">

          <div className="flex flex-col w-auto p-2 md:p-3 mr-2">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg"/>
            <p className="flex items-center justify-center text-[14px] mt-2 text-gray-600 dark:text-gray-100"> JavaScript	</p>
          </div>

          <div className="flex flex-col w-auto p-2 md:p-3 mr-2">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg" />
            <p className="flex items-center justify-center text-[14px] mt-2 text-gray-600 dark:text-gray-100"> HTML5 </p>
          </div>

          <div className="flex flex-col w-auto p-2 md:p-3 mr-2">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
            <p className="flex items-center justify-center text-[14px] mt-2 text-gray-600 dark:text-gray-100"> React </p>
          </div>

          <div className="flex flex-col w-auto p-2 md:p-3 mr-2">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" />
            <p className="flex items-center justify-center text-[14px] mt-2 text-gray-600 dark:text-gray-100"> Next JS</p>
          </div>

          <div className="flex flex-col w-auto p-2 md:p-3 mr-2">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
            <p className="flex items-center justify-center text-[14px] mt-2 text-gray-600 dark:text-gray-100"> CSS3	</p>
          </div>

          <div className="flex flex-col w-auto p-2 md:p-3 mr-2">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
            <p className="flex items-center justify-center text-[14px] mt-2 text-gray-600 dark:text-gray-100"> Tailwind	</p>
          </div>

          <div className="flex flex-col w-auto p-2 md:p-3 mr-2">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/electron/electron-original.svg" />
            <p className="flex items-center justify-center text-[14px] mt-2 text-gray-600 dark:text-gray-100"> Electron	</p>
          </div>

          <div className="flex flex-col w-auto p-2 md:p-3 mr-2">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" />
            <p className="flex items-center justify-center text-[14px] mt-2 text-gray-600 dark:text-gray-100"> C#	</p>
          </div>

          <div className="flex flex-col w-auto p-2 md:p-3 mr-2">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xamarin/xamarin-original.svg" />
            <p className="flex items-center justify-center text-[14px] mt-2 text-gray-600 dark:text-gray-100"> Xamarin	</p>
          </div>

          <div className="flex flex-col w-auto p-2 md:p-3 mr-2">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-plain.svg" />
            <p className="flex items-center justify-center text-[14px] mt-2 text-gray-600 dark:text-gray-100"> DotNet	</p>
          </div>

        </div>
      </div>

    </section>
  );
};

export default TechShowcase;
