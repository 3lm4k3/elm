import React from 'react';
import {
  Text,
  Dimensions,
  View, 
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  StatusBar,
  Picker,
  TouchableHighlight,
  ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import _ from "underscore"
import LinearGradient from 'react-native-linear-gradient';
import { Actions,PARAMS } from 'react-native-router-flux'
import { createStore } from 'redux';


import reducers from '../reducers';
import Header from "./Header/index"
import TagList from './TagList';
import Panel from './Panel'; 

import cstyles from "./common/styles"

const { width, height } = Dimensions.get('window')

class AfterSignupScreen extends React.Component {

	constructor(props) {
    super(props);
    //saving the checked button state for the terms & conditions to be true or false
    this.state = { 
      language: "java",
      selectedCountry: "",
      selectedProfession: "",
      selectedInterests: [],
      countries: [
        {
          text: "Egypt"
        },
        {
          text: "UAE"
        },
        {
          text: "KSA"
        },
        {
          text: "Kuwait"
        },
      ],
      professions: [
        {
          text: "supplier"
        },
        {
          text: "engineer"
        },
        {
          text: "Customer"
        },
        {
          text: "Contractor"
        },
      ],
      interests: [
        {
          text: "supplier"
        },
        {
          text: "engineer"
        },
        {
          text: "Customer"
        },
        {
          text: "Contractor"
        },
      ],
  
    };
  }

  handleSelectedInterest = (index) => {
    const { selectedInterests } = this.state
    if(selectedInterests.includes(index)){
      this.setState(state => (
        {
          selectedInterests: state.selectedInterests.slice(index, index+1)
        }
      ))
    }else {
      this.setState(state => (
        {
          selectedInterests: [
            ...state.selectedInterests,
            index
          ]
        }
      ))
    }
    
  }
  handleSelectedProfession = (index) => {
    this.setState({
      selectedProfession: index
    })
  }
  handleSelectedCountry = (index) => {
    this.setState({
      selectedCountry: index
    })
  }
  handleSubmission = () => {
    const userId = this.props.currentUser.uid
    let { 
      selectedCountry, selectedProfession, selectedInterests,
      countries, interests, professions
    } = this.state
    interests = interests.filter((el, index) => {
      return selectedInterests.includes(index) ? el : null
    })
    fetch("https://us-central1-elmawkaa-8bcab.cloudfunctions.net/addBasicEntities", {
      method: "POST",
      body: JSON.stringify({
        userId,
        profession: professions[selectedProfession].text,
        country: countries[selectedCountry].text,
        interests 
      })
    })
    .then(res => {
      // console.log(res.statusCode)
      alert(res.status)
      
    })
    .catch(e => {
      alert(e.message)
    })
  }
  renderCountries = () => {
    return this.state.countries.map((element, index) => {
      const active = index === this.state.selectedCountry
      const buttonBackground = active ? "white":'transparent';
      const textColor = active ? '#6D66AF' : 'white';
      return (
        <TouchableOpacity key={index}
          onPress={()=>this.handleSelectedCountry(index)}
          style={[styles.firstInterestBtn, {backgroundColor:buttonBackground}]}
        >
        <Text style={[styles.firstInterestText,{color:textColor}]}>{element.text}</Text>

        </TouchableOpacity>
      )
    })
  }
  renderProfessions = () => {
    return this.state.professions.map((element, index) => {
      const active = index === this.state.selectedProfession
      const buttonBackground = active ? "white":'transparent';
      const textColor = active ? '#6D66AF' : 'white';
      return (
        <TouchableOpacity key={index}
          onPress={()=>this.handleSelectedProfession(index)}
          style={[styles.firstInterestBtn, {backgroundColor:buttonBackground}]}
        >
        <Text style={[styles.firstInterestText,{color:textColor}]}>{element.text}</Text>

        </TouchableOpacity>
      )
    })
  }
  renderInterests = () => {
    const { interests, selectedInterests } = this.state
    return interests.map((element, index) => {
      const active = selectedInterests.includes(index)
      const buttonBackground = active ? "white":'transparent';
      const textColor = active ? '#6D66AF' : 'white';
      return (
        <TouchableOpacity key={index}
          onPress={()=>this.handleSelectedInterest(index)}
          style={[styles.firstInterestBtn, {backgroundColor:buttonBackground}]}
        >
        <Text style={[styles.firstInterestText,{color:textColor}]}>{element.text}</Text>

        </TouchableOpacity>
      )
    })
  }
	render(){
		const { countries, interests, professions } = this.state;
    
		const { goBack } = this.props.navigation;
    
    const { navigate } = this.props.navigation;

		return (
<LinearGradient colors={['#5871B5', '#935CAE']} style={styles.container} >

		<ScrollView showsVerticalScrollIndicator={false}>
        <Header>
          <View style={[{alignItems:'center'}, cstyles.body]}>
            <Text style={{ color:'white',fontWeight:'bold',fontSize:17,
            backgroundColor: 'transparent'}}>Welcome</Text>
          </View>
        </Header>

        <Panel title="Country">

          <View style={{ flexDirection: 'row', justifyContent: "space-around", flexWrap: "wrap"}}>
            {
              this.renderCountries()
            }
          </View>
          
        </Panel>
        <Panel title="Profession">
          <View style={{ flexDirection: 'row', justifyContent: "space-around", flexWrap: "wrap"}}>
            {
              this.renderProfessions()
            }
          </View>
        </Panel>
        <Panel title="Interest">
          <View style={{ flexDirection: 'row', justifyContent: "space-around", flexWrap: "wrap"}}>
            {
              this.renderInterests()
            }
          </View>
        </Panel>
        <TouchableHighlight
            
            style={styles.createNewAccountBtn}
            onPress={this.handleSubmission}
          > 
            <Text style={styles.createAccountTxt}>Create a new Account</Text>
          </TouchableHighlight>
      </ScrollView>
      </LinearGradient>
      
			);
	}

}

var styles = StyleSheet.create({
  createNewAccountBtn:{
    marginRight:17,
    marginLeft:16,
    marginTop:27,
    marginBottom:23.08,
    backgroundColor:'#FEE180',
    borderRadius:300,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowRadius: 5,
    shadowOpacity: 0.3,
    width:width * 0.9,
    height:53.34,
    justifyContent: 'center',
    alignItems: 'center',
  },
  createAccountTxt:{
    fontWeight: 'bold',
    fontSize:16,
    color:'#935CAE',
  },

  firstInterestBtn:{
    borderWidth: 1,
    borderRadius:5,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:0,
    width:150,
    height:45.83,
    borderColor: '#fff',
    marginTop:38,
    marginBottom:19.17,
  },

  firstInterestText:{
    marginTop:13.5,
    marginLeft:11.33,
    marginRight:13.67,
    marginBottom:13.33,
    fontWeight: 'bold',
    fontSize:16,
    color: 'black'
  },
  secondInterestBtn:{
    borderWidth: 1,
    borderRadius:5,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:19,
    width:125,
    height:45.83,
    borderColor: '#fff',
    marginTop:38,
    marginBottom:19.17,
  },
  container: {
    flex: 1,
    backgroundColor: '#f4f7f9',
    paddingTop: 30
  },
  
});


export default connect(
  (state) => ({
    currentUser: state.currentUser
  })
)(AfterSignupScreen)