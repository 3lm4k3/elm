import React from "react"
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image
} from "react-native"
import range from "lodash.range"
import EstyleSheet from "react-native-extended-stylesheet"
import Icon from "react-native-vector-icons/Feather"
import IonIcon from "react-native-vector-icons/Ionicons"
import LinearGradient from "react-native-linear-gradient"
import { Actions } from "react-native-router-flux"
import ReadMore from "react-native-read-more-text"

import Fixed5Stars from "../common/Fixed5Stars"
import AutoLoadList from "../common/AutoLoadList"

import cstyles from "../common/styles"


export default class ProductsList extends React.Component {
  state= {
    productBookmarked: {
      state: false,
      index: null
    }
  }
  loadMoreProducts = () => {

  }
  handleProductBookmark = (productIndex) => {
    this.setState(state => ({
      productBookmarked: {
        state: !state.productBookmarked.state,
        index: productIndex
      }
    }))
  }
  _renderTruncatedFooter = () => {
    
  }
  renderProducts = () => {
    const { productBookmarked } = this.state
    return range(6).map((el, index) => {
      return (
        <View style={styles.productCard} key={index} >
          <View style={styles.productFigure} >
            <Image source={ require("../../assets/images/ikea-chair.jpg") } style={styles.productImage} />
            <LinearGradient colors={["rgba(0,0,0,0.5)","transparent"]} style={styles.productFigCaption} >
              <View  style={cstyles.row} >
                <Icon name="eye" size={20} color="#fff" style={cstyles.inputIcon} />
                <Text style={[cstyles.white, cstyles.bold, {lineHeight: 30}]}>200</Text>
              </View>
              <TouchableWithoutFeedback onPress={() => this.handleProductBookmark(index)}>
                <IonIcon name={ productBookmarked.state && (productBookmarked.index === index) ? "ios-bookmark" : "ios-bookmark-outline"} size={45} color="#fff" style={{marginHorizontal: 5}} />
              </TouchableWithoutFeedback>
            </LinearGradient>
          </View>
          <View style={styles.productMeta} >
            <TouchableWithoutFeedback onPress={() => Actions.product()}>
              <View style={{flex: 1}}>
                <ReadMore
                  numberOfLines={1}
                  renderTruncatedFooter={this._renderTruncatedFooter}>
                  <Text style={styles.productMetaTitle} >IKEA Poang Armchair</Text>
                </ReadMore>
                <Text style={styles.productMetaSubTitle} >IKEA </Text>
                <Fixed5Stars/>
                <Text style={styles.productMetaPrice} >EGP 4,500</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      )
    })
  }
  render() {
    return (
      <View>
        <AutoLoadList load={this.loadMoreProducts}>
          <View style={styles.productsList}>
            {
              this.renderProducts()
            }
          </View>
        </AutoLoadList>
      </View>
    )
  }
}



const styles = EstyleSheet.create({
  productsList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginVertical: 35
  },
  productCard: {
    flexBasis: "48%",
    height: 200,
    width: "100%",
    marginBottom: 15,
    elevation: 10,
    backgroundColor: "#fff"
  },
  productFigure: {
    flex: 1,
    overflow: "hidden",
    elevation: 10
  },
  productImage: {
    flex: 1,
  },
  productFigCaption: {
    position: "absolute",
    top: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  productMeta: {
    height:100,
    width: "100%",
    backgroundColor: "#fff",
    padding: 5,

  },
  productMetaTitle: {

  },
  productMetaSubTitle: {
    fontSize: 10,
    color: "#935CAE"
  },
  productMetaStars: {

  },
  productMetaPrice: {
    fontSize: 22,
    fontWeight: "bold"
  },
  "@media (max-width: 400)": {
    productsList: {
      marginVertical: 20
    }
  }
})

