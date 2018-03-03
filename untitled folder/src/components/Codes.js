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

import { Card,Header,CategoryCard,CardSection,Input,Spinner,Checkbox } from './common';
export default class CodesScreen extends React.Component {
 	

 	state = {
 		firstPdfDataList: [
 					{key:1,url: 'EgyCodeRC_1',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FCodes%2FEgyCodeRC_1.pdf?alt=media&token=650cd051-3ee7-4b91-803c-e75855fa1cb1'})},
 					{key:2,url: 'EgyCodeRCDesign_2',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FCodes%2FEgyCodeRCDesign_2.PDF?alt=media&token=91e2298a-7077-4260-abab-2ff374ef27f5'})},
 					{key:3,url: 'EgyCodeGide_3',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FCodes%2FEgyCodeGide_3.pdf?alt=media&token=73e34da2-3b93-482e-9982-971e5792186b'})},
 					{key:4,url: 'EgyCodeLoads_4',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FCodes%2FEgyCodeLoads_4.pdf?alt=media&token=7c214879-53e2-4926-8145-2f6303420f2c'})},
 					{key:5,url: 'EgyCodeSanitary_5',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FCodes%2FEgyCodeSanitary_5.pdf?alt=media&token=29814871-83fa-4daa-8ef2-65ffb87ea191'})},
 					{key:6,url: 'EgyCodeForPolymers_6',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FCodes%2FEgyCodeForPolymers_6.pdf?alt=media&token=74ea114d-536e-4760-a74a-06763268190f'})},
 					{key:7,url: 'EgyCodeForBricks_7',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FCodes%2FEgyCodeForBricks_7.pdf?alt=media&token=5c012dd4-78f3-49c5-a7e9-718aa9fe5c83'})},
 					{key:8,url: 'EgyCodeSteelLoads_8',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FCodes%2FEgyCodeSteelLoads_8.pdf?alt=media&token=9697fdc6-188d-42e6-9a12-26a08e1adba7'})},
 					{key:9,url: 'EgyCodeSteel_9',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FCodes%2FEgyCodeSteel_9.pdf?alt=media&token=28160706-c8e7-484c-8149-6d2aaa09685a'})},
 					{key:10,url: 'EgyCodeFire_10',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FCodes%2FEgyCodeFire_10.pdf?alt=media&token=bdb1ac95-097c-44aa-a032-7ed98675d66e'})},
 					{key:11,url: 'EgyCodeSoilPart1_11',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FCodes%2FEgyCodeSoilPart1_11.pdf?alt=media&token=e0bf8a78-50a4-459b-814a-dcdc133e7378'})},
 					{key:12,url: 'EgyCodeSoilPart9_12',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FCodes%2FEgyCodeSoilPart9_12.pdf?alt=media&token=fcf662df-8759-428e-917e-b72285307999'})},
 					{key:13,url: 'EgyCodeFirePart3_13',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FCodes%2FEgyCodeFirePart3_13.pdf?alt=media&token=a79b67f1-3cfa-4fdd-aaa6-9f42c740b038'})},
 					{key:14,url: 'EgyCodeSoilPart3_14',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FCodes%2FEgyCodeSoilPart3_14.pdf?alt=media&token=59937b7d-2507-40a5-b41d-7c4116ce9bd0'})},
 					{key:15,url: 'EgyCodeSoilPart8_15',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FCodes%2FEgyCodeSoilPart8_15.pdf?alt=media&token=40c16d7c-6f33-4f59-a514-95007efd7a9d'})},
 					{key:16,url: 'EgyCodeFirePart2_16',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FCodes%2FEgyCodeFirePart2_16.pdf?alt=media&token=dca8956b-3bf8-4c55-8340-a212337ee1ed'})},
 					{key:17,url: 'EgyCodeSoilPart2_17',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FCodes%2FEgyCodeSoilPart2_17.pdf?alt=media&token=c0fc0dbd-7b37-422a-95b0-43ddc756bcd5'})},
 					{key:18,url: 'EgyCodeSoilPart5_18',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FCodes%2FEgyCodeSoilPart5_18.pdf?alt=media&token=9c40f5c0-b638-44e1-ac6b-e7d82d5b6f1b'})},
 					{key:19,url: 'EgyCodeSaintaryInterior_19',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FCodes%2FEgyCodeSaintaryInterior_19.pdf?alt=media&token=b7a3b264-2aad-4d1a-8767-00367a7dc68f'})},
 					{key:20,url: 'EgyCodeSoilPart4_20',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FCodes%2FEgyCodeSoilPart4_20.pdf?alt=media&token=8fe65671-f8a4-494b-85dc-356f95b9c87b'})},
 					{key:21,url: 'EgyCodeSoilPart7_21',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FCodes%2FEgyCodeSoilPart7_21.pdf?alt=media&token=5fb7bbc7-4dbd-44d5-8c59-0658b6870203'})},
 					{key:22,url: 'EgyCodeSoilPart6_22',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FCodes%2FEgyCodeSoilPart6_22.pdf?alt=media&token=51b58669-bc5e-494c-9285-95d1125b0789'})},
 					{key:23,url: 'EgyCodeSoilPart10_23',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FCodes%2FEgyCodeSoilPart10_23.pdf?alt=media&token=26738c8c-1bef-4a69-b347-1d751b445cad'})},
 					{key:24,url: 'EgyCodeContracts_24',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FCodes%2FEgyCodeContracts_24.pdf?alt=media&token=893e59b4-9916-4e91-a41e-b63df7bb806a'})},
 					{key:25,url: 'EgyCodeSaintaryPart2_25',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FCodes%2FEgyCodeSaintaryPart2_25.pdf?alt=media&token=c2867d9f-82e7-4bd1-85f5-ea0825ea9150'})},
	           
	          ],
	          secondPdfDataList: [
	            {key:1,url: 'EgyCodeEnergy_26',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FCodes%2FEgyCodeEnergy_26.pdf?alt=media&token=be499ada-cbe5-4301-8adf-54ef4e7b4e6c'})},
	            {key:2,url: 'EgyCodeForOpenings_27',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FCodes%2FEgyCodeForOpenings_27.pdf?alt=media&token=401716ec-d8df-4c1a-bb90-e8cf3cddff69'})},
	            {key:3,url: 'EgyCodePaint_28',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FCodes%2FEgyCodePaint_28.pdf?alt=media&token=a241ee67-df2a-43e3-9fe2-f02bfd68d8b1'})},
	            {key:4,url: 'EgyCodeOwnerContract_29',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FCodes%2FEgyCodeOwnerContract_29.pdf?alt=media&token=2e6cdc55-1743-4bcb-b07d-5ca1e878aea0'})},
	            {key:5,url: 'EgyCodeForConsultant_30',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FCodes%2FEgyCodeForConsultant_30.pdf?alt=media&token=a59211fd-6052-4668-a93e-b6f5d85b6637'})},
	            {key:6,url: 'EgyCodeForExecutionContract_31',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FCodes%2FEgyCodeForExecutionContract_31.pdf?alt=media&token=a1c795d8-2053-4de0-9ca8-af42bc3c8a0c'})},
	            {key:7,url: 'EgyCodeForDesignContract_32',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FCodes%2FEgyCodeForDesignContract_32.pdf?alt=media&token=f94fe20d-6c15-48b5-a8c5-0edca8a07170'})},
	            {key:8,url: 'EgyCodeForExcavation_33',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FCodes%2FEgyCodeForExcavation_32.pdf?alt=media&token=03998501-0a7f-4feb-b71f-32a7678b32ce'})},
	            {key:9,url: 'EgyCodePaintPart2_34',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FCodes%2FEgyCodePaintPart2_34.pdf?alt=media&token=304abc80-deeb-4a97-85d5-4ee5c474c11c'})},
	            {key:10,url: 'EgyCodeAlum_35',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FCodes%2FEgyCodeAlum_35.pdf?alt=media&token=243ab4f0-68f8-437e-ab6f-f3ed9c42ccbe'})},
	            {key:11,url: 'EgyCodeElectricity_36',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FCodes%2FEgyCodeElectricity_36.pdf?alt=media&token=9f163153-dde7-4215-91b0-5fdedf505785'})},
	            {key:12,url: 'EgyCodeElctricityconnectionsPart1_37',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FCodes%2FEgyCodeElctricityconnectionsPart1_37.pdf?alt=media&token=a5002683-7ad4-48ee-854f-e04fd2280109'})},
	            {key:13,url: 'EgyCodeSteelImplementation_38',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FCodes%2FEgyCodeSteelImplementation_38.pdf?alt=media&token=40373790-1659-4353-a36f-ea080b812d13'})},
	            {key:14,url: 'EgyCodeConcImplementaion_39',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FCodes%2FEgyCodeConcImplementaion_39.pdf?alt=media&token=e90992b7-a5f1-4186-9f3c-91d6fb03c541'})},
	            {key:15,url: 'EgyCodePaintImple_40',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FCodes%2FEgyCodePaintImple_40.pdf?alt=media&token=8eae13f1-3524-42eb-8e1a-421c919a93b1'})},
	            {key:16,url: 'EgyCodeFloorImple_41',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FCodes%2FEgyCodeFloorImple_41.pdf?alt=media&token=92e5d190-7fea-4bdd-a828-61fecbfdc149'})},
	            {key:17,url: 'EgyCodeIsolationImple_42',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FCodes%2FEgyCodeIsolationImple_42.pdf?alt=media&token=08b1c5ca-5ba4-4b47-b6b8-b6b6bdcf07da'})},
	            {key:18,url: 'EgyCodeWoodImple_43',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FCodes%2FEgyCodeWoodImple_43.pdf?alt=media&token=7cdcd821-9f40-489c-91b2-547c4498e754'})},
	            {key:19,url: 'EgyCodeWaterIsolation_44',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FCodes%2FEgyCodeWaterIsolation_44.pdf?alt=media&token=8f96f663-6678-46cd-9793-17a513172708'})},
	            {key:20,url: 'EgyCodeSanitaryImple_45',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FCodes%2FEgyCodeSanitaryImple_45.pdf?alt=media&token=e083c624-6c7f-4d6c-b4b6-153a9c46029d'})},
	            {key:21,url: 'EgyCodeSteel_46',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FCodes%2FEgyCodeSteel_46.pdf?alt=media&token=8b0cba56-7dc5-46f5-ac87-2f98206641df'})},
	            {key:22,url: '47_ACI_Code',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FCodes%2FUSCode_47.pdf?alt=media&token=2464d595-47d0-41fa-b30b-3d8df1acb7cc'})},
	            {key:23,url: '48_British_Concrete_Code',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FCodes%2FStructuraluseofconcrete_48.pdf?alt=media&token=af2cbfa9-d6ae-4732-bb30-4248bdb03fdf'})},
	            {key:24,url: 'ARABICACI_49',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FCodes%2FARABICACI_49.pdf?alt=media&token=ce4ced99-36c0-49e8-a07c-036fb595d52b'})},
	            {key:25,url: 'EgyRulesForConstruction_50',pdfPage:() => Actions.pdfPage({pdfLink:'https://firebasestorage.googleapis.com/v0/b/constructionv2-1.appspot.com/o/ElmawkaaContentLive%2FCodes%2FEgyRulesForConstruction_50.pdf?alt=media&token=f9447741-b2c9-4ff3-b85f-f21b334a932e'})},

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

					<Text style={referenceType}>Codes</Text>


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