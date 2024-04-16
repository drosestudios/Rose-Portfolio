
const AboutShowcase = () => {
  return (
    <section className="mt-5">
      {/* Category Text Panel */}
      <h2 className="text-2xl text-center font-bold mb-6">BIOGRAPHY</h2>

      {/* Information Text Panel */}
      <div className="rounded w-full md:w-[845px] h-auto md:h-[150px] shadow-md mb-6 flex flex-col md:flex-row">
        <div className="text-justify">
          <p className="m-3 whitespace-wrap text-gray-500 dark:text-gray-400">
            <a
              href="https://github.com/drosestudios"
              target="_blank"
              className="text-gray-600 font-bold"
            >Ayl Rose{""}
            </a>, a programmer oriented to create new
            programs based on ideas or goals that have not yet been done before,
            D'Rose Studios is a company based on an MIT license which develops
            multiplatform software applications using various modern
            technologies, with designs minimalist and efficient for our users,
            highlighting the beauty of the black and white achromatic color
            palettes including grayscale, also as separate hobbies I am a music
            producer (future funk and synth-wave) and graphic illustrator.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutShowcase;
