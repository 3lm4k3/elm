import React from "react"
import { 
  StyleSheet, 
  Text, 
  View,Image,TextInput,
  Dimensions,
  StatusBar,
  ScrollView,TouchableOpacity,FlatList,
} from 'react-native';
 
import Icon from "react-native-vector-icons/Feather"
import LineIcon from "react-native-vector-icons/SimpleLineIcons"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import { Actions } from 'react-native-router-flux';

import { 
  Button,
  Thumbnail,Footer,
  FooterTab,
} from "native-base"

import Header from "./Header/index"

import SearchBar from "./common/HeaderSearchBar"
import Carrousel from "./common/Carrousel"

import { CategoryCard } from './common';
import cstyles from "./common/styles"
const { width, height } = Dimensions.get('window')
export default class CalculationsScreen extends React.Component {
  render(){
        const { viewStyle,search,back,quickCalculations} = styles;

    return(
       <View style={{backgroundColor:'white',flex:1}}>
        <StatusBar
          
          backgroundColor="#F7F7F7"
          barStyle="dark-content"
        />
        <View style={viewStyle}>
          <View style={{flexDirection:'row'}}>
            <TouchableOpacity
                
                    style={back}

                    onPress={() => Actions.pop()}
                 > 
                    <Image
                       source={require('../assets/images/Back-arrow.png')}
                    >
                    </Image>
                  </TouchableOpacity>
                  <TextInput 
                    placeholder="🕵️Search"
                    style={search}></TextInput>

                  <TouchableOpacity
                
                    style={back}

                    onPress={() => Actions.pop()}
                 > 
                    <Image
                       source={require('../assets/images/Notification-active.png')}
                    >
                    </Image>
                  </TouchableOpacity>
          </View>

          <Text style={quickCalculations}>Quick Calculation</Text>


        </View>
        
        
        <ScrollView>
        <View style={{flexDirection:'row',marginLeft:width*0.05,flex:1,justifyContent:'space-around',alignItems:'center'}}>
        
          <FlatList
          
            
            data={[
                      {key:1,materialPic:require('../assets/images/prices.png'),
                       materialName:'material name',onPress:()=>{Actions.calculator({
                        formulaList: [
                          {
                            formula: x => x * 18 ,
                            text: "Steel Quantity (Kg)"
                          },
                          {
                            formula: x => x * 0.144 ,
                            text: "Steel Quantity (Kg)"
                          },
                          {
                            formula: x => x * 0.09 ,
                            text: "Steel Quantity (Kg)"
                          },
                          {
                            formula: x => x * 0.063 ,
                            text: "Steel Quantity (Kg)"
                          },
                        ]
                       })}},

                       {key:2,materialPic:require('../assets/images/prices.png'),
                       materialName:'material name',onPress:()=>{Actions.calculator({
                        formulaList: [
                          {
                            formula: x => x * 26.4 ,
                            text: "Steel Quantity (Kg)"
                          },
                          {
                            formula: x => x * 0.176 ,
                            text: "Steel Quantity (Kg)"
                          },
                          {
                            formula: x => x * 0.11 ,
                            text: "Steel Quantity (Kg)"
                          },
                          {
                            formula: x => x * 0.077 ,
                            text: "Steel Quantity (Kg)"
                          },
                        ]
                       })}},

                       {key:3,materialPic:require('../assets/images/prices.png'),
                       materialName:'material name',onPress:()=>{Actions.calculator({
                        formulaList: [
                          {
                            formula: x => x * 18 ,
                            text: "Steel Quantity (Kg)"
                          },
                          {
                            formula: x => x * 0.16 ,
                            text: "Steel Quantity (Kg)"
                          },
                          {
                            formula: x => x * 0.1 ,
                            text: "Steel Quantity (Kg)"
                          },
                          {
                            formula: x => x * 0.07 ,
                            text: "Steel Quantity (Kg)"
                          },
                        ]
                       })}},
                       {key:4,materialPic:require('../assets/images/prices.png'),
                       materialName:'material name',onPress:()=>{Actions.calculator({
                        formulaList: [
                          {
                            formula: x => x * 9 ,
                            text: "Steel Quantity (Kg)"
                          },
                          {
                            formula: x => x * 0.08 ,
                            text: "Steel Quantity (Kg)"
                          },
                          {
                            formula: x => x * 0.05 ,
                            text: "Steel Quantity (Kg)"
                          },
                          {
                            formula: x => x * 0.035 ,
                            text: "Steel Quantity (Kg)"
                          },
                        ]
                       })}},
                       {key:5,materialPic:require('../assets/images/prices.png'),
                       materialName:'material name',onPress:()=>{Actions.calculator({
                        formulaList: [
                          {
                            formula: x => x * 12 ,
                            text: "Steel Quantity (Kg)"
                          },
                          {
                            formula: x => x * 0.064 ,
                            text: "Steel Quantity (Kg)"
                          },
                          {
                            formula: x => x * 0.04 ,
                            text: "Steel Quantity (Kg)"
                          },
                          {
                            formula: x => x * 0.028 ,
                            text: "Steel Quantity (Kg)"
                          },
                        ]
                       })}},
                       {key:6,materialPic:require('../assets/images/prices.png'),
                       materialName:'material name',onPress:()=>{Actions.calculator({
                        formulaList: [
                          {
                            formula: x => x * 0.05 ,
                            text: "Steel Quantity (Kg)"
                          },
                          {
                            formula: x => x * 0.037 ,
                            text: "Steel Quantity (Kg)"
                          },
                          {
                            formula: x => x * 0.037 ,
                            text: "Steel Quantity (Kg)"
                          },
                          {
                            formula: x => x * 0.045 ,
                            text: "Steel Quantity (Kg)"
                          },
                        ]
                       })}},
                       {key:7,materialPic:require('../assets/images/prices.png'),
                       materialName:'material name',onPress:()=>{Actions.calculator({
                        formulaList: [
                          {
                            formula: x => x * 0.01667 ,
                            text: "Steel Quantity (Kg)"
                          },
                          {
                            formula: x => x * 0.176 ,
                            text: "Steel Quantity (Kg)"
                          },
                          {
                            formula: x => x * 0.088 ,
                            text: "Steel Quantity (Kg)"
                          },
                          {
                            formula: x => x * 0.077 ,
                            text: "Steel Quantity (Kg)"
                          },
                        ]
                       })}},
                       {key:8,materialPic:require('../assets/images/prices.png'),
                       materialName:'material name',onPress:()=>{Actions.calculator({
                        formulaList: [
                          {
                            formula: x => x * 0.05 ,
                            text: "Steel Quantity (Kg)"
                          },
                          {
                            formula: x => x * 0.33 ,
                            text: "Steel Quantity (Kg)"
                          },
                          {
                            formula: x => x * 95 ,
                            text: "Steel Quantity (Kg)"
                          },
                          
                        ]
                       })}},
                       {key:9,materialPic:require('../assets/images/prices.png'),
                       materialName:'material name',onPress:()=>{Actions.calculator({
                        formulaList: [
                          {
                            formula: x => x * 0.03 ,
                            text: "Steel Quantity (Kg)"
                          },
                          {
                            formula: x => x * 0.2 ,
                            text: "Steel Quantity (Kg)"
                          },
                         
                        ]
                       })}},
                       {key:10,materialPic:require('../assets/images/prices.png'),
                       materialName:'material name',onPress:()=>{Actions.calculator({
                        formulaList: [
                          {
                            formula: x => x * 0.05 ,
                            text: "Steel Quantity (Kg)"
                          },
                          {
                            formula: x => x * 0.3 ,
                            text: "Steel Quantity (Kg)"
                          },
                          
                        ]
                       })}},
                       
                       

                      

              
            ]}
            renderItem={({item}) => 
                <TouchableOpacity
                  onPress={item.onPress}
                >
                  <CategoryCard 
                  stars={false}
                  ratingStars={3}
                  icon={item.materialPic}
                  headerText={item.materialName}>
                  
                  </CategoryCard>
                </TouchableOpacity >
               

              
                        
                }
                      />

            <FlatList
            
            data={[
                      {key:1,materialPic:require('../assets/images/prices.png'),
                       materialName:'material name',onPress:()=>{Actions.calculator({
                        formulaList: [
                          {
                            formula: x => x * 0.03 ,
                            text: "Steel Quantity (Kg)"
                          },
                          {
                            formula: x => x * 0.2 ,
                            text: "Steel Quantity (Kg)"
                          },
                          
                        ]
                       })}},
                       {key:2,materialPic:require('../assets/images/prices.png'),
                       materialName:'material name',onPress:()=>{Actions.calculator({
                        formulaList: [
                          {
                            formula: x => x *  0.034 ,
                            text: "Steel Quantity (Kg)"
                          },
                          {
                            formula: x => x *  0.2 ,
                            text: "Steel Quantity (Kg)"
                          },
                          
                        ]
                       })}},
                       {key:3,materialPic:require('../assets/images/prices.png'),
                       materialName:'material name',onPress:()=>{Actions.calculator({
                        formulaList: [
                          {
                            formula: x => x * 0.13 ,
                            text: "Steel Quantity (Kg)"
                          },
                          {
                            formula: x => x * 0.2 ,
                            text: "Steel Quantity (Kg)"
                          },
                          
                        ]
                       })}},
                       {key:4,materialPic:require('../assets/images/prices.png'),
                       materialName:'material name',onPress:()=>{Actions.calculator({
                        formulaList: [
                          {
                            formula: x => x * 0.032 ,
                            text: "Steel Quantity (Kg)"
                          },
                          {
                            formula: x => x * 0.25 ,
                            text: "Steel Quantity (Kg)"
                          },
                          
                        ]
                       })}},
                       {key:5,materialPic:require('../assets/images/prices.png'),
                       materialName:'material name',onPress:()=>{Actions.calculator({
                        formulaList: [
                          {
                            formula: x => x * 0.11 ,
                            text: "Steel Quantity (Kg)"
                          },
                          {
                            formula: x => x * 0.25 ,
                            text: "Steel Quantity (Kg)"
                          },
                          
                        ]
                       })}},
                       {key:6,materialPic:require('../assets/images/prices.png'),
                       materialName:'material name',onPress:()=>{Actions.calculator({
                        formulaList: [
                          {
                            formula: x => x * 0.17 ,
                            text: "Steel Quantity (Kg)"
                          },
                          
                        ]
                       })}},
                       {key:7,materialPic:require('../assets/images/prices.png'),
                       materialName:'material name',onPress:()=>{Actions.calculator({
                        formulaList: [
                          {
                            formula: x => x * 0.067 ,
                            text: "Steel Quantity (Kg)"
                          },
                          
                        ]
                       })}},
                       {key:8,materialPic:require('../assets/images/prices.png'),
                       materialName:'material name',onPress:()=>{Actions.calculator({
                        formulaList: [
                          {
                            formula: x => x * 0.5 ,
                            text: "Steel Quantity (Kg)"
                          },
                          
                        ]
                       })}},
                       {key:9,materialPic:require('../assets/images/prices.png'),
                       materialName:'material name',onPress:()=>{Actions.calculator({
                        formulaList: [
                          {
                            formula: x => x * 0.112 ,
                            text: "Steel Quantity (Kg)"
                          },
                          
                        ]
                       })}},
                       {key:10,materialPic:require('../assets/images/prices.png'),
                       materialName:'material name',onPress:()=>{Actions.calculator({
                        formulaList: [
                          {
                            formula: x => x * 0.00785 ,
                            text: "Steel Quantity (Kg)"
                          },
                          {
                            formula: x => x * 162 ,
                            text: "Steel Quantity (Kg)"
                          },
                          {
                            formula: x => x * 13500 ,
                            text: "Steel Quantity (Kg)"
                          },
                          
                        ]
                       })}},
              
            ]}
            renderItem={({item}) => 
                <TouchableOpacity
                  onPress={item.onPress}
                >
                  <CategoryCard 
                  stars={false}
                  ratingStars={3}
                  icon={item.materialPic}
                  headerText={item.materialName}>
                  
                  </CategoryCard>
                </TouchableOpacity >
               

              
                        
                }
                      />

        </View>
        </ScrollView>


       </View>
      );
  }

  }

const styles = {
  viewStyle: {
    
    
    
    backgroundColor:'#F7F7F7',
    
    
    height: 140,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  quickCalculations:{
    fontSize:34,
    fontWeight:'bold',
    color:'#935CAE',
    backgroundColor:'transparent',
    marginLeft:16,
    marginTop:19,
  },
  back:{
  marginTop:10,
    marginLeft:18,
    marginRight:18,
  },
  search:{
    backgroundColor:'#E8E9EA',
    marginBottom:10,
    flex:1,
    
    
    borderRadius:19,
    marginTop:10,
    alignItems:'center',
    flex: 1, 
    textAlign: 'center',
    width:254,
    height:32.4,


    lineHeight:1,
    fontSize: 18,
    color: 'black',
  },

}