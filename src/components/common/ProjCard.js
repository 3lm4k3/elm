import React from 'react';
import { View,Text,Image,ImageBackground,Dimensions } from 'react-native';
import StarRating from './StarRating';
const { width, height } = Dimensions.get('window')
const ProjCard = (props) => {
	return ( 
		<View style={styles.containerStyle}>
			<ImageBackground style={styles.image} source={props.icon} >
				<View style={{flexDirection:'row',justifyContent:'space-between',
							marginLeft:5,marginRight:5,marginTop:7.29}}>
					<View style={{flexDirection:'row'}}>
						<Image source={require('../../assets/images/product-views-ico.png')}></Image>
						<Text style={styles.seenNumText}>{props.seenNum}</Text>
					</View>
					<Image style={styles.save} source={require('../../assets/images/mark-ico-notactive.png')}></Image>
					
				</View>

			</ImageBackground>

			<Text style={styles.textStyle} >{props.headerText}</Text>
			<View style={{flexDirection:'row', marginLeft:18,marginTop:3.47}}>
			<StarRating
				maxStars={5}
			    rating={props.ratingStars}
			    starSize={10}
			    selectStar={require('../../assets/images/product-rating-full.png')}
			    unSelectStar={require('../../assets/images/product-rating-empty.png')}
			    valueChanged={this._valueChanged}

			    /><Text> </Text>
			    </View>
			
		</View>

		);
};

const styles = {
	containerStyle: {
		backgroundColor:'white',
		borderWidth: 1,
		borderRadius: 2,
		borderColor: '#ddd',
		borderBottomWidth: 0,
		shadowColor: '#000',
		width:179,
		height:height*0.285,
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 2,
		elevation: 1,
		
		marginTop: 10
	},
	save:{
		marginTop:-5,
	},
	image:{
		backgroundColor:'grey',
		width:177,
		height:134,

	},
	
	
	seenNumText:{
		backgroundColor:'transparent',
		
		
		marginLeft:3,
		
		
		fontSize:12,
		fontWeight:'bold',
		color:'white'
	},
	textStyle:{
		backgroundColor:'transparent',
		
		marginTop:height*0.02,
		paddingLeft:18,
		
		fontSize:12,
		fontWeight:'bold',
		color:'#8A8A8F',
		
		
	},

};
export  {ProjCard};