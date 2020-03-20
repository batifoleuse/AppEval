/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {} from 'react-native';

import {
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  View,
  FlatList,
  TouchableOpacity,
  Text,
} from 'react-native';
import styles from '../../styles';

export default class DetailContactScreen extends Component {
  state = {
    detailContact: {},
  };
  navigation = null;
  constructor(props) {
    super(props);
    this.navigation = this.props.navigation;
    this.state.detailContact = this.props.route.params.evalApply || {};
  }
  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{flex: 1}}>
        <SafeAreaView style={{flex: 1}}>
          <View>
            <FlatList
              data={this.state.detailContact}
              renderItem={({item}) => (
                <View style={{justifyContent: 'center'}}>
                  <Text>
                    <Text style={{flex: 1, fontWeight: 'bold'}}>
                      {item.lastName}
                    </Text>
                    <Text style={{flex: 1}}>{item.firstName}</Text>
                  </Text>
                </View>
              )}
            />
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
}
