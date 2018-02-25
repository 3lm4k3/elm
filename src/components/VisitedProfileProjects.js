import React from 'react';
import {Text,Dimensions, View, 
  StyleSheet, Image,
  TouchableOpacity,
  TextInput,
  StatusBar,
  ScrollView,
  TouchableHighlight,FlatList} from 'react-native';
import { List, ListItem } from "react-native-elements";
import { Actions,PARAMS } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';

import Tabs from "./common/Tabs";
import Post from "./Post/index";
import {
  Button,
  Thumbnail,
  Tab,TabHeading,
  Footer,
  FooterTab} from "native-base";
import cstyles from "./common/style"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import LineIcon from "react-native-vector-icons/SimpleLineIcons"
import Icon from "react-native-vector-icons/Feather"

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import TagList from './TagList';
import reducers from '../reducers';
import StarRating from './common/StarRating';
import { Card,Header,ReviewCard,CategoryCard,ProjCard,CardSection,ContactCard,Input,Spinner,
  Checkbox } from './common';
const { width, height } = Dimensions.get('window')
export default class VisitedProfileProjectsScreen extends React.Component {


	constructor(props) {
    super(props);
    //saving the checked button state for the terms & conditions to be true or false
    
    this.state = { userOnline:true,normalUser:false,
    	wallToggle:false,aboutToggle:false,projectsToggle:true,moreToggle:false,

    	 data: [	{key:1,title: 'Post title goes here',subtitle:'Title goes here',date:'December 12 at 5:30 PM',avatar:require('../assets/images/abdo.png'),page:() => Actions.bids()},
      				{key:2,title: 'Post title goes here',subtitle:'Title goes here',date:'December 12 at 5:30 PM',avatar:require('../assets/images/abdo.png'),page:() => Actions.bids()},
      				{key:3,title: 'Post title goes here',subtitle:'Title goes here',date:'December 12 at 5:30 PM',avatar:require('../assets/images/abdo.png'),page:() => Actions.bids()},
      				{key:4,title: 'Post title goes here',subtitle:'Title goes here',date:'December 12 at 5:30 PM',avatar:require('../assets/images/abdo.png'),page:() => Actions.bids()},
      				{key:5,title: 'Post title goes here',subtitle:'Title goes here',date:'December 12 at 5:30 PM',avatar:require('../assets/images/abdo.png'),page:() => Actions.bids()},




			 	],

    	 }


  }

