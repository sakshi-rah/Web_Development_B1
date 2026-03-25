### Documents Object Model:
DOM stands for Document Object Model. It is a tree-like representation of HTML created by the browser.

JavaScript does not directly read HTML. It interacts with the DOM.
The browser converts HTML into a DOM tree so JavaScript can:
- Read elements
- Modify elements
- Create or delete elements

### Why DOM is Important:
- Change text dynamically
- Change styles dynamically
- React to user input
- Update page without reloading

### DOM Flow:
1. Browser loads HTML
2. Browser creates DOM tree
3. JavaScript accesses DOM
4. JavaScript manipulates DOM
5. Browser updates UI

### Common DOM Selection Methods:
- getElementById: Select element by id
- getElementsByClassName: Select by class
- getElementsByTagName: Select by tag
- querySelector: Select first matching CSS selector
- querySelectorAll: Select all matching elements

Modern development prefers querySelector and querySelectorAll because they support full CSS selectors.

### innerHTML: Changes HTML content inside an element.
The `innerHTML` property in JavaScript is a fundamental DOM (Document Object Model) tool used to get or set the HTML content contained within a specified HTML element.

### innerText: Changes text only.
`innerText` is a JavaScript property that retrieves or sets the visible text content of an HTML element.

### style: Changes CSS styles using JavaScript.

