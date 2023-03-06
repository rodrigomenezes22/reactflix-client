import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {

    const year = ()=> {
        let date = new Date();
        return date.getFullYear();
    }

  return (
    <footer>
    <div className='container'>
        <div className='row'>
            <div className='logo'>Reactflix</div>
        </div>
        <div className='row'>
            <div className='col-xs-12 col-md-6 col-lg-3 mb-2'>
                <h3 className='roboto small text-white text-start'>NAVIGATION</h3>
                <ul className='nav flex-column'>
                    <li className='nav-item'><Link to="/">HOME</Link></li>
                    <li className='nav-item'><Link to="/api/movies">MOVIES LIST</Link></li>
                    <li className='nav-item'><Link to="/movies/new">ADD NEW MOVIE</Link></li>
                    <li className='nav-item'><Link to="/api/search/tv">TV SHOWS</Link></li>
                    <li className='nav-item'><Link to="/">CONTACT</Link></li>                    
                </ul>
            </div>
            <div className='col-xs-12 col-md-6 col-lg-3 mb-2'>
                <h3 className='roboto small text-white text-start'>HELP CENTER</h3>
                <ul className='nav flex-column'>
                    <li className='nav-item'><Link to="/">FAQ</Link></li>
                    <li className='nav-item'><Link to="/">MEDIA CENTER</Link></li>
                    <li className='nav-item'><Link to="/">REDEEM GIFT CARDS</Link></li>
                    <li className='nav-item'><Link to="/">PRIVACY</Link></li>
                    <li className='nav-item'><Link to="/">SPEED TEST</Link></li>
                </ul>
            </div>
            <div className='col-xs-12 col-md-6 col-lg-3 mb-2'>
                <h3 className='roboto small text-white text-start'>JOIN US</h3>
                <ul className='nav flex-column'>
                    <li className='nav-item'><Link to="/">JOBS</Link></li>
                    <li className='nav-item'><Link to="/">OUR COMPANY</Link></li>
                    <li className='nav-item'><Link to="/">OPEN POSITIONS</Link></li>
                </ul>
            </div>
            <div className='col-xs-12 col-md-6 col-lg-3 mb-2'>
                <h3 className='roboto small text-white text-start'>ACCOUNT</h3>
                <ul className='nav flex-column'>
                    <li className='nav-item'><Link to="/">REACTFLIX</Link></li>
                    <li className='nav-item'><Link to="/">TERMS OF USE</Link></li>
                    <li className='nav-item'><Link to="/">ONLY ON REACTFLIX</Link></li>
                </ul>
            </div>
        </div>
        <div className='row text-center'>
                <p className='text-white small'>All righst reserved {year()}</p>
        </div>
    </div>
    </footer>
  )
}

export default Footer
