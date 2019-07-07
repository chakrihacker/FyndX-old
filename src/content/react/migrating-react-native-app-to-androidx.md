---
layout: post
title: Migrating React Native app to AndroidX
description: Find out different ways to migrate your existing app to androidx
author: Subramanya Chakravarthy
date: 2019-07-05
category: react
tags:
  - react
---

Learn how to migrate your existing react native app to AndroidX. What is AndroidX and why you should start migrating your app to AndroidX?.

# What is AndroidX?

Android has support library which in webworld is polyfills that provide backward compatibility to API's. It has started over 8+ years ago and has grown to include device-specific UX, debugging, testing and other utilities. The adoption of the Support Library has been phenomenal, most Android apps use the Support Library today. In order to standardise these support libs google started AndroidX project to lay a solid foundation.

# Why should I consider it?

Android stopped providing updates to existing support libs and it only provide updates to AndroidX. It started pushing developers to migrate to AndroidX.

# Let's do this

In order to start migration, App gradle version should be greater than or equal to 3.4.1 In order to change gradle version go to your **android** folder and look for **build.gradle** and open it. Look for _buildscript_ --> _dependencies_ and find _classpath_ which contains gradle version and if it's less than **3.4.1** change it.

Now open **gradle.properties** file and add the following lines to the end of the file

```
android.useAndroidX=true
android.enableJetifier=true
```

We just reached final step. There are multiple ways to refactor the code.

- Automate using Android Studio
- Use this python script [MigrateToAndroidX](https://github.com/yeswanth/MigrateToAndroidX)
- Do it manually
- Or this npm module [jetifier](https://www.npmjs.com/package/jetifier)

# Using Android Studio

From the menubar select **Refactor > Migrate to AndroidX**

It will look for old imports in your app as well as in your dependencies and provides a prompt **Do Refactor**. Just click on it and it will change all the imports and now you have successfully migrated to AndroidX. but there is a problem. you cannot commit these changes and sync up with your team and whenever you reinstall _node_modules_ all these changes are gone and you have to repeat 😫
The solution for this problem is using the other ways

# Do it Manually

This is continuation of above step.

First add [patch-package](https://www.npmjs.com/package/patch-package) as your devDependency.

Before you click **Do Refactor** note down all the dependency names.

After refactor run the following command

`npx patch-package some-package`

replace _some-package_ with the dependency name and repeat for all dependencies that are refactored. It will create .patch file with package name and version name. commit these patches until a fix is ready from the library.

Now add this postinstall script to your package.json

```json
"scripts": {
   "postinstall": "patch-package"
 }
```

Now your dependency changes will be synced up with your team 🤘🤘

# Using MigrateToAndroidX python script

Clone this repo [MigrateToAndroidX](https://github.com/yeswanth/MigrateToAndroidX) and make sure you have **python3** installed in your system. Now bring up your terminal in this repo and run

`> python3 migrateToAndroidX.py --node_modules <path>`

Example

If your path is `~/projects/rnProject/node_modules/` then `> python3 migrateToAndroidX.py --node_modules ~/projects/rnProject/node_modules/`

Now add this postinstall script and add _migrateToAndroidX.py_ file to your git and commit it

```json
"scripts":{
  ...
  "postinstall":"python3 migrateToAndroidX.py --node_modules <path>"
}
```

This way all dependecy changes will be in sync with your teammates 🤞

# Using jetifier

Add jetifier as dev dependency
`> npm install --save-dev jetifier`

And run
`> npx jetify`

Finally add this postinstall script

```json
"scripts":{
  ...
  "postinstall":"jetify"
}
```

Congratulations 🎉🎉 you did it. Now your app is migrated to AndroidX

Let's make working with react native smoother by sharing this article 😉.
