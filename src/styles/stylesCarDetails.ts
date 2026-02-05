import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },

  header: {
    backgroundColor: "#DC143C",
    elevation: 8,
    shadowColor: "#DC143C",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },

  mainInfo: {
    padding: 20,
  },

  carName: {
    fontSize: 32,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 6,
    letterSpacing: -0.5,
  },

  carModel: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.6)",
    marginBottom: 20,
    fontWeight: "500",
  },

  priceContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    padding: 20,
    borderRadius: 16,
    marginTop: 8,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
  },

  priceLabel: {
    fontSize: 13,
    color: "rgba(255, 255, 255, 0.5)",
    marginBottom: 6,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 1,
  },

  price: {
    fontSize: 28,
    fontWeight: "700",
    color: "#4CAF50",
    letterSpacing: 0.5,
  },

  section: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "rgba(255, 255, 255, 0.05)",
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 16,
    letterSpacing: 0.3,
  },

  description: {
    fontSize: 15,
    color: "rgba(255, 255, 255, 0.7)",
    lineHeight: 24,
  },

  highlightsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },

  highlightCard: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    flex: 1,
    minWidth: "45%",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
  },

  highlightValue: {
    fontSize: 22,
    fontWeight: "700",
    color: "#fff",
    marginTop: 10,
    letterSpacing: 0.3,
  },

  highlightLabel: {
    fontSize: 12,
    color: "rgba(255, 255, 255, 0.5)",
    marginTop: 6,
    textAlign: "center",
    fontWeight: "500",
  },

  specsContainer: {
    gap: 10,
  },

  specRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.08)",
  },

  specLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    flex: 1,
  },

  specLabel: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.7)",
    fontWeight: "500",
  },

  specValue: {
    fontSize: 14,
    fontWeight: "700",
    color: "#DC143C",
    letterSpacing: 0.3,
  },

  actionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DC143C",
    marginHorizontal: 20,
    marginTop: 8,
    borderRadius: 16,
    paddingVertical: 16,
    shadowColor: "#DC143C",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8,
  },

  actionButton: {
    margin: 0,
    backgroundColor: "transparent",
  },

  actionButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
    letterSpacing: 0.5,
  },

  bottomSpacing: {
    height: 32,
  },
});