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
import EstyleSheet from "react-native-extended-stylesheet"

import { Actions } from 'react-native-router-flux';

import cstyles from "../common/styles"

export default class extends React.Component {
  
  render() {
    const { color, children, translucent } = this.props
    return (
      <View style={[styles.Header, { backgroundColor: color}, translucent && {height: 60, paddingVertical: 5}]}>
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


const styles = EstyleSheet.create({
  Header: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    paddingVertical: 5,
    width: "100%",
  },
  headerContent: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: "100%",
  },
  "@media (max-width: 400)": {
    Header: {
      height: 50,
      paddingVertical: 0
    }
  }
  })