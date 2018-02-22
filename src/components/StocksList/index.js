import React from "react"
import {
  View,
  Text,
  ScrollView,
  Animated
} from "react-native"
import EstyleSheet from "react-native-extended-stylesheet"
import { AreaChart } from 'react-native-svg-charts'
import { Circle } from 'react-native-svg'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Icon from "react-native-vector-icons/Feather"
import LinearGradient from "react-native-linear-gradient"

export default class StocksList extends React.Component {
  state = {
    data: [ 4,3,5,6,5, 8 ],
    activeCard: 0
  }
  handleScroll = (event) => {
    const pageXOffset = (event.nativeEvent.contentOffset.x)
    const scrollViewHeight = event.nativeEvent.layoutMeasurement.height
    const scrolled = pageXOffset - 25
    const cardWidth = 175
    if(scrolled > cardWidth / 2) {
      console.log("disactive")
      this.setState(state => ({
        activeCard: state.activeCard + 1
      }))
    }

  }
  componentDidUpdate() {
    const { activeCard } = this.state
    console.log(activeCard)
  }
  render() {
    const {data, activeCard} = this.state
    return (
      <ScrollView onScroll={this.handleScroll} horizontal bounces alwaysBounceHorizontal showsHorizontalScrollIndicator={false} style={styles.container} >
        {
          this.props.stocks.map((item, index) => {
            const active = Boolean(activeCard === index)
            if (index === 2) {
              return (
                <Animated.View style={[styles.card]} key={index}>
                  <LinearGradient colors={["#5871B5", "#935CAE"]} style={{flex: 1}}>
                    <View style={{justifyContent: "center", alignItems: "center", flex: 1}}>
                      <Icon name="layers" size={50} color="#fff"/>
                      <Text style={{color: "#fff", fontSize: 18}}>Material</Text>
                      <Text style={{color: "#fff", fontSize: 10}}>Today Avarage, 26 Dec.</Text>
                    </View>
                  </LinearGradient>
                </Animated.View>
              )
            }else if (index === 3) {
              return <View style={styles.lastItem} />
            }
            return (
              <Animated.View style={[styles.card, active && styles.activeCard]} key={index}>
                <View style={styles.meta}>
                  <MaterialCommunityIcons name="hexagon" size={30} color="#5871B5"/>
                  <Text style={{color: "#5871B5", fontSize: 18}}>{item.title}</Text>
                  <Text style={{color: "#484848", fontSize: 10}}>Today Avarage, 26 Dec.</Text>
                </View>
                <View style={styles.stockData}>
                  <View style={{flexDirection: "row"}}>
                    {
                      item.up ? <FontAwesome name="caret-up" size={30} color="#76DB6E"/> :
                        <FontAwesome name="caret-down" size={30} color="#FE8080"/>
                    }
                    <Text style={styles.stockPrice}>EGP 1,500</Text>
                  </View>
                  <Text style={[styles.stockPercentage, item.up && {color: "#76DB6E"}]}>-0.11%</Text>
                </View>
                <View style={styles.gradient}>
                  <LinearGradient colors={["rgba(88,113,181,0.2)", "#FFFFFF"]}
                                      start={{x: 0.0, y: 0.0}} end={{x: 0.0, y: 1.0}} style={{flex: 1}}/>
                </View>
                <AreaChart
                  style={{height: 100, marginBottom: 35}}
                  dataPoints={data}
                  showGrid={false}
                  svg={{
                    fill: 'rgba(88,113,181,0.2)',
                    stroke: '#5871B5',
                    strokeWidth: "3"
                  }}
                  contentInset={{top: 50, bottom: 25}}
                  renderDecorator={({x, y, index, value}) => (
                    <Circle
                      key={index}
                      cx={x(index)}
                      cy={y(value)}
                      r={5}
                      stroke={'#5871B5'}
                      fill={'white'}
                      strokeWidth={3}
                      shadowSvg={{
                        stroke: 'rgba(134, 65, 244, 0.2)',
                        strokeWidth: 5,
                      }}
                    />
                  )}
                />
              </Animated.View>
            );
          })
        }
      </ScrollView>
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
    elevation: 15,
    marginLeft: -10,
    justifyContent: "flex-end",
    transform: [{ scale: 0.9 }],
    opacity: 0.75,
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
})

