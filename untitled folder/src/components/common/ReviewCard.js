import React from 'react';
import { View,
	Text,Dimensions } from 'react-native';
import {
  Thumbnail
} from "native-base"
import EstyleSheet from "react-native-extended-stylesheet"
import ReadMore from "react-native-read-more-text"

import Fixed5Stars from "./Fixed5Stars"

const { width, height } = Dimensions.get('window')

const _renderTruncatedFooter = () => {
  return (
		<Text style={{color: "#484848", marginTop: 5}} onPress={() => {}}>
			Read more
		</Text>
  )
}

const ReviewCard = (props) => {
	const { containerStyle,reviewTitleTxt,reviewDateTxt,jobTitleTxt,
		reviewTextTxt,usernameTxt } = styles;
	return (
		<View style={containerStyle}>
			<View style={{flexDirection:'row',marginBottom:10}}>
			 <Thumbnail small source={props.userPic} /> 
			 <View style={{marginLeft:16}}>
				 <Text style={usernameTxt}>{props.username}</Text>
				 <View style={{flexDirection:'row'}}>
				 	<Text style={jobTitleTxt}>{props.jobTitle}</Text>
				 	<Text style={reviewDateTxt}>{props.reviewDate}</Text>
				 </View>
			 </View>

			</View>
			<Fixed5Stars iconStyle={{ marginRight: 3 }}/>

			<Text style={reviewTitleTxt}>{props.reviewTitle}</Text>
			<ReadMore
				numberOfLines={2}
				renderTruncatedFooter={this._renderTruncatedFooter}>
				<Text style={reviewTextTxt}>{props.reviewText}</Text>

			</ReadMore>
    </View>

		);
			}


const styles = EstyleSheet.create({
	containerStyle: {
		backgroundColor:'white',
		width:"100%",
		// height:152,
		elevation: 5,
		paddingLeft:16,
		paddingVertical: "1rem",
		marginTop: 10
	},
	usernameTxt:{
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

})
export  {ReviewCard};