import { useRouteError} from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    // console.log(error)
    return (
        <div className="error-container">
            <h1 className="notfound-404">Oops !</h1>
            <h4>{error.status}:{error.statusText}</h4>
            <p>{error.data}</p>
            <button className="btn">Go Back</button>

        </div>
    )
}


export default Error;