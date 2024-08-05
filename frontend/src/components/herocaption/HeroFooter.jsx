import React from 'react'

function HeroFooter() {
    return (
        <div>
            <div className='flex'>
                <div class="hero-footer-left" >
                    <div class="button-wrap right scroll-down">
                        <div class="icon-wrap parallax-wrap" >
                            <div class="button-icon parallax-element" >
                                <i class="fa-solid fa-angle-down"></i>
                            </div>
                        </div>
                        <div class="button-text sticky right">
                            <span data-hover="Scroll to Explore">Scroll to Explore</span>
                        </div>
                    </div>
                </div>
                <div class="hero-footer-right" >
                    <div id="info-text">Featured Projects</div>
                </div>
            </div>
        </div>
    )
}

export default HeroFooter
