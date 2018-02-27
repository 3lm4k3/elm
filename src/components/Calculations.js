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
                       materialName:'material name'},

                      {key:2,materialPic:require('../assets/images/prices.png'),
                        materialName:'material name'},
                      {key:3,materialPic:require('../assets/images/prices.png'),
                        materialName:'material name'},
                      {key:4,materialPic:require('../assets/images/prices.png'),
                        materialName:'material name'},
                      {key:5,materialPic:require('../assets/images/prices.png'),
                        materialName:'material name'},

              
            ]}
            renderItem={({item}) => 
                <TouchableOpacity
                  onPress={() => Actions.home()}
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
                       materialName:'material name'},

                      {key:2,materialPic:require('../assets/images/prices.png'),
                        materialName:'material name'},
                      {key:3,materialPic:require('../assets/images/prices.png'),
                        materialName:'material name'},
                      {key:4,materialPic:require('../assets/images/prices.png'),
                        materialName:'material name'},
                      {key:5,materialPic:require('../assets/images/prices.png'),
                        materialName:'material name'},
              
            ]}
            renderItem={({item}) => 
                <TouchableOpacity
                  onPress={() => Actions.home()}
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