import React from "react"
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions
} from "react-native" 
import LinearGradient from "react-native-linear-gradient"
import range from "lodash.range"
import Icon from "react-native-vector-icons/Feather"

import Header from "../Header/index"
import Button from "../common/RippleButton"

import styles from "./styles"
import cstyles from "../common/styles"

export default class Calculator extends React.Component {
  state = {
    screenText: ""
  }
  handleButtonPress = (text) => {
    const { screenText } = this.state
    if(text === ".") {
      if(!(screenText.includes("."))) {
        this.setState(state => ({
          screenText: state.screenText + text
        }))
      }
    }else {
      this.setState(state => ({
        screenText: state.screenText + text
      }))
    }
  }
  handleBackSpace = () => {
    this.setState(state => {
      return ({
        screenText: state.screenText.slice(0, state.screenText.length - 1)
      })
    })
  }
  componentDidMount() {
    console.log(this.props);
    
  }
  render() {
    const { screenText } = this.state
    const { formulaList } =this.props
    return (
      <LinearGradient style={styles.container} colors={['#5871B5', '#935CAE']}>
        <StatusBar
          backgroundColor="#5871B5"
          barStyle="light-content"
        />
        <View style={styles.screen} >
          <Header>
            <Button transparent style={{position: "absolute", left: 0}} >
              <Icon name="arrow-left" size={30} color="#fff"/>              
            </Button>
          </Header>
          <Text style={[cstyles.subTitle, styles.subTitle]} >Flat Slab</Text>
          <View style={styles.results} >
            {/*{*/}
              {/*formulaList.map(el => {*/}
                {/*return (*/}
                  {/*<View style={styles.resultsRow} >*/}
                    {/*<Text style={styles.resultsLeftText} >{el.text}=</Text>*/}
                    {/*<Text style={styles.resultsRightText} >{ el.formula(Number(screenText)).toFixed(2) }</Text> */}
                {/*</View>*/}
                {/*)*/}
              {/*})*/}
            {/*}*/}
            
          </View>
          <View style={styles.result} >
            {
              screenText ? <Text style={styles.resultText} >{ screenText }</Text> :
              <Text style={{fontSize: 16}} >Ceiling Area (m2)</Text>
            }
          </View>
          
        </View>
        <View style={styles.keyboard} >
          <View style={styles.left} >
          {
              range(0, 10, 1).reverse().map((num, index) => {
                if(num === 0) {
                  return (
                    <View style={{flexDirection: "row"}} key={index} >
                      <TouchableOpacity onPress={() => this.handleButtonPress(num)} style={[styles.button, styles.zeroButton]}>
                        <Text style={styles.buttonText} >{ num }</Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => this.handleButtonPress(".")} style={[styles.button]}>
                        <Text style={styles.buttonText} >.</Text>
                      </TouchableOpacity>
                    </View>
                  )
                }
                return (
                  <TouchableOpacity onPress={() => this.handleButtonPress(num)} key={index} style={[styles.button]}>
                    <Text style={styles.buttonText} >{ num }</Text>
                  </TouchableOpacity>
                )
              })
            }
          </View>
          <View style={styles.right}>
            <TouchableOpacity style={[styles.button]} onPress={this.handleBackSpace}>
              <Icon name="arrow-left" size={30} color="#484848" />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, {flex: 1}]}>
              <Icon name="zap" size={30} color="orange" />
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    )
  }
}