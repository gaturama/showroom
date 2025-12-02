import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  header: {
    backgroundColor: "#1e1e1e",
    elevation: 0,
  },
  mainInfo: {
    padding: 20,
  },
  carName: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 4,
  },
  carModel: {
    fontSize: 16,
    color: "#888",
    marginBottom: 16,
  },
  priceContainer: {
    backgroundColor: "#1e1e1e",
    padding: 16,
    borderRadius: 12,
    marginTop: 8,
  },
  priceLabel: {
    fontSize: 12,
    color: "#888",
    marginBottom: 4,
  },
  price: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4CAF50",
  },
  section: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#1e1e1e",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 16,
  },
  description: {
    fontSize: 15,
    color: "#ccc",
    lineHeight: 24,
  },
  highlightsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  highlightCard: {
    backgroundColor: "#1e1e1e",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
  },
  highlightValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 8,
  },
  highlightLabel: {
    fontSize: 12,
    color: "#888",
    marginTop: 4,
    textAlign: "center",
  },
  specsContainer: {
    gap: 12,
  },
  specRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1e1e1e",
    padding: 14,
    borderRadius: 8,
  },
  specLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    flex: 1,
  },
  specLabel: {
    fontSize: 14,
    color: "#ccc",
  },
  specValue: {
    fontSize: 14,
    fontWeight: "600",
    color: "#fff",
  },
  actionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4CAF50",
    marginHorizontal: 20,
    marginTop: 8,
    borderRadius: 12,
    paddingVertical: 12,
  },
  actionButton: {
    margin: 0,
    backgroundColor: "transparent",
  },
  actionButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  bottomSpacing: {
    height: 32,
  },
});
