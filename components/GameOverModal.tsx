import { RotateCcw, Trophy } from 'lucide-react-native';
import React from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useGame } from '../context/GameContext';
import { colors, globalStyles } from '../styles/theme';

export const GameOverModal: React.FC = () => {
  const { gameState, restart } = useGame();

  if (!gameState.gameOver && !gameState.won) {
    return null;
  }

  const isWin = gameState.won && !gameState.gameOver;

  return (
    <Modal
      visible={gameState.gameOver || gameState.won}
      transparent
      animationType="fade"
    >
      <View style={styles.overlay}>
        <View style={[styles.modal, globalStyles.shadow]}>
          <View style={styles.iconContainer}>
            <Trophy 
              size={64} 
              color={isWin ? "#7860b4" : "#4b3979"} 
            />
          </View>
          
          <Text style={styles.title}>
            {isWin ? 'You Win!' : 'Game Over!'}
          </Text>
          
          <Text style={styles.subtitle}>
            {isWin 
              ? 'Congratulations! You reached 2048!' 
              : 'No more moves available.'
            }
          </Text>
          
          <View style={styles.scoreContainer}>
            <Text style={styles.scoreLabel}>Final Score</Text>
            <Text style={styles.scoreValue}>{gameState.score}</Text>
          </View>
          
          <TouchableOpacity 
            style={[globalStyles.button, styles.restartButton]} 
            onPress={restart}
            activeOpacity={0.8}
          >
            <View style={styles.buttonContent}>
              <RotateCcw size={RFValue(14)} color={colors.buttonText} />
              <Text style={[globalStyles.buttonText, styles.buttonText]}>
                Try Again
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp("4%"),
  },
  
  modal: {
    backgroundColor: "#f4f2f9",
    borderRadius: 16,
    padding: wp("4%"),
    alignItems: 'center',
    minWidth: wp("70%"),
  },
  
  iconContainer: {
    marginBottom: hp("2%"),
    marginTop: hp("1%"),
  },
  
  title: {
    fontSize: RFValue(22),
    fontWeight: 'bold',
    color: "#4b3979",
    marginBottom: 8,
    textAlign: 'center',
  },
  
  subtitle: {
    fontSize: RFValue(13),
    color: "#4b3979",
    opacity: 0.8,
    marginBottom: 24,
    textAlign: 'center',
    lineHeight: 22,
  },
  
  scoreContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  
  scoreLabel: {
    fontSize: RFValue(14),
    fontWeight: '600',
    color: "#4b3979",
    opacity: 0.8,
    marginBottom: hp("1%"),
  },
  
  scoreValue: {
    fontSize: RFValue(25),
    fontWeight: 'bold',
    color:  "#4b3979",
  },
  
  restartButton: {
    minWidth: wp("50%"),
  },
  
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: wp("2%"),
  },
  
  buttonText: {
    fontSize: RFValue(14),
  },
});