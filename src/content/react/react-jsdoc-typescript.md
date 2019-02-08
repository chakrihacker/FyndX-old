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

```json
{
  "exclude": ["node_modules", "**/node_modules/*"],
  "compilerOptions": {
    "allowSyntheticDefaultImports": true,
    "target": "es2015",
    "checkJs": true,
    "jsx": "react",
    "module": "commonjs"
  }
}
```
