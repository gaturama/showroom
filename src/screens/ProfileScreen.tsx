import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Animated,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";
import { styles } from "../styles/stylesProfile";
import { Ionicons } from "@expo/vector-icons";
import CustomAlert from "../components/CustomAlert";

type Props = NativeStackScreenProps<RootStackParamList, "Profile">;

export default function ProfileScreen({ navigation }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertTitle, setAlertTitle] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  // Animações
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;

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
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 20,
        friction: 7,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const handleEdit = () => {
    if (!name || !email || !password || !phone) {
      setAlertTitle("Campos Incompletos");
      setAlertMessage("Preencha todos os campos antes de salvar!");
      setAlertVisible(true);
      return;
    }

    setAlertTitle("Sucesso!");
    setAlertMessage("Informações atualizadas com sucesso!");
    setAlertVisible(true);
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
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Meu Perfil</Text>
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
            {/* Avatar Section */}
            <Animated.View
              style={[
                styles.avatarContainer,
                { transform: [{ scale: scaleAnim }] },
              ]}
            >
              <View style={styles.avatarGlass}>
                <Ionicons name="person" size={60} color="#DC143C" />
              </View>
              <TouchableOpacity style={styles.avatarEditButton}>
                <Ionicons name="camera" size={18} color="#fff" />
              </TouchableOpacity>
            </Animated.View>

            <Text style={styles.avatarLabel}>Editar foto</Text>

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

              {/* Botão Salvar */}
              <TouchableOpacity
                style={styles.button}
                onPress={handleEdit}
                activeOpacity={0.8}
              >
                <Ionicons
                  name="checkmark-circle"
                  size={22}
                  color="#fff"
                  style={{ marginRight: 8 }}
                />
                <Text style={styles.buttonText}>Salvar Alterações</Text>
              </TouchableOpacity>

              {/* Opções adicionais */}
              <View style={styles.optionsContainer}>
                <TouchableOpacity style={styles.optionButton}>
                  <Ionicons
                    name="notifications-outline"
                    size={20}
                    color="rgba(255, 255, 255, 0.7)"
                  />
                  <Text style={styles.optionText}>Notificações</Text>
                  <Ionicons
                    name="chevron-forward"
                    size={20}
                    color="rgba(255, 255, 255, 0.4)"
                  />
                </TouchableOpacity>

                <TouchableOpacity style={styles.optionButton}>
                  <Ionicons
                    name="shield-checkmark-outline"
                    size={20}
                    color="rgba(255, 255, 255, 0.7)"
                  />
                  <Text style={styles.optionText}>Privacidade</Text>
                  <Ionicons
                    name="chevron-forward"
                    size={20}
                    color="rgba(255, 255, 255, 0.4)"
                  />
                </TouchableOpacity>

                <TouchableOpacity style={styles.optionButton}>
                  <Ionicons
                    name="help-circle-outline"
                    size={20}
                    color="rgba(255, 255, 255, 0.7)"
                  />
                  <Text style={styles.optionText}>Ajuda e Suporte</Text>
                  <Ionicons
                    name="chevron-forward"
                    size={20}
                    color="rgba(255, 255, 255, 0.4)"
                  />
                </TouchableOpacity>
              </View>

              {/* Botão Sair */}
              <TouchableOpacity
                style={styles.logoutButton}
                onPress={() => navigation.navigate("Login")}
              >
                <Ionicons name="log-out-outline" size={20} color="#DC143C" />
                <Text style={styles.logoutText}>Sair da Conta</Text>
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