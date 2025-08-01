import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';

import { GameProvider } from '@/context/GameContext';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <GameProvider>
        <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="GameScreen" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />

      </Stack>
      <StatusBar style="auto" />
      </GameProvider>
      </GestureHandlerRootView>
    </>
      
  );
}
