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

      {/* Animated Overlay */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-black/30 z-10 
        animate-[fadeIn_1.5s_ease-in-out]"
      />

      {/* Content Container */}
      <div className="relative z-20 h-full max-w-7xl mx-auto">
        {/* Animated Heading */}
        <h1 
          className="absolute text-white md:text-7xl text-3xl w-full text-center bottom-11 
          font-extrabold opacity-0 animate-[slideUp_1s_ease-out_0.5s_forwards]
          hover:scale-105 transition-transform duration-300"
        >
          Manila Always Come back
        </h1>
      </div>
    </main>
  );
};

export default Page;
