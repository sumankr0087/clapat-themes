import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

function Footer() {
    const [hovering, setHovering] = useState(false);
    const svgRef = useRef(null);

    return (
        <div className='grid grid-cols-3 px-[60px] items-center py-[10px] w-full'>
            <div
                id='back-top-text'
                className='my-[15px] flex gap-10 items-center'
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
            >
                <motion.div
                    className={`menu-icon transition-all p-4 rounded-full cursor-pointer`}
                    ref={svgRef}
                    animate={{ borderColor: hovering ? '#ff9100' : 'transparent', borderWidth: hovering ? '1px' : '0px' }}
                    transition={{ duration: 0.1 }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                        <path fillRule="evenodd" d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z" clipRule="evenodd" />
                    </svg>
                </motion.div>
                <motion.div
                    className='text-sm font-medium cursor-pointer back-top-text'
                    initial={{ y: 0 }}
                    animate={{ y: hovering ? -5 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    Back Top
                </motion.div>
            </div>
            <div className='text-center'>
                2024 © <a href="" className="relative inline-block transition-all duration-300 before:absolute before:w-full before:scale-x-0 before:h-[2px] before:bottom-0 before:left-0 before:bg-[#fff] before:origin-bottom-right hover:before:scale-x-100 hover:before:origin-bottom-left before:transition-transform before:duration-300 hover:text-white">ClaPat</a> . All rights reserved.
            </div>
            <div className='text-end flex justify-end gap-10 items-center'>
                <div className='text-sm font-medium cursor-pointer'>
                    Follow us
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4" >
                        <path fillRule="evenodd" d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default Footer;
