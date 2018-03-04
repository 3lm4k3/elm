import React from "react"
import {
  View,
  StyleSheet,
  Text,
  StatusBar,TextInput,
  TouchableOpacity,
  Dimensions
} from "react-native"
import { Actions } from 'react-native-router-flux'; 
import LinearGradient from "react-native-linear-gradient"
import range from "lodash.range"
import Icon from "react-native-vector-icons/Feather"

import Header from "../Header/index"
import Button from "../common/RippleButton"

import styles from "./styles"
import cstyles from "../common/styles"

export default class Calculator extends React.Component {
  state = {
    screenText: "",
    firstText:"",
    secondText:"",
    firstInput : true,
    secondInput: false,
  }
  handleButtonPress = (text) => {
    const { screenText,firstInput,secondInput,firstText,secondText } = this.state
    if (firstInput) {
       if(text === "."){
        if(!(firstText.includes("."))) {
          this.setState(state => ({
            
            firstText: state.firstText + text

          }))
        }
      }else {
        this.setState(state => ({
          
          firstText: state.firstText + text
        }))
      }
    }
    if (secondInput) {
      if(text === "."){
        if(!(secondText.includes("."))) {
          this.setState(state => ({
            
            secondText: state.secondText + text

          }))
        }
      }else {
        this.setState(state => ({
          
          secondText: state.secondText + text
        }))
      }
    }
   
  }
  handleBackSpace = () => {
     const { screenText,firstInput,secondInput,firstText,secondText } = this.state
    if (firstInput){ 
        this.setState(state => {
        return ({
          
          firstText: state.firstText.slice(0, state.firstText.length - 1)
        })
      })
    }
    else {
      this.setState(state => {
        return ({
          
          secondText: state.secondText.slice(0, state.secondText.length - 1)
        })
      })
    }
    
  }

  
  componentDidMount() {
    //console.log(this.props);
    console.log(this.props.two)
    
  }

  secondTxtInput (){
    if (this.props.two){
    return (
      <TextInput 
            style={styles.result}
            textAlign={'center'}
            fontSize = {16}
            onFocus={() => this.setState({firstInput:false,secondInput:true})}
            placeholder = {this.props.secondPlaceholder}
            value={this.state.secondText}
          />

      );
    }
  }
  render() {
    const { screenText,firstText,secondText } = this.state
    const { formulaList,two,firstPlaceholder,title } =this.props
    return (
      <LinearGradient style={styles.container} colors={['#5871B5', '#935CAE']}>
        <StatusBar
          backgroundColor="#5871B5"
          barStyle="light-content"
        />
        <View style={styles.screen} >
          <Header>
            <Button transparent onPress={() => Actions.pop()} style={{position: "absolute", left: 0}} >
              <Icon name="arrow-left" size={30} color="#fff"/>              
            </Button>
          </Header>
          <Text style={[cstyles.subTitle, styles.subTitle]} >{title}</Text>
          <View style={styles.results} >
            {

              formulaList.map(el => {
                return (
                  <View style={styles.resultsRow} >
                    <Text style={styles.resultsLeftText} >{el.text}=</Text>
                    <Text style={styles.resultsRightText} >{ el.formula(Number(firstText),Number(secondText)).toFixed(2) }</Text> 
                </View>
                )
              })
            }
            
          </View>
          <TextInput 
            style={styles.result}
            textAlign={'center'}
            fontSize = {16}
            onFocus={() => this.setState({firstInput:true,secondInput:false})}
            placeholder = {firstPlaceholder}
            value={this.state.firstText}
          />
          {this.secondTxtInput()}
          
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
