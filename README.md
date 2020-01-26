# CSS in JavaScript Applications

A CSS-in-JS library makes it easy to implement, and manage styles in React js projects. Styles converges at the component level and are generated as props from state changes. It dynamically enforces "Dead Code Elimination" by scoping styles. It resolves conflicts in in CSS global  properties and values by creating unique hashes.

It automates many problems you would normally care about, unlike say in BEM where you have to stick to conventions and patterns. Having the thought of architecting for BLOCKS, ELEMENTS and MODIFIERS. It brings an end to unnecessary naming concerns. 

CSS-in-JS requires loading NPM libraries(Style Components, Glamourous, Emotions etc), and maintaining them. This might sound counter intuitive to performance and maintainability (as CSS is a native feature of the browser requiring less tooling), but the gain far outweighs the conventional ways of writing, updating, maintaing redundant CSS as an application grows.

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


# Flexbox against CSS Grid

CSS Grid Layout is a two-dimensional system, meaning it can handle both columns and rows, unlike flexbox which is largely a one-dimensional system (either in a column or a row). A core difference between CSS Grid and Flexbox is that — CSS Grid's approach is layout-first while Flexbox' approach is content-first.

When working on either element (row or column), you are most associated with the content. Flexbox, here, gives you more flexibility.

Grid is much newer than Flexbox and has a bit less browser support. That's why it makes perfect sense if people are wondering if CSS grid is here to replace Flexbox. ... Flexbox can do things Grid can't do. They can work together: a grid item can be a flexbox container.


# Moving from SASS to PostCSS

### Initial setup
For our setup you want to install gulp, gulp-postcss, gulp-sourcemaps, postcss-import, precss, Autoprefixer and cssnano
yarn add -D gulp gulp-postcss gulp-sourcemaps postcss-import gulp-postcss autoprefixer cssnano gulp-postcss.

### Imports

Although import is already in CSS, postcss-import gives you some more flexibility over your imports looking into node_modules and other directories your specify, you may want to use this plugin at the top of your stack so all the transformation after this will process all your data at once as a single file.
 
### SCSS Syntax
You can implement SCSS like syntax in two way: cherry picking plugins or using precss which combines Sass-like syntactical sugar — like variables, conditionals, and iterators — with emerging CSS features — like color functions, logical and custom properties, media query ranges, and image sets.
But if you want to go cherry picking there are some interesting ones that serve the same purpose:

Variables: postcss-simple-vars

Nested Selectors: postcss-nested

Mixins: postcss-mixins

### Autoprefixer
Autoprefixer is a plugin to parse CSS and add vendor prefixes to CSS rules using values from Can I Use.


### Minification
cssnano is a modern, modular compression tool written on top of the PostCSS ecosystem, which allows us to use a lot of powerful features in order to compact CSS appropriately.

#### config file - gulpfile.js

```
gulp.task('css', () => {
  const postcss = require('gulp-postcss');
  const sourcemaps = require('gulp-sourcemaps');
  const postcssImport = require('postcss-import');
  const precss = require('precss');
  const autoprefixer = require('autoprefixer');
  const cssnano = require('cssnano');
  return gulp
    .src('src/**/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss([
      postcssImport(),
      precss(),
      autoprefixer(),
      cssnano(),
    ]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build/'));
});

gulp.task('default', ['css']);

```


# CSS  Module versus Style Components

CSS Module relies on creating a dynamic class names for each locally defined style, making sure no visual regressions are caused by injecting new css properties, all styles were properly encapsulated.

However,  by itself doesn’t solve the core problems of CSS, it only shows you a way of localizing style definitions: a clever way of automating BEM so you don’t need to think about chosing a class name ever again.
But it does not alleviate the need for a good and predictable style architecture that is easy to extend reuse and control with the least amount of effort.

Styled-components are pure visual primitives that act as a wrapping component; they can be mapped to actual html tags and what they do is wrap the children components with the styled-component.

Styled-components provides a very simple pattern to reuse and fully separate UI from Functional and Stateful components. Creating an api that has access to native tags either in the browser as HTML or Natively using React Native.

https://medium.com/@perezpriego7/css-evolution-from-css-sass-bem-css-modules-to-styled-components-d4c1da3a659b

https://hashnode.com/post/css-modules-vs-styled-components-ciz2g9dt7000h7c535j35rbfu

https://github.com/styled-components/styled-components

## Resources

https://github.com/kukuu/react-native-ChatApp 

https://github.com/kukuu/TDD-setup-Node-ES6-Gulp-Mocha 

https://github.com/kukuu/setting-up-react-typescript-sass-webpack-babel

https://github.com/airbnb/javascript

https://www.freecodecamp.org/news/learn-css-flexbox-in-5-minutes-b941f0affc34/ 

https://medium.com/dailyjs/what-is-actually-css-in-js-f2f529a2757 

https://www.youtube.com/watch?v=xlGTLMJnF_s


