import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        
         <nav>
           <div className='d-flex justify-content-around'>
            <button className='btn btn-dark'><Link to="/">Home</Link></button>
            <button className='btn btn-dark'><Link to="/Income">Income</Link></button>
            <button className='btn btn-dark'><Link to="/Expense">Expense</Link></button>
            <button className='btn btn-dark'><Link to="*">Not Found</Link></button>
                        
            </div>
        </nav>
    );
};
        

export default Menu;