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
                       materialName:'Solid Slab',onPress:()=>{Actions.calculator({
                        formulaList: [
                          {
                            formula: x => x * 18 ,
                            text: "Steel Quantity (Kg)"
                          },
                          {
                            formula: x => x * 0.144 ,
                            text: "gravel(m3)"
                          },
                          {
                            formula: x => x *  0.09 ,
                            text: "Sand(m3)"
                          },
                          {
                            formula: x => x * 0.063 ,
                            text: "Cement(ton)"
                          },
                        ],two:false,title:"Solid Slab",firstPlaceholder:"Ceiling area (m2)"
                       })}},

                       {key:2,materialPic:require('../assets/images/prices.png'),
                       materialName:'Solid Slab',onPress:()=>{Actions.calculator({
                        formulaList: [
                          {
                            formula: x => x * 26.4 ,
                            text: "Steel Quantity (Kg)"
                          },
                          {
                            formula: x => x * 0.176 ,
                            text: "gravel(m3)"
                          },
                          {
                            formula: x => x * 0.11 ,
                            text: "Sand(m3)"
                          },
                          {
                            formula: x => x * 0.077 ,
                            text: "Cement(ton)"
                          },
                        ],two:false,firstPlaceholder:"Ceiling area (m2)",title:"Solid Slab"
                       })}},

                       {key:3,materialPic:require('../assets/images/prices.png'),
                       materialName:'Bases & Smelles',onPress:()=>{Actions.calculator({
                        formulaList: [
                          {
                            formula: x => x * 18 ,
                            text: "Steel Quantity (Kg)"
                          },
                          {
                            formula: x => x * 0.16 ,
                            text: "gravel(m3)"
                          },
                          {
                            formula: x => x * 0.1 ,
                            text: "Sand(m3)"
                          },
                          {
                            formula: x => x * 0.07 ,
                            text: "Cement(ton)"
                          },
                        ],two:false,firstPlaceholder:"Land area (m2)",title:"Bases & Smelles"
                       })}},
                       {key:4,materialPic:require('../assets/images/prices.png'),
                       materialName:'Raft',onPress:()=>{Actions.calculator({
                        formulaList: [
                          {
                            formula: (x,y) => x * y * 9 ,
                            text: "Steel Quantity (Kg)"
                          },
                          {
                            formula: (x,y) => x * y * 0.08 ,
                            text: "gravel(m3)"
                          },
                          {
                            formula: (x,y) => x * y * 0.05 ,
                            text: "Sand(m3)"
                          },
                          {
                            formula: (x,y) => x * y * 0.035 ,
                            text: "Cement(ton)"
                          },
                        ],two:true,firstPlaceholder:"Land area (m2)",title:"Raft",secondPlaceholder:"no. of floors"
                       })}},
                       {key:5,materialPic:require('../assets/images/prices.png'),
                       materialName:'Columns',onPress:()=>{Actions.calculator({
                        formulaList: [
                          {
                            formula: x => x * 12 ,
                            text: "Steel Quantity (Kg)"
                          },
                          {
                            formula: x => x * 0.064 ,
                            text: "gravel(m3)"
                          },
                          {
                            formula: x => x * 0.04 ,
                            text: "Sand(m3)"
                          },
                          {
                            formula: x => x * 0.028 ,
                            text: "Cement(ton)"
                          },
                        ],two:false,firstPlaceholder:"Land area (m2)",title:"Columns"
                       })}},
                       {key:5,materialPic:require('../assets/images/prices.png'),
                       materialName:'Wood',onPress:()=>{Actions.calculator({
                        formulaList: [
                          {
                            formula: x => x * 0.05 ,
                            text: "solid slap ceiling"
                          },
                          {
                            formula: x => x * 0.037 ,
                            text: "hollow block ceiling"
                          },
                          {
                            formula: x => x * 0.037 ,
                            text: "Flat slap ceiling"
                          },
                          {
                            formula: x => x * 0.045 ,
                            text: "Viens Quantity"
                          },
                        ],two:false,firstPlaceholder:"Ceiling area (m2)",title:"Wood"
                       })}},
                       {key:7,materialPic:require('../assets/images/prices.png'),
                       materialName:'Hollow Block',onPress:()=>{Actions.calculator({
                        formulaList: [
                          {
                            formula: x => x * 0.01667 ,
                            text: "Steel quantity(ton)"
                          },
                          {
                            formula: x => x * 0.176 ,
                            text: "gravel(m3)"
                          },
                          {
                            formula: x => x * 0.088 ,
                            text: "Sand(m3)"
                          },
                          {
                            formula: x => x * 0.077 ,
                            text: "Cement(ton)"
                          },
                        ],two:false,firstPlaceholder:"Ceiling area (m2)",title:"Hollow Block"
                       })}},
                       {key:8,materialPic:require('../assets/images/prices.png'),
                       materialName:'Bricks',onPress:()=>{Actions.calculator({
                        formulaList: [
                          {
                            formula: x => x * 0.05 ,
                            text: "Sand(m3)"
                          },
                          {
                            formula: x => x * 0.33 ,
                            text: "cement(bag)"
                          },
                          {
                            formula: x => x * 95 ,
                            text: "gravels number"
                          },
                          
                        ],two:false,firstPlaceholder:"Floor surface (m2)",title:"Bricks"
                       })}},
                       {key:9,materialPic:require('../assets/images/prices.png'),
                       materialName:'Internal Walls Plastering',onPress:()=>{Actions.calculator({
                        formulaList: [
                          {
                            formula: x => x * 0.03 ,
                            text: "Sand(m3)"
                          },
                          {
                            formula: x => x * 0.2 ,
                            text: "cement(bag)"
                          },
                         
                        ],two:false,firstPlaceholder:"Walls area (m2)",title:"Internal Walls Plastering"
                       })}},
                       {key:10,materialPic:require('../assets/images/prices.png'),
                       materialName:'Facade Plastering',onPress:()=>{Actions.calculator({
                        formulaList: [
                          {
                            formula: x => x * 0.05 ,
                            text: "Sand(m3)"
                          },
                          {
                            formula: x => x * 0.3 ,
                            text: "cement(bag)"
                          },
                          
                        ],two:false,firstPlaceholder:"Walls area (m2)",title:"Facade Plastering"
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
                       materialName:'Internal Plastering',onPress:()=>{Actions.calculator({
                        formulaList: [
                          {
                            formula: (x,y) => x * y * 0.03 ,
                            text: "Sand(m3)"
                          },
                          {
                            formula: (x,y) => x * y * 0.2 ,
                            text: "cement(bag)"
                          },
                          
                        ],two:true,firstPlaceholder:"Flat area (m2)",secondPlaceholder:"Floor height(m)",title:"Internal Plastering"
                       })}},
                       {key:2,materialPic:require('../assets/images/prices.png'),
                       materialName:'Wall Ceramic',onPress:()=>{Actions.calculator({
                        formulaList: [
                          {
                            formula: x => x *  0.034 ,
                            text: "Sand(m3)"
                          },
                          {
                            formula: x => x *  0.2 ,
                            text: "cement(bag)"
                          },
                          
                        ],two:false,firstPlaceholder:"Walls area (m2)",title:"Wall Ceramic"
                       })}},
                       {key:3,materialPic:require('../assets/images/prices.png'),
                       materialName:'Flooring Ceramic',onPress:()=>{Actions.calculator({
                        formulaList: [
                          {
                            formula: x => x * 0.13 ,
                            text: "Sand(m3)"
                          },
                          {
                            formula: x => x * 0.2 ,
                            text: "cement(bag)"
                          },
                          
                        ],two:false,firstPlaceholder:"Floor surface (m2)",title:"Flooring Ceramic"
                       })}},
                       {key:4,materialPic:require('../assets/images/prices.png'),
                       materialName:'Wall Marble',onPress:()=>{Actions.calculator({
                        formulaList: [
                          {
                            formula: x => x * 0.032 ,
                            text: "Sand(m3)"
                          },
                          {
                            formula: x => x * 0.25 ,
                            text: "cement(bag)"
                          },
                          
                        ],two:false,firstPlaceholder:"Walls area (m2)",title:"Wall Marble"
                       })}},
                       {key:5,materialPic:require('../assets/images/prices.png'),
                       materialName:'Flooring Marble',onPress:()=>{Actions.calculator({
                        formulaList: [
                          {
                            formula: x => x * 0.11 ,
                            text: "Sand(m3)"
                          },
                          {
                            formula: x => x * 0.25 ,
                            text: "cement(bag)"
                          },
                          
                        ],two:false,firstPlaceholder:"Floor surface (m2)",title:"Flooring Marble"
                       })}},
                       {key:6,materialPic:require('../assets/images/prices.png'),
                       materialName:'Paste',onPress:()=>{Actions.calculator({
                        formulaList: [
                          {
                            formula: (x,y) => x * y * 0.17 ,
                            text: "paste(kg)"
                          },
                          
                        ],two:true,firstPlaceholder:"Walls area (m2)",secondPlaceholder:"no. of layers",title:"Paste"
                       })}},
                       {key:7,materialPic:require('../assets/images/prices.png'),
                       materialName:'Paint',onPress:()=>{Actions.calculator({
                        formulaList: [
                          {
                            formula: (x,y) => x * y * 0.067 ,
                            text: "paint(litre)"
                          },
                          
                        ],two:true,firstPlaceholder:"Walls area (m2)",secondPlaceholder:"no. of layers",title:"Paint"
                       })}},
                       {key:8,materialPic:require('../assets/images/prices.png'),
                       materialName:'Bitumen Insulation',onPress:()=>{Actions.calculator({
                        formulaList: [
                          {
                            formula: (x,y) => x * y * 0.5 ,
                            text: "bitumen(kg)"
                          },
                          
                        ],two:true,firstPlaceholder:"Insulation surface (m2)",secondPlaceholder:"no. of layers",title:"Bitumen Insulation"
                       })}},
                       {key:9,materialPic:require('../assets/images/prices.png'),
                       materialName:'Membrane Insulation',onPress:()=>{Actions.calculator({
                        formulaList: [
                          {
                            formula: (x,y) => x * y * 0.112 ,
                            text: "mimberane(roll)"
                          },
                          
                        ],two:true,firstPlaceholder:"Insulation surface (m2)",secondPlaceholder:"no. of layers",title:"Membrane Insulation"
                       })}},
                       {key:10,materialPic:require('../assets/images/prices.png'),
                       materialName:'Steel',onPress:()=>{Actions.calculator({
                        formulaList: [
                          {
                            formula: x => x * x *0.00785 ,
                            text: "area(cm2)"
                          },
                          {
                            formula: x => x * x / 162 ,
                            text: "weight(kg/m)"
                          },
                          {
                            formula: x => x * 13500 ,
                            text: "steel Bars number per ton"
                          },
                          
                        ],two:false,firstPlaceholder:"Skewer Diameter",title:"Steel"
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