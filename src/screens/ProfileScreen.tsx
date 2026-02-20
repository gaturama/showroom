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
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";
import { Ionicons } from "@expo/vector-icons";
import CustomAlert from "../components/CustomAlert";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import { ThemeToggle } from "../components/ThemeToggle";

type Props = NativeStackScreenProps<RootStackParamList, "Profile">;

export default function ProfileScreen({ navigation }: Props) {
  const { currentUser, updateUser, logout } = useAuth();
  const { colors, isDark } = useTheme();

  const [name, setName] = useState(currentUser?.name || "");
  const [email, setEmail] = useState(currentUser?.email || "");
  const [phone, setPhone] = useState(currentUser?.phone || "");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertTitle, setAlertTitle] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
      setEmail(currentUser.email);
      setPhone(currentUser.phone);
    }
  }, [currentUser]);

  const handleEdit = async () => {
    if (!name || !email || !phone) {
      setAlertTitle("Campos Incompletos");
      setAlertMessage("Por favor, preencha nome, email e telefone.");
      setAlertVisible(true);
      return;
    }

    setIsLoading(true);

    try {
      const updateData: any = {
        name,
        email,
        phone,
      };

      if (password) {
        if (password.length < 4) {
          setAlertTitle("Senha Fraca");
          setAlertMessage("A senha deve ter no mínimo 4 caracteres.");
          setAlertVisible(true);
          setIsLoading(false);
          return;
        }
        updateData.password = password;
      }

      const result = await updateUser(updateData);

      if (result.success) {
        setAlertTitle("Sucesso!");
        setAlertMessage(result.message);
        setAlertVisible(true);
        setPassword("");
      } else {
        setAlertTitle("Erro");
        setAlertMessage(result.message);
        setAlertVisible(true);
      }
    } catch (error) {
      setAlertTitle("Erro");
      setAlertMessage("Ocorreu um erro ao atualizar. Tente novamente.");
      setAlertVisible(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };

  const closeAlert = () => {
    setAlertVisible(false);
    setAlertTitle("");
    setAlertMessage("");
  };

  if (!currentUser) {
    return (
      <View
        style={[
          styles(colors).container,
          { justifyContent: "center", alignItems: "center" },
        ]}
      >
        <Text style={{ color: colors.textPrimary, fontSize: 18 }}>
          Carregando...
        </Text>
      </View>
    );
  }

  return (
    <View style={styles(colors).container}>
      <StatusBar barStyle={colors.statusBarStyle} backgroundColor="#DC143C" />

      <View style={styles(colors).header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles(colors).backButton}
          disabled={isLoading}
        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles(colors).headerTitle}>Meu Perfil</Text>
        <View style={{ width: 40 }} />
      </View>

      <View style={styles(colors).backgroundParticles}>
        <Animated.View
          style={[styles(colors).particle, styles(colors).particle1]}
        />
        <Animated.View
          style={[styles(colors).particle, styles(colors).particle2]}
        />
        <Animated.View
          style={[styles(colors).particle, styles(colors).particle3]}
        />
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles(colors).scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <Animated.View
            style={[
              styles(colors).contentContainer,
              {
                opacity: fadeAnim,
                transform: [{ translateY: slideAnim }],
              },
            ]}
          >
            <Animated.View
              style={[
                styles(colors).avatarContainer,
                { transform: [{ scale: scaleAnim }] },
              ]}
            >
              <View style={styles(colors).avatarGlass}>
                <Text style={styles(colors).avatarText}>
                  {name.charAt(0).toUpperCase()}
                </Text>
              </View>
              <TouchableOpacity style={styles(colors).avatarEditButton}>
                <Ionicons name="camera" size={18} color="#fff" />
              </TouchableOpacity>
            </Animated.View>

            <View style={styles(colors).glassCard}>
              <View style={styles(colors).themeSection}>
                <View style={styles(colors).themeSectionLeft}>
                  <Ionicons
                    name={isDark ? "moon" : "sunny"}
                    size={24}
                    color={colors.accent}
                  />
                  <View style={{ marginLeft: 12 }}>
                    <Text style={styles(colors).themeSectionTitle}>
                      Tema {isDark ? "Escuro" : "Claro"}
                    </Text>
                    <Text style={styles(colors).themeSectionSubtitle}>
                      {isDark ? "Perfeito para a noite" : "Perfeito para o dia"}
                    </Text>
                  </View>
                </View>
                <ThemeToggle />
              </View>

              <View style={styles(colors).divider} />

              <View style={styles(colors).inputContainer}>
                <Text style={styles(colors).inputLabel}>Nome Completo</Text>
                <View style={styles(colors).inputWrapper}>
                  <Ionicons
                    name="person-outline"
                    size={20}
                    color={colors.textSecondary}
                    style={styles(colors).inputIcon}
                  />
                  <TextInput
                    autoCorrect={false}
                    autoCapitalize="words"
                    placeholder="Seu nome"
                    placeholderTextColor={colors.placeholder}
                    value={name}
                    onChangeText={setName}
                    style={styles(colors).input}
                    editable={!isLoading}
                  />
                </View>
              </View>

              <View style={styles(colors).inputContainer}>
                <Text style={styles(colors).inputLabel}>Email</Text>
                <View style={styles(colors).inputWrapper}>
                  <Ionicons
                    name="mail-outline"
                    size={20}
                    color={colors.textSecondary}
                    style={styles(colors).inputIcon}
                  />
                  <TextInput
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder="seu@email.com"
                    placeholderTextColor={colors.placeholder}
                    value={email}
                    onChangeText={setEmail}
                    style={styles(colors).input}
                    keyboardType="email-address"
                    editable={!isLoading}
                  />
                </View>
              </View>

              <View style={styles(colors).inputContainer}>
                <Text style={styles(colors).inputLabel}>Telefone</Text>
                <View style={styles(colors).inputWrapper}>
                  <Ionicons
                    name="call-outline"
                    size={20}
                    color={colors.textSecondary}
                    style={styles(colors).inputIcon}
                  />
                  <TextInput
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder="(00) 00000-0000"
                    placeholderTextColor={colors.placeholder}
                    value={phone}
                    onChangeText={setPhone}
                    style={styles(colors).input}
                    keyboardType="phone-pad"
                    editable={!isLoading}
                  />
                </View>
              </View>

              <View style={styles(colors).inputContainer}>
                <Text style={styles(colors).inputLabel}>
                  Nova Senha (opcional)
                </Text>
                <View style={styles(colors).inputWrapper}>
                  <Ionicons
                    name="lock-closed-outline"
                    size={20}
                    color={colors.textSecondary}
                    style={styles(colors).inputIcon}
                  />
                  <TextInput
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder="*********"
                    placeholderTextColor={colors.placeholder}
                    value={password}
                    onChangeText={setPassword}
                    style={[styles(colors).input, styles(colors).passwordInput]}
                    secureTextEntry={!showPassword}
                    editable={!isLoading}
                  />
                  <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                    style={styles(colors).eyeIcon}
                    disabled={isLoading}
                  >
                    <Ionicons
                      name={showPassword ? "eye-off-outline" : "eye-outline"}
                      size={20}
                      color={colors.textSecondary}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <TouchableOpacity
                style={[styles(colors).button, isLoading && { opacity: 0.7 }]}
                onPress={handleEdit}
                activeOpacity={0.8}
                disabled={isLoading}
              >
                {isLoading ? (
                  <ActivityIndicator color="#fff" size="small" />
                ) : (
                  <>
                    <Ionicons
                      name="checkmark-circle"
                      size={22}
                      color="#fff"
                      style={{ marginRight: 8 }}
                    />
                    <Text style={styles(colors).buttonText}>
                      Salvar Alterações
                    </Text>
                  </>
                )}
              </TouchableOpacity>

              <View style={styles(colors).optionsContainer}>
                <TouchableOpacity style={styles(colors).optionButton}>
                  <Ionicons
                    name="notifications-outline"
                    size={20}
                    color={colors.textSecondary}
                  />
                  <Text style={styles(colors).optionText}>Notificações</Text>
                  <Ionicons
                    name="chevron-forward"
                    size={20}
                    color={colors.textTertiary}
                  />
                </TouchableOpacity>

                <TouchableOpacity style={styles(colors).optionButton}>
                  <Ionicons
                    name="shield-checkmark-outline"
                    size={20}
                    color={colors.textSecondary}
                  />
                  <Text style={styles(colors).optionText}>Privacidade</Text>
                  <Ionicons
                    name="chevron-forward"
                    size={20}
                    color={colors.textTertiary}
                  />
                </TouchableOpacity>

                <TouchableOpacity style={styles(colors).optionButton}>
                  <Ionicons
                    name="help-circle-outline"
                    size={20}
                    color={colors.textSecondary}
                  />
                  <Text style={styles(colors).optionText}>Ajuda e Suporte</Text>
                  <Ionicons
                    name="chevron-forward"
                    size={20}
                    color={colors.textTertiary}
                  />
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={styles(colors).logoutButton}
                onPress={handleLogout}
                disabled={isLoading}
              >
                <Ionicons
                  name="log-out-outline"
                  size={20}
                  color={colors.accent}
                />
                <Text style={styles(colors).logoutText}>Sair da Conta</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </ScrollView>
      </KeyboardAvoidingView>

      <CustomAlert
        isVisible={alertVisible}
        title={alertTitle}
        message={alertMessage}
        onClose={closeAlert}
      />
    </View>
  );
}

