import React from 'react'

type Props = {}

const VideoBackground = (props: Props) => {
    return (
        <div className="h-full w-full">
            <video className="w-full"
                id="background__video"
                poster="https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill/prod/wp-content/themes/10up-sept2016/assets/img/home-hero-large-fallback.jpg"
                playsInline muted autoPlay loop
            >
                <source
                    type="video/mp4"
                    src="https://10up.com/wp-content/themes/10up-sept2016/assets/img/home-bg-video.mp4"
                />
            </video>
            <div className="absolute top-1/3 left-2/3 text-2xl text-white w-1/4 font-mono">
                We make the web better by <b>finely crafting</b> websites & tools for content creators.
                <br />
                <button className="border-red-600 border-2 p-1 mt-10 hover:bg-red-600 text-md">Watch Video</button>
                <button className="p-1 mt-10 hover:bg-red-600 text-md">Pause/Resume Video</button>
            </div>
        </div>
    )
}

export default VideoBackground