  	renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#707070",
          marginLeft: "3%"
        }}
      />
    );
  };
	_normalUser(normalUser){
		const { projNum,projText,followersNum,followersText,
				followingNum,followingText,wallTxt,aboutTxt,projectsTxt,moreTxt,
			linearGradient,userName,yellowSeparator,whiteSeparator,
			userProfilePic,ratingStyle,profession,wallBtn,moreBtn,aboutBtn,projectsBtn,
			intro,addressPointsTitle,actualAddress,stepsLeftTxt,points,stepsLeft,tabsText,skillName,skillButton,bookmarkTitle,bookmarkSubtitle,bookmarkDate } = styles;
		if(normalUser){
			return(
				<ScrollView>
				<View style={{flexDirection:'row',justifyContent:'space-around',marginTop:16}}>
						<View style={{alignItems:'center', justifyContent:'center'}}>
							<Text style={projNum}>483</Text>
							<Text style={projText}>Projects</Text>
						</View>
						<Text style={whiteSeparator}>⎹</Text>
						<View style={{alignItems:'center', justifyContent:'center'}}>
							<Text style={followersNum}>483</Text>
							<Text style={followersText}>Followers</Text>
						</View>
						<Text style={whiteSeparator}>⎹</Text>
						<View style={{alignItems:'center', justifyContent:'center'}}>
							<Text style={followingNum}>483</Text>
							<Text style={followingText}>Following</Text>
						</View>
					</View>

					<View
			            style={{
			              borderBottomColor: '#FFFFFF',
			              borderBottomWidth: 1,
			              justifyContent: 'center',
			              marginLeft:16,
			              marginRight:16,
			              marginTop:8.5,
			            }}
			          />

			        
			        <Tabs transparent={true} >
			        	<Tab heading={<TabHeading style={{backgroundColor:'transparent'}}><Text style={tabsText}>Wall</Text></TabHeading>}  style={{ backgroundColor:'transparent'}}>
			        		<Post/>
							<Post sponsored={true}/>
							    
						    <Post sponsored={true}/>
						    <Post selling={true}/>
			        	</Tab>
			        	<Tab heading={<TabHeading style={{backgroundColor:'transparent'}}><Text style={tabsText}>About</Text></TabHeading>} style={{ backgroundColor:'transparent'}}>
			        		<Text style={addressPointsTitle}>Address</Text>
			        		<Text style={actualAddress}>Address goes here,Cairo,Egypt</Text>
			        		<Text style={addressPointsTitle}>Budget & Points</Text>
			        		<View style={{flexDirection:'row'}}>
			        			<Text style={points}>34,509</Text>
			        			<Image source={require('../assets/images/home.png')}></Image>
			        			<Image source={require('../assets/images/home.png')}></Image>
			        			<Image source={require('../assets/images/home.png')}></Image>
			        		</View>
			        		<Text style={addressPointsTitle}>profession</Text>
			        		<View style={{flexDirection:'row',marginLeft:16}}>
			        			<TouchableOpacity style={skillButton}><Text style={skillName}>Skill name</Text></TouchableOpacity>
			        			<TouchableOpacity style={skillButton}><Text style={skillName}>Skill name</Text></TouchableOpacity>
			        			<TouchableOpacity style={skillButton}><Text style={skillName}>Skill name</Text></TouchableOpacity>
			        		</View>
			        		<View style={{flexDirection:'row',marginLeft:16,marginTop:15}}>
			        			<TouchableOpacity style={skillButton}><Text style={skillName}>Skill name</Text></TouchableOpacity>
			        			<TouchableOpacity style={skillButton}><Text style={skillName}>Skill name</Text></TouchableOpacity>
			        		</View>
			        		<Text style={addressPointsTitle}>Skills</Text>
			        		<View style={{flexDirection:'row',marginLeft:16}}>
			        			<TouchableOpacity style={skillButton}><Text style={skillName}>Skill name</Text></TouchableOpacity>
			        			<TouchableOpacity style={skillButton}><Text style={skillName}>Skill name</Text></TouchableOpacity>
			        			<TouchableOpacity style={skillButton}><Text style={skillName}>Skill name</Text></TouchableOpacity>
			        		</View>
			        		<View style={{flexDirection:'row',marginLeft:16,marginTop:15}}>
			        			<TouchableOpacity style={skillButton}><Text style={skillName}>Skill name</Text></TouchableOpacity>
			        			<TouchableOpacity style={skillButton}><Text style={skillName}>Skill name</Text></TouchableOpacity>
			        		</View>
			        		<Text style={addressPointsTitle}>Reviews</Text>
			        		<ScrollView>
				        		 <FlatList
							        	
							          data={[
							            {key:1,userPic:require('../assets/images/prices.png'),
							            userName:'ali',jobTitle:"BatMan",
							            reviewDate:'December 12 at 5:30 PM',ratingStars:3,
							            reviewTitle:'Review title goes here',
							            reviewText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan nulla ac purus aliquam commodo. Vivamus pellentesque.'},

							            {key:2,userPic:require('../assets/images/prices.png'),
							            userName:'ali',jobTitle:"BatMan",
							            reviewDate:'December 12 at 5:30 PM',ratingStars:3,
							            reviewTitle:'Review title goes here',
							            reviewText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan nulla ac purus aliquam commodo. Vivamus pellentesque.'},
							            
							            
							          ]}
							          renderItem={({item}) => <ReviewCard 
												userPic={item.userPic}

												userName={item.userName}
												jobTitle={item.jobTitle}
												reviewDate={item.reviewDate}
												ratingStars={item.ratingStars}
												reviewTitle={item.reviewTitle}
												reviewText={item.reviewText}
												>
												
												</ReviewCard>
												
											}
							        />
						        </ScrollView>

			        	</Tab>
			        	<Tab heading={<TabHeading style={{backgroundColor:'transparent'}}><Text style={tabsText}>Projects</Text></TabHeading>}  style={{ backgroundColor:'transparent'}}>
			        		<ScrollView>
			        		<View style={{ flexDirection:'row',flex:1,justifyContent:'space-around',marginLeft:width*0.005}}>

						        <FlatList
						        	
						          data={[
						            {key:1,projName: 'new',seenNum:22,ratingStars:3},
						            {key:2,projName: 'Jackson',seenNum:10,ratingStars:2},
						            
						            
						          ]}
						          renderItem={({item}) => <ProjCard 
											icon={require('../assets/images/prices.png')}
											headerText={item.projName}
											seenNum={item.seenNum}
											ratingStars={item.ratingStars}
											>
											
											</ProjCard>
											
										}
						        />

						        <FlatList
						        
						          data={[
						            {key:3,projName: 'Devin',seenNum:4,ratingStars:4},
						            {key:4,projName: 'Jackson',seenNum:15,ratingStars:5},
						            
						            
						          ]}
						          renderItem={({item}) => <ProjCard 
											icon={require('../assets/images/prices.png')}
											headerText={item.projName}
											seenNum={item.seenNum}
											ratingStars={item.ratingStars}

											>
											
											</ProjCard>
											
										}
						        />


						        

						        </View>
						        </ScrollView>
						        

			        	</Tab>
			        	<Tab heading={<TabHeading style={{backgroundColor:'transparent'}}><Text style={tabsText}>Bookmark</Text></TabHeading>}  style={{ backgroundColor:'transparent'}}>
			        		
			        			<List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0,
			        				flex:1,backgroundColor:'transparent' }}>
							        <FlatList
							          data={this.state.data}
							          renderItem={({ item }) => (
							            <ListItem
							              
							              hideChevron

							              title={
							              		
									            <Text style={bookmarkTitle}>{`${item.title}`}</Text>
									          
									        }
							              subtitle={
							              		<View>
										            <Text style={bookmarkSubtitle}>{`${item.subtitle}`}</Text>
										            <Text style={bookmarkDate}>{`${item.date}`}</Text>
									          	</View>
									        }
							              
							              avatar={<Thumbnail square size={54} source={item.avatar} />}
							              containerStyle={{ borderBottomWidth: 0}}
							              onPress={item.page}

							            >
							            ItemSeparatorComponent={this.renderSeparator}

							            </ListItem>
							          )}

							          ItemSeparatorComponent={this.renderSeparator}
							          
							        />
	      						</List>
			        		
						    
						        

			        	</Tab>
			        </Tabs>
			        </ScrollView>
				);
		}else {
			return(
				<ScrollView>
				<View style={{flexDirection:'row',justifyContent:'center',marginTop:16}}>
						
						<View style={{alignItems:'center', justifyContent:'center'}}>
							<Text style={followersNum}>483</Text>
							<Text style={followersText}>Followers</Text>
						</View>
						<Text style={whiteSeparator}>⎹</Text>
						<View style={{alignItems:'center', justifyContent:'center'}}>
							<Text style={followingNum}>483</Text>
							<Text style={followingText}>Following</Text>
						</View>
					</View>
					<View style={stepsLeft}>
						<View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:9}}>
							<Text style={stepsLeftTxt}>Just 4 steps left</Text>
							<Image  source={require('../assets/images/Yellow-Arrow.png')}>
			    			</Image>
						</View>
						<View style={{backgroundColor:'#E0E0E0',borderRadius:3,width:width*0.9,height:height*0.035}}>
							<LinearGradient colors={['#5871B5', '#935CAE']} start={{ x: 0, y: 1 }}
  								end={{ x: 1, y: 1 }}
  						 		style={{width:width*0.5,height:height*0.035,borderRadius:3}}>
								<Text> </Text>
							</LinearGradient>
						</View>
					</View>
					<View
			            style={{
			              borderBottomColor: '#8A8A8F',
			              borderBottomWidth: 1,
			              justifyContent: 'center',
			              marginLeft:16,
			              marginRight:16,
			              marginTop:14,
			            }}
			          />

			        
			        <Tabs transparent={true} style={{justifyContent:'space-around',marginLeft:16}}>
			        	<Tab heading={<TabHeading style={{backgroundColor:'transparent'}}><Text style={tabsText}>Wall</Text></TabHeading>}  style={{ backgroundColor:'transparent'}}>
			        		<Post/>
							<Post sponsored={true}/>
							    
						    <Post sponsored={true}/>
						    <Post selling={true}/>
			        	</Tab>
			        	<Tab heading={<TabHeading style={{backgroundColor:'transparent'}}><Text style={tabsText}>About</Text></TabHeading>} style={{ backgroundColor:'transparent'}}>
			        		<Text style={addressPointsTitle}>Address</Text>
			        		<Text style={actualAddress}>Address goes here,Cairo,Egypt</Text>
			        		<Text style={addressPointsTitle}>Budget & Points</Text>
			        		<View style={{flexDirection:'row'}}>
			        			<Text style={points}>34,509</Text>
			        			<Image source={require('../assets/images/home.png')}></Image>
			        			<Image source={require('../assets/images/home.png')}></Image>
			        			<Image source={require('../assets/images/home.png')}></Image>
			        		</View>
			        		<Text style={addressPointsTitle}>profession</Text>
			        		<View style={{flexDirection:'row',marginLeft:16}}>
			        			<TouchableOpacity style={skillButton}><Text style={skillName}>Skill name</Text></TouchableOpacity>
			        			<TouchableOpacity style={skillButton}><Text style={skillName}>Skill name</Text></TouchableOpacity>
			        			<TouchableOpacity style={skillButton}><Text style={skillName}>Skill name</Text></TouchableOpacity>
			        		</View>
			        		<View style={{flexDirection:'row',marginLeft:16,marginTop:15}}>
			        			<TouchableOpacity style={skillButton}><Text style={skillName}>Skill name</Text></TouchableOpacity>
			        			<TouchableOpacity style={skillButton}><Text style={skillName}>Skill name</Text></TouchableOpacity>
			        		</View>
			        		<Text style={addressPointsTitle}>Skills</Text>
			        		<View style={{flexDirection:'row',marginLeft:16}}>
			        			<TouchableOpacity style={skillButton}><Text style={skillName}>Skill name</Text></TouchableOpacity>
			        			<TouchableOpacity style={skillButton}><Text style={skillName}>Skill name</Text></TouchableOpacity>
			        			<TouchableOpacity style={skillButton}><Text style={skillName}>Skill name</Text></TouchableOpacity>
			        		</View>
			        		<View style={{flexDirection:'row',marginLeft:16,marginTop:15}}>
			        			<TouchableOpacity style={skillButton}><Text style={skillName}>Skill name</Text></TouchableOpacity>
			        			<TouchableOpacity style={skillButton}><Text style={skillName}>Skill name</Text></TouchableOpacity>
			        		</View>
			        		<Text style={addressPointsTitle}>Reviews</Text>
			        		<ScrollView>
				        		 <FlatList
							        	
							          data={[
							            {key:1,userPic:require('../assets/images/prices.png'),
							            userName:'ali',jobTitle:"BatMan",
							            reviewDate:'December 12 at 5:30 PM',ratingStars:3,
							            reviewTitle:'Review title goes here',
							            reviewText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan nulla ac purus aliquam commodo. Vivamus pellentesque.'},

							            {key:2,userPic:require('../assets/images/prices.png'),
							            userName:'ali',jobTitle:"BatMan",
							            reviewDate:'December 12 at 5:30 PM',ratingStars:3,
							            reviewTitle:'Review title goes here',
							            reviewText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan nulla ac purus aliquam commodo. Vivamus pellentesque.'},
							            
							            
							          ]}
							          renderItem={({item}) => <ReviewCard 
												userPic={item.userPic}

												userName={item.userName}
												jobTitle={item.jobTitle}
												reviewDate={item.reviewDate}
												ratingStars={item.ratingStars}
												reviewTitle={item.reviewTitle}
												reviewText={item.reviewText}
												>
												
												</ReviewCard>
												
											}
							        />
						        </ScrollView>

			        	</Tab>
			        	<Tab heading={<TabHeading style={{backgroundColor:'transparent'}}><Text style={tabsText}>Bookmarks</Text></TabHeading>}  style={{ backgroundColor:'transparent'}}>
			        		
			        			<List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0,
			        				flex:1,backgroundColor:'transparent' }}>
							        <FlatList
							          data={this.state.data}
							          renderItem={({ item }) => (
							            <ListItem
							              
							              hideChevron

							              title={
							              		
									            <Text style={bookmarkTitle}>{`${item.title}`}</Text>
									          
									        }
							              subtitle={
							              		<View>
										            <Text style={bookmarkSubtitle}>{`${item.subtitle}`}</Text>
										            <Text style={bookmarkDate}>{`${item.date}`}</Text>
									          	</View>
									        }
							              
							              avatar={<Thumbnail square size={54} source={item.avatar} />}
							              containerStyle={{ borderBottomWidth: 0}}
							              onPress={item.page}

							            >
							            ItemSeparatorComponent={this.renderSeparator}

							            </ListItem>
							          )}

							          ItemSeparatorComponent={this.renderSeparator}
							          
							        />
	      						</List>
			        		
						    
						        

			        	</Tab>
			        	
			        </Tabs>
			        </ScrollView>

			);
		}
	}
  
  _onlineIndicator(userOnline){
  	if(userOnline){
  		return(
  			<Image style={{width:18,height:18,marginTop:-20,marginRight:10}} source={require('../assets/images/prices.png')}></Image>
  		);
  	}
  }

	render(){

		const {wallToggle,aboutToggle,projectsToggle,moreToggle,userOnline,normalUser} = this.state;
		const { title,ratings,subTitle,reviews,address } = this.props;
		const wallButtonBorder = wallToggle?"#FEE180":"transparent";
		const aboutButtonBorder = aboutToggle?"#FEE180":"transparent";
		const projectsButtonBorder = projectsToggle?"#FEE180":"transparent";
		const moreButtonBorder = moreToggle?"#FEE180":"transparent";
		const uploadPostIcon = normalUser? require('../assets/images/upload-ico.png')
								  : require('../assets/images/edit-ico.png');
		const { projNum,projText,followersNum,followersText,
				followingNum,followingText,wallTxt,aboutTxt,projectsTxt,moreTxt,
			linearGradient,userName,yellowSeparator,whiteSeparator,
			userProfilePic,ratingStyle,profession,wallBtn,moreBtn,aboutBtn,projectsBtn,
			intro,addressPointsTitle,actualAddress,points,tabsText,skillName,skillButton } = styles;
		return(

			<LinearGradient colors={['#5871B5', '#935CAE']} style={linearGradient}>
				<ScrollView>
				<View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:width*0.08,
								marginRight:width*0.08}}>
					<TouchableOpacity
            
		            style={styles.back}

		            onPress={() => Actions.pop()}
		          > 
		          <Image 
		               source={require('../assets/images/back-arrow-white.png')}
		            ></Image>
		          </TouchableOpacity>

		          <TouchableOpacity
            
		            style={styles.upload}

		            onPress={() => Actions.pop()}
		          > 
		          <Image source={uploadPostIcon} />
		          </TouchableOpacity>
          		</View>
					<View style={intro}>
						<View>
							<Text style={userName}>Ebrahim Anwar</Text>
							<Text style={profession}>COO & Co-Founder at Handaz</Text>
							<View style={ratingStyle}>
								<StarRating
					                maxStars={5}
					                rating={4}
					                starSize={10}
					                selectStar={require('../assets/images/profile-rating-full.png')}
					                unSelectStar={require('../assets/images/profile-rating-empty.png')}
					                valueChanged={this._valueChanged}


					              	/><Text style={{marginLeft:3,color:'white',backgroundColor:'transparent'}}>
					              		4.5
					              		</Text>
				            </View>
						</View>
						<View style={{alignItems:'flex-end'}}>
							<Thumbnail large source={require('../assets/images/building.jpg')}>

							</Thumbnail>
							{this._onlineIndicator(userOnline)}
							
						</View>
					</View>
					{this._normalUser(normalUser)}
			        
			        
			        
			    </ScrollView>

			    
			</LinearGradient> 
			);
	}
}

