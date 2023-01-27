import React, { Component } from 'react';
import { View, Text } from 'react-native';

class CategoryAll extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Category 1 Screen</Text>
      </View>
    );
  }
}

class Category2Screen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Category 2 Screen</Text>
      </View>
    );
  }
}

class Category3Screen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Category 3 Screen</Text>
      </View>
    );
  }
}

class Category4Screen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Category 3 Screen</Text>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export { CategoryAll, Category2Screen, Category3Screen, Category4Screen };
