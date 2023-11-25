import UserClass from './UserClass';
// import UserInfo from './UserInfo';
import { Component } from 'react';

class About extends Component{

    constructor(){
        super()
        // console.log("About Constructer")
    }

    componentDidMount(){
        console.log("About componentDidMount")
    }

    render(){
        return(
            <div className="container">
                <h1>About Us</h1>
                <p>This is about page.</p>
        
                <UserClass name="Sajid" address="Islamabad" socials="facebook,twitter,instagram" />   
                {/* <UserClass name="Mueed" address="Canada" socials="facebook,twitter,instagram" />    */}
                {/* { console.log("About Render")} */}
            </div>
            
        )
    }

}
   

export default About;

/**
 * 
 * About Constructor
 * About Render
 * Child Constructor
 * Child Render
 * Child ComponentDidmount
 * About ComponentDidMount
 */