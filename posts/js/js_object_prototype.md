---

title: "Javascript Object Prototype"
description: "Method to sort array"
date: "2022-04-12"

---

```javascript
const obj1 = {
  funcA : {
    funcB: () => console.log(1)
  }
}

const func1 = obj.funcA.funcB
// func1 can't inherit prototype
const func2 = () => obj.funcA.funcB
// func2 can
```
