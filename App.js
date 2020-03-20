/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SectionList,
  StyleSheet,
  FlatList,
  Keyboard,
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  TouchableWithoutFeedback,
} from 'react-native';

import {evalApply} from './app';
import styles from './styles';
import DetailContactScreen from './src/component/detailContactScreen';

export default class AppCall extends Component {
  state = {
    listContact: [],
  };
  constructor(props) {
    super(props);
    this.state.listContact = evalApply;
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{flex: 1}}>
        <SafeAreaView style={{flex: 1}}>
          <View>
            <FlatList
              data={this.state.listContact}
              renderItem={({item}) => (
                <TouchableOpacity
                  key={'evalApply_' + item.id}
                  style={''}
                  onPress={() => {
                    this.props.navigation.push('DetailContact', {
                      evalApp: item,
                    });
                  }}>
                  <View style={styles.container}>
                    <Text style={{flex: 1, fontWeight: 'bold'}}>
                      {item.lastName}
                    </Text>
                    <Text style={{flex: 1}}>{item.firstName}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
}

function DetailContact({navigation, route}) {
  return <DetailContactScreen navigation={navigation} route={route} />;
}
