import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import { connect } from 'react-redux';
import { updateAuthor } from './redux/modules/author';

class App extends Component {
  componentWillMount() {
    this.props.dispatch(updateAuthor());
  }
  
  render() {
    return (
      <View>
        <Text>hello</Text>
      </View>
    );
  }
}

function mapStateToProps({author},props) {
  return {
    author,
    ...props
  }
}
export default connect(mapStateToProps)(App);
