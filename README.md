# CSS in JavaScript Applications

A CSS-in-JS library makes it easy to implement, and manage styles in React js projects. Styles converges at the component level and are generated as props from state changes. It dynamically enforces "Dead Code Elimination" by scoping styles. It resolves conflictsin in CSS global  properties and values by creating unique hashes.

It automates many problems you would normally care about, unlike say in BEM where you have to stick to conventions and patterns.Having the thought of architecting for BLOCKS, ELEMENTS and MODIFIERS . It brings an end to unnecessary naming concerns. 

CSS-in-JS requires loading NPM libraries, and maintaining them. This might sound counter intuitive to performance and maintainability (as CSS is a native feature of the browser requiring less tooling), but the gain far outweighs the conventional ways of writing, updating, maintaing redundant CSS as an application grows (read further below).



## Benefits

1. CSS-in-JS promotes explicit, traceable and granular dependencies.

2. Easy to use in Design Systems (like Storybook) and Component Libraries. Applied in the build of the new digital platform for the GCHQ and NCSC - https://www.ncsc.gov.uk/

3. Encourages the coupling of CSS and HTML.

4. Enforces State-based styling

One of the very powerful patterns CSS-in-JS enables is state-based styling. Technically it is usually implemented as a JavaScript function which receives a state object and returns CSS properties. As a result, a CSS rule is generated that corresponds to the state of an element. Compared to a more traditional way, where we build a class attribute containing multiple class names, this has some advantages

5. Gives developers API to describe state-based styles in a better way than using a bunch of conditional class names.

6. Makes dependencies explicit because variables always reference the value in code visually. They are traceable because we can statically analyze where the value comes from. 

7. They are granular because we can reuse CSS values, properties or entire style blocks as we see fit.


## Critical CSS

Critical CSS is a feature where CSS-in-JS is done with an SSR solution. Since the CSS are coupled with the components or elements, once they are removed from an application, the styles are also directly removed. Removes redundancies and ehnances performance.

The link tag associated with embeding CSS in applications is render plaocking. When the Browser encounters it, it blocks until all the styles in the document is downloaded. Critical CSS ensures that the application has a minimum amount of styles that can render the page, and then async load rest of the CSS.

The provision of automated tools to provide a Critical CSS will help performance and maintainability.


## Flexbox against CSS Grid

CSS Grid Layout is a two-dimensional system, meaning it can handle both columns and rows, unlike flexbox which is largely a one-dimensional system (either in a column or a row). A core difference between CSS Grid and Flexbox is that — CSS Grid's approach is layout-first while Flexbox' approach is content-first.

When working on either element (row or column), you are most associated with the content. Flexbox, here, gives you more flexibility.

Grid is much newer than Flexbox and has a bit less browser support. That's why it makes perfect sense if people are wondering if CSS grid is here to replace Flexbox. ... Flexbox can do things Grid can't do. They can work together: a grid item can be a flexbox container.


## Resources

https://github.com/airbnb/javascript

https://www.freecodecamp.org/news/learn-css-flexbox-in-5-minutes-b941f0affc34/ 

https://medium.com/dailyjs/what-is-actually-css-in-js-f2f529a2757 

https://www.youtube.com/watch?v=xlGTLMJnF_s


