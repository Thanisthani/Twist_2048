import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { runOnJS } from 'react-native-reanimated';

import {
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import { useGame } from '../context/GameContext';
import { globalStyles } from '../styles/theme';
import { Direction } from '../types';
import { Tile } from './Tile';


const BOARD_PADDING = wp("4%");
const TILE_MARGIN = wp("2%");
const BOARD_SIZE = wp("92%");
const TILE_SIZE = (BOARD_SIZE - (TILE_MARGIN * 5) )/4;

export const GameBoard: React.FC = () => {
  const { gameState, move } = useGame();

  const handleMove = (direction: Direction) => {
    move(direction);
  };

  const panGesture = Gesture.Pan()
    .onEnd((event) => {
      const { translationX, translationY } = event;
      const absX = Math.abs(translationX);
      const absY = Math.abs(translationY);
      
      // Minimum distance for gesture recognition
      const minDistance = 30;
      
      if (absX < minDistance && absY < minDistance) {
        return;
      }
      
      if (absX > absY) {
        // Horizontal movement
        if (translationX > 0) {
          runOnJS(handleMove)('right');
        } else {
          runOnJS(handleMove)('left');
        }
      } else {
        // Vertical movement
        if (translationY > 0) {
          runOnJS(handleMove)('down');
        } else {
          runOnJS(handleMove)('up');
        }
      }
    });

  const renderTile = (value: number | null, row: number, col: number) => {
    const left = col * (TILE_SIZE + TILE_MARGIN) + TILE_MARGIN;
    const top = row * (TILE_SIZE + TILE_MARGIN) + TILE_MARGIN;
    
    return (
      <View
        key={`${row}-${col}`}
        style={[
          styles.tilePosition,
          {
            left,
            top,
            width: TILE_SIZE,
            height: TILE_SIZE,
          }
        ]}
      >
        <Tile
          value={value}
          position={{ row, col }}
          size={TILE_SIZE}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <GestureDetector gesture={panGesture}>
        <View style={[styles.board, globalStyles.shadow]}>
          {/* Background grid */}
          {Array.from({ length: 4 }, (_, row) =>
            Array.from({ length: 4 }, (_, col) => (
              <View
                key={`bg-${row}-${col}`}
                style={[
                  styles.backgroundTile,
                  {
                    left: col * (TILE_SIZE + TILE_MARGIN) + TILE_MARGIN,
                    top: row * (TILE_SIZE + TILE_MARGIN) + TILE_MARGIN,
                    width: TILE_SIZE,
                    height: TILE_SIZE,
                  }
                ]}
              />
            ))
          )}
          
          {/* Game tiles */}
          {gameState.board.map((row, rowIndex) =>
            row.map((value, colIndex) =>
              renderTile(value, rowIndex, colIndex)
            )
          )}
        </View>
      </GestureDetector>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: BOARD_PADDING,
  },
  
  board: {
    width: wp('92%'),
    height: wp('92%'),
    backgroundColor: "#8e79c1",
    borderRadius: 12,
  },
  
  backgroundTile: {
    position: 'absolute',
    backgroundColor: "rgba(233,228,243,0.1)",
    borderRadius: 8,
    opacity: 0.7,
  },
  
  tilePosition: {
    position: 'absolute',
  },
});