import React, { useRef, useState } from 'react';

function Header() {
    const [hovering, setHovering] = useState(false);
    const svgRef = useRef(null);

    return (
        <div className='grid grid-cols-2 px-[60px] py-[10px] w-full'>
            <div className=''>
                <img className="h-[50px] w-auto block cursor-pointer" src="http://clapat-themes.com/wordpress/montoya/wp-content/themes/montoya/images/logo-white.png" alt="Logo White" />
            </div>
            <div
                id='menu'
                className='justify-end my-[15px] flex items-center gap-10'
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
            >
                <div className='text-sm font-medium cursor-pointer'>Menu</div>
                <div
                    className={`menu-icon ${hovering ? 'border-2 border-[#ff9100] rounded-full cursor-pointer p-4' : ''} transition-all`}
                    ref={svgRef}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default Header;
