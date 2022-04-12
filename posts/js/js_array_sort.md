---

title: "Javascript Array sort"
description: "Method to sort array"
date: "2022-04-01"

---

```javascript
// sort by date desc
Array.sort(
  (date1, date2) => new Date(date2) - new Date(date1)
);
```