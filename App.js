/*App Para mascarar acesso ao Google Form*/
import React from 'react';
import {WebView} from 'react-native-webview';

const App = () => {
  return (
        <WebView style={{flex:1}} source={{uri: 'https://docs.google.com/forms/d/e/1FAIpQLScv9oPJxPhKvxw50sIh3Y6vaLXWUkOpVYX-aY9ujKBiG0hiGQ/viewform'}}/>
  );
};


export default App;
