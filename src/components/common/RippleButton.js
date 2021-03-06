import React from "react"
import {
  View, 
  Text,
  TouchableWithoutFeedback
} from "react-native"
import Ripple from "react-native-material-ripple"
import LinearGradient from "react-native-linear-gradient"
import FontAwesome from "react-native-vector-icons/FontAwesome"

import cstyles from "./styles"
import style from '../NewsFeed/styles';

const { row, spaceBetween, center, bold } = cstyles

export default (props) => {
  let { children, text, rippleColor, onPress, active, radius, style } = props
  const activeColor = props.activeColor || ['#5871B5', '#935CAE']
  let defaultColor = props.color || ["#fff", "#fff"]
  if(props.transparent) defaultColor = ["transparent", "transparent"]
  radius = props.radius || 5
  
  const styles = {
    backgroundColor: 'transparent',
    borderRadius: 23, 
    flex:1,
    height: 50,
    paddingVertical: 5,
    paddingHorizontal: 20,
  }
  const buttonWrapper = {
    borderRadius: radius,
    flex:  1,
  }
  
  return (
    <View style={[{elevation: 3, margin: 5, borderRadius: radius}, style]} >
      <LinearGradient  colors={active ? activeColor : defaultColor} start={{x: 0.0, y: 0.90}} end={{x: 0.90, y: 1.0}} style={buttonWrapper} >
        <Ripple rippleContainerBorderRadius={radius} onPress={onPress} rippleDuration={800}
                rippleColor={rippleColor} style={[styles, cstyles.center]} >
          {
            children
          }
        </Ripple>
      </LinearGradient>
    </View>
  )
}

