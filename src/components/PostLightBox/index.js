import React from "react"
import {
  View,
  Text,
  ToastAndroid
} from "react-native"
import EstyleSheet from "react-native-extended-stylesheet"
import {
  Thumbnail,
  Input,
  Item
} from "native-base"
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';
import ImagePicker from "react-native-image-picker"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import EStyleSheet from 'react-native-extended-stylesheet';
import { Actions } from "react-native-router-flux"

import Divider from "../common/Divider"
import Button from "../common/RippleButton"
import Header from "../Header/index"

import cstyles from "../common/styles"

export default class PostLightBox extends React.Component {
  state = {
    postText: "",
    postType: "",
  }
  handlePress = (type) => {
    if(type === "photo") {
      // More info on all the options is below in the README...just some common use cases shown here
      const options = {
        title: 'Select Avatar',
        customButtons: [
          {name: 'fb', title: 'Choose Photo from Facebook'},
        ],
        storageOptions: {
          skipBackup: true,
          path: 'images'
        }
      };
      /**
       * The first arg is the options object for customization (it can also be null or omitted for default options),
       * The second arg is the callback which sends object: response (more info below in README)
       */
      ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);

        if (response.didCancel) {
          console.log('User cancelled image picker');
        }
        else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        }
        else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        }
        else {
          let source = { uri: response.uri };

          // You can also display the image using data:
          // let source = { uri: 'data:image/jpeg;base64,' + response.data };

          this.setState({
            avatarSource: source
          });
        }
      });
    }else {
      if(type !== this.state.postType) {
        this.setState({
          postType: type
        })
      }else {
        this.setState({
          postType: ""
        })
      }
    }
  }
  isPostOptionActive = (type) => {
    return this.state.postType === type
  }
  _onChange = text => {
    this.setState({ postText: text })
  }
  handlePosting = () => {
  }
  render() {
    const { postType, postText } = this.state
    return (
      <View style={styles.container}>
        <View style={styles.mainStatusWrapper}>
          <Thumbnail style={styles.userImage} source={{uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg'}} />
          <AutoGrowingTextInput
            style={styles.textInput}
            placeholder={"What's in your mind?"}
            placeholderTextColor='#66737C'
            maxHeight={200}
            minHeight={50}
            onFocus={() => Actions.postLightBox()}
            enableScrollToCaret
            underlineColorAndroid="transparent"
            onChangeText={this._onChange}
          />
        </View>
        {
          postType === "selling" &&
          <View>
            <Divider color="#D0D1D2"/>
            <View>
              <View style={styles.inputWrapper} >
                <Item style={{flex: 1}} >
                  <Input placeholder='Product Name'/>
                </Item>
              </View>
              <View style={styles.inputWrapper} >
                <Item style={{flex: 1}} >
                  <Input placeholder='Price' keyboardType="numeric" />
                </Item>
              </View>
            </View>
          </View>
        }
        <Divider color="#D0D1D2"/>
        <View style={styles.postOptions} >
          <Button radius={23} onPress={() => this.handlePress("photo")}
                  style={styles.postOption} active={(this.isPostOptionActive("photo"))} >
            <View style={cstyles.row}>
              <FontAwesome name="photo" size={25} color={(this.isPostOptionActive("photo")) ? "#fff" : "#B334C4"} />
              <Text style={[cstyles.bold, {color: (this.isPostOptionActive("photo")) ? "#fff" : "#B334C4", lineHeight: 30, marginLeft: 5}]} >
                Photo
              </Text>
            </View>
          </Button>
          <Button radius={23} onPress={() => this.handlePress("video")}
                  style={styles.postOption} active={(this.isPostOptionActive("video"))} >
            <View style={cstyles.row}>
              <FontAwesome name="photo" size={25} color={(this.isPostOptionActive("video")) ? "#fff" : "#B334C4"} />
              <Text style={[cstyles.bold, {color: (this.isPostOptionActive("video")) ? "#fff" : "#B334C4", lineHeight: 30, marginLeft: 5}]} >
                Video
              </Text>
            </View>
          </Button>
          <Button radius={23} onPress={() => this.handlePress("selling")}
                  style={styles.postOption} active={(this.isPostOptionActive("selling"))}>
            <View style={cstyles.row}>
              <FontAwesome name="photo" size={25} color={(this.isPostOptionActive("selling")) ? "#fff" : "#B334C4"} />
              <Text style={[cstyles.bold, {color: (this.isPostOptionActive("selling")) ? "#fff" : "#B334C4", lineHeight: 30, marginLeft: 5}]} >
                Selling
              </Text>
            </View>
          </Button>
        </View>
      </View>
    )
  }
}

const styles = EstyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
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
    backgroundColor: "red",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
    flex:1,
    paddingVertical: 5,
    marginVertical: 10,
    paddingHorizontal: 20,
    justifyContent: "space-between",
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "lightgray",
    
  }
})