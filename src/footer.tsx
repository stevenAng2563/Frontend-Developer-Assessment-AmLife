import React from 'react';
import { FaPlusCircle } from "react-icons/fa";
import './App.css'
import { faHouse, faCamera } from '@fortawesome/free-solid-svg-icons'
import { faUser} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from './assets/sample.svg'
import logo2 from './assets/camera.png'

function Footer() {
  return (
    <footer className='footer'
        style={{ backgroundColor: '#ffffff', padding: '20px', position: 'fixed', bottom: '0', left: '0' , right: '0'}}>
      <div className='row'>
        <div className="col-2">
            <button>
                <FontAwesomeIcon icon={faHouse} style={{ color: '#d494e3' }}/>
            </button>
        </div>
        <div className="col-2">
            <button className='svg-button'>
                <img src={logo} alt="Logo" style={{ color: '#c7c7c7' }}/>
            </button>
        </div>
        <div className='col-2'>
            <button className='add-button'>
                <FaPlusCircle style={{ color: '#97b9fd' }}/>
            </button>
        </div>
        <div className="col-2">
            <button className='svg-button'>
                <img src={logo2} alt="Logo" style={{ color: '#c7c7c7' }}/>
            </button>
        </div>
        <div className="col-2">
            <button>
                <FontAwesomeIcon icon={faUser} style={{ color: '#c7c7c7' }}/>
            </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;