import React from 'react'

export const Hero = () => {
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
            <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-10 animate-[fadeIn_1.5s_ease-in-out]" />

            {/* Content Container */}
            <div className="relative z-20 h-full max-w-7xl mx-auto">
                {/* Animated Heading */}
                <h1 className="absolute md:text-7xl text-5xl w-full text-center bottom-[20vh] md:bottom-[15vh] font-extrabold opacity-0 animate-[slideUp_1s_ease-out_0.5s_forwards] flex justify-center items-center hover:scale-105 transition-transform duration-300">
                    <span className="text-stroke animate-[tubelight_2s_ease-in-out_infinite]">
                        Get your luxurious ride
                    </span>
                </h1>
            </div>


        </main>
    )
}

export default Hero;