
const AboutShowcase = () => {
  return (
    <section className="mt-5">
      {/* Category Text Panel */}
      <h2 className="text-2xl text-center font-bold mb-6">BIOGRAPHY</h2>

      {/* Information Text Panel */}
      <div className="rounded w-full md:w-[845px] h-auto md:h-[150px] shadow-md mb-6 flex flex-col md:flex-row">
        <div className="text-justify">
          <p className="m-4 whitespace-wrap text-gray-500 dark:text-gray-300">
            <a
              href="https://github.com/drosestudios"
              target="_blank"
              className="text-gray-600 hover:text-gray-500 dark:text-purple-100 dark:hover:text-purple-50 font-bold"
            >Ayl Rose{""}
            </a> is a programmer with a drive to do things that others have never done before.
          D'Rose Studios is a company that develops multiplatform software applications using various 
          modern technologies. Rose creates these apps with designs that are minimalistic and easy to use for users,
          highlighting the beauty of the black and white achromatic color palettes.
          Rose also produces music, mainly in the future funk and synth-wave genre, and graphic illustraton.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutShowcase;
