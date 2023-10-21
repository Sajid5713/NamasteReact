
1. What is a Microservice?</br>
Ans: Microservice is a small independent processes that combined together to form a complex application. These are small building blocks, efficient in doing the single task given like UI service, DB , BE etc.

2. What is Monolith architecture?</br>
Ans: It is a traditional model of a software program, that is built as unified unit that is self-contained and independent from other applications. In monolith architecture everyone work on a single repository.

3. What is the difference between Monolith and Microservice?</br>
Ans: Monolith is traditional model of software, that is built as a unified unit and Microservices are small independent process merge together to form a large applications.

4. Why do we need a useEffect Hook?</br>
Ans: The useEffect helps us to add side effects in functional component, after the DOM is updated. It takes two arguments: 
    - function
    - optional array

5. What is Optional Chaining?</br>
Ans: Optional Chaining is a method for calling properties, methods and subscripts that might be null.

6. What is Shimmer UI?</br>
Ans: It is method to show a mockup UI for the user, until the actual data render.

7. What is the difference between JS expression and JS statement?</br>
Ans: Expression is something that return a value and statement does not.

8. What is Conditional Rendering, explain with a code example?</br>
Ans: A render that happens based on condition is called conditional rendering.
    <code>
    function Result(props) {
    const result = props.isGoal;
    if (result) {
        return "the condition is true";
    }
    return "the condition is false";
    }
    
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Result isGoal={true} />);
    </code>

9. What is CORS?</br>
Ans: Cross-origin resource sharing (CORS) is a mechanism for integrating applications.

10. What is async and await?</br>
Ans: The terms are used to complete the task without blocking the execution of the program. 
    </br>
    Async Function (async): An async function is a function that is defined with the async keyword. This keyword is used to indicate that the function will perform asynchronous operations and will return a promise. An async function can contain one or more await expressions.
    </br>
    Await Expression (await): The await keyword is used inside an async function to pause the execution of that function until the asynchronous operation it is waiting for is complete. It is typically used with promises to wait for them to resolve. 

11. What is the use of `const json = await data.json();` in getRestaurants()?</br>
Ans: The code const json = await data.json() fetches JSON data from an asynchronous operation, an API request. The await keyword pauses execution until data retrieval is complete, storing the result in json for further use.