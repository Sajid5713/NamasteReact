
1. Is JSX mandatory for React?</br>
Ans: JSX is not mandatory for making an application with React. Just JSX provides us an HTML-like syntax to code. If we go with the old way to code react it would be mind-boggling.

2. Is ES6 mandatory for React?</br>
Ans: It is not mandatory for the react. However, it is the modern standard to use ES6 because it makes the code more readable and accessible.

3. <li><code>{TitleComponent}</code> vs <code>{&lt;TitleComponent/&gt;}</code> vs <code>{&lt;TitleComponent&gt;&lt;/TitleComponent&gt;}</code> in JSX</li> </br>
Ans: There are various ways to declare the component in React as in the end, React is JS.

   - {TitleComponent} : 
    - When we use {} in JSX we can gain the magical ability to execute any JS in the {code} inside the curly braces. {TitleComponent} is treated as        a variable either with value or expression or React Element with no return.

   - {{<TitleComponent/>}}: 
    - It is a common way to render a component inside React and call it inside another component. The component then returns 

    - JSX code => ReactElement() => JS Object => HTMLElement(render)

   - {<TitleComponent></TitleComponent>}: 
    - It is a way to render a component inside React. It is similar to this{<TitleComponent />} to call a component.


4. How can I write comments in JSX?</br>
Ans: To comment a code inside JSX we can use {/* */} to comment the code inside.

5. What is <React.Fragment><React.Fragment/> and <></> ?</br>
Ans: React Fragment is used to wrap the multiple elements/children into a group, without adding an extra node to the DOM. 
    
6. What is Virtual DOM?</br>
Ans: Real DOM is the actual HTML representation on the browser and Virtual DOM is a copy of Real DOM. When you make changes in Real DOM it rerenders the whole page once, thus it affects the efficiency of the server load time. When we work with Virtual DOM and make changes on a certain node, it checks the previous DOM and runs an algorithm called "differ" which perform an inspection where changes are made and rerender certain node and represent the changes to the DOM. 

7. What is Reconciliation in React?</br>
Ans: Reconciliation is a process where React checks the state of the previous DOM, with a new Virtual DOM and only rerenders the part where the state has been changed. Previous UI is kept in memory and synced with the Real DOM by the library ReactDOM.

8. What is React Fiber?</br>
Ans: React Fiber is the implementation of the React core Reconciliation algorithm. It is a new Reconciliation Engine introduced in React 16. The primary goal is to enable React to take advantage of scheduling.

    - Pause work and come back to it later.
    - Split work into chucks and prioritize task
    - reuse previously completed task
    - abort work if no longer needed.

9. Why do we need keys in React? When do we need keys in React?</br>
Ans: "Keys" are needed to identify which items have changed (added/removed/reordered). When we have a large number of list/group of similar data, we need keys.
    
10. Can we use the index as keys in React?</br>
Ans: Yes, we can; but it is recommended to use a unique key for each item. It is not recommended to use when the order of the items is changing.
    
11. What are props in React?</br>
Ans. "Props" are properties that are passed to the React Component. They are also meant to pass data from one component to another.
    
12. What is a Config Driven UI ?</br>
Ans: In Configuration Driven UI, all website data is driven by data. The layout, styles, and properties of the UI elements are defined in a config file which can be easily modified as needed with a change to the codebase. 


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
