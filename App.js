import React from 'react';
import { Router, Scene, Lightbox } from "react-native-router-flux"
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux';
import firebase from "firebase"

import { setCurrentUser, logout, redirectIfAuthorized } from "./src/actions/index"

//
import ImageLightBox from "react-native-lightbox"
import Login from "./src/components/Login/index" // Login Component 
import NewsFeed from "./src/components/NewsFeed/index" // NewsFeed Component 
import Bids from "./src/components/Bids/index" // Bids Component 
import BidPage from "./src/components/BidPage/index" // BidPage Component 
import CreateBid from "./src/components/CreateBid/index" // NewsFeed Component 
import Calculator from "./src/components/Calculator/index" // Calculator Component 
import Stocks from "./src/components/Stocks/index" // Calculator Component 
import MarketPlace from "./src/components/MarketPlace/index" // Calculator Component
import PostLightBox from "./src/components/PostLightBox/index"
//first Login Screen
import FirstScreen from "./src/components/SignUp/index";
//second Login Screen
import TakeTourScreen from "./src/components/Take a Tour login and signup";
import TermsScreen from "./src/components/TermsNConditions"
import AfterSignupScreen from "./src/components/AfterSignup";
import ProfilesScreen from "./src/components/Profiles";
import ReferencesScreen from "./src/components/References";
import DownloadedPdfsScreen from "./src/components/DownloadedPdfs"
import PDFPage from "./src/components/PDFPage";
import CodesScreen from "./src/components/Codes";
import CategoryProsScreen from './src/components/CategoryPros';
import CalculationsScreen from './src/components/Calculations'
import MembershipScreen from './src/components/Membership'
import VerficationScreen from './src/components/Verfication'
import FinishingScreen from './src/components/Finishing'
import HowToScreen from './src/components/HowTo'
import MoreScreen from "./src/components/More";
import VisitedProfileProjectsScreen from './src/components/VisitedProfileProjects';
import CategoryPage from "./src/components/CategoryPage/index"
import ProductPage from "./src/components/ProductPage/index"
import PublicScene from "./src/components/PublicScene/index"
import PrivateScene from "./src/components/PrivateScene/index"
import { configure } from "./src/store/index"


const store = configure()

class App extends React.Component {
  componentWillMount() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        store.dispatch(setCurrentUser(user))  
        console.log(user);
        //store.dispatch(redirectIfAuthorized())

        
      } else {
        // No user is signed in.
        store.dispatch(logout())
      }
    });
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Lightbox>

            <Scene key="root" hideNavBar> 
            <Scene key="login"   component={Login} title="Login"/>
            <Scene key="newsfeed"  component={NewsFeed} title="NewsFeed"/>
            <Scene key="bids"  component={Bids} title="Bids"/>
            <Scene key="bid"  component={BidPage} title="Bid"/>
            <Scene key="createbid" component={CreateBid} title="Bid"/>
            <Scene key="more" initial component={MoreScreen} title="more"/>
            <Scene key="membership"  component={MembershipScreen} title="membership"/>
            <Scene key="calculator"  component={Calculator} title="Calculator"/>

            <Scene key="calculations"  component={CalculationsScreen} title="calculations"/>
            <Scene key="stocks"  component={Stocks} title="Stocks"/>
            <Scene key="terms"  component={TermsScreen} title="terms"/>
            <Scene key="howto"  component={HowToScreen} title="howto"/>
            
            <Scene key="market"  component={MarketPlace} title="MarketPlace"/>
            <Scene key="category"  component={CategoryPage} title="Category"/>
            <Scene key="verfication"  component={VerficationScreen} title="verfication"/>
            <Scene key="product"  component={ProductPage} title="Product"/>
            {/* <Scene key="login" component={TakeTourScreen} title="TakeTourScreen"/> */}
            <Scene key="codes"  component={CodesScreen} title="codes" />
            <Scene key="finishing"  component={FinishingScreen} title="finishing" />
            <Scene key="tourLogin"  component={TakeTourScreen} title="TakeTourScreen"/>
            <Scene key="register"   component={FirstScreen} title="New Account"/>
            <Scene key="home"  component={AfterSignupScreen} title="AfterSignupScreen"/>
            <Scene key="profiles"  component={ProfilesScreen} title="Profiles"/>
            <Scene key="pdfPage"  component={PDFPage} title="pdfPage"/>
            <Scene key="downloadedPdfs"  component={DownloadedPdfsScreen} title="downloaded" />
            <Scene key="References"  component={ReferencesScreen} title="References"/>
            <Scene key="VisitedProfileProjects"  component={VisitedProfileProjectsScreen} title="VisitedProfileProjects"/>

            <Scene key="CategoryProsScreen"   component={CategoryProsScreen} title="CategoryProsScreen"/>





          </Scene>


            {/* Lightbox components will lay over the screen, allowing transparency*/}
            <Scene key="imageLightBox" component={ImageLightBox} />
            <Scene key="postLightBox" component={PostLightBox} />

          </Lightbox>
        </Router>
      </Provider>
      
    );
  }
}


EStyleSheet.build({
  $primaryColor: "#5871B5"
})
export default App

