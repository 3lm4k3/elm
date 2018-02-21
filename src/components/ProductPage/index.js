import React from "react"
import {
  View,
  StatusBar,
  Text
} from "react-native"
import ParallaxScrollView from 'react-native-parallax-scroll-view'
import Icon from "react-native-vector-icons/Feather"
import LinearGradient from "react-native-linear-gradient"
import EstyleSheet from "react-native-extended-stylesheet"

import Header from "../Header/index"
import Swiper from "../common/Swiper"
import Fixed5Stars from "../common/Fixed5Stars"
import RippleButton from "../common/RippleButton"

import cstyles from "../common/styles"

export default class ProductPage extends React.Component {
  render() {
    return (
      <View style={styles.container} >
        <StatusBar
          backgroundColor={'transparent'}
          translucent
        />
        <ParallaxScrollView
          backgroundColor="#5298DF"
          contentBackgroundColor="pink"
          parallaxHeaderHeight={450}
          showsVerticalScrollIndicator={false}
          renderForeground={() => (
            <View style={{ height: 300, flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <View style={styles.overlay}>
                <Header style={styles.header} >
                  <View style={cstyles.left} >
                    <Icon name="arrow-left" size={30} color="#fff" />
                  </View>
                  <View style={cstyles.right} >
                    <View style={cstyles.iconWrapper} >
                      <View style={cstyles.iconNotification} />
                      <Icon name="shopping-cart" size={30} color="#fff"  />
                    </View>
                  </View>
                </Header>
              </View>
              <Swiper image={require("../../assets/images/ikea-chair.jpg")} resizeMode="contain"/>
              <LinearGradient style={styles.lowerThird} colors={["transparent", "rgba(0,0,0,0.75)"]}>
                <View style={styles.productMeta}>
                  <View >
                    <Text style={styles.productMetaTitle}>IKEA Poang Armchair</Text>
                    <Fixed5Stars/>
                  </View>
                  <RippleButton color={["#5871B5", "#935CAE"]} radius={23} style={{height: 40}}>
                    <Text style={[cstyles.white, cstyles.bold, {fontSize: 16}]}>EGP 2,500</Text>
                  </RippleButton>
                </View>
                <View style={styles.contactButtons} >
                  <RippleButton color={["#76DB6E", "#76DB6E"]} radius={23} style={styles.contactButton}>
                    <Text style={[cstyles.white, cstyles.bold, {fontSize: 16}]}>Call</Text>
                  </RippleButton>
                  <RippleButton color={["#935CAE", "#935CAE"]} radius={23} style={styles.contactButton}>
                    <Text style={[cstyles.white, cstyles.bold, {fontSize: 16}]}>Contact</Text>
                  </RippleButton>
                  <RippleButton color={["#5871B5", "#5871B5"]} radius={23} style={styles.contactButton}>
                    <Text style={[cstyles.white, cstyles.bold, {fontSize: 16}]}>Share</Text>
                  </RippleButton>
                </View>
              </LinearGradient>
            </View>
          )}>

          <View style={styles.content}>

          </View>
        </ParallaxScrollView>
      </View>
    )
  }
}

const styles = EstyleSheet.create({
  container: {
    flex: 1
  },
  overlay: {
    position: "absolute",
    top: 15,
    zIndex: 5
  },
  lowerThird: {
    position: "absolute",
    bottom: 0,
    zIndex: 5,
    width: "100%",
    height: 125
  },
  productMeta: {
    paddingHorizontal: "1rem",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  productMetaTitle: {
    fontWeight: "bold",
    fontSize: 22,
    color: "#fff"
  },
  contactButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20
  },
  contactButton: {
    height: 40,
    width: 100
  },
  header: {

  }
})