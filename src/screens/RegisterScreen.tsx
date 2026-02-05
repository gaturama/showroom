import React, { useState, useRef, useEffect } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Animated,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";
import { styles } from "../styles/stylesRegister";
import { Ionicons } from "@expo/vector-icons";
import CustomAlert from "../components/CustomAlert";

type Props = NativeStackScreenProps<RootStackParamList, "Register">;

export default function RegisterScreen({ navigation }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [dateBirth, setDateBirth] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertTitle, setAlertTitle] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  // Animações
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.spring(slideAnim, {
        toValue: 0,
        tension: 20,
        friction: 7,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const handleRegister = () => {
    if (!name || !email || !phone || !password || !dateBirth) {
      setAlertTitle("Campos Incompletos");
      setAlertMessage("Por favor, preencha todos os campos.");
      setAlertVisible(true);
      return;
    }

    setAlertTitle("Sucesso!");
    setAlertMessage(`Usuário ${name} cadastrado com sucesso!`);
    setAlertVisible(true);

    // Navegar após fechar o alerta
    setTimeout(() => {
      navigation.navigate("Login");
    }, 2000);
  };

  const closeAlert = () => {
    setAlertVisible(false);
    setAlertTitle("");
    setAlertMessage("");
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#DC143C" />

      {/* Header Glass */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Criar Conta</Text>
        <View style={{ width: 40 }} />
      </View>

      {/* Background Particles */}
      <View style={styles.backgroundParticles}>
        <Animated.View style={[styles.particle, styles.particle1]} />
        <Animated.View style={[styles.particle, styles.particle2]} />
        <Animated.View style={[styles.particle, styles.particle3]} />
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <Animated.View
            style={[
              styles.contentContainer,
              {
                opacity: fadeAnim,
                transform: [{ translateY: slideAnim }],
              },
            ]}
          >
            {/* Título */}
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Bem-vindo!</Text>
              <Text style={styles.subtitle}>
                Preencha seus dados para começar
              </Text>
            </View>

            {/* Card Glass com inputs */}
            <View style={styles.glassCard}>
              {/* Nome */}
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Nome Completo</Text>
                <View style={styles.inputWrapper}>
                  <Ionicons
                    name="person-outline"
                    size={20}
                    color="rgba(255, 255, 255, 0.6)"
                    style={styles.inputIcon}
                  />
                  <TextInput
                    autoCorrect={false}
                    autoCapitalize="words"
                    placeholder="Seu nome"
                    placeholderTextColor="rgba(255, 255, 255, 0.4)"
                    value={name}
                    onChangeText={setName}
                    style={styles.input}
                  />
                </View>
              </View>

              {/* Email */}
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Email</Text>
                <View style={styles.inputWrapper}>
                  <Ionicons
                    name="mail-outline"
                    size={20}
                    color="rgba(255, 255, 255, 0.6)"
                    style={styles.inputIcon}
                  />
                  <TextInput
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder="seu@email.com"
                    placeholderTextColor="rgba(255, 255, 255, 0.4)"
                    value={email}
                    onChangeText={setEmail}
                    style={styles.input}
                    keyboardType="email-address"
                  />
                </View>
              </View>

              {/* Telefone */}
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Telefone</Text>
                <View style={styles.inputWrapper}>
                  <Ionicons
                    name="call-outline"
                    size={20}
                    color="rgba(255, 255, 255, 0.6)"
                    style={styles.inputIcon}
                  />
                  <TextInput
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder="(00) 00000-0000"
                    placeholderTextColor="rgba(255, 255, 255, 0.4)"
                    value={phone}
                    onChangeText={setPhone}
                    style={styles.input}
                    keyboardType="phone-pad"
                  />
                </View>
              </View>

              {/* Data de Nascimento */}
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Data de Nascimento</Text>
                <View style={styles.inputWrapper}>
                  <Ionicons
                    name="calendar-outline"
                    size={20}
                    color="rgba(255, 255, 255, 0.6)"
                    style={styles.inputIcon}
                  />
                  <TextInput
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder="DD/MM/AAAA"
                    placeholderTextColor="rgba(255, 255, 255, 0.4)"
                    value={dateBirth}
                    onChangeText={setDateBirth}
                    style={styles.input}
                    keyboardType="numeric"
                  />
                </View>
              </View>

              {/* Senha */}
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Senha</Text>
                <View style={styles.inputWrapper}>
                  <Ionicons
                    name="lock-closed-outline"
                    size={20}
                    color="rgba(255, 255, 255, 0.6)"
                    style={styles.inputIcon}
                  />
                  <TextInput
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder="••••••••"
                    placeholderTextColor="rgba(255, 255, 255, 0.4)"
                    value={password}
                    onChangeText={setPassword}
                    style={[styles.input, styles.passwordInput]}
                    secureTextEntry={!showPassword}
                  />
                  <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                    style={styles.eyeIcon}
                  >
                    <Ionicons
                      name={showPassword ? "eye-off-outline" : "eye-outline"}
                      size={20}
                      color="rgba(255, 255, 255, 0.6)"
                    />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Botão Cadastrar */}
              <TouchableOpacity
                style={styles.button}
                onPress={handleRegister}
                activeOpacity={0.8}
              >
                <Text style={styles.buttonText}>Criar Conta</Text>
                <Ionicons name="arrow-forward" size={20} color="#fff" />
              </TouchableOpacity>

              {/* Link para Login */}
              <TouchableOpacity
                onPress={() => navigation.navigate("Login")}
                style={styles.loginLink}
              >
                <Text style={styles.textLogin}>
                  Já tem conta?{" "}
                  <Text style={styles.textLoginStrong}>Entrar</Text>
                </Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </ScrollView>
      </KeyboardAvoidingView>

      {/* Alert */}
      <CustomAlert
        isVisible={alertVisible}
        title={alertTitle}
        message={alertMessage}
        onClose={closeAlert}
      />
    </View>
  );
}