const styles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },

    header: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 16,
      paddingTop: 50,
      paddingBottom: 16,
      backgroundColor: colors.accent,
      shadowColor: colors.accent,
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 8,
    },

    backButton: {
      width: 40,
      height: 40,
      borderRadius: 12,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      alignItems: "center",
      justifyContent: "center",
    },

    headerTitle: {
      fontSize: 20,
      fontWeight: "700",
      color: "#fff",
      letterSpacing: 0.5,
    },

    backgroundParticles: {
      position: "absolute",
      width: "100%",
      height: "100%",
    },

    particle: {
      position: "absolute",
      borderRadius: 999,
      opacity: 0.12,
    },

    particle1: {
      width: 280,
      height: 280,
      backgroundColor: colors.particleColor,
      top: "20%",
      left: "-25%",
    },

    particle2: {
      width: 220,
      height: 220,
      backgroundColor: colors.particleColorSecondary,
      top: "55%",
      right: "-20%",
    },

    particle3: {
      width: 180,
      height: 180,
      backgroundColor: colors.particleColor,
      bottom: "8%",
      left: "30%",
    },

    scrollContent: {
      flexGrow: 1,
      paddingBottom: 40,
    },

    contentContainer: {
      flex: 1,
      paddingHorizontal: 20,
      paddingTop: 30,
    },

    avatarContainer: {
      alignItems: "center",
      marginBottom: 12,
    },

    avatarGlass: {
      width: 120,
      height: 120,
      borderRadius: 60,
      backgroundColor: colors.glassBackground,
      borderWidth: 3,
      borderColor: colors.accentLight,
      alignItems: "center",
      justifyContent: "center",
      shadowColor: colors.accent,
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.3,
      shadowRadius: 16,
      elevation: 10,
    },

    avatarText: {
      fontSize: 40,
      color: colors.accent,
      fontWeight: "700",
    },

    avatarEditButton: {
      position: "absolute",
      bottom: 0,
      right: "35%",
      width: 36,
      height: 36,
      borderRadius: 18,
      backgroundColor: colors.accent,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 3,
      borderColor: colors.background,
    },

    avatarLabel: {
      fontSize: 14,
      color: colors.textSecondary,
      marginBottom: 28,
      fontWeight: "500",
    },

    glassCard: {
      width: "100%",
      backgroundColor: colors.glassBackground,
      borderRadius: 28,
      padding: 24,
      borderWidth: 1,
      borderColor: colors.glassBorder,
      shadowColor: colors.shadowColor,
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.3,
      shadowRadius: 20,
      elevation: 15,
    },

    themeSection: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingVertical: 16,
    },

    themeSectionLeft: {
      flexDirection: "row",
      alignItems: "center",
      flex: 1,
    },

    themeSectionTitle: {
      fontSize: 16,
      fontWeight: "700",
      color: colors.textPrimary,
    },

    themeSectionSubtitle: {
      fontSize: 13,
      color: colors.textSecondary,
      marginTop: 2,
    },

    divider: {
      height: 1,
      backgroundColor: colors.glassBorder,
      marginVertical: 20,
    },

    inputContainer: {
      marginBottom: 20,
    },

    inputLabel: {
      fontSize: 14,
      fontWeight: "600",
      color: colors.textSecondary,
      marginBottom: 8,
      marginLeft: 4,
    },

    inputWrapper: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: colors.inputBackground,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: colors.inputBorder,
      paddingHorizontal: 16,
    },

    inputIcon: {
      marginRight: 12,
    },

    input: {
      flex: 1,
      padding: 18,
      fontSize: 16,
      color: colors.textPrimary,
    },

    passwordInput: {
      paddingRight: 50,
    },

    eyeIcon: {
      padding: 8,
      position: "absolute",
      right: 12,
    },

    button: {
      backgroundColor: colors.accent,
      paddingVertical: 18,
      paddingHorizontal: 32,
      borderRadius: 16,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 8,
      flexDirection: "row",
      shadowColor: colors.accent,
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.4,
      shadowRadius: 12,
      elevation: 8,
    },

    buttonText: {
      fontSize: 18,
      fontWeight: "700",
      color: "#fff",
      letterSpacing: 0.5,
    },

    optionsContainer: {
      marginTop: 28,
      paddingTop: 20,
      borderTopWidth: 1,
      borderTopColor: colors.glassBorder,
    },

    optionButton: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 16,
      paddingHorizontal: 4,
    },

    optionText: {
      flex: 1,
      fontSize: 16,
      color: colors.textPrimary,
      marginLeft: 12,
      fontWeight: "500",
    },

    logoutButton: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 16,
      marginTop: 12,
      borderRadius: 12,
      backgroundColor: colors.accentLight,
      borderWidth: 1,
      borderColor: colors.accent + "40",
    },

    logoutText: {
      fontSize: 16,
      color: colors.accent,
      fontWeight: "600",
      marginLeft: 8,
    },
  });
