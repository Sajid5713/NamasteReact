1. What are various ways to add images into our App? Explain with code examples
Ans: There are various ways to used images into our app.
    <ol>
        <li>Use the import keyword.</li>
        <code>
            import img from "./myImg";
            <img src={img} alt="title">
        </code>
        <li>Use the require keyword</li>
        <code>
            <img src={require("./myImg")} alt="title">
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

2. What would happen if we do console.log(useState())?
Ans: If we console log the useState() it will return two value one is CurrentState Value and Function to update that state.

3. How will useEffect behave if we don't add a dependency array ?
Ans: by default every time the component render useEffect is called. but providing it a dependency it will render once on initial render. If dependency array is given a value then useEffect is called every time when the dependency value changed.

4. What is SPA?
Ans: It stand for Single Page Application. It is type of web application that loads the current page that user request rather than fetching all the new pages form the server.

5. What is difference between Client Side Routing and Server Side Routing?
Ans: Server-Side-Routing: Type of routing where a network call is made and page is coming from the server. While Client-Side-Routing: where we donot make a network call and its has all data when it is initially loaded.