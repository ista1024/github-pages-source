---

title: "Second Post"
description: "And I even followed through with a second post!"
date: 8 January 2020

---

Occaecat Lorem mollit cupidatat elit incididunt non consectetur eiusmod qui adipisicing duis sunt irure minim.

## Lorem Ipsum

Tempor sunt deserunt qui quis commodo voluptate laboris est ut qui in. Nostrud ut laborum ea mollit incididunt ea culpa nisi sint excepteur do. Eiusmod aliqua in adipisicing cupidatat excepteur.

## Hipster Ipsum

I'm baby enamel pin swag gastropub bitters migas lomo, dreamcatcher chartreuse vegan normcore. Trust fund chicharrones artisan live-edge portland swag jianbing knausgaard put a bird on it brunch pitchfork bushwick kinfolk. Unicorn bicycle rights waistcoat messenger bag hexagon glossier farm-to-table kinfolk poutine occupy vexillologist gochujang skateboard activated charcoal. Street art air plant tbh chicharrones, try-hard listicle bushwick chia glossier.

> Street art air plant tbh

```javascript
const message = "Hello";
console.log(message);


import React from "react";
import uniquePropHOC from "./lib/unique-prop-hoc";

// this comment is here to demonstrate an extremely long line length, well beyond what you should probably allow in your own code, though sometimes you'll be highlighting code you can't refactor, which is unfortunate but should be handled gracefully

class Expire extends React.Component {
    constructor(props) {
        super(props);
        this.state = { component: props.children }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                component: null
            });
        }, this.props.time || this.props.seconds * 1000);
    }
    render() {
        return this.state.component;
    }
}

export default uniquePropHOC(["time", "seconds"])(Expire);
```