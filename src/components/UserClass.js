import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props)
        /* The super() is used inside the constructor for the purpose to get access to 
        this keyword inside our constructor. With this let’s try to understand super() first.*/
        this.state={
            count:0,
            count2:1
        }
        // console.log(this.props.name + 'Child Constructer')
        
    };

    componentDidMount(){
        console.log(this.props.name + 'Child componentdidmount')
        this.timer = setInterval(()=>{
            console.log('Component counter after 1s')
        },1000)
    }

    componentDidUpdate(){
        console.log(this.props.name + 'Child component update')
    }

    componentWillUnmount(){
        clearInterval(this.timer)
    }

    render(){
        const styles =  {
            boxShadow:'0 0 15px #f0f0f0',
            padding: '15px',
            width: '33.33%',
            border: '1px solid #f0f0f0'
        };
        const {name,address,socials} = this.props

       

        return(
            <div className="user-card" style={styles}>
                <img src="" alt="userClass"/>
                <h2>{name}</h2>
                <p>{address}</p>
                <p> {socials}</p>
                {/* {console.log(name + 'Child render')} */}
                <p>{this.state.count}</p>
                <h5>{this.state.count2}</h5>
                <button className="btn"
                onClick={()=>{
                    this.setState({
                        count: this.state.count + 1,
                        count2: this.state.count2 + 1
                    })
                }}>Increment Class</button>
            </div>
        )
    }
}

export default UserClass

