import EstyleSheet from "react-native-extended-stylesheet"
import {
  Dimensions
} from "react-native"
const { width, height } = Dimensions.get('window');

export default EstyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'transparent'
  },
  back:{
    width:width*0.3,
    marginLeft:width*0.08
  },
  header:{
    marginTop:32,
    flexDirection:'row',
  },
  headerText:{
    fontWeight:"bold",
    fontSize:17,
    color:'white',
    width:width*0.5
  },
  socialLogin: {
    flexDirection:'row',
    justifyContent: 'center',
  },
  socialLoginImage: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white',
  },

  userDetailsSignUp:{
    justifyContent: 'center',
    marginVertical: 15,
    paddingHorizontal: 20,
  },
  termsNConditionsStyle:{
    flexDirection:'row',
  },
  accountLoginText:{
    fontWeight: 'bold',
    fontSize:16,
    color: 'white'
  },
  accountLoginBtn:{
    marginRight:17,
    marginLeft:16,
    marginTop:10,
    marginBottom:10,
    paddingTop:20,
    paddingBottom:20,
    borderRadius:300,
    borderWidth: 1,
    borderColor: '#fff',
    width: width * 0.8,
    height:53.34,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  connectWith:{
    marginTop:10,
    marginLeft:16,
    fontWeight: 'bold',
    fontSize:12,
    color: 'white'
  },
  accountInfo:{
    marginTop:22.08,
    marginLeft:16,
    fontWeight: 'bold',
    fontSize:22,
    color: '#FCFE80'
  },
  facebookLoginBtn:{
    backgroundColor:'white',
    marginLeft:34.5,
    marginTop:10,
    marginBottom:10,
    elevation: 5,
    borderRadius: 23,
    borderWidth: 1,
    borderColor: '#fff',
    width:90,
    height:39.4,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkedinLoginBtn:{
    backgroundColor:'white',
    marginLeft:18,
    marginTop:10,
    marginBottom:10,
    elevation: 5,
    borderRadius:23,
    borderWidth: 1,
    borderColor: '#fff',
    width:90,
    height:39.4,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleLoginBtn:{
    backgroundColor:'white',
    marginLeft:18,
    marginRight:34.5,
    marginTop:10,
    marginBottom:10,
    elevation: 5,
    borderRadius: 23,
    borderWidth: 1,
    borderColor: '#fff',
    width:90,
    height:39.4,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  termsNConditionsStyle:{
    flexDirection:'row',
  },
  termsNConditionsStyleBtn:{
    marginTop:10,
    marginLeft:16,
  },
  createNewAccountBtn:{
    marginRight:17,
    marginLeft:16,
    marginTop:27,
    marginBottom:23.08,
    backgroundColor:'#FEE180',
    borderRadius:300,
    elevation: 5,
    width: width * 0.8,
    height:53.34,
    justifyContent: 'center',
    alignItems: 'center',
  },
  createAccountTxt:{
    color:'#935CAE',
    fontWeight: 'bold',
    fontSize:16,
  },
  termsNConditionsStyleTxt:{
    marginTop:10,
    marginLeft:16,
    fontWeight: 'normal',
    fontSize:12,
    color: 'white'
  },
  // rest of the styles
});