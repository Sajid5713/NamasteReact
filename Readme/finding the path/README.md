1. What are various ways to add images to our App? Explain with code examples. </br>
Ans: There are various ways to use images in our app.
    <ol>
        <li>Use the import keyword.</li>
        <code>
            import img from "./myImg";
            <img src="{img}" alt="title">
        </code>
        <li>Use the require keyword</li>
        <code>
            <img src="{require("./myImg")}" alt="title">
        </code>
        <li>Import SVGs directly as a React component</li>
        <code>
            import { Image as Logo } from "./logo.svg"
            <div><Logo></div>
        </code>
        <li>Load images directly from the network. </li>
        <code>
            img src="https://....." alt="title">
        </code>
    </ol>

2. What would happen if we do console.log(useState())?</br>
Ans: If we console log the useState() it will return two values the CurrentState Value and the Function to update that state.

3. How will useEffect behave if we don't add a dependency array ?</br>
Ans: by default every time the component render useEffect is called. but providing it a dependency it will render once on initial render. If the dependency array is given a value then useEffect is called every time the dependency value changes.

4. What is SPA?</br>
Ans: It stands for Single Page Application. It is a type of web application that loads the current page that the user request rather than fetching all the new pages from the server.

5. What is the difference between Client Side Routing and Server Side Routing?</br>
Ans: Server-Side-Routing: This type of routing is where a network call is made and a page is coming from the server. Client-Side-Routing: where we do not make a network call and it has all data when it is initially loaded.
