import React from 'react';
import {Text,Dimensions, View, 
  StyleSheet, Image,
  TouchableOpacity,
  TextInput,
  StatusBar,
  ScrollView,
  TouchableHighlight,FlatList,WebView} from 'react-native';
 import { Actions,PARAMS } from 'react-native-router-flux';
//  import Pdf from 'react-native-pdf';

const RNFS = require('react-native-fs');
const downloadUrl = 'https://blog.mozilla.org/security/files/2015/05/HTTPS-FAQ.pdf';
let jobId = -1;
const { width, height } = Dimensions.get('window')
 export default class PDFPage extends React.Component {
 	constructor(props) {
    super(props);
    this.state = { output: 'Doc folder: ' + RNFS.DocumentDirectoryPath,imagePath: {
        uri: ''
     	 }
      };
    
  }
  
  downloadFileTest (background, url) {
    if (jobId !== -1) {
      this.setState({ output: 'A download is already in progress' });

    }

    const progress = data => {
      const percentage = ((100 * data.bytesWritten) / data.contentLength) | 0;
      const text = `Progress ${percentage}%`;
      this.setState({ output: text });
      
    };

    const begin = res => {
      this.setState({ output: 'Download has begun' });
      
    };

    const progressDivider = 1;

    this.setState({ imagePath: { uri: '' } });

    // Random file name needed to force refresh...
    const downloadDest = `${RNFS.DocumentDirectoryPath}/${((Math.random() * 1000) | 0)}.pdf`;

    const ret = RNFS.downloadFile({ fromUrl: url, toFile: downloadDest, begin, progress, background, progressDivider });

    jobId = ret.jobId;

    ret.promise.then(res => {
      this.setState({ output: JSON.stringify(res) });
      this.setState({ imagePath: { uri: 'file://' + downloadDest } });
      console.log(downloadDest)
      jobId = -1;
    }).catch(err => {
      this.showError(err)

      jobId = -1;
    });
  }
  showError (err) {
    this.setState({ output: `ERROR: Code: ${err.code} Message: ${err.message}` });
    console.log('not completed')
  }
 	render(){
 		const source = {uri:'https://blog.mozilla.org/security/files/2015/05/HTTPS-FAQ.pdf'};
 		const { viewStyle,back,download,downloadImage} = styles;
 		return(
 			<View style={{flex:1}}>
	 			<View style={viewStyle}>
						<TouchableOpacity
		            
				            style={back}

				            onPress={() => Actions.pop()}
				         >  
				            <Image
				               source={require('../assets/images/Back-arrow.png')}
				            >
				            </Image>
		          		</TouchableOpacity>
		          		

		          		<TouchableOpacity
		            
				            style={download}

				            onPress={this.downloadFileTest.bind(this, true, downloadUrl) }
				         > 
				            <Image
				               source={require('../assets/images/prices.png')}
				               

				            >
				            </Image>
		          		</TouchableOpacity>
					</View>
					
	 				 <WebView
			          source={{uri:this.props.pdfLink}}
			         
			          style={{marginTop: 20,width:width*0.8,marginLeft:width*0.1,marginBottom:19}}
			        />
		        	
 			</View>
 			);
 	}
 }
 const styles = {
	viewStyle: {
		
		alignItems:'center',
		justifyContent:'center',
		backgroundColor:'#F7F7F7',
		
		flexDirection:'row',
		height: 60,
		paddingTop: 15,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2},
		shadowOpacity: 0.2,
		elevation: 2,
		position: 'relative'
	},
	back:{
		width:188,
		height:44,
	},
	download:{
		width:188,
		height:44,
		paddingLeft:125,

	},

}