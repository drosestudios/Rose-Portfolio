const YoutubeShowcase = () => {
 
    return (
         <section>
              {/* Youtube Text Panel */}
              <h2 className="text-2xl text-center font-bold mb-6">LATEST RELEASE</h2>

              {/* Youtube Embed Panel */}
              <iframe src="https://www.youtube.com/embed/ZmXYV-SUC8A?color=white"
              frameborder="0" allowfullscreen className="w-full h-[350px] rounded youtube-embed mb-4"></iframe>
        </section>
    );

}

export default YoutubeShowcase;