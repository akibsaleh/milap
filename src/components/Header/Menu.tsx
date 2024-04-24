import React from 'react';

const Menu = () => {
    return (
        <ul className='list-none flex gap-x-2.5 items-center [&>li]:font-semibold '>
            <li><a href="#">Home</a></li>
            <li><a href="#">Docs</a></li>
            <li><a href="#">About</a></li>
        </ul>
    );
};

export default Menu;