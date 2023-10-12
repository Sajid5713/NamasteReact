
1. Is JSX mandatory for React?
Ans: JSX is not mandatory for the making an application with React. Just JSX is provide us a HTML like syntax to code. If we go with the old way to code react it would be mind boggling.

2. Is ES6 mandatory for React?
Ans: It is not mandatory for the react. But it the modern standard to use ES6 because it make the code more readable and accessible.

3. {TitleComponent}</> vs {<TitleComponent/>}</> vs { <TitleComponent></TitleComponent/> }in JSX
Ans: There are various ways to declare the component in React as in the end React is JS.

{TitleComponent} : 
    - When we use {} in JSX we can gain the magical ability to execute any JS in the {code} inside the curly braces. {TitleComponent} is treated as a variable either with value or expression or React Element with no return.

{<TitleComponent />}: 
    - It is common way to render a component inside React and call it inside another component. The component then return 

    - JSX code => ReactElement() => JS Object => HTMLElement(render)

{<TitleComponent></TitleComponent>}: 
    - It is way to render a component inside React. It is similar to this{<TitleComponent />} to call a component.


4. How can I write comments in JSX?
Ans: To comment a code inside JSX we can use {/* */} to comment the code inside.

5. What is <React.Fragment><React.Fragment/> and <></> ?
Ans: React Fragment is used wrap the multiple elements/children into a group, without adding a extra node to DOM. 
    
6. What is Virtual DOM?
Ans: Real DOM is the actual HTML representation on browser and Virtual Dom is copy of Real DOM. When you make changes in Real DOM it rerender the whole page once, thus it affect the efficiency of the server load time. When we work with Virtual DOM and make changes on certain node, it check previous DOM and run a algorithm called "differ" which perform an inspection where changes are made and rerender certain node and represent the changes to the DOM. 

7. What is Reconciliation in React?
Ans: Reconciliation is a process where React check the state of the previous DOM, with new Virtual DOM and only rerender the part where state has been changed. Previous UI is kept in a memory and synced with the Real DOM by library ReactDOM.

8. What is React Fiber?
Ans: React Fiber is implementation of React core Reconciliation algorithm. It is new Reconciliation Engine introduced in React 16. The primary goal is to enable React to take advantage of scheduling.

    - Pause work come back to it later.
    - Split work into chucks and prioritize task
    - reuse previously completed task
    - abort work if no longer needed.

9. Why we need keys in React? When do we need keys in React?
Ans: "Keys" are needed ti identify which items have changes (added/removed/reordered). When we have large number of list / group of similar data, we need keys.
    
10. Can we use index as keys in React?
Ans: Yes, we can; but it is recommended to use a unique key for each items. It is not recommended to use when the order of the items is changing.
    
11. What is props in React?
Ans. "Props" are properties that are passed to React Component. They are also mean to pass data from one component to another.
    
12. What is a Config Driven UI ?
Ans: In Configuration Driven UI, all website data is driven by data. The layout, styles and properties of the UI elements are defined in a config file which can be easily modified as per need with need a change to codebase. 


------------------------------------------------ Reference --------------------------------------------------

Code Link: 
<a href="https://bitbucket.org/namastedev/namaste-react-live/src/master/">https://bitbucket.org/namastedev/namaste-react-live/src/master/</a>

React without JSX: 
<a href="https://reactjs.org/docs/react-without-jsx.html">https://reactjs.org/docs/react-without-jsx.html</a>

Virtual DOM: 
<a  href="https://reactjs.org/docs/faq-internals.html">https://reactjs.org/docs/faq-internals.html</a>

Reconciliation: 
<a href="https://reactjs.org/docs/reconciliation.html">https://reactjs.org/docs/reconciliation.html</a>

React Fiber Architecture: 
<a href="https://github.com/acdlite/react-fiber-architecture">https://github.com/acdlite/react-fiber-architecture</a>

React Without ES6: 
<a href="https://reactjs.org/docs/react-without-es6.html">https://reactjs.org/docs/react-without-es6.html</a>

Index Keys as Anti-Pattern: 
<a href="https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/">https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/</a>
