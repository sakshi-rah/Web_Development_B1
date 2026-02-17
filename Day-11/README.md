Every HTML element is treated as a box.

This box controls:
- Size
- Spacing
- Layout

If layout breaks, most of the time it is box model confusion.

Parts of the Box Model (Inside → Outside):
- Content: Actual text or image
- Padding: Space between content and border
- Border: Line around padding
- Margin: Space outside the element

Visual order:
Margin
└─ Border
└─ Padding
└─ Content

Box-sizing controls how width and height are calculated.

Two values:
- content-box (default)
- border-box (recommended)