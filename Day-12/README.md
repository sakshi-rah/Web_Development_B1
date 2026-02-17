Display and visibility control how elements behave on the page.

They are used for:
- Layout
- Hiding and showing content
- Handling extra content

Most UI bugs come from misunderstanding these properties.

Display property controls how an element appears and occupies space.

**Common display values:**
- block
- inline
- inline-block
- none 

#### Visibility property controls visibility, not layout. The element may still occupy space.
**Visibility values:**
- hidden
- Visible

#### Overflow property controls what happens when content exceeds container size.
**Overflow values:**
- hidden
- scroll
- auto

## display: inline
- Elements appear in the same line
- Only take as much width as needed
- You cannot set width and height

### Common HTML Tags (Inline Elements):
- (span, a, b, i, strong, label)

## display: block
- Takes full width
- Always starts on a new line
- You can set width and height

### Common HTML Tags (Block Elements):
- (div, p, h1 to h6, section, article, form)

## display: inline-block
- Appears in the same line (like inline)
- But you can set width and height (like block)

### Commonly Used With:
- (div, span, button, img)