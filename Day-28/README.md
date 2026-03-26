An event is an action performed by the user or the browser.

Examples:
- Clicking a button
- Submitting a form
- Typing in an input field
- Page loading
- Video pause or play

JavaScript waits for events and reacts when they occur.

### Why Events Are Important:
Without events, websites remain static and do not respond to user actions.
With events, websites become interactive and dynamic.

### Event Handling Flow:
1. User performs an action
2. Browser detects the event
3. JavaScript event listener captures it
4. Callback function executes

JavaScript is event-driven.

### Common Frontend Events:
- click: Mouse click
- submit: Form submission
- input: Input field typing
- change: Dropdown or checkbox change
- keydown: Keyboard press
- load: Page fully loaded
- pause: Media pause
- mouseover and mouseout

### addEventListener(event call, function()):
- Modern and recommended method
- Allows multiple listeners on same element
- Keeps HTML and JavaScript separate
- Avoid inline event attributes like onclick