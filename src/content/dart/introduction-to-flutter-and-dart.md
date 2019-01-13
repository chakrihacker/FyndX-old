---
layout: post
title: Introduction to Flutter and Dart
description: Understand the main.dart file in flutter.
author: Subramanya Chakravarthy
date: 2019-01-13
category: dart
tags:
  - dart
---

First time looking at Flutter and Dart can be daunting. I will go through each and every line of main.dart when you scaffold your first Flutter application and explain what it is doing.

# Prerequisites

You will need Flutter SDK. Installation instructions are [here](https://flutter.io/docs/get-started/install)

# Setup

To create a new Flutter app, run

```bash
flutter create flutter_intro
```

<!-- prettier-ignore-start -->
App naming should be Lowercase with undescores like **my\_app\_name**
<!-- prettier-ignore-end -->

This scaffolds many files necessary for android and ios.

# Let's Start

The starting point is Located at `lib/main.dart`. Open the file

On the top you have

```dart
import 'package:flutter/material.dart';
```

Import in flutter is specified with _package_ keyword followed by _library_ or _package name_. In this case it's **flutter** and then followed by file name, here it's **material.dart**

material.dart contains android specific widgets like AppBar, FloatingActionButton, Dialog, DropDown to name a few. To explore all Material Widgets [click here](https://flutter.io/docs/development/ui/widgets/material)

There is also cupertino.dart which contains ios specific widgets

Next line is

```dart
void main() => runApp(MyApp());
```

Dart programs has an entry point called _main_. When you run flutter or dart file it first runs main function. In this case the main function is calling flutter specific function called _runApp_ which takes any **widget** as an argument and created a layout which fills the screen.

In above example it is calling MyApp Widget to create a layout.

# Widgets

In Flutter everything is a Widget. Flutter widgets takes inspiration from [React](https://reactjs.org/).

> Widget represents a visual component (or a component that interacts with the visual aspect of an application).

In Flutter we often use _StatelessWidget_ and _StatefulWidget_

# StatelessWidget

Some visual components do not depend on anything else but their own configuration information, which is provided at time of building it by its direct parent.

? Basically it means once widget only contains static data and won't change in it's lifetime

A basic StatelessWidget looks like this

```dart
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new Text("FyndX");
  }
}
```

Any widget needs to override Widget _build_ method in which you explain the UI of a widget tree, except low level widgets like **Text**, **Container**. If you don't know about override ignore it for now, I will explain later in another post. In above example, It's returning a primitive Widget _Text_ contianing FyndX.

_context_ is reference to the location of the widget in the widget tree. It can be thought of the address of the widget in a widget tree

In the main.dart file **MyApp** is returning _MaterialApp_. This widget can handle bunch of options like theming, routing, locale. The _MaterialApp_ contains three arguments _title_, _theme_ and _home_. Title takes a string which is used by the device to identify the app for the user. Basically in android recents screen you see the title. Next is theme which takes _ThemeData_ widget that contains options like **primaryColour**, **accentColour** etc whcih are like global variables defined for you and can be used in any Widget.

The next argument is **home** which is basically a entry point for your app.

In the example it takes **MyHomePage**

# StatefulWidget

Widgets that handle data which may change during it's lifetime. The data becomes dynamic

```dart
class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}
```

The **MyHomePage** is a stateful widget which means it can hold some state.

# Constructors

In Flutter you create constructors by using class name as follows

```dart
MyHomePage({Key key, this.title}) : super(key: key);
```

It takes title and key as params

The next line is

```dart
final String title;
```

You might be wondering why _final_?

If you look closer **MyHomePage** is extending StatefulWidget and this beautiful **StatefulWidget** inherits **Widget**. The **Widget** is basically immutable and it stores mutable state in seperate State object.

A rule of thumb for _StatefulWidget_ is use final for all **instance** fields.

<!-- ToDo instance variables article -->

# createState

```dart
_MyHomePageState createState() => _MyHomePageState();
```

**createState** creates a mutable state for the Widget **\_MyHomePageState**

```dart
class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              'You have pushed the button this many times:',
            ),
            Text(
              '$_counter',
              style: Theme.of(context).textTheme.display1,
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: Icon(Icons.add),
    );
  }
}
```

Any Widget which is holding state should extend _State_ Widget.

The \_MyHomePageState contains one variable _\_counter_ which holds the state and a method _\_incrementCounter_ which can increment the state of the counter.

In order to update any variable of widget **setState** method is used where you update the **\_counter** value to the **desired** value. If you update the \_counter without _setState_ flutter may not trigger the update.

<!-- prettier-ignore-start -->
In the widget to use the variable like \_counter, use $ before like *'$\_counter'*
<!-- prettier-ignore-end -->

The **FLoatingActionButton** contains the onPressed function which calls \_incementCounter function to change \_counter value

Thanks for Reading 😍
