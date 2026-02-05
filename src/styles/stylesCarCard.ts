import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: 24,
    marginHorizontal: 16,
    marginVertical: 8,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8,
  },

  info: {
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },

  name: {
    fontSize: 22,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 16,
    letterSpacing: 0.3,
  },

  specs: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  specItem: {
    flex: 1,
    alignItems: "flex-start",
  },

  specLabel: {
    fontSize: 11,
    color: "rgba(255, 255, 255, 0.5)",
    marginBottom: 6,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },

  specValue: {
    fontSize: 15,
    fontWeight: "700",
    color: "#DC143C",
    letterSpacing: 0.3,
  },

  // Badge para destacar recursos premium
  badge: {
    position: "absolute",
    top: 16,
    right: 16,
    backgroundColor: "rgba(220, 20, 60, 0.9)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  badgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "700",
  },
});