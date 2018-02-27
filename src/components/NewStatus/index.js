import React from "react"
import {
  View,
  Text,
  ToastAndroid,
  TouchableWithoutFeedback
} from "react-native"
import {
  Thumbnail,
  Input,
  // Button,
  Item
} from "native-base"
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';
import ImagePicker from "react-native-image-picker"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import EStyleSheet from 'react-native-extended-stylesheet';
import { Actions } from "react-native-router-flux"

import Divider from "../common/Divider"
import Button from "../common/RippleButton"

import cstyles from "../common/styles"

const { row, spaceBetween, center, bold, white } = cstyles

export default class NewStatus extends React.Component {
  state = {
    postText: "",
    postType: "",
  }
  render() {
    const { postType, postText } = this.state
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => Actions.postLightBox()}>
          <View>
            <View style={styles.mainStatusWrapper}>
              <Thumbnail style={styles.userImage} source={{uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg'}} />
              <AutoGrowingTextInput
                style={styles.textInput}
                placeholder={"What's in your mind?"}
                placeholderTextColor='#66737C'
                maxHeight={200}
                minHeight={50}
                enableScrollToCaret
                underlineColorAndroid="transparent"
                onChangeText={this._onChange}
              />
            </View>
            <Divider color="#D0D1D2"/>
            <View style={styles.postOptions} >
              <Button radius={23} onPress={() => this.handlePress("photo")} style={styles.postOption} >
                <View style={cstyles.row}>
                  <FontAwesome name="photo" size={25} color={"#B334C4"} />
                  <Text style={[cstyles.bold, {color: "#B334C4", lineHeight: 30, marginLeft: 5}]} >Photo</Text>
                </View>
              </Button>
              <Button radius={23} onPress={() => this.handlePress("video")} style={styles.postOption} >
                <View style={cstyles.row}>
                  <FontAwesome name="photo" size={25} color={"#B334C4"} />
                  <Text style={[cstyles.bold, {color: "#B334C4", lineHeight: 30, marginLeft: 5}]}> Video</Text>
                </View>
              </Button>
              <Button radius={23} onPress={() => this.handlePress("selling")} style={styles.postOption} >
                <View style={cstyles.row}>
                  <FontAwesome name="photo" size={25} color={"#B334C4"} />
                  <Text style={[cstyles.bold, {color: "#B334C4", lineHeight: 30, marginLeft: 5}]} >Selling</Text>
                </View>
              </Button>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}
  
  


const styles = EStyleSheet.create({
  container: {
    backgroundColor: "#F8F8F8",
    width: "100%",
    marginVertical: 25,
    elevation: 5
  },
  mainStatusWrapper: {
    flexDirection: "row",
    padding: 15 
  },
  textInput: {
    paddingLeft: 10,
    fontSize: 17,
    flex: 1,
    borderWidth: 0,
  },
  inputWrapper: {
    flexDirection: "row",
    paddingHorizontal: 15,
    marginVertical: 10
  },
  postOptions: {
    backgroundColor: 'transparent',
    borderRadius: 23,
    flex:1,
    paddingVertical: 5,
    marginVertical: 10,
    paddingHorizontal: 20,
    justifyContent: "space-between",
    flexDirection: "row"
  },
  label: {
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: 50
  },
  '@media (min-width: 750) and (max-width: 1000)': { // media queries
    container: {
      paddingHorizontal: 100,
    },
    
  },
  "@media (max-width: 400)": {
    textInput: {
      padding: 0,
    },
    postOptions: {
      paddingHorizontal: 5,
      marginVertical: 0
    },
    mainStatusWrapper: {
        
    },
    userImage: {
      width: 40,
      height: 40
    },
    postOption: {
      paddingHorizontal: 0
    },
  }
  
})
