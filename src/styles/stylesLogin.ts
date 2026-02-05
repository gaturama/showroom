import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },

  // Background Particles (efeito liquid glass)
  backgroundParticles: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },

  particle: {
    position: "absolute",
    borderRadius: 999,
    opacity: 0.15,
  },

  particle1: {
    width: 300,
    height: 300,
    backgroundColor: "#DC143C",
    top: "10%",
    left: "-20%",
    shadowColor: "#DC143C",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 100,
    elevation: 10,
  },

  particle2: {
    width: 250,
    height: 250,
    backgroundColor: "#FF6B6B",
    top: "60%",
    right: "-15%",
    shadowColor: "#FF6B6B",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 80,
    elevation: 8,
  },

  particle3: {
    width: 200,
    height: 200,
    backgroundColor: "#DC143C",
    bottom: "5%",
    left: "20%",
    shadowColor: "#DC143C",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.7,
    shadowRadius: 90,
    elevation: 9,
  },

  // Content
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    paddingTop: 60,
  },

  logoContainer: {
    marginBottom: 40,
    alignItems: "center",
  },

  image: {
    width: 280,
    height: 160,
  },

  // Glass Card Effect
  glassCard: {
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: 28,
    padding: 24,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 15,
  },

  // Input Container
  inputContainer: {
    marginBottom: 20,
  },

  inputLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "rgba(255, 255, 255, 0.7)",
    marginBottom: 8,
    marginLeft: 4,
  },

  input: {
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    borderRadius: 16,
    padding: 18,
    fontSize: 16,
    color: "#FFF",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.15)",
  },

  // Password Container
  passwordContainer: {
    position: "relative",
    width: "100%",
  },

  passwordInput: {
    paddingRight: 50,
  },

  eyeIcon: {
    position: "absolute",
    right: 16,
    top: "50%",
    transform: [{ translateY: -12 }],
    padding: 4,
  },

  eyeImage: {
    width: 24,
    height: 24,
    tintColor: "rgba(255, 255, 255, 0.6)",
  },

  // Button (mantendo a cor original #DC143C)
  button: {
    backgroundColor: "#DC143C",
    paddingVertical: 18,
    paddingHorizontal: 32,
    borderRadius: 16,
    alignItems: "center",
    marginTop: 8,
    shadowColor: "#DC143C",
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

  // Divider
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 24,
  },

  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
  },

  dividerText: {
    marginHorizontal: 16,
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.5)",
    fontWeight: "500",
  },

  // Register Link
  registerLink: {
    alignItems: "center",
  },

  textCadastro: {
    fontSize: 15,
    color: "rgba(255, 255, 255, 0.7)",
    fontWeight: "400",
  },

  textCadastroStrong: {
    color: "#DC143C",
    fontWeight: "700",
  },

  // Footer
  footerText: {
    marginTop: 32,
    fontSize: 13,
    color: "rgba(255, 255, 255, 0.4)",
    fontWeight: "500",
  },
});