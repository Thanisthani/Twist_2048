import { useGame } from '@/context/GameContext'
import { useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen'
import { SafeAreaView } from 'react-native-safe-area-context'
import { WebView } from 'react-native-webview'
import { globalStyles } from '../styles/theme'
const index = () => {
  const [showHighScore, setShowHighScore] = useState(false);
  const {  restart } = useGame();
  const router = useRouter();

  const handleScoreBoard = () => {
    setShowHighScore(true);
  }

  const handleCloseHighScore = () => {
    setShowHighScore(false);
  }

  return (
    <>
      <StatusBar style='dark' />
      <SafeAreaView style={[globalStyles.container, styles.container]}>
        {/* <TouchableOpacity style={[styles.iconBG,globalStyles.shadow]} onPress={handleScoreBoard} activeOpacity={0.85}>
        <Crown size={RFValue(20)} color="#4b3979" />
        </TouchableOpacity>
        <View style={styles.centered}>
        <Image source={require('../assets/images/appIcon.png')} style={styles.logo} />

         
        </View>
        <View style={styles.buttonGroup}>
              <TouchableOpacity style={[globalStyles.button, styles.button]} activeOpacity={0.85} onPress={() => {
                restart()
                router.navigate('/GameScreen')}}>

                <Text style={globalStyles.buttonText}>Start Game</Text>
              </TouchableOpacity>
          </View>

        <HighScoreModal isOpen={showHighScore} onClose={handleCloseHighScore} /> */}
             <WebView
              source={{ uri: "https://youtu.be/43R9l7EkJwE?si=EC8YPKsf_EYo1KQ2"}}
              style={styles.webview}
              startInLoadingState={true}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              onLoadStart={() => console.log('WebViewOverlay: Loading started')}
              onLoadEnd={() => console.log('WebViewOverlay: Loading ended')}
              onError={(syntheticEvent) => {
                const { nativeEvent } = syntheticEvent;
                console.error('WebViewOverlay: Error loading URL:', nativeEvent);
              }}
            />
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    // alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  webview: {
    flex: 1,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  logo:{
    height:wp("90%"),
    width:wp("90%"),
  },
  buttonGroup: {
    width: '100%',
    paddingBottom:hp("10%")
  },
  button: {
    marginVertical: hp("1%"),
    alignSelf: 'center',
    width:wp("70%"),
    height:hp("7%"),
    alignItems:"center",
    justifyContent:"center",
  },
  iconBG:{
    backgroundColor:"#f4f2f9",
    borderRadius:wp("30%"),
    marginVertical:hp("2%"),
    alignItems:"center",
    justifyContent:"center",
    width:wp("10%"),
    height:wp("10%"),
    alignSelf:"flex-end",
    marginRight:wp("5%")
  }
})

export default index