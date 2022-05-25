# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db).

## Table of contents

- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#Highlight)
- [Author: Rendrol](#author)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- JavaScript
- JQuery

### Highlight

```html
<h1>Some HTML code I'm proud of</h1>
```

Using CSS Grid to make responsive style.
Using Aspect Ratio as Media Query breakpoint for responsive design.

```css
.grid-container {
  display: grid;
  grid-template-columns: 27% auto 27%;
}
@media (max-aspect-ratio: 1/1) {
  .grid-container {
    display: initial;
  }
}
```

Using JQuery .get() method to load data from API.
Using JSON.parse() method to parse data into a JavaScript Object.

```js
$.get("https://api.adviceslip.com/advice", function (data) {
  const advice = JSON.parse(data).slip.advice;
  const adviceId = JSON.parse(data).slip.id;
});
```

## Author

- Github - [Rendrol](https://github.com/Rendrol)
- Frontend Mentor - [@Rendrol](https://www.frontendmentor.io/profile/Rendrol)
