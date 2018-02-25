import React from 'react';
import {Text,Dimensions, View, 
  StyleSheet, Image,
  TouchableOpacity,
  TextInput,
  StatusBar,
  ScrollView,
  TouchableHighlight} from 'react-native';
import { Divider } from 'react-native-elements';
import { Actions,PARAMS } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import TagList from './TagList';
import reducers from '../reducers';
import cstyles from "./common/style"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import LineIcon from "react-native-vector-icons/SimpleLineIcons"
import Icon from "react-native-vector-icons/Feather"

import { 
  Button,
  Thumbnail,Footer,
  FooterTab,
} from "native-base"

import { Card,Header,CategoryCard,CardSection,Input,Spinner,Checkbox } from './common';
const { width, height } = Dimensions.get('window')
export default class ProfilesScreen extends React.Component {

	render(){
		const { textStyle,viewStyle,back,search,title } = styles;
		return(
			<View style={{ backgroundColor:'white',flex:1}}>
				<View style={viewStyle}>
					<TouchableOpacity
	            
			            style={back}

			            onPress={() => Actions.pop()}
			         > 
			            <Image
			               source={require('../assets/images/prices.png')}
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
				<ScrollView>
					<Text style={title}>Pros Category</Text>
					<View style={{ flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
						<TouchableOpacity
							onPress={() => Actions.CategoryProsScreen(PARAMS)}
						>
							<CategoryCard 
							icon={require('../assets/images/prices.png')}
							headerText="hello">
							
							</CategoryCard>
						</TouchableOpacity >
						<TouchableOpacity
							onPress={() => Actions.CategoryProsScreen(PARAMS)}
						>
							<CategoryCard 
							icon={require('../assets/images/prices.png')}
							headerText="hello">
							
							</CategoryCard>
						</TouchableOpacity>
					</View>
					<View style={{ flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
						<TouchableOpacity
							onPress={() => Actions.CategoryProsScreen(PARAMS)}
						>
							<CategoryCard 
							icon={require('../assets/images/prices.png')}
							headerText="hello">
							
							</CategoryCard>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => Actions.CategoryProsScreen(PARAMS)}
						>
							<CategoryCard 
							icon={require('../assets/images/prices.png')}
							headerText="hello">
							
							</CategoryCard>
						</TouchableOpacity>
					</View>
					<Text style={title}>Our Pros.</Text>
					<Provider store={createStore(reducers)}>
				      <View style={{ flex: 1,marginTop:10}}>
				        
				        <TagList />
				      </View>
				    </Provider>
				</ScrollView>

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
	viewStyle: {
		
		alignItems:'center',
		justifyContent:'center',
		backgroundColor:'#F7F7F7',
		
		flexDirection:'row',
		height: 60,
		paddingTop: 15,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2},
		shadowOpacity: 0.2,
		elevation: 2,
		position: 'relative'
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
	title:{
		fontWeight:'bold',
		fontSize:22,
		color:'#935CAE',
		marginTop:27,
		marginLeft:16,
		backgroundColor:'white',
		width:147,
		height:26,
	},
	back:{
	marginTop:10,
    marginLeft:18,
    marginRight:18,
  },
	textStyle:{
		fontSize: 20
	}
};
