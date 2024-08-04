import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function Cursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const mouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', mouseMove);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
        };
    }, []);

    console.log(position);

    return (
        <motion.div
            animate={{ x: position.x, y: position.y }}
            className='w-[50px] h-[50px] rounded-full border fixed'
        ></motion.div>
    );
}

export default Cursor;
