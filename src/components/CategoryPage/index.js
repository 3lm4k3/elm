import React from "react"
import {
  View,
  StatusBar,
  Text,
  ScrollView
} from "react-native"
import {
  Button,
  Thumbnail
} from "native-base"
import Icon from "react-native-vector-icons/Feather"

import { Actions } from "react-native-router-flux"
import EstyleSheet from "react-native-extended-stylesheet"
import range from "lodash.range"

import Header from "../Header/index"
import SubNavBar from "../common/SubNavBar"
import SearchBar from "../common/HeaderSearchBar"
import Picker from "../common/Picker"
import ProductsList from "../ProductsList/index"

import cstyles from "../common/style"

export default class CategoryPage extends React.Component {
  state= {
    entries: range(5),
  }
  render() {
    return (
      <View style={styles.container} >
        <StatusBar
          backgroundColor="#F7F7F7"
          barStyle="dark-content"
        />
        <Header color="#F7F7F7" >
          <View style={cstyles.left} >
            <Button transparent onPress={() => Actions.pop()}>
              <Icon name="arrow-left" size={30} color="#484848" />
            </Button>
          </View>
          <View style={cstyles.body} >
            <SearchBar color="#E8E9EA" />
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
        <SubNavBar>
          <Picker filled/>
          <Picker/>
        </SubNavBar>
        <ScrollView style={styles.content}>
          <Text style={cstyles.subTitle}>Category Name</Text>
          <ProductsList/>
        </ScrollView>
      </View>
    )
  }
}

const styles = EstyleSheet.create({
  container: {
    flex: 1
  },
  content:{
    paddingHorizontal: "1rem",
    paddingVertical: "2rem"
  }
})