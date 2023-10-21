import { useState } from "react"
import Logo from "../utils/img/logo.png"

const Header = () => {
   
    const [btnValue, setbtnValue] = useState('login')

    return (
        <div className="header">
                <div className="logo">
                    <a href="/">
                        <img className="logo" src={Logo} alt="Logo" style={{width:"120px"}} />
                    </a>
                </div>
                <div className="navigation">
                    <ul className="nav-items">
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">Cart</a></li>
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