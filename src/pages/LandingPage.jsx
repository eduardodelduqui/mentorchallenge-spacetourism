import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage () {
    return (
        <div page="landing-page" className="main-content bg-landing-page-mobile sm:bg-landing-page-tablet lg:bg-landing-page-desktop pt-[88px]">
            <div className="max-w-[900px] xl:max-w-[1100px] mx-auto flex flex-col items-center lg:flex-row lg:justify-between lg:items-end lg:pt-[300px]">
                <div className="pt-10 pb-20 sm:pt-[122px] sm:pb-[156px] lg:py-0 text-center text-white max-w-[450px]">
                    <div className="landing-page-title">
                        <h5 className="text-light-blue sm:text-xl sm:leading-6">So, you want to travel to</h5>
                        <h1 className="leading-extra-large sm:text-xxl sm:leading-xxl py-6">Space</h1>
                    </div>
                    <p className="text-light-blue leading-6 sm:text-base sm:leading-7">
                        Let’s face it; if you want to go to space, you might as well genuinely go to 
                        outer space and not hover kind of on the edge of it. Well sit back, and relax 
                        because we’ll give you a truly out of this world experience!
                    </p>
                </div>

                <Link to='/destination'className="block">
                    <button className="floating-button font-bellefair flex justify-center items-center bg-white rounded-full text-xl sm:w-60 sm:h-60 hover:animate-pulse">
                        EXPLORE
                    </button>
                </Link>
            </div>
        </div>
    )
}