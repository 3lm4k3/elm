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

export default class MembershipScreen extends React.Component {

	constructor(props){
		super(props);
	this.state = {
		
		 	entries: [
      {
        plan: "Plans Details",
        planDetails:"- Lorem ipsum dolor sit amet, consectetur adipiscing elit.       - Lorem ipsum dolor sit amet, consectetur adipiscing elit.       - Lorem ipsum dolor sit amet, consectetur adipiscing elit.       - Lorem ipsum dolor sit amet, consectetur adipiscing elit.       - Lorem ipsum dolor sit amet, consectetur adipiscing elit.       - Lorem ipsum dolor sit amet, consectetur adipiscing elit.       - Lorem ipsum dolor sit amet, consectetur adipiscing elit.       - Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        planPrice:"200 EGP/"
      },
      {
        plan: "Plans Details",
        planDetails:"- Lorem ipsum dolor sit amet, consectetur adipiscing elit.       - Lorem ipsum dolor sit amet, consectetur adipiscing elit.       - Lorem ipsum dolor sit amet, consectetur adipiscing elit.       - Lorem ipsum dolor sit amet, consectetur adipiscing elit.       - Lorem ipsum dolor sit amet, consectetur adipiscing elit.       - Lorem ipsum dolor sit amet, consectetur adipiscing elit.       - Lorem ipsum dolor sit amet, consectetur adipiscing elit.       - Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        planPrice:"200 EGP/"
      },
      {
        plan: "Plans Details",
        planDetails:"- Lorem ipsum dolor sit amet, consectetur adipiscing elit.       - Lorem ipsum dolor sit amet, consectetur adipiscing elit.       - Lorem ipsum dolor sit amet, consectetur adipiscing elit.       - Lorem ipsum dolor sit amet, consectetur adipiscing elit.       - Lorem ipsum dolor sit amet, consectetur adipiscing elit.       - Lorem ipsum dolor sit amet, consectetur adipiscing elit.       - Lorem ipsum dolor sit amet, consectetur adipiscing elit.       - Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        planPrice:"200 EGP/"
      },
    ]
		 }
	}
	_renderItem = ({item, index}) => {
    
   
      return (
        <View style={styles.container}>
          <Text style={styles.plan}>{item.plan}</Text>
          <Text style={styles.planDetails}>{item.planDetails}</Text>
          <View style={{flexDirection:'row'}}>
          <Text style={styles.planPrice}>{item.planPrice}</Text>
          <Text style={styles.perYear}>per year</Text>
          </View>
      </View>
  );
  }
	render(){
		const {linearGradient,back} = styles;
		const {entries} = this.state;

		return(
			<LinearGradient colors={['#5871B5', '#935CAE']} style={linearGradient}>
			<Button style={back} onPress={() => Actions.pop()} >
	            <Image  source={require('../assets/images/back-arrow-white.png')}>
			    </Image>
          	</Button>
				<Carousel
            
            data={entries}
            renderItem={this._renderItem}
            sliderWidth={Dimensions.get("window").width}
            itemWidth={175}
            containerCustomStyle={{marginVertical: 25}}
            activeSlideAlignment="start"
            contentContainerCustomStyle={{marginLeft: 25}}
            firstItem={1}
            layout={'default'} 
          />
			</LinearGradient>

			);
	}


	}
const styles = {
	linearGradient:{
		flex:1,
		

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
		marginBottom:height*0.15	,
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