import React from 'react';
import { View,Text,Image,Dimensions } from 'react-native';
import StarRating from './StarRating';
const { width, height } = Dimensions.get('window')
showStars = (stars,ratingStars) => {

	if(stars){
	return(
		<StarRating
				maxStars={5}
			    rating={ratingStars}
			    starSize={10}
			    selectStar={require('../../assets/images/select_star.png')}
			    unSelectStar={require('../../assets/images/unselect_star.png')}
			    valueChanged={this._valueChanged}

			    />

		);
	}
}
const CategoryCard = (props) => {
	
	return (
		<View style={styles.containerStyle}>
			<Image style={styles.image} source={props.icon} ></Image>
			<Text style={styles.textStyle} >{props.headerText}</Text>
			{this.showStars(props.stars,props.ratingStars)}
			
			
		</View>

		);
};

const styles = {
	containerStyle: {
		borderWidth: 1,
		borderRadius: 2,
		borderColor: '#ddd',
		borderBottomWidth: 0,
		shadowColor: '#000',
		width:161,
		height:173,
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 2,
		elevation: 1,
		
		marginTop: 10
	},
	image:{
		backgroundColor:'#95989A',
		width:159,
		height:173*0.7,

	},
	textStyle:{
		backgroundColor:'white',
		width:159,
		height:173*0.3,
		paddingTop:12,
		
		paddingLeft:18,
		
		fontSize:12,
		fontWeight:'bold',
		color:'#8A8A8F',
		
		
	},

};
export  {CategoryCard};