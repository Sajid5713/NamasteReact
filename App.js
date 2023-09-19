import React from "react";
import ReactDOM from "react-dom/client"


const parent = React.createElement(
                    'div',
                    {id:'parent'},
                    [React.createElement(
                        'div',
                        {id:'child'},
                        [React.createElement(
                            'h1',
                            {},
                            'Im an H1 tag'),
                            React.createElement(
                                'h2',
                                {},
                                'Im an H2 tag')]
                    ),
                    React.createElement(
                        'div',
                        {id:'child2'},
                        [React.createElement(
                            'h1',
                            {},
                            'Im an H1 tag'),
                            React.createElement(
                                'h2',
                                {},
                                'Im an H2 tag')]
                    )]
                )


    console.log(parent) // React.createElement give an Object with all the children and attribute (props)

    const root = ReactDOM.createRoot(document.getElementById('root'));

    root.render(parent); // Actually convert the object to html statement and show on browser
