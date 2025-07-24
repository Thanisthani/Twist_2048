import { useRouter } from 'expo-router';
import { House, RotateCcw } from 'lucide-react-native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useGame } from '../context/GameContext';
import { colors } from '../styles/theme';

export const Header: React.FC = () => {
  const { gameState, restart } = useGame();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  return (
  
    <View style={[styles.container,{paddingTop:insets.top+hp("1%")}]}>
      <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"100%",paddingHorizontal:wp("4%")}}>
        <View style={{flexDirection:"row",alignItems:"center",gap:wp("2%")}}>
        <TouchableOpacity 
        style={styles.buttonContent} 
        onPress={() => router.navigate('/HomeScreen')}
        activeOpacity={0.8}
      >
          <House size={23} color={colors.buttonText} />
      </TouchableOpacity>

        <TouchableOpacity 
        style={styles.buttonContent} 
        onPress={restart}
        activeOpacity={0.8}
      >
          <RotateCcw size={23} color={colors.buttonText} />
      </TouchableOpacity>
        </View>
        <View style={{alignItems:"center"}}>
        <Text style={styles.scoreLabel}>High Score</Text>
        <Text style={[styles.scoreLabel,{fontSize:17}]}> {gameState.bestScore}</Text>
        </View>
     
      </View>
        
      <View style={styles.titleContainer}>
      <Image source={require('../assets/images/appIconBG.png')} style={styles.logo} />
        <Text style={styles.subtitle}>Join the tiles, get to 2048!</Text>
        <View style={styles.scoreBox}>
          <Text style={[styles.scoreLabel,{fontSize:16}]}>Your Score</Text>
          <Text style={styles.scoreValue}>{gameState.score}</Text>
        </View>
      </View>
      
        
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: hp("2%"),
  },
  
  titleContainer: {
    alignItems: 'center',
    marginVertical:hp("3%")
  },
  logo:{
    height:wp("35%"),
    width:wp("35%"),
  },
  
  subtitle: {
    fontSize: 16,
    color: "#3a2d5f",
    opacity: 0.8,
  },
  
  scoreContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
    marginBottom: 20,
  },
  
  scoreBox: {
marginTop:hp("2%"),
    alignItems: 'center',
  },
  
  scoreLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: "#4b3979",
    marginBottom: 4,
  },
  
  scoreValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#4b3979",
  },
  
  
  buttonContent: {
   backgroundColor:"#4b3979",
   padding:wp("3%"),
   borderRadius:wp("2%")
  },
  
  restartText: {
    fontSize: 14,
  },
});