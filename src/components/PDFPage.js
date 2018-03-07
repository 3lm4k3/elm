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
    this.state = { showState:false,output: 'Doc folder: ' + RNFS.DocumentDirectoryPath,imagePath: {
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
    const downloadDest = `${RNFS.DocumentDirectoryPath}/${this.props.url}.pdf`;
    console.log(this.props.url)
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


    readfile(){
    	RNFS.readDir(RNFS.DocumentDirectoryPath) // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
    .then((result) => {
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

  //   () => {RNFS.readFile('file:///Users/abdelrhman/Library/Developer/CoreSimulator/Devices/A32CA1F8-45B4-4FBD-BF6C-98934AD42533/data/Containers/Data/Application/FB2BD9E2-C010-4023-A007-C901FEDCFC68/Documents/926.pdf', 'utf8')

  //                     .then(()=>{
  //                       console.log("already read")
  //                     }

  //                       ).catch((err) => {
  //   console.log(err.message);
  // })
  //               }

  checkDownloaded(){
    // if(RNFS.readFile(`${RNFS.DocumentDirectoryPath}/${this.props.url}.pdf`,'utf8')){
    //   console.log("found the file")
    // }else{
    //   console.log("not found")
    // }

    RNFS.exists(`${RNFS.DocumentDirectoryPath}/${this.props.url}.pdf`)
    .then( (exists) => {
        if (exists) {
           this.setState({showState:true})
        } else {
          this.setState({showState:false})
        }
    });

    




  }
 	render(){
 		const { viewStyle,back,download,downloadImage} = styles;
 		return(
 			<View style={{flex:1}}>
	 			<View style={viewStyle}>
						<TouchableOpacity
		            	
				            style={back}

				            onPress={() => this.checkDownloaded()}
				         >  
				            <Image
				               source={require('../assets/images/Back-arrow.png')}
				            >
				            </Image>
		          		</TouchableOpacity>
		          		
                  {
            this.state.showState ?
		          		<TouchableOpacity
		            		//onPress={this.downloadFileTest.bind(this, true, this.props.pdfLink)}
				            style={download}

				            
				         > 
				            <Image
				               source={require('../assets/images/prices.png')}
				               

				            >
				            </Image>
		          		</TouchableOpacity> :
                  <TouchableOpacity
                    onPress={this.downloadFileTest.bind(this, true, this.props.pdfLink)}
                    style={download}

                    
                 > 
                    <Image
                       source={require('../assets/images/dropdown-arrow-purple.png')}
                       

                    >
                    </Image>
                  </TouchableOpacity>
                }
					</View>
					

          {this.checkDownloaded()}
           {
            this.state.showState ?

            <WebView
                source={{uri:`${RNFS.DocumentDirectoryPath}/${this.props.url}.pdf`}}
               
                style={{marginTop: 20,width:width*0.8,marginLeft:width*0.1,marginBottom:19}}
              />  : <WebView
                source={{uri:this.props.pdfLink}}
               
                style={{marginTop: 20,width:width*0.8,marginLeft:width*0.1,marginBottom:19}}
              />
           }



	 				 
		        	
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
		marginLeft:16,
	},
	download:{
		width:188,
		height:44,
		paddingLeft:125,

	},

}