const styles = { 
	linearGradient:{
		flex:1,
	    
	},
	stepsLeft:{
		backgroundColor:'white',
		width:width,
		height:height*0.1,
		marginTop:14,
		paddingRight:16,
		paddingLeft:16,
		paddingBottom:6,
		paddingTop:4,
	},
	stepsLeftTxt:{
		fontSize:18,
		fontWeight:'100',
		color:'#707070'
	},
	back:{
		marginTop:20,
	},
	upload:{
		marginTop:20,
	},
	bookmarkTitle:{
		fontSize:14,
		fontWeight:'bold',
		marginLeft:18,
		color:'white',
	},
	bookmarkSubtitle:{
		fontSize:9,
		fontWeight:'normal',
		marginLeft:18,
		color:'#FCFE80'
	},
	bookmarkDate:{
		fontWeight:'normal',
		marginLeft:18,
		fontSize:9,
		color:'white',
		marginTop:8,
	},
	skillButton:{
		alignItems:'center',
		justifyContent:'center',
		marginRight:18,
		backgroundColor:'white',
		width:90,
		height:33,
		borderRadius:5,
		shadowOffset: { width: 0, height: 6 },

	},
	skillName:{
		fontWeight:'bold',
		fontSize:12,
		color:'#935CAE',
		backgroundColor:'transparent',
	},
	addressPointsTitle:{
		fontWeight:'bold',
		fontSize:22,
		marginLeft:16,
		marginTop:29,
		marginBottom:16,
		color:'#FCFE80',
		backgroundColor:'transparent'
	},
	actualAddress:{
		fontWeight:'normal',
		fontSize:14,
		marginLeft:16,
		color:'white',
		backgroundColor:'transparent',
		
		textDecorationLine: 'underline',
		shadowOffset: { width: 0, height: 1 },
	},
	tabsText:{
		backgroundColor:'transparent',
		color:'white',
		fontSize:20,
		fontWeight:'normal',
	},
	points:{
		fontWeight:'bold',
		fontSize:34,
		color:'white',
		backgroundColor:'transparent',
		marginLeft:16,
		marginRight:75,
	},
	projectsBtn:{
		marginLeft:18,
	},
	aboutBtn:{
		marginLeft:18,
	},
	moreBtn:{
		marginLeft:18,
	},
	wallBtn:{
		marginLeft:24,
		marginRight:11,
	},
	whiteSeparator:{
		color:'#FFFFFF',
		backgroundColor:'transparent',
		marginLeft:11,
		paddingTop:12,
		marginRight:18,

	},
	wallTxt:{
		fontWeight:'normal',
		fontSize:20,
		color:'#FFFFFF',
		backgroundColor:'transparent',

	},
	aboutTxt:{
		fontWeight:'normal',
		fontSize:20,
		color:'#FFFFFF',
		backgroundColor:'transparent',
	},
	projectsTxt:{
		fontWeight:'normal',
		fontSize:20,
		color:'#FFFFFF',
		backgroundColor:'transparent',
	},
	moreTxt:{
		fontWeight:'normal',
		fontSize:20,
		color:'#FFFFFF',
		backgroundColor:'transparent',
	},
	yellowSeparator:{
		backgroundColor:'transparent',
		color:'#FEE180',
		fontWeight:'normal',
		paddingTop: 10,
		fontSize:15,
	},
	projNum:{
		backgroundColor:'transparent',
		color:'#FEE180',
		fontWeight:'normal',
		fontSize:25,
		
	},
	projText:{
		backgroundColor:'transparent',
		color:'#FEE180',
		fontWeight:'bold',
		fontSize:11,
		
	},
	followersNum:{
		backgroundColor:'transparent',
		color:'#FEE180',
		fontWeight:'normal',
		fontSize:25,
		
	},
	followersText:{
		backgroundColor:'transparent',
		color:'#FEE180',
		fontWeight:'bold',
		fontSize:11,
		
	},
	followingNum:{
		backgroundColor:'transparent',
		color:'#FEE180',
		fontWeight:'normal',
		fontSize:25,
		
	},
	followingText:{
		backgroundColor:'transparent',
		color:'#FEE180',
		fontWeight:'bold',
		fontSize:11,
		
	},


	userProfilePic:{
		width:width*0.24,
		height:width*0.24,
		borderRadius:width*0.12,
		marginLeft:15,

	},
	ratingStyle:{
		flexDirection:'row',
	},
	intro:{
		flexDirection:'row',
		justifyContent: "space-between",
		marginTop:height * 0.3,
		marginLeft:16,
		marginRight:16,
		
	},
	userName:{
		backgroundColor:'transparent',
		fontWeight:'bold',
		color:'white',
		fontSize:32,
		marginBottom:2.5,

	},
	profession:{
		backgroundColor:'transparent',
		fontWeight:'normal',
		fontSize:12,
		color:'white',
		marginBottom:7.25,
	},

	};