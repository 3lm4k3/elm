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

export default class HowToScreen extends React.Component {

	constructor(props){
		super(props);
	this.state = {
		
		 	entries: [
      {
       	slide: "Slide Details",
      },
      {
        slide: "Slide Details",
      },
      {
        slide: "Slide Details",
      },
    ]
		 }
	}
	_renderItem = ({item, index}) => {
    
   
      return (
        <View style={styles.container}>
          <Text style={styles.slide}>{item.slide}</Text>
          
          
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
	
	
	slide:{
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