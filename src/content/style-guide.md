---
layout: page
title: Fyndx.io Style Guide
author: Subramanya Chakravarthy
date: 2019-01-04
tags: []
---

Here’s a style guide for posts on Fyndx.io. The first paragraph of each post is
a lead-in paragraph that’s styled automatically with the left yellow line. Posts are
written in markdown

<p class="info-box">
😎 You can get in touch with us here if you're interesting in collaborating content.
</p>

<p class="info-box success">
✂️ Find editor snippets for Atom, VS Code or Sublime Text in this repo.
</p>

The articles are short and sweet. Longer explanations are broken-down into easier to digest bullets points whenever possible.

## Contents

[Markdown Formatting](#markdown-formatting)
[Titles and Meta](#titles-and-meta)
[Headings](#headings)
[Colors](#colors)
[Styling Text](#styling-text)
[Fyndx Vocabulary](#fyndx-vocabulary)
[Bullet Points](#bullet-points)
[Code Snippets](#code-snippets)
[Code Annotations](#code-annotations)
[Separators](#separators)
[Info Boxes](#info-boxes)
[Links](#links)
[File Descriptions](#file-descriptions)
[Images and Screenshots](#images-and-screenshots)
[Collapsible](#collapsible)
[Parting Thoughts](#parting-thoughts)
[Some Fun Emojis](#some-fun-emojis)

## Markdown Formatting

Fyndx.io is a Gatsby-powered website, so every post starts with some Markdown. Here’s
an example of the typical markdown for a post:

```bash
---
layout: page
title:  "Using JavaScript to Make Crispy Bacon"
categories:
    - js
tags:
    - bacon
header: no
breadcrumb: true
meta_description: "Using the latest JavaScript techniques to properly cook your bacon."
author: john_doe
---
```

File names should start with

```
js/2017-02-09-crispy-bacon.md
```

## Titles and Meta

Keep article titles short, but do include what framework or language it covers. For example: _How to Cook Bacon With Vue.js_.

Articles should also come with a meta description that’s between 80 and 155 characters. The meta description should give a brief overview of what the article is about.

## Headings

Use h2 and h3 headings. Capitalize h2 titles, but don’t capitalize h3 titles:

```
## A Great Title

Some text...

### And a great subtitle

Some more text...
```

## Colors

_WIP_

## Styling Text

Use _em_ to highlight text, **strong** to highlight again, and `code` for variable and function names. For example, in markdown:

```
*let* is the new *var*. **let** is block-scoped.

An example where we define a `getBacon` function...
```

## Fyndx Vocabulary

Here are some ideas for Alligator-related words, as options to use for variable names instead of the traditional foo, bar & baz: **nest, eggs, bite, gator, grip, belly, jaw, reptilian, meat, tail, crocodilian, bayou, gator, cayman**.

Foods and animal names are also good options for words to use.

## Bullet Points

Breakdown complex ideas or list of thoughts into bullets points. For example:

```
* *Point 1*: Text for point 1.
* *Point 2*: Text for point 2.
* *Point 3*: Text for point 3.
```

Becomes this:

- _Point 1_: Text for point 1.
- _Point 2_: Text for point 2.
- _Point 3_: Text for point 3.

## Code Snippets

Here are a few rules for code snippets:

- Use 2 spaces for code indentation.
- Don’t forget your semi-colons in JavaScript. You can omit semi-colons in TypeScript if you prefer.
- Use single quotes in JavaScript.
- Use newer ES6/ES7 syntax whenever appropriate. For example, use _let_ and _const_ instead of _var_.

Markup your code snippets like this:

```javascript
<pre><code class="javascript">let alligator = true;

if (alligator) {
  console.log('It bites!');
}

// ...
</code></pre>
```

For markup that includes html markup, you can use the ``` syntax and the html entities will be converted automatically:

````xml

```html
<input type="text" />
<button type="submit"></button>
```

````

Breakdown long lines of code or markup:

<!-- prettier-ignore-start -->

```html
<!--  Avoid this -->
<button mat-icon-button [mat-menu-trigger-for]="menu"><mat-icon>more_vert</mat-icon></button>

<!-- Do this instead -->
<button mat-icon-button [mat-menu-trigger-for]="menu">
  <mat-icon>more_vert</mat-icon>
</button>

<!-- Or even this -->
<button mat-icon-button 
    [mat-menu-trigger-for]="menu">
  <mat-icon>more_vert</mat-icon>
</button>
```
<!-- prettier-ignore-end -->

### Command line

For terminal commands, let’s prepend each command with \$:

````
```bash
$ yard add react react-dom
```
````

```bash
$ yard add react react-dom
```

## Code Annotations

You can highlight specific sections of code by wrapping it in a _span_ with the _code-annotation_ class:

```
let alligator = true;

if (alligator) {
  <span class="code-annotation">console.log('It bites!');</span>
}
```

And here’s the result:

```javascript{4}
let alligator = true;

if (alligator) {
  console.log('It bites!');
}
```

---

To highlight whole blocks of code, use the block-annotation class:

## Separators

Use horizontal lines for separations:

```
---
```

It’ll look like this:

---

## Info Boxes

You can add info boxes like this:

```html
<p class="info-box">I am an info box for a special note about the subject on hand.</p>
```

Note that markdown doesn’t get evaluated inside these info boxes. So instead of something like _\*something\*_, you’ll want to use markup like **\<em>something\</em>**.

Here’s now an info box looks like:

<p class="info-box">
  I am an info box for a special note about the subject on hand.
</p>

---

You can also use warning boxes:

```html
<p class="info-box warning">You're entering the danger zone!</p>
```

<p class="info-box warning">
  You're entering the danger zone!
</p>

…and success boxes:

```html
<p class="info-box success">Your app is now ready for production!</p>
```

<p class="info-box success">
  Your app is now ready for production!
</p>

## File Descriptions

Some code snippets are easier to understand when given a file name, and this can be included by adding the following markup right before a code snippet:

```html
<p class="file-desc"><span>bacon.js</span></p>
```

Here’s how it looks like:

<p class="file-desc">
  <span>bacon.js</span>
</p>

```javascript
export default function getBacon() {
  console.log('Bacon for you! 🐖');
}
```

## Images and Screenshots

Image are placed inside a paragraph with centered text like this:

```html
<p class="text-center">
  <img
    src="/images/js/cooking-bacon.png"
    width="600"
    height="400"
    class="slight-shadow"
    alt="Crispy bacon with JavaScript"
  />
</p>
```

If the image appears later in the post, you can use the data-original attribute instead of src and the image will be lazy-loaded:

```html
<p class="text-center">
  <img
    data-original="/images/js/cooking-bacon.png"
    width="600"
    height="400"
    class="slight-shadow"
    alt="Crispy bacon with JavaScript"
  />
</p>
```

To make for an easier workflow, only one image format is provided, so the image should be twice the size so that it looks sharp on retina displays. An image that displays at 600px wide should therefore be saved at 1200px wide. Jpegs can be saved with a quality of around 50%-60% to make the images as small as possible.

SVGs are welcome, for graphs and charts.

## Collapsible

To include a collapsible section, simply add this:

```html
<details>
  <summary>Fancyy</summary>

  _Some content inside a fancy collapsible!_
</details>
```

<details>
<summary>Fancyy</summary>

_Some content inside a fancy collapsible!_

</details>

## Parting Thoughts

If you have one last funny or insightful thought for the post, it can be included like this:

```html
<p>👉 Now all that's left is to make sure the bacon is crispy enough!</p>
```

👉 Now all that's left is to make sure the bacon is crispy enough!

## Some Fun Emojis

🐊 🦄 🤓 🎩 👉 🌵 ☠ 💣 🐼 💪 🐷 ✨ 🚀 🌈 🐸 🐙 😷 😍 🤖 👽 🐥 🐢 🐟 🐿 🐪 🐻 🚣‍
