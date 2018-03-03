import React from "react"
import {
  View
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import range from "lodash.range"

export default (props) => (
  <View style={[{flexDirection: "row", marginTop: 5}, props.style]} >
    {
      range(5).map((el, index) => (
        <Icon key={index} name="star" size={15} color="#FEE180" style={props.iconStyle}/>
      ))
    }
  </View>
)