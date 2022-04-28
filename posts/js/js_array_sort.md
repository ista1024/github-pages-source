---

title: "Javascript Array sort"
description: "Method to sort array"
date: "2022-04-28"

---

```javascript
// sort by date desc
Array.sort(
  (date1, date2) => new Date(date2) - new Date(date1)
);
```

## Coding test

input random integer array
then, create new array with each elements.
Next, sort Array order by aesc
Finally, return index array in input k(starts from 1)

e.g. 
```
input array: [2, 1]
k: 3
created array: [[2, 2], [2, 1], [1, 2], [1, 1]]
sorted array: [[1, 1], [1, 2], [2, 1], [2, 2]]
return [2, 1]
```

