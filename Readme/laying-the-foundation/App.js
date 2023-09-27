import React from "react";
import ReactDOM from "react-dom/client"
import "./index.css"

    /* ----------------------------------------------------------------------------------
            Create Nested header element using React.createElement(h1,h2,h3 inside div with class title)
            -------------------------------------------------------------------------------------------------*/

    // const header = React.createElement(
    //     'div',
    //     {className:'title'},
    //     [
    //         React.createElement("h1",{},"I am H1 Tag"),
    //         React.createElement("h2",{},"I am H2 Tag"),
    //         React.createElement("h3",{},"I am H3 Tag")
    //     ]   
    // )
    
    // const root = ReactDOM.createRoot(document.getElementById('root'));

    // root.render(header);


    /* -------------------------------------------------
                        Create same with JSX
                ------------------------------------------------*/

    // const header = (
    //     <div className="title">
    //         <h1>I am H1 tag</h1>
    //         <h2>I am H2 tag</h2>
    //         <h3>I am H3 tag</h3>
    //     </div>
    // )

    // const root = ReactDOM.createRoot(document.getElementById("root"));
    // root.render(header);

/* -------------------------------------------------
                        Create Functional Component of Same with JSX
                ------------------------------------------------*/

                /* Note: To convert React variable to functional component convert the variable 
                         to arrow function with a return type */

                // const Header = () => (
                //     <div className="title">
                //         <h1>I am H1 tag</h1>
                //         <h2>I am H2 tag</h2>
                //         <h3>I am H3 tag</h3>
                //     </div>
                // )
            
                // const root = ReactDOM.createRoot(document.getElementById("root"));
                // root.render(<Header/>);


                /* -------------------------------------------------
                        Passing attributes into tag
                ------------------------------------------------*/

                // const Header = () => (
                //     <div className="title">
                //         <h1 className="title1">I am H1 tag</h1>
                //         <h2 id="title2">I am H2 tag</h2>
                //         <h3 style={{color :"red"}}>I am H3 tag</h3>
                //     </div>
                // )
            
                // const root = ReactDOM.createRoot(document.getElementById("root"));
                // root.render(<Header/>);


                // /* -------------------------------------------------
                //         Composition of Components
                // ------------------------------------------------*/

                // const Header = () => (
                //     <div className="title">
                //         <h1 className="title1">I am H1 tag</h1>
                //         <Header2/>
                //         <Header2></Header2>
                //         {Header2()}
                //     </div>
                // )

                // const Header2 = () => {
                //     return (
                //         <h2 className="head2">H2 tag</h2>
                //     )
                // }
            
                // const root = ReactDOM.createRoot(document.getElementById("root"));
                // root.render(<Header/>);


                //  /* -------------------------------------------------
                //         {TitleComponent} vs  {TitleComponent/} vs  {TitleComponent} {/TitleComponent}
                // ------------------------------------------------*/

                // const Header = () => (
                //     <div className="title">
                //         <h1 className="title1">I am H1 tag</h1>
                //         {TitleComponent}
                //         {<TitleComponentt/>}
                //         {<TitleComponentt></TitleComponentt>}
                //     </div>
                // )

                // const TitleComponent = 1000;

                // const TitleComponentt = () => {
                //     return(
                //         "abx"
                //     )
                // }
            
                // const root = ReactDOM.createRoot(document.getElementById("root"));
                // root.render(<Header/>);


                /* -------------------------------------------------
                        {TitleComponent} vs  {TitleComponent/} vs  {TitleComponent} {/TitleComponent}
                ------------------------------------------------*/

                const HeaderComponent = () => {
                    return (
                        <div className="container">
                            <div className="header">
                                    <div className="logo">
                                        <Logo/>
                                    </div>
                                    <div className="right">
                                        <SearchBar/>
                                        <UserIcon/>
                                    </div>
                                   
                            </div>
                        </div>
                    )
                }


                const Logo = () => {
                    return (
                        <img className="logo" src="https://www.google.com/logos/doodles/2023/googles-25th-birthday-6753651837110114-s.png" />
                    )
                }

                const SearchBar = () => {
                    return (
                       <input className="search" placeholder="Type to Search..." type="text"/>
                    )
                }

                const UserIcon = () => {
                    return (
                       <img src="https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg" style={{width:"32px", height: "32px"}}/>
                    )
                }

                
            
                const root = ReactDOM.createRoot(document.getElementById("root"));
                root.render(<HeaderComponent/>);