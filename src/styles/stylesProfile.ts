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
    top: "20%",
    left: "-25%",
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
    top: "55%",
    right: "-20%",
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
    bottom: "8%",
    left: "30%",
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

  avatarContainer: {
    alignItems: "center",
    marginBottom: 12,
  },

  avatarGlass: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderWidth: 3,
    borderColor: "rgba(220, 20, 60, 0.3)",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#DC143C",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 10,
  },

  avatarEditButton: {
    position: "absolute",
    bottom: 0,
    right: "35%",
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#DC143C",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: "#121212",
    shadowColor: "#DC143C",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 8,
  },

  avatarLabel: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.6)",
    marginBottom: 28,
    fontWeight: "500",
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

  optionsContainer: {
    marginTop: 28,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: "rgba(255, 255, 255, 0.1)",
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
    color: "rgba(255, 255, 255, 0.8)",
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
    backgroundColor: "rgba(220, 20, 60, 0.1)",
    borderWidth: 1,
    borderColor: "rgba(220, 20, 60, 0.3)",
  },

  logoutText: {
    fontSize: 16,
    color: "#DC143C",
    fontWeight: "600",
    marginLeft: 8,
  },
});
