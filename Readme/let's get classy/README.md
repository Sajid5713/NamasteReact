1. How do you create Nested Routes react-router-dom configuration?
   Ans: We can create nested routes like as follow:

<code>
    const appRoutes = createBrowserRouter([
        path:"/",
        element: <Applayout/>,
        children:[
            {
                path:'/',
                element:<Body/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/contact',
                element:<Contact/>
            }

        ]
    ])

</code>

2.  What is the order of life cycle method calls in Class Based Components
    Ans: The Order of life cycle of class based component is as follow:
    <code>
    Mounting: 1. Constructor 2. Render 3. ComponentDidMount() 4. State variable update (this.setState)
    </code>
    <code>
    Updating:

        1. render
        2. ComponentDidUpdate()

    </code>
    <code>
    Unmounting:
    This method is called when a component is being removed from the DOM:

        1. componentWillUnmount()

    </code>

3.  Why do we use componentDidMount?
    Ans: It is called When component is place on the DOM. It is used to handle all network call and setting up subscription.

4.  Why do we use componentWillUnmount? Show with example?
    Ans: When we leave a page it will trigger componentWillUnmount(), so we have to clear things.
    <code>
        import React from 'react';
            class ComponentOne extends React.Component {

                // Defining the componentWillUnmount method
                componentWillUnmount() {
                alert('The component is going to be unmounted');
                }

                render() {
                return <h1>Hello Geeks!</h1>;
                }
                }

            class App extends React.Component {
                state = { display: true };
                delete = () => {
                this.setState({ display: false });
            };

            render() {
                let comp;
                if (this.state.display) {
                comp =
                <ComponentOne />;
                }
                return (
                    <div>
                        {comp}
                        <button onClick={this.delete}>
                            Delete the component
                        </button>
                    </div>
                );
            }
        }

        export default App;

    </code>

6. (Research) Why do we use super(props) in constructor?
   Ans: The super is used to call the constructor of its parent to gain the access to parent's property and methods.

7. (Research) Why can't we have the callback function of useEffect async?
   Ans:We can not directly make the callback function in useEffect hook async because of two reasons:

    1. async functions implicitly returns a promise.
    2. useEffect expects its callback to either return nothing or a cleanup function.
