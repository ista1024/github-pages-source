---

title: "HTML <datalist>"
description: "Method to sort array"
date: "2022-04-14"

---

Easy way to develop autocomplete input

[MDN link](https://developer.mozilla.org/ko/docs/Web/HTML/Element/datalist)

```html
<label for="ice-cream-choice">Choose a flavor:</label>
<input list="ice-cream-flavors" id="ice-cream-choice" name="ice-cream-choice" />

<datalist id="ice-cream-flavors">
    <option value="Chocolate">
    <option value="Coconut">
    <option value="Mint">
    <option value="Strawberry">
    <option value="Vanilla">
</datalist>
```
