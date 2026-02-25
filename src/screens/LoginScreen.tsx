import React, { useCallback, useState, useRef } from "react";
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Animated,
  StatusBar,
  ActivityIndicator,
  Easing,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";
import { useFocusEffect } from "@react-navigation/native";
import CustomAlert from "../components/CustomAlert";
import { createStyles } from "../styles/stylesLogin";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import { useThemedStyles } from "../hooks/useThemedStyles";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

export default function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertTitle, setAlertTitle] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { colors, isDark } = useTheme();
  const styles = useThemedStyles(createStyles);
  const { login } = useAuth();

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const logoScale = useRef(new Animated.Value(0.3)).current;
  const logoRotate = useRef(new Animated.Value(0)).current;
  const cardSlide = useRef(new Animated.Value(50)).current;
  const cardScale = useRef(new Animated.Value(0.9)).current;
  const emailSlide = useRef(new Animated.Value(30)).current;
  const passwordSlide = useRef(new Animated.Value(30)).current;
  const buttonSlide = useRef(new Animated.Value(30)).current;
  const particle1Float = useRef(new Animated.Value(0)).current;
  const particle2Float = useRef(new Animated.Value(0)).current;
  const particle3Float = useRef(new Animated.Value(0)).current;
  const buttonScale = useRef(new Animated.Value(1)).current;
  const shakeAnim = useRef(new Animated.Value(0)).current;

  useFocusEffect(
    useCallback(() => {
      setEmail("");
      setPassword("");

      fadeAnim.setValue(0);
      logoScale.setValue(0.3);
      logoRotate.setValue(0);
      cardSlide.setValue(50);
      cardScale.setValue(0.9);
      emailSlide.setValue(30);
      passwordSlide.setValue(30);
      buttonSlide.setValue(30);

      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),

        Animated.parallel([
          Animated.spring(logoScale, {
            toValue: 1,
            tension: 50,
            friction: 7,
            useNativeDriver: true,
          }),
          Animated.timing(logoRotate, {
            toValue: 1,
            duration: 800,
            easing: Easing.out(Easing.back(1.2)),
            useNativeDriver: true,
          }),
        ]),

        Animated.parallel([
          Animated.spring(cardSlide, {
            toValue: 0,
            tension: 40,
            friction: 8,
            useNativeDriver: true,
          }),
          Animated.spring(cardScale, {
            toValue: 1,
            tension: 40,
            friction: 8,
            useNativeDriver: true,
          }),
        ]),

        Animated.stagger(100, [
          Animated.spring(emailSlide, {
            toValue: 0,
            tension: 40,
            friction: 8,
            useNativeDriver: true,
          }),
          Animated.spring(passwordSlide, {
            toValue: 0,
            tension: 40,
            friction: 8,
            useNativeDriver: true,
          }),
          Animated.spring(buttonSlide, {
            toValue: 0,
            tension: 40,
            friction: 8,
            useNativeDriver: true,
          }),
        ]),
      ]).start();

      Animated.loop(
        Animated.sequence([
          Animated.timing(particle1Float, {
            toValue: -15,
            duration: 3000,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
          Animated.timing(particle1Float, {
            toValue: 0,
            duration: 3000,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
        ]),
      ).start();

      Animated.loop(
        Animated.sequence([
          Animated.timing(particle2Float, {
            toValue: -20,
            duration: 4000,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
          Animated.timing(particle2Float, {
            toValue: 0,
            duration: 4000,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
        ]),
      ).start();

      Animated.loop(
        Animated.sequence([
          Animated.timing(particle3Float, {
            toValue: -10,
            duration: 2500,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
          Animated.timing(particle3Float, {
            toValue: 0,
            duration: 2500,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
        ]),
      ).start();
    }, []),
  );

  const shakeCard = () => {
    shakeAnim.setValue(0);
    Animated.sequence([
      Animated.timing(shakeAnim, {
        toValue: 10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnim, {
        toValue: -10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnim, {
        toValue: 10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnim, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handlePressIn = () => {
    Animated.spring(buttonScale, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(buttonScale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = async () => {
    if (!email || !password) {
      setAlertTitle("Campos Incompletos");
      setAlertMessage("Por favor, preencha email e senha.");
      setAlertVisible(true);
      shakeCard();
      return;
    }

    setIsLoading(true);

    try {
      const result = await login(email, password);

      if (result.success) {
        Animated.parallel([
          Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.spring(cardScale, {
            toValue: 0.8,
            useNativeDriver: true,
          }),
        ]).start(() => {
          navigation.reset({
            index: 0,
            routes: [{ name: "Home" }],
          });
        });
      } else {
        setAlertTitle("Erro de Login");
        setAlertMessage(result.message);
        setAlertVisible(true);
        shakeCard();
      }
    } catch (error) {
      setAlertTitle("Erro");
      setAlertMessage("Ocorreu um erro ao fazer login. Tente novamente.");
      setAlertVisible(true);
      shakeCard();
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = () => {
    navigation.navigate("Register");
  };

  const closeAlert = () => {
    setAlertVisible(false);
    setAlertTitle("");
    setAlertMessage("");
  };

  const logoRotateInterpolate = logoRotate.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={colors.statusBarStyle}
        backgroundColor={colors.background}
      />
      <View style={styles.backgroundParticles}>
        <Animated.View
          style={[
            styles.particle,
            styles.particle1,
            {
              transform: [{ translateY: particle1Float }],
            },
          ]}
        />
        <Animated.View
          style={[
            styles.particle,
            styles.particle2,
            {
              transform: [{ translateY: particle2Float }],
            },
          ]}
        />
        <Animated.View
          style={[
            styles.particle,
            styles.particle3,
            {
              transform: [{ translateY: particle3Float }],
            },
          ]}
        />
      </View>

      <Animated.View
        style={[
          styles.contentContainer,
          {
            opacity: fadeAnim,
          },
        ]}
      >
        <Animated.View
          style={[
            styles.logoContainer,
            {
              transform: [
                { scale: logoScale },
                { rotate: logoRotateInterpolate },
              ],
            },
          ]}
        >
          <Image
            source={
              isDark
                ? require("../assets/jms_logo.png")
                : require("../assets/jms_logo_black.png")
            }
            style={styles.image}
            resizeMode="contain"
          />
        </Animated.View>

        <Animated.View
          style={[
            styles.glassCard,
            {
              transform: [
                { translateY: cardSlide },
                { scale: cardScale },
                { translateX: shakeAnim },
              ],
            },
          ]}
        >
          <Animated.View
            style={[
              styles.inputContainer,
              {
                transform: [{ translateY: emailSlide }],
              },
            ]}
          >
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="seu@email.com"
              placeholderTextColor={colors.placeholder}
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
              style={styles.input}
              editable={!isLoading}
            />
          </Animated.View>

          <Animated.View
            style={[
              styles.inputContainer,
              {
                transform: [{ translateY: passwordSlide }],
              },
            ]}
          >
            <Text style={styles.inputLabel}>Senha</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                autoCorrect={false}
                autoCapitalize="none"
                secureTextEntry={!showPassword}
                placeholder="••••••••"
                placeholderTextColor={colors.placeholder}
                value={password}
                onChangeText={setPassword}
                style={[styles.input, styles.passwordInput]}
                editable={!isLoading}
              />
              <TouchableOpacity
                onPress={toggleShowPassword}
                style={styles.eyeIcon}
                disabled={isLoading}
              >
                <Image
                  source={
                    showPassword
                      ? require("../assets/ic_eye_closed.png")
                      : require("../assets/ic_eye.png")
                  }
                  style={styles.eyeImage}
                />
              </TouchableOpacity>
            </View>
          </Animated.View>

          <Animated.View
            style={{
              transform: [{ translateY: buttonSlide }, { scale: buttonScale }],
            }}
          >
            <TouchableOpacity
              style={[styles.button, isLoading && { opacity: 0.7 }]}
              onPress={handleLogin}
              onPressIn={handlePressIn}
              onPressOut={handlePressOut}
              activeOpacity={0.9}
              disabled={isLoading}
            >
              {isLoading ? (
                <ActivityIndicator color="#fff" size="small" />
              ) : (
                <Text style={styles.buttonText}>Entrar</Text>
              )}
            </TouchableOpacity>
          </Animated.View>

          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>ou</Text>
            <View style={styles.dividerLine} />
          </View>

          <TouchableOpacity
            onPress={handleRegister}
            style={styles.registerLink}
            disabled={isLoading}
          >
            <Text style={styles.textCadastro}>
              Não tem conta?{" "}
              <Text style={styles.textCadastroStrong}>Cadastre-se</Text>
            </Text>
          </TouchableOpacity>
        </Animated.View>

        <Text style={styles.footerText}>JMS Car Showroom © 2026</Text>
      </Animated.View>

      <CustomAlert
        isVisible={alertVisible}
        title={alertTitle}
        message={alertMessage}
        onClose={closeAlert}
      />
    </View>
  );
}
