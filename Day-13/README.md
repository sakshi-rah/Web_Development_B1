Positioning decides where an element appears on the page.

Used for:
- Headers
- Sidebars
- Popups and modals
- Sticky navigation

If layout looks floating or overlapping, positioning is involved.

## Position Types Covered:
- static: Default position
- relative: Moves relative to itself
- absolute: Moves relative to parent
- fixed: Fixed to viewport
- sticky: Hybrid of relative and fixed

## position: static (Default)
- Default position of all elements
- Cannot use top, left, right, bottom

## position: relative
- Moves element relative to its original/Current position
- Space remains in original place

## position: absolute
- Positioned relative to the nearest positioned parent
(Parent must have relative, absolute, or fixed)

- Removed from normal flow
## position: fixed
- Fixed relative to browser window
- Stays in same place while scrolling

## position: sticky
- Works like relative until scrolling reaches a limit
- Then behaves like fixed