Important Concept:
JavaScript execution can block HTML rendering if not handled properly.

What is the `<script>` Tag?
The `<script>` tag is used to write or load JavaScript. The browser executes JavaScript only inside this tag.

Two Ways to Use JavaScript:
1. Internal JavaScript (inside HTML file)
2. External JavaScript (separate .js file)

Internal JavaScript:
- Used for small demos or learning
- Not suitable for large projects

External JavaScript:
- Written in separate .js file
- Linked using `<script src="file.js">`
- Reusable and industry standard

Script Placement:

Script in `<head>`:
- Runs before HTML loads
- May cause errors if accessing elements

Script in `<body>`:
- Runs after HTML loads
- Safer for DOM manipulation


## Variables In JS

- A variable is a container used to store data. The stored value can change while the program is running.
- Variables are needed to store user input, calculations, and results. Without variables, programming logic cannot work.
- JavaScript provides three keywords to declare variables:

1. var:
- Function scoped
- Can be reassigned
- Can be redeclared
- Avoid in modern JavaScript

2. let:
- Block scoped
- Can be reassigned
- Cannot be redeclared in the same scope

3. const:
- Block scoped
- Cannot be reassigned
- Cannot be redeclared