
1. When and why do we need lazy()?
Ans: When the application is too large and we want to avoid bundling all the files into single file, as that could increase the initial load time of the application. Hence that is why we use lazy() or code splitting to reduce the file into chunks and allow it to load on demand.

2. What is suspense?
Ans: Suspense is a component from "react", that allow you to handle asynchronous operation like code-splitting for lazy load component or data fetching.

3. Why we got this error : A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition? How does suspense fix this error?
Ans: This error is due to when we load a component on demand and while the code for lazy component is still loading, attempt to render is suspended. When it don't find the return component it halt the code execution and throw above error. so, use <Suspense> to display a loading indicator while it’s loading.

4. Advantages and disadvantages of using this code splitting pattern?
Ans: There are various cons and pros of using code splitting pattern.

Advantage:

    - Improve performance of the APP.
    - Improve the impact on memory.
    - Improves the downloaded Kilobytes (or Megabytes) size.

Dis-advantage:

    - Old browser does't support code splitting.
    - Increase complexity in testing and development processes.
    - More network request and additional code and dependencies that can increase bundle size.

5. When do we and why do we need suspense?
Ans: When we want to fetch some data from external sources, the data fetching process can take time and instead of showing a blank screen to user, use Suspense to show user a placeholder or Shimmer for good user experience. 