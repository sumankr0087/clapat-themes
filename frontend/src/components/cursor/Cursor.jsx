import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function Cursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        const mouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', mouseMove);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
        };
    }, []);

    useEffect(() => {
        const hideCursor = () => setHidden(true);
        const showCursor = () => setHidden(false);

        const imgElement = document.querySelector('img');
        const menuElement = document.getElementById('menu');
        const backTopElement = document.getElementById('back-top-text');

        if (imgElement) {
            imgElement.addEventListener('mouseenter', hideCursor);
            imgElement.addEventListener('mouseleave', showCursor);
        }

        if (menuElement) {
            menuElement.addEventListener('mouseenter', hideCursor);
            menuElement.addEventListener('mouseleave', showCursor);
        }

        if (backTopElement) {
            backTopElement.addEventListener('mouseenter', hideCursor);
            backTopElement.addEventListener('mouseleave', showCursor);
        }

        return () => {
            if (imgElement) {
                imgElement.removeEventListener('mouseenter', hideCursor);
                imgElement.removeEventListener('mouseleave', showCursor);
            }

            if (menuElement) {
                menuElement.removeEventListener('mouseenter', hideCursor);
                menuElement.removeEventListener('mouseleave', showCursor);
            }

            if (backTopElement) {
                backTopElement.removeEventListener('mouseenter', hideCursor);
                backTopElement.removeEventListener('mouseleave', showCursor);
            }
        };
    }, []);

    return (
        <motion.div
            animate={{ x: position.x - 25, y: position.y - 25 }}
            className={`w-[50px] h-[50px] rounded-full border fixed pointer-events-none ${hidden ? 'opacity-0' : 'opacity-100'}`}
        ></motion.div>
    );
}

export default Cursor;
