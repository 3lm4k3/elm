import React from "react"
import {
  View, 
  Text,
  StatusBar,
  Dimensions,
  ScrollView,
  TouchableWithoutFeedback
} from "react-native"
import {
  Button, 
  Thumbnail
} from "native-base"
import { Actions } from "react-native-router-flux"

import Icon from "react-native-vector-icons/Feather"
import FontAwesome from "react-native-vector-icons/FontAwesome"

import Header from "../Header/index"
import SearchBar from "../common/HeaderSearchBar"
import DropdownSubNavBar from "../common/SubNavBar"
import Picker from "../common/Picker"
import StocksList from "../StocksList/index";

import styles from "./styles"
import cstyles from "../common/style"

export default class Stocks extends React.Component {
  state = {
    entries: [
      {
        title: "Steel",
        up: false
      },
      {
        title: "Cement",
        up: true
      },
      {
        // empty object for the last component
      },
    ]
  }

  render() {
    const { entries } = this.state
    return (
      <View style={styles.container} >
        <StatusBar
          backgroundColor="#F7F7F7"
          barStyle="dark-content"
        />
        <Header color="#F7F7F7" >
          <View style={cstyles.left} >
            <Button transparent onPress={() => Actions.pop()}>
              <Icon name="arrow-left" size={30} />
            </Button>         
          </View>
          <View style={cstyles.body} >
            <SearchBar color="#E8E9EA" onChangeText={(text) => this.setState({searchText: text})}  />
          </View>
          <View style={cstyles.right} >
            <Button transparent>
              <View style={cstyles.iconWrapper} >
                <View style={cstyles.iconNotification} />
                <Icon name="bell" size={30}  />
              </View>
            </Button>
          </View>
        </Header>
        {/* <DropdownSubNavBar>  */}
          {/* <Picker/> */}
        {/* </DropdownSubNavBar> */}
        <ScrollView style={styles.content} >
          <Text style={styles.subTitle} >Overview</Text>
          <View>
            <StocksList entries={entries}/>
          </View>
          <View style={styles.brandsList} >
            <Text style={styles.subTitle} >Brands</Text>
            <View style={{
              width: Dimensions.get("window").width,
              alignItems: "flex-end",
              paddingHorizontal: 25
            }} >
              <TouchableWithoutFeedback>
                <Text style={{color: "#5871B5", fontSize: 17}} >See more</Text>
              </TouchableWithoutFeedback>
            </View>
            <View style={styles.brand} >
              <Thumbnail style={styles.thumbnailBubble} source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/sdw/128.jpg"}} />
              <Text style={styles.brandName} >El Masreyeen Steel</Text>
              <View style={styles.brandPrice} >
                {
                  <FontAwesome name="caret-up" size={25} color="#76DB6E" style={styles.brandPriceIcon} />
                  // <FontAwesome name="caret-down" size={30} color="#FE8080" style={styles.brandPriceIcon} />
                }
                <Text style={styles.brandPriceText}>EGP 1,500</Text>
              </View>
            </View>
            <View style={styles.brand} >
              <Thumbnail style={styles.thumbnailBubble} source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/sdw/128.jpg"}} />
              <Text style={styles.brandName} >El Masreyeen Steel</Text>
              <View style={styles.brandPrice} >
                {
                  <FontAwesome name="caret-up" size={25} color="#76DB6E" style={styles.brandPriceIcon} />
                  // <FontAwesome name="caret-down" size={30} color="#FE8080" style={styles.brandPriceIcon} />
                }
                <Text style={styles.brandPriceText}>EGP 1,500</Text>
              </View>
            </View>
            <View style={styles.brand} >
              <Thumbnail style={styles.thumbnailBubble} source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/sdw/128.jpg"}} />
              <Text style={styles.brandName} >El Masreyeen Steel</Text>
              <View style={styles.brandPrice} >
                {
                  <FontAwesome name="caret-up" size={25} color="#76DB6E" style={styles.brandPriceIcon} />
                  // <FontAwesome name="caret-down" size={30} color="#FE8080" style={styles.brandPriceIcon} />
                }
                <Text style={styles.brandPriceText}>EGP 1,500</Text>
              </View>
            </View>
            <View style={styles.brand} >
              <Thumbnail style={styles.thumbnailBubble} source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/sdw/128.jpg"}} />
              <Text style={styles.brandName} >El Masreyeen Steel</Text>
              <View style={styles.brandPrice} >
                {
                  <FontAwesome name="caret-up" size={25} color="#76DB6E" style={styles.brandPriceIcon} />
                  // <FontAwesome name="caret-down" size={30} color="#FE8080" style={styles.brandPriceIcon} />
                }
                <Text style={styles.brandPriceText}>EGP 1,500</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}
