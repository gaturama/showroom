import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FavoritesProvider } from "./src/components/Favorites";
import { AuthProvider } from "./src/context/AuthContext";
import { ThemeProvider } from "./src/context/ThemeContext";
import { RatingsProvider } from "./src/context/RatingsContext";
import { RootStackParamList } from "./src/navigation/types";
import { SplashScreen } from "./src/components/SplashScreen";

import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import CarDetailsScreen from "./src/components/CarDetailsScreen";
import CompareScreen from "./src/screens/CompareScreen";
import FavoritesScreen from "./src/screens/FavoritesScreen";
import { UnsplashProvider } from "./src/context/UnsplashContext";
import { ViewHistoryProvider } from "./src/context/ViewHistoryContext";
import HistoryScreen from "./src/screens/HistoryScreen";
import { NotificationProvider } from "./src/context/NotificationContext";
import NotificationSettingsScreen from "./src/screens/NotificationSettingsScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [showSplash, setShowSplash] = React.useState(true);

  if (showSplash) {
    return (
      <ThemeProvider>
        <SplashScreen onFinish={() => setShowSplash(false)} />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <AuthProvider>
        <FavoritesProvider>
          <RatingsProvider>
            <UnsplashProvider>
              <ViewHistoryProvider>
                <NotificationProvider>
                  <NavigationContainer>
                    <Stack.Navigator
                      initialRouteName="Login"
                      screenOptions={{ animation: "fade" }}
                      id={undefined}
                    >
                      <Stack.Screen
                        name="Login"
                        component={LoginScreen}
                        options={{ headerShown: false }}
                      />
                      <Stack.Screen
                        name="Register"
                        component={RegisterScreen}
                        options={{ headerShown: false }}
                      />
                      <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{ headerShown: false }}
                      />
                      <Stack.Screen
                        name="Profile"
                        component={ProfileScreen}
                        options={{ headerShown: false }}
                      />
                      <Stack.Screen
                        name="CarDetails"
                        component={CarDetailsScreen}
                        options={{ headerShown: false }}
                      />
                      <Stack.Screen
                        name="Favorites"
                        component={FavoritesScreen}
                        options={{ headerShown: false }}
                      />
                      <Stack.Screen
                        name="Compare"
                        component={CompareScreen}
                        options={{ headerShown: false }}
                      />
                      <Stack.Screen
                        name="History"
                        component={HistoryScreen}
                        options={{ headerShown: false }}
                      />
                      <Stack.Screen
                        name="NotificationSettings"
                        component={NotificationSettingsScreen}
                        options={{ headerShown: false }}
                      />
                    </Stack.Navigator>
                  </NavigationContainer>
                </NotificationProvider>
              </ViewHistoryProvider>
            </UnsplashProvider>
          </RatingsProvider>
        </FavoritesProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
