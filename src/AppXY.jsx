import React, { useState } from 'react';

export default function AppXY() {
    // const [x, setX] = useState(0);
    // const [y, setY] = useState(0);
    const [position, setPosition] = useState({x: 0, y: 0})
    return (
        <div
         className='container' 
         onPointerMove={(e) => {
            console.log(e.clientX, e.clientY);
            // setX(e.clientX);
            // setY(e.clientY);
            setPosition({x: e.clientX, y: e.clientY});
            // setPosition(prev => ({ ...prev, x: e.clientX }));
            // setPosition(prev => ({ x: e.clientX, y: prev.y }));
         }}
        >
            <div 
                className='pointer' 
                style={{transform: `translate(${position.x}px, ${position.y}px)` }} 
            />
        </div>
    );
}