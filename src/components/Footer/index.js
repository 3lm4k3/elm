import React from "react"
import {
  Text,
} from "react-native"
import {
  Footer,
  FooterTab,
  Button
} from "native-base"
import Icon from "react-native-vector-icons/Feather"
import LineIcon from "react-native-vector-icons/SimpleLineIcons"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import { Actions } from "react-native-router-flux"

import cstyles from "../common/style"

export default class FooterComponent extends React.Component {
  render() {
    const active = this.props.activeTab
    return (
      <Footer style={cstyles.footer} >
        <FooterTab style={cstyles.footerTab}>
          <Button vertical onPress={()=> Actions.newsfeed()}>
            <FontAwesome name="newspaper-o" size={30} color={active === "feeds" ? "#935CAE" : "#484848"} />
            <Text style={{color: active === "feeds" ? "#935CAE" : "#484848"}}>Feeds</Text>
          </Button>
          <Button vertical onPress={()=> Actions.profiles()}>
            <Icon name="users" size={30} color={active === "profiles" ? "#935CAE" : "#484848"} />
            <Text style={{color: active === "profiles" ? "#935CAE" : "#484848"}}>Profiles</Text>
          </Button>
          <Button vertical onPress={()=> Actions.market()}>
            <LineIcon name="tag" size={30} color={active === "market" ? "#935CAE" : "#484848"}  />
            <Text style={{color: active === "market" ? "#935CAE" : "#484848"}}>Market</Text>
          </Button>
          {/*<Button vertical onPress={()=> Actions.bids()}>*/}
            {/*<Icon name="x" size={30} color={active === "bids" ? "#935CAE" : "#484848"} />*/}
            {/*<Text style={{color: active === "bids" ? "#935CAE" : "#484848"}}>Bids</Text>*/}
          {/*</Button>*/}
            <Button vertical onPress={()=> Actions.more()}>
            <Icon name="x" size={30} color={active === "more" ? "#935CAE" : "#484848"} />
            <Text style={{color: active === "more" ? "#935CAE" : "#484848"}} >More</Text>
          </Button>
        </FooterTab>
      </Footer>
    )
  }
}