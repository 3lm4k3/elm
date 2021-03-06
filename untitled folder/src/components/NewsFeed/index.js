import React from "react"
import { 
  StyleSheet, 
  Text, 
  View,
  Dimensions,
  StatusBar,
  ScrollView
} from 'react-native';
import { 
  Button,
  Item,
  Input,
  Thumbnail,
  H3,
} from "native-base"
import Icon from "react-native-vector-icons/Feather"
import { Actions } from 'react-native-router-flux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


import Header from "../Header/index"
import Footer from "../Footer/index"
import NewStatus from "../NewStatus/index"
import PostsList from "../PostsList/index"
import SearchBar from "../common/HeaderSearchBar"
import Carrousel from "../common/Carrousel"

import styles from "./styles"
import cstyles from "../common/styles"


const { width, height } = Dimensions.get('window')

export default class NewsFeed extends React.Component {
  state = {
    searchText: "",
    loadMore: false,
    reachedIndicator: false,
    showImageModal: false

  }
  loadMorePosts = () => {
    // After Loading
    // this.setState({reachedIndicator: false})
    
  }
  handleImageClick = () => {
    this.setState({
      showImageModal: true
    })
  }
  handleScroll = (event) => {
    const pageYOffset = (event.nativeEvent.contentOffset.y)
    const scrollViewHeight = event.nativeEvent.layoutMeasurement.height
    this.scrollIndicator.measure((fx, fy, width, height, px, py) => {

        if((py - scrollViewHeight - height - 50 /* marginBottom */) <= 0 && !this.state.reachedIndicator) {
          console.log(true);
          this.setState({reachedIndicator: true})
          this.loadMorePosts()
        }

    })
  }
  render () {
    console.log("Width:", Dimensions.get("window").width)
    const { searchText, showImageModal } = this.state
    return (
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
        <KeyboardAwareScrollView bounces alwaysBounceVertical onScroll={this.handleScroll}
          showsVerticalScrollIndicator={false}
          style={{ paddingTop: 35, paddingBottom: 200}} extraScrollHeight={150} enableOnAndroid >
          <H3 style={[cstyles.subTitle,{paddingLeft: 15}]}>Explore El Mawkaa</H3>
          <Carrousel/>
          <H3 style={[cstyles.subTitle,{paddingLeft: 15}]}>Explore People</H3>
          <NewStatus/>
          <PostsList/>
          <View style={styles.scrollIndicator} ref={ref => this.scrollIndicator = ref} ></View>
        </KeyboardAwareScrollView>
        { !showImageModal &&
          <Footer/>
        }
        {
          showImageModal &&
          <ImagePreview isVisible={showImageModal} 
          onClose={() => this.setState({showImageModal: false})} />
        }
      </View>
    )
  }
}