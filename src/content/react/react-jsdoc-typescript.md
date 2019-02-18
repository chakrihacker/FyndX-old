---
layout: post
title: Add Type Safety to your react applications using JsDoc
description: Migrating Large codebases to typescript is a hactic task. Using Vs Code you can get all the typescript features using jsdoc
author: Subramanya Chakravarthy
date: 2019-02-08
category: react
tags:
  - react
---

This tutorial requires node and vs code installed. Yarn is optional

Let's create a react app using create react app

`npx create-react-app react-jsdoc-typescript`

In order to acheive type safety for our react codebase we will use [Vs Code](https://code.visualstudio.com/). Open react-jsdoc-typescript in Vs Code.

In order to kick in TypeChecking for vs code let's create a file at the root with the name `jsconfig.json`

And add the following content

<p class="file-desc"><span>jsconfig.json</span></p>

```json{7}
{
  "exclude": ["node_modules", "**/node_modules/*"], // God Please exclude node_modules
  // options to explain how to compile js files
  "compilerOptions": {
    "allowSyntheticDefaultImports": true, // don't mark js files that does not contain export default as error
    "target": "es2015", // which library to use
    "checkJs": true, // report errors in js files
    "jsx": "react", // if you are using react
    "module": "commonjs"
  }
}
```

Did you see the highlighted line `"checkJs": true` that says vs code to check all JavaScript files in the project folder.

If you want to check whether it's working or not comment out `"jsx": react` and open any file with react. you will see error saying cannot use jsx unless _jsx flag_ is provided.
