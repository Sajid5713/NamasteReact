
/*
    <div id="parent">
        <div id="child">
            <h1>This is h1 tag</h1>
            <h2>This is h2 tag</h2>
        </div>
         <div id="child">
            <h1>This is h1 tag</h1>
            <h2>This is h2 tag</h2>
        </div>
    </div>


    ReactElement(Object) => HTML (Browser Understand)

*/

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


// const heading = React.createElement(
//     "h1",
//     {id: "heading" , abc : "xyz"},
//     "Hello World from React");

    /*
        const element = createElement(type, props, ...children)
    */
    console.log(parent) // React.createElement give an Object with all the children and attribute (props)

    const root = ReactDOM.createRoot(document.getElementById('root'));

    root.render(parent); // Actually convert the object to html statement and show on browser
