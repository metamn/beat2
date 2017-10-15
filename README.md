# Beat

## Current status

- markdown cannot display images as vue components
- markdown cannot display manually images with scrset <img srcset=""
- a solution is to forget separate .md files (with vue-markdown-loader) and add md inside the component (with vue-markdown)

- both plugins are built on markdown-it which does not render classnames to html tag names like <h2
class="h2">...</h2>
- therefore we can't style mardown content with CSS modules since 'h2' is not allowed there only '.h2'
- the current error message describes this whole mess above ...
