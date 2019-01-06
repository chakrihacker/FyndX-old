---
layout: post
title: Destructuring in JavaScript
description: Basic examples on how to use destructuring in javascript.
author: Subramanya Chakravarthy
date: 2018-12-18
category: javascript
tags:
  - javascript
---

Destructuring is introduced as one of the ES6 features. It plays an important role in everyday development as we all deal with objects and arrays. It improves readability of code

Let's say we have a object containing user details

```js
let me = {
  name: 'chakravarthy',
  age: 23,
  social: ['twitter', 'github', 'medium'],
  props: {
    height: 180,
    weight: 63,
  },
  comments: [
    {
      'Dan Abramov': 'you are awesome',
      id: 1,
    },
    {
      'Ben Ilegbodu': 'Nailed it',
      id: 2,
    },
  ],
};
```

In ES5 to get name and age you would do something like this

```js
let myName = me.name;
let age = me.age;
```

We can minimize the code using destructuring

```js
let { name: myName, age, ...rest } = me;
```

So it's a single line of code and you are telling JavaScript to get **name** and age from _me_ object and alias the variable **name** as **myName** and the rest variable will carry the object without name and age. Cool huh!

Did you know that you can assign default values. Let's say a new property _isEmailVerified_ is introduced and you may or may not get it from the api you are calling so you can do something like this

```js
let { isEmailVerified = false } = me;
```

so if there is no isEmailVerified key in object it just assigns false

Dynamic key destructuring also can be done

```js
let dynamic_key = 'social';
let { [dynamic_key]: someVar } = me;
console.log(someVar);
// <- ['twitter', 'github', 'medium']
```

Accessing nested properties

```js
let {
  props: { height },
} = me;
console.log(height);
// <- 180
```
