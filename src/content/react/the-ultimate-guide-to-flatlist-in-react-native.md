---
layout: post
title: The Ultimate Guide to FlatList in React Native
description: How to use FlatList in React Native.
# image: someImagePath
author: Subramanya Chakravarthy
date: 2018-10-16
category: react
draft: false
tags:
  - react
---

If you have a list of data like Facebook feed or YouTube like infinite list of videos, the most performant way to render in react-native is only by using FlatList.

## Basic Usage

A basic usage of FlatList requires three props. One is data which takes an array of things like objects which is needed to render it, Second is renderItem which is a function that accepts individual item from data Array and render a component for it. And the last one is _keyExtractor_ which is unique and is useful for performant rendering

Here's a Basic Usage of FlatList from docs

<!-- prettier-ignore-start -->
```jsx
<FlatList
  data={[{key: 'a'}, {key: 'b'}]}
  renderItem={({item}) => <Text>{item.key}</Text>}
/>
```
<!-- prettier-ignore-end -->

In a real world you get data dynamically, So Let's get some dummy data from [Random User API](https://randomuser.me)

```jsx
class FlatListDemo extends Component {
  state = {
    loading: false,
    data: [],
    page: 1,
    seed: 1,
    error: false,
  };

  componentDidMount() {
    this.setState({ loading: true }, () => this.makeRemoteRequest());
  }

  makeRemoteRequest = async () => {
    const { page, seed } = this.state;
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      this.setState(
        {
          data: page === 1 ? data.results : [...this.state.data, ...data.results],
          error: data.error || null,
          loading: false,
          refreshing: false,
        },
        // () => this.searchFilterFunction("")
      );
    } catch (error) {
      this.setState({ error, loading: false });
    }
  };

  _renderItem = ({ item }) => (
    <View
      style={{
        flexDirection: 'row',
        flex: 1,
      }}
    >
      <Image
        style={{ width: 40, height: 40, borderRadius: 20, margin: 5 }}
        source={{ uri: item.picture.thumbnail }}
        resizeMethod={'resize'}
      />
      <View style={{ justifyContent: 'center', marginLeft: 5 }}>
        <Text>{`${item.name.first} ${item.name.last}`}</Text>
        <Text>{item.email}</Text>
      </View>
    </View>
  );

  _keyExtractor = (item, index) => item.email;

  render() {
    return (
      <FlatList
        data={this.state.data}
        renderItem={this._renderItem}
        keyExtractor={this._keyExtractor}
      />
    );
  }
}
```

Before receiving content from the api, initially we don't have any data, For those scenarios show a Loading indicator, to do that _ListEmptyComponent_ can be used

```jsx
ListEmptyComponent={<ActivityIndicator animating size={"large"} />}
```

There are no separators between each contact, so let's add them by using _ItemSeparatorComponent_.

```jsx
ItemSeparatorComponent={
  <View
    style={{
      height: 1,
      width: "86%",
      backgroundColor: "#CED0CE",
      marginLeft: "14%"
    }}
  />
}
```

Let's add a search box, so we can find contacts, to accomplish this we will use ListHeaderComponent

`ListHeaderComponent={this.renderHeader}`

Before we add renderHeader method add the following to **state**

```jsx
filteredData: [],
error: null,
refreshing: false
```

And for tracking search input value add `this.inputSearch = ""` to constructor outside of state and undo the searchFilterFunction comment in **makeRemoteRequest** function and change data prop in FlatList to `this.state.filteredData`

And here's the renderHeader function, which contains _TextInput_ where it has a searchFilterFunction which returns list based on input

```jsx
renderHeader = () => {
  return (
    <View style={{ alignItems: 'center', padding: 10, backgroundColor: '#fff' }}>
      <TextInput
        style={{
          flex: 1,
          width: width / 1.1,
          borderWidth: 1,
          borderRadius: 15,
        }}
        underlineColorAndroid={'transparent'}
        placeholder={'Search'}
        onChangeText={text => this.searchFilterFunction(text)}
        value={this.inputSearch}
      />
      {this.inputSearch.length > 0 && <Text>{this.state.filteredData.length} items found</Text>}
    </View>
  );
};
```

And here's the searchFilterFunction where it combines first and last name and using filter function from JavaScript to return sorted data

```jsx
searchFilterFunction = text => {
  this.inputSearch = text;
  const newData = this.state.data.filter(item => {
    const itemData = `${item.name.first.toUpperCase()} ${item.name.last.toUpperCase()}`;
    const textData = text.toUpperCase();
    return itemData.indexOf(textData) > -1;
  });
  this.setState({ filteredData: newData });
};
```

Now the search is working with the available data, let's request for more data when user scrolls to the end. Let's add a prop `onEndReachedThreshold={0.9}` which takes value from 0 to 1. I have give 0.9 which means `onEndReached={this.handleonEndReached}` prop is called when list is scrolled to 90%. When list reaches to 90% let's make a request to get more data.

```jsx
handleOnEndReached = info => {
  if (info.distanceFromEnd >= -10) {
    this.inputSearch.length === 0 &&
      !this.state.loading &&
      this.setState(
        (state, props) => {
          return { loading: true, page: state.page + 1 };
        },
        () => this.makeRemoteRequest(),
      );
  }
};
```

I have added few checks before making new network request

- check distance from end
- check search input is 0 or not
- check did a request is in progress via state.loading

Let's add a scrolling indicator when new request is made, it can be done by adding ListFooterComponent prop to FlatList

```jsx
ListFooterComponent={this.renderFooter}

renderFooter = () => {
  if (this.state.loading && this.state.data.length !== 0) {
    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <ActivityIndicator animating size={"large"} />
      </View>
    );
  }
  return null;
};
```

Have you ever used pull down to refresh or update data in some popular apps like facebook, you can add same functionality by using two props `refreshing` which takes state and shows loading indicator and `onRefresh` which will be called when you pull down.

```jsx
// FlatList props
refreshing={this.state.refreshing}
onRefresh={this.handleRefresh}

//handleRefresh function
handleRefresh = () => {
  this.setState({ refreshing: true, seed: Math.random(), page: 1 }, () =>
    this.makeRemoteRequest()
  );
};
```

Now you can use pull to refresh data and new data will be loaded when scrolled to end but there would be lag while scrolling. In order to fix that let's control initial number of items to render and maximum render per batch

```jsx
initialNumToRender={8}
maxToRenderPerBatch={2}
```

Here's the [Code](https://snack.expo.io/@chakrihacker/flatlist-demo)
