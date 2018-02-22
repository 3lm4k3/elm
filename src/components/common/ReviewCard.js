import React from 'react';
import { View,Text,Image,ImageBackground,Dimensions } from 'react-native';
import StarRating from './StarRating';
import { 
  
  Thumbnail
 
} from "native-base"
const { width, height } = Dimensions.get('window')
const ReviewCard = (props) => {
	const { containerStyle,reviewTitleTxt,reviewDateTxt,jobTitleTxt,
		reviewTextTxt,userNameTxt } = styles;
	return (
		<View style={containerStyle}>
			<View style={{flexDirection:'row',marginBottom:10}}>
			 <Thumbnail small source={props.userPic} /> 
			 <View style={{marginLeft:16}}>
				 <Text style={userNameTxt}>{props.userName}</Text>
				 <View style={{flexDirection:'row'}}>
				 	<Text style={jobTitleTxt}>{props.jobTitle}</Text>
				 	<Text style={reviewDateTxt}>{props.reviewDate}</Text>
				 </View>
			 </View>

			</View>
			<StarRating

				maxStars={5}
			    rating={props.ratingStars}
			    starSize={10}
			    selectStar={require('../../assets/images/review-rating-full.png')}
			    unSelectStar={require('../../assets/images/view-rating-empty.png')}
			    valueChanged={this._valueChanged}

			    />

			<Text style={reviewTitleTxt}>{props.reviewTitle}</Text>
			<Text style={reviewTextTxt}>{props.reviewText}</Text>
			    
			
		</View>

		);
			}


const styles = {
	containerStyle: {
		backgroundColor:'white',
		borderWidth: 1,
		borderRadius: 2,
		borderColor: '#ddd',
		borderBottomWidth: 0,
		shadowColor: '#000',
		width:width,
		height:152,
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 2,
		elevation: 1,
		paddingLeft:16,
		paddingTop:13,
		marginTop: 10
	},
	userNameTxt:{
		color:'#484848',
		backgroundColor:'transparent',
		fontWeight:'normal',
		fontSize:14,

	},
	jobTitleTxt:{
		color:'#5871B5',
		backgroundColor:'transparent',
		fontWeight:'normal',
		fontSize:9,
	},
	reviewDateTxt:{
		color:'#935CAE',
		backgroundColor:'transparent',
		fontSize:9,
		fontWeight:'normal',
		marginLeft:11
	},
	reviewTitleTxt:{
		color:'#484848',
		fontWeight:'bold',
		fontSize:12,
		marginTop:8,
	},
	reviewTextTxt:{
		color:'#95989A',
		fontWeight:'normal',
		marginTop:8,
		fontSize:12
	},



};
export  {ReviewCard};