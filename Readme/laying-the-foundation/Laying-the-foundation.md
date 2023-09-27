1. What is JSX?
Ans- While we use the HTML and JS for making a layout for a website. It is easy and understandable, unlike traditional React because the core react code was not developers friendly to developed large scale application, the facebook developer's introduced a new syntax to write both HTML and JS in one go and they named it " JSX ". It is also Known as JAVASCRIPT XML. JSX make it easier to write HTML and add it to React.

2. Superpowers of JSX?
Ans- JSX is a HTML like syntax, it is not HTML inside JAVASCRIPT. It is a convention to merge both HTML and JS. It provides a lot of things that helps to make an application.

    - A readable Syntax
    - JSX take care of cross site scripting.
    - Allows the React to show useful error and warnings.
    - Easy to Use than tractional React Code
    - JSX help to write both HTML and JS.

3. Role of type attribute in script tag? What options can I use there?
Ans- The type attribute specifies the type of the script. It also identifies the content between the <script></script> tags. Some common values are :

    - JS MIMETYPE : text/javascript
    - Module
    - Another MIMETYPE


4. {TitleComponent} vs {<TitleComponent />} vs {<TitleComponent></TitleComponent>} in JSX ?
Ans- There are various ways to declare the component in React as in the end React is JS.

{TitleComponent} : 
    - When we use {} in JSX we can gain the magical ability to execute any JS in the {code} inside the curly braces. {TitleComponent} is treated as a variable either with value or expression or React Element with no return.

{<TitleComponent />}: 
    - It is common way to render a component inside React and call it inside another component. The component then return 

    - JSX code => ReactElement() => JS Object => HTMLElement(render)

{<TitleComponent></TitleComponent>}: 
    - It is way to render a component inside React. It is similar to this{<TitleComponent />} to call a component.

