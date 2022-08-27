import React from 'react'
import {useNavigate, useLocation} from 'react-router-dom'
import {ReactComponent as PersonOutlineIcon } from '../assets/svg/personOutlineIcon.svg';
import {ReactComponent as ExploreIcon } from '../assets/svg/exploreIcon.svg';
import {ReactComponent as OfferIcon } from '../assets/svg/localOfferIcon.svg'


function Navbar() {

    const navigate = useNavigate()
    const location = useLocation()

    const pathMatchRoute = (route)=>{
        if(route===location.pathname){
            return true
        }
    }
  return (
    <footer className='navbar'>
        <nav className="navbarbav">
            <ul className="navbarListItems">
                <li className="navbarListItem" onClick={() => navigate('/')}>
                    <ExploreIcon fill={pathMatchRoute('/') ? '#2c2c2c' : '#8f8f8f8f'} 
                     width= '36px'
                     height ="36px" />
                    <p className={
                        pathMatchRoute('/')
                        ? 'navbarListItemActive'
                        : 'navbarListItemName'
                        }
                        >Explore
                        </p>
                </li>
                <li className="navbarListItem" onClick={() => navigate('/Offers')}>
                    <OfferIcon fill={pathMatchRoute('/Offers') ? '#2c2c2c' : '#8f8f8f8f'} 
                     width= '36px'
                     height ="36px" />
                    <p className={
                        pathMatchRoute('/Offers')
                        ? 'navbarListItemActive'
                        : 'navbarListItemName'
                        }
                        >Offers
                        </p>
                </li>
                <li className="navbarListItem" onClick={() => navigate('/Profile')}>
                    <PersonOutlineIcon fill={pathMatchRoute('/Profile') ? '#2c2c2c' : '#8f8f8f8f'} width= '36px'
                     height ="36px" />
                    <p className={
                        pathMatchRoute('/Profile')
                        ? 'navbarListItemActive'
                        : 'navbarListItemName'
                        }
                        >Profile
                        </p>
                </li>
                
             </ul>
        </nav>

    </footer>
  )
}

export default Navbar