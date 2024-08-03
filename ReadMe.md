# Secret Key Matcher Web Application

## This is a single page simple web application using vanilla html, css & Java script.

# Question and Answer

## Q1: What is ES6 and what are the new features introduced in ES6?

### Answer:

ES6 is the sixth edition of the ECMAScript language, which is the standardized version of JavaScript. It is also known as ECMAScript 2015 as it was published in 2015 having major update to the previous version that is ES5 (ECMAScript 2009).

ES6 provides many new features, syntax changes, updates and improvements in this version. Here are some of the most notable ones described in bellow:

1. Let and Const: Introduced `let` and `const` keywords for variable declarations.

2. Arrow Functions: Which provide a concise syntax for functions and automatically bind the this context.

3. Classes: It provides the object oriented programming (OOP) approach and functionality in js.

4. Spread Operator: Introduced the spread operator (`...`), which allows for easier array and object manipulation.

5. Modules: It is a new syntax for modules, that provide a way to organize and import code.

6. Promises: It is a built-in support for promises, which provide a way to handle asynchronous operations.

7. Async/Await: It has async/await syntax, which provides a more readable way to write asynchronous code.

8. Map and Set: It has built-in support for maps and sets, which provide a way to work with collections of data.

These are the few of many new features and improvements introduced in ES6.

## Q2: What is Event Bubble and Event Delegation in JS?

### Answer:

Event Bubbling

Event bubbling is a JavaScript mechanism where an event triggered on a child element is propagated upwards to its parent elements, enabling them to respond to the event as well. This process continues to cascade until the event reaches the root element of the document.

Here is an Example:

```
<div id="parent">
  <button id="child">Click me!</button>
</div>

document.getElementById('parent').addEventListener('click', function() {
  console.log('Parent element clicked!');
});

document.getElementById('child').addEventListener('click', function() {
  console.log('Child element clicked!');
});
```

When we click the button, the following events are triggered:

1. The click `event` is triggered on the `button` element.
2. The event bubbles up to the `div` element (its parent) and triggers the `click` event handler on the `div` element.
3. The event continues to bubble up to the `document` element and triggers any event handlers attached to it.

Event Delegation

Event delegation is a technique that takes advantage of event bubbling to attach a single event handler to a parent element, which can then handle events triggered by its child elements. This approach is useful when you have multiple child elements that need to respond to the same event.

Here is an example:

```
<ul id="parent">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

document.getElementById('parent').addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    console.log('List item clicked!');
  }
});
```

In this example, we attach a single event handler to the `ul` element (the parent). When a `click` event is triggered on any of the `li` elements (the children), the event bubbles up to the `ul` element and triggers the event handler. The event handler then checks the `event.target` property to determine which element was actually clicked and responds accordingly.

## Q3: What is the difference between localstorage , session storage and cookies.

### Answer:

LocalStorage

    - Persistent storage: Data is stored locally on the client-side and persists even after the browser is closed.
    - No expiration date: Data remains stored until explicitly cleared by the user or programmatically removed.
    - Accessed via JavaScript: Data can be accessed and modified using JavaScript.
    - Storage limit: Typically around 5MB, but can vary depending on the browser.
    - Use cases: Ideal for storing user preferences, game progress, or other data that needs to be retained between sessions.

SessionStorage

    - Temporary storage: Data is stored locally on the client-side, but only for the duration of the session.
    - Expires when the session ends: Data is automatically cleared when the browser is closed or the session times out.
    - Accessed via JavaScript: Data can be accessed and modified using JavaScript.
    - Storage limit: Typically around 5MB, but can vary depending on the browser.
    - Use cases: Suitable for storing temporary data, such as form input or shopping cart contents, that only needs to be retained during the current session.

Cookies

    - Small, text-based data: Cookies are small, text-based files stored on the client-side.
    - Sent with every request: Cookies are automatically sent with every HTTP request to the same domain.
    - Expiration date: Cookies can be set to expire at a specific date or after a certain period of time.
    - Accessed via JavaScript and HTTP: Cookies can be accessed and modified using JavaScript, and are also sent with HTTP requests.
    - Storage limit: Typically around 4KB, but can vary depending on the browser.
    - Use cases: Often used for authentication, tracking user behavior, or storing small amounts of data that need to be sent with every request.

So we can say in summary that,

**SessionStorage** is suitable for storing temporary data that only needs to be retained during the current session.

**LocalStorage** is ideal for storing persistent data that needs to be retained between sessions.

**Cookies** are best used for storing small amounts of data that need to be sent with every HTTP request, such as authentication tokens or tracking information.

## Q4: In CSS what is the difference between display inline , display inline block and display block?

### Answer:

In CSS, the `display` property controls how elements are laid out in the document. Three common values for this property are `inline`, `inline-block`, and `block`, each with distinct characteristics.

`Display: inline` elements are part of the text flow, meaning they don't take up a full line and can't have a specified width or height. They only respond to horizontal margin and padding, and don't create line breaks before or after themselves.

In contrast, `display: inline-block` elements combine the benefits of inline and block elements, allowing them to have a width and height while still being displayed in a single line. They respond to both horizontal and vertical margin and padding, but don't create line breaks.

Finally, `display: block` elements take up the full width of their parent container, can have a specified width and height, and create line breaks before and after themselves. They also respond to both horizontal and vertical margin and padding.

In essence, display: inline is ideal for elements that should be part of the text flow, display: inline-block is suitable for elements that need more control over their dimensions while still being displayed in a single line, and display: block is best for elements that should take up the full width of their parent container and create line breaks.

## Q5: What are new features in CSS3?

### Answer:

Layout and Box Model

    - Flexbox (Flexible Box Layout)
    - Grid Layout
    - Multi-Column Layout
    - Box Sizing (box-sizing property)
    - Border Radius (rounded corners)
    - Box Shadow

Visual Effects

    - Gradients (linear and radial)
    - Transitions (smooth transitions between
    - property values)
    - Animations (keyframe-based animations)
    - Transforms (2D and 3D transformations)
    - Text Shadow

Typography

    - Font Face (custom fonts)
    - Text Overflow (ellipsis and other effects)
    - Word Wrap (word-breaking and wrapping)
    - Hyphens (automatic hyphenation)

Backgrounds and Borders

    - Multiple Backgrounds
    - Border Images
    - Rounded Corners (border-radius property)

Selectors and Properties

    - New Selectors (e.g. :nth-child, :last-child, :not)
    - New Properties (e.g. box-shadow, text-shadow, transition)
    - Values and Units (e.g. vw, vh, vmin, vmax)

Media Queries

    - Media Queries (apply different styles based on device or screen size)

These are the few of many new features and improvements introduced in CSS3.
