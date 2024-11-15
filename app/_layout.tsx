// RootLayout.tsx
import RootStack from "@/components/navigators/RootStack";
import Welcome from "@/screens/Welcome";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    futureBook: require("../assets/fonts/FuturaBook.ttf"),
    futurebold: require("../assets/fonts/FuturaBold.ttf"),
    futuraheavy: require("../assets/fonts/FuturaHeavy.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootStack />; // Expo Router handles navigation, so no need to render RootStack here
}
