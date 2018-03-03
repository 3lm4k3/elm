import React from "react"
import {
  View,
  StatusBar,
  Text,
  Dimensions
} from "react-native"
import {
  Button
} from "native-base"
import NestedScrollView from 'react-native-nested-scroll-view'
import ParallaxScrollView from 'react-native-parallax-scroll-view'
import Icon from "react-native-vector-icons/Feather"
import LinearGradient from "react-native-linear-gradient"
import EstyleSheet from "react-native-extended-stylesheet"
import range from "lodash.range"
import ReadMore from "react-native-read-more-text"
import { Actions } from "react-native-router-flux"

import Header from "../Header/index"
import Swiper from "../common/Swiper"
import Fixed5Stars from "../common/Fixed5Stars"
import RippleButton from "../common/RippleButton"
import { ReviewCard } from "../common/ReviewCard"

import cstyles from "../common/styles"
import AutoLoadList from "../common/AutoLoadList";

const user = {
  userPic: {uri: "https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg"},
  username: "Ebrahim Anwar",
  jobTitle: "Job title",
  reviewDate:  "December 12 at 5:30 PM",
  reviewTitle: "Review title goes here",
  reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan nulla ac purus aliquam commodo. Vivamus pellentesque."
}

export default class ProductPage extends React.Component {
  loadMoreReviews = () => {

  }
  renderReviews = () => {
   return (
     <AutoLoadList style={{paddingTop: 0}} load={this.loadMoreReviews}>
       <View style={styles.reviewsList}>
         {
           range(4).map((el, index) => {
             return (
               <ReviewCard {...user} key={index}/>
             )
           })
         }
       </View>
     </AutoLoadList>
   )
  }
  render() {
    return (
      <View style={styles.container} >
        <StatusBar
          backgroundColor={'transparent'}
          barStyle={"light-content"}
          translucent
        />
        <ParallaxScrollView
          backgroundColor="#5298DF"
          contentBackgroundColor="#fff"
          parallaxHeaderHeight={450}
          showsVerticalScrollIndicator={false}
          renderForeground={() => (
            <View style={{ height: 300, flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <View style={styles.overlay}>
                <Header style={styles.header} translucent >
                  <View style={cstyles.left} >
                    <Button transparent onPress={Actions.pop()}>
                      <Icon name="arrow-left" size={30} color="#fff" />
                    </Button>
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
                    <EllipsisText style={styles.productMetaTitle} text="IKEA Poang Armchair" />
                    <Fixed5Stars iconStyle={{ marginRight: 5 }}/>
                  </View>
                  <RippleButton color={["#5871B5", "#935CAE"]} radius={23} style={styles.priceButton}>
                    <Text style={[cstyles.white, cstyles.bold, styles.priceButtonText]}>EGP 2,500</Text>
                  </RippleButton>
                </View>
                <View style={styles.contactButtons} >
                  <RippleButton color={["#76DB6E", "#76DB6E"]} radius={23} style={styles.contactButton}>
                    <View style={[cstyles.center, styles.contactButtonContent]}>
                      <Text style={[cstyles.white, cstyles.bold, styles.contactButtonText]}>Call</Text>
                    </View>
                  </RippleButton>
                  <RippleButton color={["#935CAE", "#935CAE"]} radius={23} style={styles.contactButton}>
                    <View style={[cstyles.center, styles.contactButtonContent]}>
                      <Text style={[cstyles.white, cstyles.bold, styles.contactButtonText]}>Contact</Text>
                    </View>
                  </RippleButton>
                  <RippleButton color={["#5871B5", "#5871B5"]} radius={23} style={styles.contactButton}>
                    <View style={[cstyles.center, styles.contactButtonContent]}>
                      <Text style={[cstyles.white, cstyles.bold, styles.contactButtonText]}>Share</Text>
                    </View>
                  </RippleButton>
                </View>
              </LinearGradient>
            </View>
          )}>

          <View style={styles.content}>
            <View style={styles.productDescription} >
              <Text style={[cstyles.subTitle, styles.subTitle]} >Product Description</Text>
              <Text style={styles.regularFont}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, cum deserunt esse ipsa, molestias nam nulla obcaecati placeat, praesentium quasi qui rem veniam voluptas. Iste iure quasi suscipit tempora unde?</Text>
            </View>
            <View style={styles.location}>
              <Text style={[cstyles.subTitle, styles.subTitle]}>Location</Text>
              <Text style={styles.regularFont} >Address Goes Herre, Cairo, Egypt</Text>
            </View>
          </View>
          <View style={styles.reviews}>
            <Text style={[cstyles.subTitle, styles.subTitle, {marginLeft: 16}]} >Reviews</Text>
            <NestedScrollView style={[{maxHeight: 400, flexGrow: 1}]} bounces alwaysBounceVertical showsVerticalScrollIndicator={false} >
              {
                this.renderReviews()
              }
            </NestedScrollView>
          </View>
          <View style={styles.footer} >
            <Button style={styles.yellowButton} >
              <Text style={styles.yellowButtonText}>Checkout</Text>
            </Button>
          </View>
        </ParallaxScrollView>
      </View>
    )
  }
}


const EllipsisText = ({ text, style }) => (
  <View style={[cstyles.row]}>
    <View style={{ width: 150,height: 30, backgroundColor: "transparent", overflow: "hidden"}}>
      <View style={{width: 200}}>
        <Text style={style}>
          { text }
        </Text>
      </View>
    </View>
    <Text style={style}>...</Text>
  </View>
)

const styles = EstyleSheet.create({
  container: {
    flex: 1,
    width: "100%"
  },
  overlay: {
    position: "absolute",
    top: 15,
    zIndex: 5,
    width: "100%"
  },
  lowerThird: {
    position: "absolute",
    bottom: 0,
    zIndex: 5,
    width: "100%",
    height: 125,
  },
  productMeta: {
    paddingHorizontal: "1rem",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  priceButtonText: {
    fontSize: 16,
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
    width: 100,
  },
  header: {

  },
  subTitle: {
    marginBottom: "1rem",
  },
  content: {
    padding: "1rem",
    backgroundColor: "#fff",
  },
  regularFont: {
    fontSize: 14,
    color: "#95989A",
  },
  productDescription: {
    marginVertical: "1rem"
  },
  location: {
    marginVertical: "1rem"

  },
  reviews: {
    marginVertical: "1rem"
  },
  reviewsList: {
    width: "100%",
    marginBottom: 50
  },
  yellowButton: {
    backgroundColor: "#FEE180",
    borderRadius: 23,
    marginHorizontal: 25,
    marginVertical: 25,
    width: 350,
    height: 50,
    justifyContent: "center",
    elevation: 2
  },
  yellowButtonText: {
    color: "#935CAE",
    fontSize: 16,
    fontWeight: "bold"
  },
  "@media (max-width: 400)": {
    lowerThird: {
      paddingHorizontal: 5
    },
    productMetaTitle: {
      fontSize: 20
    },
    priceButton: {
      height: 35,
    },
    priceButtonText: {
      fontSize: 16
    },
    productMeta: {
      paddingHorizontal: 8
    },
    contactButtonText: {
      lineHeight: 28
    },
    footer: {
      width: "100%"
    },
    reviews: {
      marginBottom: 0
    },
    yellowButton: {
      width: 250
    },
  }
})