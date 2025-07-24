import { useGame } from '@/context/GameContext';
import { globalStyles } from '@/styles/theme';
import { Trophy, X as XIcon } from 'lucide-react-native';
import React from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface HighScoreModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const HighScoreModal = ({ isOpen, onClose }: HighScoreModalProps) => {
  const { gameState } = useGame();

  return (
    <Modal
      visible={isOpen}
      transparent
      animationType="fade"
    >
      <View style={styles.overlay}>
        <View style={[styles.modal, globalStyles.shadow]}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose} activeOpacity={0.8}>
            <XIcon size={24} color="#4b3979" />
          </TouchableOpacity>
          <View style={styles.iconContainer}>
            <Trophy size={64} color={"#644ca1"} />
          </View>
          <Text style={styles.title}>High Score!</Text>
          <Text style={styles.subtitle}>Your best score so far</Text>
          <View style={styles.scoreContainer}>
            <Text style={styles.scoreLabel}>Best</Text>
            <Text style={styles.scoreValue}>{gameState.bestScore}</Text>
          </View>
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
    paddingHorizontal: 20,
  },
  modal: {
    backgroundColor: "#f4f2f9",
    borderRadius: 16,
    padding: 32,
    alignItems: 'center',
    minWidth: 280,
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    zIndex: 2,
    padding: 4,
  },
  iconContainer: {
    marginBottom: 20,
    marginTop: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: "#4b3979",
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: "#4b3979",
    opacity: 0.8,
    marginBottom: 24,
    textAlign: 'center',
    lineHeight: 22,
  },
  scoreContainer: {
    alignItems: 'center',
    marginBottom: 8,
  },
  scoreLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: "#4b3979",
    opacity: 0.8,
    marginBottom: 4,
  },
  scoreValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: "#4b3979",
  },
});

export default HighScoreModal;