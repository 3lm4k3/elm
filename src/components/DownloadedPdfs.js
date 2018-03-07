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

const RNFS = require('react-native-fs');
export default class DownloadedPdfsScreen extends React.Component {
 	

 	state = {
 		firstPdfDataList: [
	            {key:1,url: 'ExecutionModels_1',pdfPage:() => Actions.pdfPage({pdfLink:'file:///Users/abdelrhman/Library/Developer/CoreSimulator/Devices/A32CA1F8-45B4-4FBD-BF6C-98934AD42533/data/Containers/Data/Application/FB2BD9E2-C010-4023-A007-C901FEDCFC68/Documents/926.pdf'})},
	            
	          ],
	          secondPdfDataList: [
	            {key:1,url: 'mixingConcreteComponents_16',pdfPage:() => Actions.pdfPage({pdfLink:'file:///Users/abdelrhman/Library/Developer/CoreSimulator/Devices/A32CA1F8-45B4-4FBD-BF6C-98934AD42533/data/Containers/Data/Application/FB2BD9E2-C010-4023-A007-C901FEDCFC68/Documents/937.pdf'})},
	            
	          ]


 	}

 	readfile(){


    	RNFS.readDir(RNFS.DocumentDirectoryPath) // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
    .then((result) => {
    	result.map(el =>{
    		


    		this.setState((state)=> {
    			console.log(el.url)
  			return {
	  			firstPdfDataList: [
	  				...state.firstPdfDataList,
	  				...{
	  					url: el.name,

	  					
	  				}
	  			]
  			}

  		})



    	})
    console.log('GOT RESULT', result);
    console.log('RNFS.stat(result[0].path)',RNFS.stat(result[0].path))
    console.log('result[0].path',result[0].path)
    // stat the first file
    return Promise.all([RNFS.stat(result[0].path), result[0].path]);
  })
  .then((statResult) => {
    if (statResult[0].isFile()) {
      // if we have a file, read it
      console.log("here is a file")
      return RNFS.readFile(statResult[1], 'utf8');
    }

    return 'no file';
  })
  .then((contents) => {
    // log the file contents
    console.log(contents);
  })
  .catch((err) => {
    console.log(err.message, err.code);
  })
    }
 	componentWillMount(){
 		//this.readfile()
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