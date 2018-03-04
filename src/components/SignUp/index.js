import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  Item, 
  Input,
  Button
} from "native-base"
import Icon from "react-native-vector-icons/Feather"
import { Divider } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import firebase from "firebase"
import { connect } from "react-redux"
import _ from "underscore"

import { strings } from '../../i18n';
import {
  Checkbox 
} from '../common/index';
import {startFacebookLogin, startGoogleLogin, startLinkedinLogin, startSignUp} from "../../actions/index"

import styles from "./styles"
import cstyles from '../common/styles'

class FirstScreen extends React.Component {
  state = { 
    checked: false,
    emailText: "",
    passwordText: "",
    secureEntry: true
  };

  handleSignUp = () => {
    const { emailText:email, passwordText:password } = this.state
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user)
        Actions.home()
      })
      .catch(e => {
        console.log(e.message)
      })
  }
  componentWillMount() {
    !(_.isEmpty(this.props.currentUser)) ? Actions.home() : null
  }
	render(){
    const { state } = this
    const {  dispatch } = this.props
		return (
			//setting the whole view back ground image
        <LinearGradient colors={['#5871B5', '#935CAE']} style={styles.container} >
          {/* I have an account login button */}
          <ScrollView>
          <View style={styles.header}>
            <TouchableOpacity style={styles.back} onPress={() => Actions.pop()}>
              <Image source={require('../../assets/images/back-arrow-white.png')}/>
            </TouchableOpacity>
            <Text style={styles.headerText}>{strings('signup.header_Txt')}</Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center',}}>
          <TouchableOpacity style={styles.accountLoginBtn} onPress={() => Actions.login()}>
            <Text style={styles.accountLoginText}> {strings('signup.haveAccount_Btn')} </Text>
          </TouchableOpacity>
        </View>

        {/* setting the divider line color */}
          <Divider style={{ backgroundColor: 'grey'}} />
          <Text style={styles.connectWith}>{strings('signup.connectWith_Txt')}</Text>
        {/*
        social login buttons container view*/}
          <View style={styles.socialLogin}>
            <TouchableOpacity style={styles.facebookLoginBtn} onPress={() => dispatch(startFacebookLogin())}>
              <Image style={styles.socialLoginImage} source={require('../../assets/images/FB-logo.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.linkedinLoginBtn} onPress={() => dispatch(startLinkedinLogin())}>
              <Image style={styles.socialLoginImage} source={require('../../assets/images/linkedin.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.googleLoginBtn} onPress={() => dispatch(startGoogleLogin())}>
              <Image style={styles.socialLoginImage} source={require('../../assets/images/google-icon.png')}/>
            </TouchableOpacity>
          </View>
          <Text style={styles.accountInfo}>{strings('signup.accountInfo_Txt')}</Text>

        {/*Signing up user details view container*/}

          <View style={styles.userDetailsSignUp}>
            <Item last style={[cstyles.inputWrapper, {marginBottom: 5}]} >
              <Input placeholder={strings('signup.firstName_Txt')}  placeholderTextColor={"rgba(255,255,255,0.5)"} keyboardType={"email-address"}
                style={cstyles.white} onChangeText={(text) => this.setState({firstName: text})} />
            </Item>
            <Item last style={[cstyles.inputWrapper, {marginBottom: 5}]} >
              <Input placeholder={strings('signup.lastName_Txt')}  placeholderTextColor={"rgba(255,255,255,0.5)"} keyboardType={"email-address"}
                style={cstyles.white} onChangeText={(text) => this.setState({lastName: text})} />
            </Item>
            <Item last style={[cstyles.inputWrapper, {marginBottom: 5}]} >
              <Input placeholder={strings('signup.email_Txt')}  placeholderTextColor={"rgba(255,255,255,0.5)"} keyboardType={"email-address"}
                style={cstyles.white} onChangeText={(text) => this.setState({emailText: text})} />
            </Item>

            <Item last style={[cstyles.inputWrapper, {marginBottom: 5}]} >
              <Input placeholder={strings('signup.password_Txt')} secureTextEntry={state.secureEntry} style={cstyles.white}
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

          </View>

        {/* terms and conditions view container */}
          <View style={styles.termsNConditionsStyle}>
            {/* getting the checking state from the constructor state */}
              <Checkbox checked={this.state.checked}/>
              <TouchableOpacity
                onPress={() => Actions.terms(PARAMS)}
              >
                <Text
                  style={styles.termsNConditionsStyleTxt}
                >{strings('signup.termsNConditions_Txt')}</Text>

              </TouchableOpacity>
            </View>


            <View style={{justifyContent: 'center',
            alignItems: 'center',}}>
            <TouchableOpacity style={styles.createNewAccountBtn} onPress={this.handleSignUp}>
              <Text style={styles.createAccountTxt}>{strings('signup.createAccount_Txt')}</Text>
            </TouchableOpacity>
          </View>
          
          </ScrollView>
				
				 </LinearGradient>

		);
	}
}

export default connect(
  state => ({
    currentUser: state.currentUser
  })
)(FirstScreen)