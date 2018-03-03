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
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import PDFList from './PDFList';
import reducers from '../reducers';


import { Card,Header,CategoryCard,CardSection,Input,Spinner,Checkbox } from './common';
export default class FinishingScreen extends React.Component {
 	


 	state = {
 		firstPdfDataList: [
 				{key:1,url: 'introduction tshtebat_1',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FFinishing%2Fintroduction%20tshtebat_1.pdf?alt=media&token=d200ce7f-c6da-444e-828b-5ff2f6a65270'})},
	            {key:2,url: 'Electricity works_2',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FFinishing%2FElectricity%20works_2.pdf?alt=media&token=f3512b35-9aec-403b-a990-a8bc7d59bf6a'})},
	            {key:3,url: 'exteriorLighting_3',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FFinishing%2FexteriorLighting_3.pdf?alt=media&token=f91e97da-5d63-4fd4-9a8b-cb9925d2db06'})},
	            {key:4,url: 'PlumbingWorks_4',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FFinishing%2FPlumbingWorks_4.pdf?alt=media&token=3af3b801-6e21-4b2a-b4ed-85dd0d0095a4'})},
	            {key:5,url: 'Insulationworks_5',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FFinishing%2FInsulationworks_5.pdf?alt=media&token=9c96943a-299c-47f7-8588-28fd8e7b610d'})},
	            {key:6,url: 'DoorsWindows_6',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FFinishing%2FDoorsWindows_6.pdf?alt=media&token=aa1d2915-adeb-4696-bc00-82ebeaee9d12'})},
	            {key:7,url: 'MaharaWorks_7',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FFinishing%2FMaharaWorks_7.pdf?alt=media&token=5d7d8ade-5206-4dd9-be4a-f49f24d2a354'})},
	            {key:8,url: 'CeilingTashtebat_8',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FFinishing%2FCeilingTashtebat.pdf?alt=media&token=7f18e176-e5b1-4ae1-8222-025f9dc52fd9'})},
	            {key:9,url: 'Floortilesworks_9',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FFinishing%2FFloortilesworks_9.pdf?alt=media&token=da6b3bd9-b3d5-454a-8c99-e4dad76ebe0a'})},
	            {key:10,url: 'cermic_10',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FFinishing%2Fcermic_10.pdf?alt=media&token=fd53d2a5-da9b-4eb3-8a61-a201f22f4410'})},
	            {key:11,url: 'mosiecTiles_11',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FFinishing%2FmosiecTiles_11.pdf?alt=media&token=ebe97efe-9cd7-40b4-86b4-3714bad4ee9a'})},
	            {key:12,url: 'steelChreitTiles_12',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FFinishing%2FsteelChreitTiles_12.pdf?alt=media&token=7a4cd08d-3f0d-4676-a4c6-ece97107feb6'})},
	            {key:13,url: 'graniteTiles_13',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FFinishing%2FgraniteTiles_13.pdf?alt=media&token=4d15fd4e-5f38-44e6-bfa3-94c6a57e7eb1'})},
	            {key:14,url: 'takewoodfloers_14',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FFinishing%2Ftakewoodfloers_14.pdf?alt=media&token=1da2a53b-066b-4b7a-afd7-df9a33ef5bbe'})},
	            {key:15,url: 'interlocking_15',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FFinishing%2Finterlocking_15.pdf?alt=media&token=c1ea4eaf-41f4-4344-82ee-6e3395d496ee'})},
	            {key:16,url: 'berdorat_16',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FFinishing%2Fberdorat_16.pdf?alt=media&token=0e6d18cb-ce8b-4f2a-ae9e-15bf22f3b0b7'})},
	            {key:17,url: 'pergolas_17',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FFinishing%2Fpergolas_17.pdf?alt=media&token=171d1897-7d78-472e-8b92-4a6402603b1b'})},
	            {key:18,url: 'AirPurifingMaterials_18',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FFinishing%2FAirPurifingMaterials_18.pdf?alt=media&token=9f35dc45-461f-4ef3-9ce1-4ef3fd9dd2ee'})},
	            {key:19,url: 'Paintworks_19',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FFinishing%2FPaintworks_19.pdf?alt=media&token=482740f3-18ef-45d6-a970-0e0d174069dd'})},
	            
	          ],
	          secondPdfDataList: [
	            {key:1,url: 'exteriorpaints_20',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FFinishing%2Fexteriorpaints_20.pdf?alt=media&token=c899a389-bbd3-442b-bd8c-ff73f4f970f0'})},
	            {key:2,url: 'LoutesSelfCleanedPaints_21',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FFinishing%2FLoutesSelfCleanedPaints_21.pdf?alt=media&token=f92ad54c-579b-44b8-b9be-7a93ce2a4f26'})},
	            {key:3,url: 'Self-CleaningPaints_22',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FFinishing%2FSelf-CleaningPaints_22.pdf?alt=media&token=f4945df9-766e-4e49-b067-b08b0ac59755'})},
	            {key:4,url: 'Wallcladdingworks_23',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FFinishing%2FWallcladdingworks_23.pdf?alt=media&token=3a235d5f-3f8b-42ad-9e3c-808c98762ae2'})},
	            {key:5,url: 'BuildingCladding_24',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FFinishing%2FBuildingCladding_24.pdf?alt=media&token=d9793064-7286-445d-aa11-1557765decb6'})},
	            {key:6,url: 'curtainWall_25',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FFinishing%2FcurtainWall_25.pdf?alt=media&token=9886a078-25cb-41d9-8f1e-3f157dd0a4f8'})},
	            {key:7,url: 'marbleGraniteCladding_26',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FFinishing%2FmarbleGraniteCladding.pdf?alt=media&token=1090391e-bb0f-4ff6-8cb6-319385e90fac'})},
	            {key:8,url: 'AlumenimComposite_27',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FFinishing%2FAlumenimComposite_27.pdf?alt=media&token=5cb9cb33-79da-4f3a-a20a-706a91589e4f'})},
	            {key:9,url: 'stonecladding_28',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FFinishing%2Fstonecladding_28.pdf?alt=media&token=36b01c82-b6f9-4374-9648-93d2fd7f754b'})},
	            {key:10,url: 'woodcladding_29',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FFinishing%2Fwoodcladding_29.pdf?alt=media&token=99922483-78b2-4994-a146-c7679eff466e'})},
	            {key:11,url: 'Wallpaper_30',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FFinishing%2FWallpaper_30.pdf?alt=media&token=183101af-fdad-4498-898f-b8b9ed089c96'})},
	            {key:12,url: 'MDF_31',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FFinishing%2FMDF_31.pdf?alt=media&token=83170068-57e1-480a-a01f-0f1bc1920543'})},
	            {key:13,url: 'cementFibers_32',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FFinishing%2FcementFibers_32.pdf?alt=media&token=f03af060-df6d-4d6b-81ed-08c17d95c27b'})},
	            {key:14,url: 'glassfiberRC_33',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FFinishing%2FglassfiberRC_33.pdf?alt=media&token=b60d35db-dd30-4024-b005-332e494d33c6'})},
	            {key:15,url: 'concreteStampingFloers_34',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FFinishing%2FconcreteStampingFloers_34.pdf?alt=media&token=fb69c548-047e-4185-ac99-db63fb0ce64b'})},
	            {key:16,url: 'ArtificalStones_35',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FFinishing%2FArtificalStones_35.pdf?alt=media&token=9b2ce65a-20a9-4040-b6ac-36e31ec9aa5b'})},
	            {key:17,url: 'FakeRocks_36',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FFinishing%2FFakeRocks_36.pdf?alt=media&token=4532f0e9-a8b9-45b5-9822-69005b84413a'})},
	            {key:18,url: 'ratiningwalls_37',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FFinishing%2Fratiningwalls_37.pdf?alt=media&token=da835090-aa7f-4912-8df7-e9c3867ec41a'})},
	            {key:19,url: 'divisions_38',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FFinishing%2Fdivisions_38.pdf?alt=media&token=17812414-b71b-4050-817b-3e59abe01f6b'})},

	          ]


 	}



	render(){
		const { textStyle,viewStyle,pdfTitleText,back,search,title,referenceType,executionTitle } = styles;
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

					<Text style={referenceType}>Finishing</Text>


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