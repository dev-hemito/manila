import React from 'react';


const Page = () => {
  return (
    <main className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videoplayback.mp4" type="video/mp4" />
      </video>

      {/* Overlay to control video darkness/contrast */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-10" />

      {/* Content Container */}
      <div className="relative z-20 h-full max-w-7xl mx-auto bg ">
        <h1 className='absolute text-white md:text-7xl text-3xl w-full text-center bottom-11 font-extrabold'>Manila Always Come back</h1>
      </div>
    </main>
  );
};

export default Page;