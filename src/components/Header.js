import React from 'react';
import './Header.css'
import ForumIcon from '@material-ui/icons/Forum';
import PersonIcon from '@material-ui/icons/Person';
import tinderlogo from '../images/tinder-logo.png';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link, useHistory } from 'react-router-dom';

const Header = ({ backButton }) => {
    const history = useHistory();

    return (
        <div className="header">
            {/* check show icon back */}
            {
                backButton ? 
                    <IconButton onClick={()=>history.replace(backButton)}>
                        <ArrowBackIosIcon className="header_icon" fontSize="large" />
                    </IconButton>
                : 
                    <IconButton>
                        <PersonIcon className="header_icon" fontSize="large" />
                    </IconButton>
            }
            
            <Link to="/">
            <img 
                className="header_logo"
                src={tinderlogo}
                alt="tinder-logo"
            />
            </Link>

            <Link to='/chat'>
                <IconButton>
                    <ForumIcon className="header_icon" fontSize="large" />
                </IconButton>
            </Link>
        </div>
    )
};

export default Header;
