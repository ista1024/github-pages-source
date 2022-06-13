---

title: "Eslint disable all files"
description: "Eslint config"
date: "2022-05-02"

---

```json
// .eslintrc.json
{
    "overrides": [
        {
            "files": [ "src/**/*.js", "src/**/*.jsx" ]
        }
    ]
}
```