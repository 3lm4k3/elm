import React from "react"
import {
  View,
  Text,
  Dimensions
} from "react-native"
import EstyleSheet from "react-native-extended-stylesheet"
import { AreaChart } from 'react-native-svg-charts'
import { Circle } from 'react-native-svg'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Icon from "react-native-vector-icons/Feather"
import LinearGradient from "react-native-linear-gradient"
import Carousel from 'react-native-snap-carousel';

export default class StocksList extends React.Component {
  state = {
    data: [ 4,3,5,6,5,8 ],
  }
  _renderItem = ({item, index}) => {
    const { data } = this.state
    if(index === 2) {
      return (
        <View style={styles.card} >
          <LinearGradient colors={["#5871B5", "#935CAE"]} style={{flex:1}} >
            <View style={{justifyContent: "center", alignItems: "center", flex: 1}}>
              <Icon name="layers" size={50} color="#fff" />
              <Text style={{color: "#fff", fontSize: 18}}>Material</Text>
              <Text style={{color:"#fff", fontSize: 10}}>Today Avarage, 26 Dec.</Text>
            </View>
          </LinearGradient>
        </View>
      )
    }
    return (
      <View style={styles.card} >
        <View style={styles.meta}>
          <MaterialCommunityIcons name="hexagon" size={30} color="#5871B5" />
          <Text style={{color: "#5871B5", fontSize: 18}} >{item.title}</Text>
          <Text style={{color:"#484848", fontSize: 10}} >Today Avarage, 26 Dec.</Text>
        </View>
        <View style={styles.stockData} >
            <View style={{flexDirection: "row"}} >
              {
                item.up ? <FontAwesome name="caret-up" size={30} color="#76DB6E" /> :
                  <FontAwesome name="caret-down" size={30} color="#FE8080" />
              }
              <Text style={styles.stockPrice} >EGP 1,500</Text>
            </View>
            <Text style={[styles.stockPercentage, item.up && {color: "#76DB6E"}]} >-0.11%</Text>
        </View>
        <View style={styles.gradient} >
          <LinearGradient colors={["rgba(88,113,181,0.2)", "#FFFFFF"]}
            start={{x: 0.0, y: 0.0}} end={{x: 0.0, y: 1.0}} style={{flex: 1}} />
        </View>
        <AreaChart
            style={ { height: 100, marginBottom: 35 } }
            dataPoints={ data }
            showGrid={false}
            svg={ {
                fill: 'rgba(88,113,181,0.2)',
                stroke: '#5871B5',
                strokeWidth: "3"
            } }
            contentInset={ { top: 50, bottom: 25 } }
            renderDecorator={ ({ x, y, index, value }) => (
                <Circle
                    key={ index }
                    cx={ x(index) }
                    cy={ y(value) }
                    r={ 5 }
                    stroke={ '#5871B5' }
                    fill={ 'white' }
                    strokeWidth={3}
                    shadowSvg={{
                        stroke: 'rgba(134, 65, 244, 0.2)',
                        strokeWidth: 5,
                    }}
                />
            ) }
        />
      </View>
    );
  }
  render() {
    const { data } = this.state
    const { entries } = this.props
    return (
      <Carousel
        ref={(c) => { this._carousel = c; }}
        data={entries}
        renderItem={this._renderItem}
        sliderWidth={Dimensions.get("window").width}
        itemWidth={175}
        containerCustomStyle={{marginVertical: 25}}
        activeSlideAlignment="start"
        contentContainerCustomStyle={{marginLeft: 25}}
        inactiveSlideScale={0.8}

      />
    )
  }
}
const styles = EstyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 15,
    paddingVertical: 10,
    paddingLeft: 25,
    width: "100%",
    height: 200
  },
  card: {
    height: 175,
    width: 175,
    backgroundColor: "#fff",
    elevation: 5,
    marginLeft: -10,
    justifyContent: "flex-end",
    transform: [{ scale: 0.9 }],
    // opacity: 0.75,
    zIndex: 1
  },
  activeCard: {
    transform: [{ scale: 1 }],
    zIndex: 5,
    opacity: 1,
    marginLeft: 0
  },
  lastItem: {
    height: 100,
    width: 100,
  },
  meta: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 10,
    left: 35
  },
  stockData: {
    position: "absolute",
    bottom: 5,
    left: 35,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 5,
  },
  stockPrice: {
    fontWeight: "bold",
    color: "#484848",
    fontSize: 16,
    marginLeft: 5,
    lineHeight: 30
  },
  stockPercentage: {
    color: "#FE8080",
    fontSize: 17,
    marginTop: -5
  },
  gradient: {
    position: "absolute",
    bottom: -5,
    width: 200,
    height: 50,
  },
  "@media (max-width: 400)": {
    container: {
      marginVertical: 0
    }
  }
})

