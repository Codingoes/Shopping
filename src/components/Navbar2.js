import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSolidDownArrow } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import './Navbar2.css';
import { IconContext } from 'react-icons';



const Navbar2=()=>{
    return(
        <div className='yellosec-nav2'>
            <IconContext.Provider value={{size:'1rem',color:'white'}}>
               <div className='b-menu'><GiHamburgerMenu size='3rem'/></div> 
                <div className='category'><div>All Categories</div><BiSolidDownArrow size='0.5rem' /></div>
                <div className='searchbar'>
                    
                    <input className='search' placeholder='Search the product here'></input>
                        
                    <div className='search-i'><FaSearch /></div>
                </div>
               <div className='language'><div>English</div><div className='flagpic'></div>
                <div>
                    
                <IoIosArrowDown size='1rem' color='black' /></div>
                </div>

                <div className='cart'>
                    <div style={{ padding: '2px 5px' }}>
                        <FaShoppingCart />
                    </div>
                   <div> CART</div>
                </div>
                <div className='user'>
                  <div style={{ padding: '2px 5px' }}>
                    <FaUser /> 
                    </div>
               <div>USER </div>    
                </div>           
                </IconContext.Provider>
            </div>
    );
}

export default Navbar2;
