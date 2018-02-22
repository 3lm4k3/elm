import React from "react"
import { 
  StyleSheet, 
  Text, 
  View,
  Dimensions,
  StatusBar,
  ScrollView
} from 'react-native';

import Icon from "react-native-vector-icons/Feather"
import LineIcon from "react-native-vector-icons/SimpleLineIcons"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import { Actions } from 'react-native-router-flux';



import Header from "./Header/index"
import NewStatus from "./NewStatus/index"
import PostsList from "./PostsList/index"
import SearchBar from "./common/HeaderSearchBar"
import Carrousel from "./common/Carrousel"

import styles from "./styles"
import cstyles from "./common/style"
const { width, height } = Dimensions.get('window')
export default class CalculationsScreen extends React.Component {
  render(){
    return(
       <View style={styles.container}>
        <StatusBar
          hidden={ showImageModal }
          backgroundColor="#F7F7F7"
          barStyle="dark-content"
        />
        <Header color="#F7F7F7" >
          <View style={cstyles.left} >
            <Button transparent onPress={() => Actions.login()}>
              <Thumbnail small source={{uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg'}} />   
            </Button>         
          </View>
          <View style={cstyles.body} >
            <SearchBar color="#E8E9EA" onChangeText={(text) => this.setState({searchText: text})}  />
          </View>
          <View style={cstyles.right} >
            <Button transparent>
              <View style={cstyles.iconWrapper} >
                <View style={cstyles.iconNotification} />
                <Icon name="bell" size={30}  />
              </View>
            </Button>
          </View>
        </Header>
       </View>
      );
  }

  }