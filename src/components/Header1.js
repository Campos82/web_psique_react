import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faFileClipboard, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import React from "react";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

const Header1 = () => {
    return (
        <nav id="header1">
            <ul className="header1-ul">
                <li className="header1-li">
                    <p> <FontAwesomeIcon icon={faBell} /> 1(224) 567-895 </p>
                </li>
                <li className="header1-li">
                    <p> <FontAwesomeIcon icon={faEnvelope} /> psiquedata@psique.aws </p>
                </li>
                <li>
                    
                </li>
            </ul>
            
        </nav>
    );
};

export default Header1;