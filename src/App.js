import React, { Component } from 'react'
import update from 'immutability-helper'
import $ from 'jquery'
import _ from 'lodash'
import './App.css'
// Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import CircularProgress from 'material-ui/CircularProgress'
// Components
import Dashboard from './components/Dashboard'

export default class App extends Component {
  state = {
    userInfo: {},
    recentImgs: [],
    featured: { img: {}, title: 'Most Recent Post' },
    loggedIn: false,

    // Instagram account login info
    accessToken: '',
    userId: '',
  }

  componentWillMount() {
    // Check the params for access token
    const uri = window.location.hash
    const isToken = uri.indexOf('access_token') > -1
    if (isToken) {
      const accessToken = uri.replace('#access_token=', '')
      const userId = parseFloat(accessToken)

      // Set accessToken / userId and then request data
      this.requestInstaData(accessToken, userId)
    }
  }

  requestInstaData(accessToken, userId) {
    const baseDomain = 'https://api.instagram.com/v1/'

    // Get request urls
    const userUrl = `${baseDomain}users/${userId}/?access_token=${accessToken}`
    const imgsUrl = `${baseDomain}users/${userId}/media/recent/?access_token=${accessToken}`

    // Request account information
    $.ajax({
      type: 'GET',
      url: userUrl,
      crossDomain: true,
      success: function(response) {
        this.setState({
          userInfo: response.data,
        })
      }.bind(this),
      dataType: 'jsonp',
    })

    // Request recent images
    $.ajax({
      type: 'GET',
      url: imgsUrl,
      crossDomain: true,
      success: function(response) {
        const recentImgs = _.reverse(response.data)
        console.log(recentImgs)
        const featured = update(this.state.featured, {
          img: { $set: recentImgs[recentImgs.length - 1] },
        })

        this.setState({
          recentImgs,
          featured,
          loggedIn: true,
        })
      }.bind(this),
      dataType: 'jsonp',
    })
  }

  logout = () => {
    this.setState({
      loggedIn: false,
      accessToken: '',
      userId: '',
    })
  }

  setFeaturedImg = img => {
    this.setState({ featured: { img, title: 'Selected Post' } })
  }

  render() {
    const { userInfo, recentImgs, featured, loggedIn } = this.state

    return (
      <MuiThemeProvider>
        {loggedIn
          ? <Dashboard
              userInfo={userInfo}
              recentImgs={recentImgs}
              setFeaturedImg={this.setFeaturedImg}
              featured={featured}
              logout={this.logout}
            />
          : <CircularProgress color="#03A9F4" />}
      </MuiThemeProvider>
    )
  }
}
