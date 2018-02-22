import React from "react"
import { Text, Dimensions } from "react-native"
import {
  Button, 
} from 'native-base';
import {
  View,
  StyleSheet
} from "react-native"
import Icon from 'react-native-vector-icons/Feather';

import { Actions } from 'react-native-router-flux';

import cstyles from "../common/style"

export default class extends React.Component {
  
  render() {
    const { color, children } = this.props
    return (
      <View style={[styles.Header, { backgroundColor: color }]}>
        {
          children ? children :
            <View style={styles.headerContent} >
              <View style={cstyles.left}>
                <Button transparent onPress={() => Actions.pop()} >
                  <Icon name="arrow-left" size={30} color="#fff" />
                </Button>
              </View>
              <View>
                <Text style={cstyles.headerText}>Login</Text>
              </View>
              <View/>
            </View>
        }
      </View>
    )
  }
}


const styles = StyleSheet.create({
  Header: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    paddingVertical: 5,
    width: Dimensions.get("window").width,
  },
  headerContent: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: Dimensions.get("window").width,
  }
})