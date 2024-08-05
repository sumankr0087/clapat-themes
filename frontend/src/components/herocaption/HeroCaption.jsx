import React from 'react';

function HeroCaption() {
    return (
        <div>
            <div className="py-[80px] items-center flex flex-col h-[788px]">
                <h1 className="hero-title caption-timeline primary-font-title">
                    <div className='font-six-caps hero-title font-medium'>
                        <span>M</span>
                        <span>O</span>
                        <span>N</span>
                        <span>T</span>
                        <span>O</span>
                        <span>Y</span>
                        <span>A</span>
                    </div>
                </h1>
                <div className="hero-subtitle caption-timeline">
                    <span className='text-[#444] text-lg font-normal text-center flex'>
                        WE ARE A CREATIVE STUDIO, SPECIALIZED IN STRATEGY, BRANDING <br />
                        DESIGN, AND DEVELOPMENT. OUR WORK IS ALWAYS AT THE INTERSECTION <br />
                        OF DESIGN AND TECHNOLOGY.
                    </span>
                </div>
            </div>
        </div>
    );
}

export default HeroCaption;
