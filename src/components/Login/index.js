import React from 'react';
import { 
  Text,
  View,
  StatusBar,
  Image,
  TouchableWithoutFeedback
} from 'react-native';
import { 
  Button,
  Form,
  Item,
  Input,
  Content,
  Spinner
} from "native-base"
import LinearGradient from 'react-native-linear-gradient'; // Linear background component
import { Actions } from 'react-native-router-flux';
import CheckBox from 'react-native-checkbox'; // checkbox component
import Icon from "react-native-vector-icons/Feather"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Ripple from "react-native-material-ripple"
import EstyleSheet from "react-native-extended-stylesheet"
import { connect } from "react-redux"
import LinkedInModal from 'react-native-linkedin'
import firebase from "firebase"

import Header from "../Header/index"  // Header Component
import Divider from "../common/Divider"  // Header Component

import styles from "./styles"  // Component Styles
import cstyles from "../common/styles"
import {startFacebookLogin, startGoogleLogin, startSignUp, startLogin, startLinkedinLogin} from "../../actions/index";


class Login extends React.Component {
  state = {
    checkBox: false,
    secureEntry: true,
    passwordText: "",
    email: ""
  }
  handleLinkedinLogin = (token) => {
    console.log(token.access_token)
    this.props.dispatch(startLinkedinLogin(token.access_token))
    
  }
  handleLinkedinLoginError = (e) => {
    console.log(e);
    
  }
  handleLogin = () => {
    const { email, passwordText:password } = this.state
    this.props.dispatch(startSignUp(email, password ))
  }
  handleFirebaseTest = () => {
    firebase.database().ref("users").once("value", (user)=> {
        console.log(user);
        
    })
  }
  render() {
    const { state } = this
    const { showSpinner } = this.props
    const { dispatch } = this.props
    return (
        <LinearGradient colors={['#5871B5', '#935CAE']} style={styles.linearGradient}> 
          {
            showSpinner &&
            <SpinnerContainer/>
          }
          <StatusBar
            backgroundColor="#5871B5"
            barStyle="light-content"
          />
          <Header />
          <Content>
            <View style={styles.loginOptions}>
              <Ripple rippleColor="#935CAE" rippleContentBorderRadius={23} onPress={() => {dispatch(startFacebookLogin())}} style={styles.loginOption}>
                <Text style={styles.loginOptionText}>Connect with </Text>
                <FontAwesome name="facebook-official" color={"#26559A"} style={cstyles.Icon}/>
                <Text style={styles.loginOptionText} > Facebook</Text>  
              </Ripple>
              <LinkedInModal
                clientID="77w27mcptti5dx"
                clientSecret="Pv933SBjKUVX4fPM"
                redirectUri="https://elmawkaa.com/"
                onSuccess={this.handleLinkedinLogin}
                onError={this.handleLinkedinLoginError}
                renderButton={() => {
                  return (
                    <View style={styles.loginOption}>
                      <Text style={styles.loginOptionText}>Connect with</Text>
                      <Text style={[styles.loginOptionText, cstyles.black]} > Linked </Text>  
                      <FontAwesome name="linkedin-square" color={"#006699"} style={cstyles.Icon}/>           
                    </View>
                  )
                }}
              />
              <Ripple rippleColor="#935CAE" rippleContentBorderRadius={23} onPress={() => {dispatch(startGoogleLogin())}} style={styles.loginOption}>
                <Text style={styles.loginOptionText}>Connect with</Text>
                <Image source={ require("../../assets/images/google.png") } style={cstyles.buttonImage} />
              </Ripple>
              </View>
              <Divider/>
              <Form style={styles.loginForm}>
                <Item last style={cstyles.inputWrapper} >
                  <Input placeholder="E-mail" ref={(c => this.email = c)} placeholderTextColor={"rgba(255,255,255,0.5)"} keyboardType={"email-address"}
                   style={cstyles.white} onChangeText={(text) => this.setState({email: text})} />
                </Item>
                <Item last style={cstyles.inputWrapper} >
                  <Input placeholder="Password" secureTextEntry={state.secureEntry} style={cstyles.white}
                   placeholderTextColor={"rgba(255,255,255,0.5)"} onChangeText={(text) => this.setState({passwordText: text})}  />
                  {
                    Boolean(state.passwordText) &&
                    <Button transparent onPress={() => this.setState({ secureEntry: !state.secureEntry})} >
                      {
                        state.secureEntry ? 
                        <Icon name="eye-off" size={25} color="#fff" style={cstyles.inputIcon} /> :
                        <Icon name="eye" size={25} color="#fff" style={cstyles.inputIcon} />

                      }
                    </Button>
                  }
                </Item>
              </Form>
              <View style={EstyleSheet.child(styles, 'controller', 0, 2)}>
                <View style={{paddingVertical: 10}}>
                <CheckBox
                    label=' Remember me'
                    labelStyle={styles.checkboxLabel}
                    color="#fff"
                    checkboxStyle={ cstyles.checkbox }
                    checked={this.state.checkBox}
                    checkedImage={require("../../assets/images/checkbox_checked.png")}
                    uncheckedImage={require("../../assets/images/checkbox_unchecked.png")}
                    underlayColor = {"#8E5EAF"}
                    onChange={(checked) => this.setState({checkBox: !this.state.checkBox})}
                  />
                </View>
                <Button transparent><Text style={[cstyles.underlined, cstyles.white, styles.belowInputText]}>Forgot my password</Text></Button>
              </View>
              <View style={EstyleSheet.child(styles, 'controller', 1, 2)}>
                <TouchableWithoutFeedback>
                <Text style={[cstyles.underlined, cstyles.white, styles.belowInputText]}>I don't have an Account</Text>                
                </TouchableWithoutFeedback>
              </View>
              <Button style={styles.loginButton} onPress={this.handleFirebaseTest}>
              {/* <Button style={styles.loginButton} onPress={this.handleLogin}> */}
                <Text style={styles.loginButtonText}>Login</Text>
              </Button>
              
          </Content>
        </LinearGradient>
    );
  }
}



const SpinnerContainer = () => {
  return (
    <View style={[{position: "absolute", top: 0, left: 0, right: 0, bottom : 0, backgroundColor: "rgba(0,0,0,0.65)", zIndex: 10}, cstyles.center]} >
      <View style={[cstyles.center, {width: 100, height: 100, backgroundColor: "rgba(211,211,211,85)", borderRadius: 23}]} > 
        <Spinner color='green' />
      </View>
    </View>
  )
}


export default connect(
  (state) => {
    return {
      showSpinner: state.showSpinner
    }
  }
)(Login)
