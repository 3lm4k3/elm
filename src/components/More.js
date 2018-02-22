import React from 'react';
import {Text,Dimensions, View, 
  StyleSheet,StatusBar,Image,TouchableOpacity,FlatList} from 'react-native';

import { Actions,PARAMS } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import Header from "./Header/index"
import cstyles from "./common/style"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import LineIcon from "react-native-vector-icons/SimpleLineIcons"
import { List, ListItem } from "react-native-elements";
import { 
  Button,
  Thumbnail,Footer,
  FooterTab,
} from "native-base"
import SearchBar from "./common/HeaderSearchBar"
import Icon from "react-native-vector-icons/Feather"
const { width, height } = Dimensions.get('window');

 
export default class MoreScreen extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      
      data: [	{key:1,title: 'My bids',avatar:require('../assets/images/more-mybids-ico.png'),page:() => Actions.bids()},
      			{key:2,title: 'My proposals',avatar:require('../assets/images/more-myproposals-ico.png'),page:() => Actions.bids()},
      		 	{key:3,title: 'Today prices',avatar:require('../assets/images/more-todayprice-ico.png'),page:() => Actions.stocks()},
			 	{key:4,title: 'Blogs',avatar:require('../assets/images/more-blogs-ico.png'),page:() => Actions.newsfeed()},
			 	{key:5,title: 'Quick calc',avatar:require('../assets/images/more-quickcal-ico.png'),page:() => Actions.calculator()},
			 	{key:6,title: 'Finishing',avatar:require('../assets/images/more-finishing-ico.png'),page:() => Actions.References()},
			 	{key:7,title: 'Codes',avatar:require('../assets/images/more-cods-ico.png'),page:() => Actions.References()},
			 	{key:8,title: 'Tanfez',avatar:require('../assets/images/more-tanfez-ico.png'),page:() => Actions.References()},
			 	{key:9,title: 'Roads',avatar:require('../assets/images/more-roads-ico.png'),page:() => Actions.References()},
			 	{key:10,title: 'Tenders “from the gov”',avatar:require('../assets/images/more-tenders-ico.png'),page:() => Actions.References()},
			 	{key:11,title: 'Jobs',avatar:require('../assets/images/more-jobs-ico.png'),page:() => Actions.References()},
			 	{key:12,title: 'downloaded pdfs',avatar:require('../assets/images/more-pdfs-ico.png'),page:() => Actions.References()},
			 	{key:13,title: 'Membership Plans',avatar:require('../assets/images/more-membership-ico.png'),page:() => Actions.References()},
			 	{key:14,title: 'My Basket',avatar:require('../assets/images/more-mybasket-ico.png'),page:() => Actions.References()},
			 	{key:15,title: 'Drafs',avatar:require('../assets/images/more-drafs-ico.png'),page:() => Actions.References()},
			 	{key:16,title: 'Offers',avatar:require('../assets/images/more-offers-ico.png'),page:() => Actions.References()},



			 	],
      
    };
    
  }
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  };
  render(){
  	const { container,icon,profileSheet,createBid,profileArrow,profilePic,userName,userProfession } = styles;
  	return(
  		<View style={container}>
  			<StatusBar
          		
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
  			
  			<LinearGradient colors={['#5871B5', '#935CAE']} 
  				start={{ x: 0, y: 1 }}
  				end={{ x: 1, y: 1 }}
  				style={profileSheet}>
  				<Thumbnail style={profilePic} size={25} source={require('../assets/images/abdo.png')}>

				</Thumbnail>

				<View style={{marginLeft:16}}>
					<Text style={userName}>Abdo Arwish</Text>
					<Text style={userProfession}>Super Human Being</Text>
				</View>
				<TouchableOpacity style={profileArrow}>
					<Icon name="chevron-right" size={30} style={{color: 'white'}} />
				</TouchableOpacity>

  			</LinearGradient>
  			<Text style={createBid}>
  				Create a Bid
  			</Text>
  			<List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0,flex:1 }}>
	        <FlatList
	          data={this.state.data}
	          renderItem={({ item }) => (
	            <ListItem
	              roundAvatar
	              chevronColor='black'
	              title={`${item.title}`}
	              avatar={<LinearGradient colors={['#5871B5', '#935CAE']} style={icon}>
	              			<Image  source={item.avatar} />
	              		</LinearGradient>}
	              containerStyle={{ borderBottomWidth: 0}}
	              onPress={item.page}

	            />
	          )}

	          ItemSeparatorComponent={this.renderSeparator}
	          
	        />
	      </List>
	      <Footer style={cstyles.footer} >
          <FooterTab style={cstyles.footerTab}>
            <Button vertical>
              <FontAwesome name="newspaper-o" size={30} color="#484848" />
              <Text>Feeds</Text>
            </Button>
            <Button vertical onPress={()=> Actions.profiles()}>
              <Icon name="users" size={30} color="#484848" />
              <Text>Profiles</Text>
            </Button>
            <Button vertical>
              <LineIcon name="tag" size={30} color="#484848"  />
              <Text>Market</Text>
            </Button>
            <Button vertical onPress={()=> Actions.bids()}>
              <Icon name="x" size={30} color="#484848" />              
              <Text>Bids</Text>
            </Button>
            <Button vertical onPress={()=> Actions.more()}>
              <Icon name="x" size={30} color="#484848" />              
              <Text>More</Text>
            </Button>
            </FooterTab>
        </Footer>
  		</View>


  		);

  }


}

const styles = {
	container:{
		flex:1,
		backgroundColor:'white',
	},
	profileArrow:{
		marginLeft:width*0.36,
	},
	icon:{
		width:50,
		height:50,
		justifyContent:'center',
		alignItems:'center',
		borderRadius:40
	},
	createBid:{
		color:'#935CAE',
		backgroundColor:'transparent',
		fontSize:22,
		fontWeight:'bold',
		marginTop:25,
		marginBottom:2,
		marginLeft:16,
	},
	userName:{
		color:'#FCFE80',
		backgroundColor:'transparent',
		fontWeight:'bold',
		fontSize:16,
		
	},
	userProfession:{
		color:'white',
		backgroundColor:'transparent',
		fontWeight:'normal',
		fontSize:12,
	},
	profilePic:{
		
		marginLeft:16,
	},
	profileSheet:{
		flexDirection:'row',
		alignItems:'center',
		width:width,
		height:68,
	},

}