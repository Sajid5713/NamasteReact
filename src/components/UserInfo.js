import { useState } from 'react';

const UserInfo = ({name,address,socials}) => {
    const [count,setcount] = useState(0);
    const [count2,setcount2] = useState(0);
    const styles =  {
        boxShadow:'0 0 15px #f0f0f0',
        padding: '15px',
        width: '33.33%',
        border: '1px solid #f0f0f0'
    };

    return(
        <>
        <div className="user-card" style={styles}>
            <img src="" alt="useeInfo" />
            <h2>{name}</h2>
            <p>{address}</p>
            <p>{socials}</p>
            <p>{count}</p>
            <h5>{count2}</h5>
            <button className='btn'
            onClick={()=>{
                setcount(count+1)
                setcount2(count+1)
            }}>Increase</button>
        </div>
          
        </>
        
    )
}

export default UserInfo;