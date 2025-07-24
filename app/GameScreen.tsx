import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import { GameBoard } from '../components/GameBoard'
import { GameOverModal } from '../components/GameOverModal'
import { Header } from '../components/Header'
import { globalStyles } from '../styles/theme'

const GameScreen = () => {
  return (
    <>
       <StatusBar style='dark' />
      <SafeAreaView style={[globalStyles.container, styles.container]}>
     
   <View style={{flex:1}}>

          <Header />
          <GameBoard />
   </View>
        <GameOverModal />
      </SafeAreaView>
      </>

  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"#bbaedb"
    },
    
    content: {
      flex: 1,
    },
  });

export default GameScreen
