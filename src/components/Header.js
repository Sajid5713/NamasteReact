import { useState } from "react";
import Logo from "../utils/img/logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
   
    const [btnValue, setbtnValue] = useState('login')
    const onlineStatus = useOnlineStatus();
    return (
        <div className="header">
                <div className="logo">
                    <a href="/">
                        <img className="logo" src={Logo} alt="Logo" style={{width:"120px"}} />
                    </a>
                </div>
                <div className="navigation">
                    <ul className="nav-items">
                        <li>Status : {onlineStatus ? '❤️' :'💔'}</li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/grocery">Grocery</Link></li>
                        <li><Link href="">Cart</Link></li>
                        <li><button className="btn" 
                        onClick={()=>{
                            btnValue === "login" ? setbtnValue('logout') : setbtnValue("login")
                        }}
                        >{btnValue}</button></li>
                    </ul>
                </div>
        </div>
        
    )
}


export default Header;