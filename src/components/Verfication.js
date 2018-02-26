	import React from "react"
import { 
  StyleSheet, 
  Text, 
  View,Image,TextInput,
  Dimensions,
  StatusBar,
  ScrollView,TouchableOpacity,FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { Actions } from 'react-native-router-flux';

import FontAwesome from "react-native-vector-icons/FontAwesome"
import Icon from "react-native-vector-icons/Feather"
import LinearGradientView from "react-native-linear-gradient"
import { AreaChart } from 'react-native-svg-charts'
import { 
  Button,
  Thumbnail,Footer,
  FooterTab,
} from "native-base"

import Carousel, { Pagination } from 'react-native-snap-carousel';
const { width, height } = Dimensions.get('window')

export default class VerficationScreen extends React.Component {

	constructor(props){
		super(props);
	
	}
	
	render(){
		const {linearGradient,back,done,left,notCompleted,notCompletedBtn} = styles;
		

		return(
			<LinearGradient colors={['#5871B5', '#935CAE']} style={linearGradient}>
			<Button style={back} onPress={() => Actions.pop()} >
	            <Image  source={require('../assets/images/back-arrow-white.png')}>
			    </Image>
          	</Button>

				<Text style={left}>Whats left</Text>
				<View style={{justifyContent:'space-between',marginLeft:16,marginRight:16}}>
				<TouchableOpacity style={notCompletedBtn}>
					<View style={{flexDirection:'row',justifyContent:'space-between'}}>
						<Text style={notCompleted}>SMS verfication</Text>
						<Image source={require('../assets/images/arrow-white.png')}></Image>
					</View>
				</TouchableOpacity>

				<TouchableOpacity style={notCompletedBtn}>
					<View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:5,marginRight:5}}>
						<Text style={notCompleted}>ID scan</Text>
						<Image source={require('../assets/images/arrow-white.png')}></Image>
					</View>
				</TouchableOpacity>

				<TouchableOpacity style={notCompletedBtn}>
					<View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:5,marginRight:5}}>
						<Text style={notCompleted}>Interview</Text>
						<Image source={require('../assets/images/arrow-white.png')}></Image>
					</View>
				</TouchableOpacity>
				</View>
				<Text style={left}>Completed</Text>
				<View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:16,marginRight:16}}>
					<Text style={done}>Log in with Facebook</Text>
					<Image source={require('../assets/images/green-checkmark.png')}></Image>
				</View>
				

			</LinearGradient>

			);
	}


	}
const styles = {
	linearGradient:{
		flex:1,
		

	},
	done:{
		fontWeight:'normal',
		fontSize:16,
		color:'#76DB6E'

	},
	left:{
		marginBottom:25,
		marginTop:50,
		fontWeight:'bold',
		color:'#FCFE80',
		fontSize:22,
		marginLeft:16,
	},
	notCompleted:{
		fontWeight:'normal',
		fontSize:16,
		color:'white',
	},
	notCompletedBtn:{
		marginBottom:52
	},
	planPrice:{
		fontSize:23,
		fontWeight:'bold',
		color:'#95989A',
	},
	perYear:{
		fontSize:14,
		fontWeight:'normal',
		color:'#95989A',
		paddingTop:10
	},
	plan:{
		fontWeight:'bold',
		fontSize:18,
		color:'#95989A',
		marginBottom:10,
	},
	back:{
		marginTop:height*0.02,
		
		backgroundColor:'transparent',
		marginLeft:width*0.07,
	},
	planDetails:{
		fontWeight:'normal',
		fontSize:12,
		color:'#95989A',
		marginLeft:12,
		marginRight:8,
		paddingRight:20,
		marginBottom:4,
	},
	container:{
		width:width*0.62,
		height:height*0.5,
		backgroundColor:'white',
		borderRadius:10,
		borderColor:'#707070',
		borderWidth:1,
		shadowOffset: { width: 0, height: 6 },
		paddingLeft:12,
		paddingTop:18,
		alignItems:'center',

	},
	

}