import React from 'react';
import {Text,Dimensions, View, 
  StyleSheet, Image,
  TouchableOpacity,
  TextInput,
  StatusBar,
  ScrollView,
  TouchableHighlight,FlatList} from 'react-native';
import { Divider } from 'react-native-elements';
import { Actions,PARAMS } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import PDFList from './PDFList';
import reducers from '../reducers';
import {
  Button,
  Thumbnail,
  Tab,TabHeading,
  Footer,
  FooterTab} from "native-base";
import cstyles from "./common/styles"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import LineIcon from "react-native-vector-icons/SimpleLineIcons"
import Icon from "react-native-vector-icons/Feather"

import { Card,Header,CategoryCard,CardSection,Input,Spinner,Checkbox } from './common';
export default class ReferencesScreen extends React.Component {
 	

 	state = {
 		firstPdfDataList: [
 				{key:0,url: 'References_0',pdfPage:() => Actions.pdfPage({pdfLink:'https://drive.google.com/file/d/0B9QBuLuyzRucdUlwZ2Y1MnlDazA/view?usp=sharing'})},
	            {key:1,url: 'ExecutionModels_1',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2Fexecution%2FExecutionModels_1.pdf?alt=media&token=e90d7b4d-0448-4a39-89d0-7648016717c6'})},
	            {key:2,url: 'SiteEngineerMission_2',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2Fexecution%2FSiteEngineerMission_2.pdf?alt=media&token=de54db0d-e21f-4b8a-b862-21c13e15d369'})},
	            {key:3,url: 'Siteterms_3',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2Fexecution%2FSiteterms_3.pdf?alt=media&token=f33b144c-ae85-453b-a3d9-4b4059d1a5f9'})},
	            {key:4,url: 'ReceivingSite_4',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2Fexecution%2FReceivingSite_4.pdf?alt=media&token=c5b5de1b-44a8-484e-9884-9c00e698e53f'})},
	            {key:5,url: 'HowToReadcharts_5',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2Fexecution%2FHowToReadcharts_5.pdf?alt=media&token=749ea1e2-308b-4a82-b774-c1d3580b99e8'})},
	            {key:6,url: 'ReceivePiles_6',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2Fexecution%2FReceivePiles_6.pdf?alt=media&token=2b6d14e1-db2d-422f-b267-d7fd9f19ec71'})},
	            {key:7,url: 'ReceivingPiles_7',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2Fexecution%2FReceivingPiles_7.pdf?alt=media&token=3f117afa-148c-4adb-b2f9-e65a703fc9c7'})},
	            {key:8,url: 'DrillingAndBlood_8',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2Fexecution%2FDrillingAndBlood_8.pdf?alt=media&token=64f7e61b-eddf-4b3e-99d4-9552a5cc5cd4'})},
	            {key:9,url: 'Khanzera_9',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2Fexecution%2FKhanzera_9.pdf?alt=media&token=0536fe39-4b5d-4ac6-bc01-8f1461111493'})},
	            {key:10,url: 'Cement_10',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2Fexecution%2FCement_10.pdf?alt=media&token=3f531c69-c6f0-4050-ae11-964a5c7392ff'})},
	            {key:11,url: 'Sand_11',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2Fexecution%2FSand_11.pdf?alt=media&token=41412428-a376-4c7a-8da1-84f628cbda88'})},
	            {key:12,url: 'Gravel_12',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2Fexecution%2FGravel_12.pdf?alt=media&token=a1af687a-d652-487b-bd9d-1eacc67d3ade'})},
	            {key:13,url: 'ReceivingWater_13',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2Fexecution%2FReceivingWater_13.pdf?alt=media&token=d7596f9e-6925-46e5-9d8a-0216db57d74c'})},
	            {key:14,url: 'Armingiron_14',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2Fexecution%2FArmingiron_14.pdf?alt=media&token=7e11be31-1ca9-4f15-8e6a-59965bd7f621'})},
	            {key:15,url: 'Additions_15',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2Fexecution%2FAdditions_15.pdf?alt=media&token=c2d1649c-3ea4-48d8-8f50-389f9fef8695'})},
	            
	          ],
	          secondPdfDataList: [
	            {key:1,url: 'mixingConcreteComponents_16',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2Fexecution%2FmixingConcreteComponents_16.pdf?alt=media&token=96f04173-cb42-46b7-aaad-825d4c813bf7'})},
	            {key:2,url: 'Restoration_17',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2Fexecution%2FRestoration_17.pdf?alt=media&token=95875841-b3b9-4d91-905c-f44dbcfa3098'})},
	            {key:3,url: 'CastAndparkingSpaces_18',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2Fexecution%2FCastAndparkingSpaces_18.pdf?alt=media&token=4c22413d-66cd-48dc-a42d-faebb597e4fe'})},
	            {key:4,url: 'ReceivingFoundation_19',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2Fexecution%2FReceivingFoundation_19.pdf?alt=media&token=cf9d215b-f407-4de2-9478-e34035422be3'})},
	            {key:5,url: 'ReceivingRCFoundation_20',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2Fexecution%2FReceivingRCFoundation_20.pdf?alt=media&token=3d103ab9-1a6c-46d5-9f82-f140ba95b6ce'})},
	            {key:6,url: 'Isolation_21',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2Fexecution%2FIsolation_21.pdf?alt=media&token=0bb46c51-17b7-42bb-94bd-fe37d9099aa8'})},
	            {key:7,url: 'ReceivingColumn_22',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2Fexecution%2FReceivingColumn_22.pdf?alt=media&token=bba77720-cacd-4837-9928-4b6d87e63282'})},
	            {key:8,url: 'ReceivingStairs_23',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2Fexecution%2FReceivingStairs_23.pdf?alt=media&token=fd12b164-7bc1-4032-a913-20ee035a1dfb'})},
	            {key:9,url: 'ReceivingCeilingBeams_24',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2Fexecution%2FReceivingCeilingBeams_24.pdf?alt=media&token=0a10437b-b029-4916-a6ba-1d489d06152b'})},
	            {key:10,url: 'BuildingActivities_25',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2Fexecution%2FBuildingActivities_25.pdf?alt=media&token=4c12bf55-5cd3-426f-871a-e3dbbaeeaf90'})},
	            {key:11,url: 'ExcutionPhotos_26',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2Fexecution%2FExcutionPhotos_26.pdf?alt=media&token=37b4a658-6293-4e85-a18c-4bbfa147659e'})},
	            {key:12,url: 'PerformanceRate_27',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2Fexecution%2FPerformanceRate_27.pdf?alt=media&token=b110a862-6d03-43d1-8db5-741d01a4b1f2'})},
	            {key:13,url: 'FullAssayWorks_28',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2Fexecution%2FFullAssayWorks_28.pdf?alt=media&token=e10ec242-653e-48aa-af5e-49f42c903fdb'})},
	            {key:14,url: 'UnifiedConstructionLaw_29',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2Fexecution%2FUnifiedConstructionLaw_29.pdf?alt=media&token=a837a51d-265b-41cb-be88-c880253ddd99'})},
	            {key:15,url: 'ExecutionPrices_30',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2Fexecution%2FExecutionPrices_30.pdf?alt=media&token=2b3c81ce-13ab-4cf6-bcfb-5f64fbc01715'})},

	          ]


 	}
	render(){
		const { textStyle,viewStyle,back,search,pdfTitleText,title,referenceType,executionTitle } = styles;
		return(
			<View style={{ backgroundColor:'white',flex:1}}>
				<View style={viewStyle}>
					<View style={{flexDirection:'row'}}>
						<TouchableOpacity
		            
				            style={back}

				            onPress={() => Actions.pop()}
				         > 
				            <Image
				               source={require('../assets/images/Back-arrow.png')}
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

					<Text style={referenceType}>Execution</Text>


				</View>
				

				<ScrollView>
					
					<View style={{ flex: 1,marginTop:10,marginLeft:16,flexDirection:'row'}}>
                		

                		<FlatList
						        	
						          data={this.state.firstPdfDataList}
						          renderItem={({item}) => <TouchableOpacity 
						          				onPress={item.pdfPage}
											
											>
											<LinearGradient colors={['#5871B5', '#935CAE']}
					                           style={{width:162,height:218,alignItems:'center',
					                              justifyContent:'center',marginTop:19}}>
					                          <Text style={pdfTitleText}>{item.url}</Text>
					                        </LinearGradient>
											
											</TouchableOpacity>
											
										}
						        />

						        <FlatList
						        	
						          data={this.state.secondPdfDataList}
						          renderItem={({item}) => <TouchableOpacity 
						          				onPress={item.pdfPage}
											
											>
											<LinearGradient colors={['#5871B5', '#935CAE']}
					                           style={{width:162,height:218,alignItems:'center',
					                              justifyContent:'center',marginTop:19}}>
					                          <Text style={pdfTitleText}>{item.url}</Text>
					                        </LinearGradient>
											
											</TouchableOpacity>
											
										}
						        />
		                

              		</View>
				</ScrollView>
				

			</View>

			);
	}
}

const styles = {
	 pdfTitleText:{
	    backgroundColor:'transparent',
	    color:'white',
	    fontWeight:'bold',
	    fontSize:25,
	  },
	viewStyle: {
		
		
		
		backgroundColor:'#F7F7F7',
		
		
		height: 140,
		paddingTop: 15,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2},
		shadowOpacity: 0.2,
		elevation: 2,
		position: 'relative'
	},
	back:{
	marginTop:10,
    marginLeft:18,
    marginRight:18,
  },
  executionTitle:{
  	fontWeight:'bold',
  	fontSize:25,
  	backgroundColor:'transparent',
  	color:'white',

  },
  referenceType:{
  	fontSize:34,
  	fontWeight:'bold',
  	color:'#935CAE',
  	backgroundColor:'transparent',
  	marginLeft:16,
  	marginTop:24,
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
	

}