import React from "react"
import {
  View,
  StatusBar,
  Image,
  ScrollView,
  Dimensions,
  Text,
  TouchableWithoutFeedback
} from "react-native"
import {
  Button,
  Thumbnail
} from "native-base"
import Icon from "react-native-vector-icons/Feather"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import { Actions } from "react-native-router-flux"
import Carousel from "react-native-snap-carousel"
import range from "lodash.range"
import LinearGradient from "react-native-linear-gradient";

import Header from "../Header/index"
import Footer from "../Footer/index"
import SearchBar from "../common/HeaderSearchBar"
import ProductsList from "../ProductsList/index";

import styles from "./styles"
import cstyles from "../common/styles"

export default class MarketPlace extends React.Component {
  state= {
    entries: range(5),
    productBookmarked: {
      state: false,
      index: null
    }
  }
  loadMoreProducts = () => {

  }
  renderElement = () => {
    return  (
      <View>
        <LinearGradient style={styles.carrouselElm}
                        colors={['#5871B5', '#935CAE'] } start={{x: 0.0, y: 0.90}} end={{x: 0.90, y: 1.0}} >
          <FontAwesome name="line-chart" size={50} color="#fff" />
          <Text style={styles.carrouselText} >Today Prices</Text>
        </LinearGradient>
      </View>
    )
  }
  handleProductBookmark = (productIndex) => {
    this.setState(state => ({
      productBookmarked: {
        state: !state.productBookmarked.state,
        index: productIndex
      }
    }))
  }
  renderCategories = () => {
    return range(4).map((el, index) => {
      return (
        <View style={styles.categoryCard} key={index}>
          <TouchableWithoutFeedback onPress={() => Actions.category()}  >
            <View style={{flex: 1}}>
              <Image source={{uri: "https://picsum.photos/200/300/?random"}} style={styles.categoryImage} />
              <View style={styles.categoryMeta} >
                <Text style={styles.categoryMetaTitle} >
                  Category Name
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      )
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#F7F7F7"
          barStyle="dark-content"
        />
        <Header color="#F7F7F7" >
          <View style={cstyles.left} >
            <Button transparent onPress={() => Actions.login()}>
              <Thumbnail small source={{uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg'}} />
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
        <ScrollView style={styles.container} bounces alwaysBounceVertical showsVerticalScrollIndicator={false} >
          <Carousel
            ref={(c) => { this.carousel = c; }}
            data={this.state.entries}
            renderItem={this.renderElement}
            sliderWidth={Dimensions.get("window").width}
            slideStyle={styles.carrouselElm}
            firstItem={2}
            inactiveSlideScale={1}
            activeSlideAlignment="center"
            contentContainerCustomStyle={styles.carousel}
            itemWidth={300}
          />
          <View style={styles.content}>
            <Text style={styles.subTitle}>Products Category</Text>
            <View style={styles.categoryList} >
              {
                this.renderCategories()
              }
            </View>
            <Text style={styles.subTitle}>Our Products</Text>
            <ProductsList/>
          </View>
        </ScrollView>
        <Footer activeTab="market"/>
      </View>
    )
  }
}