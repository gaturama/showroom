import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 16,
    backgroundColor: "#DC143C",
    shadowColor: "#DC143C",
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
    backgroundColor: "#DC143C",
    top: "15%",
    right: "-20%",
    shadowColor: "#DC143C",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 100,
    elevation: 10,
  },

  particle2: {
    width: 220,
    height: 220,
    backgroundColor: "#FF6B6B",
    top: "50%",
    left: "-15%",
    shadowColor: "#FF6B6B",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 80,
    elevation: 8,
  },

  particle3: {
    width: 180,
    height: 180,
    backgroundColor: "#DC143C",
    bottom: "10%",
    right: "25%",
    shadowColor: "#DC143C",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.7,
    shadowRadius: 90,
    elevation: 9,
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

  titleContainer: {
    marginBottom: 32,
  },

  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 8,
    letterSpacing: -0.5,
  },

  subtitle: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.6)",
    fontWeight: "400",
  },

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

  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.15)",
    paddingHorizontal: 16,
  },

  inputIcon: {
    marginRight: 12,
  },

  input: {
    flex: 1,
    padding: 18,
    fontSize: 16,
    color: "#FFF",
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
    backgroundColor: "#DC143C",
    paddingVertical: 18,
    paddingHorizontal: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
    flexDirection: "row",
    gap: 8,
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

  loginLink: {
    alignItems: "center",
    marginTop: 20,
  },

  textLogin: {
    fontSize: 15,
    color: "rgba(255, 255, 255, 0.7)",
    fontWeight: "400",
  },

  textLoginStrong: {
    color: "#DC143C",
    fontWeight: "700",
  },
});
