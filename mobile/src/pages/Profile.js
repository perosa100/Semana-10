import React from 'react'
import { View } from 'react-native'
import { WebView } from 'react-native-webview'

function Profile({ navigation }) {
  const gihubUsername = navigation.getParam('github_username')
  return <WebView style={{ flex: 1 }} source={{ uri: `http://www.github.com/${gihubUsername}` }} />

}

export default Profile;