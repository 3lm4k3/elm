import React from "react"
import { connect } from  "react-redux"
import { Router, Scene, Lightbox } from "react-native-router-flux"

export default connect(
  state => ({
    currentUser: state.currentUser
  })
)(
  () => {
    const { currentUser } = this.props
    return (
      currentUser ? {
          children
        } :
        null
    )
  }
)