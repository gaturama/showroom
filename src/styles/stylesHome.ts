import { StyleSheet } from "react-native";

/**
 * Função que cria os estilos da HomeScreen baseado nas cores do tema
 * @param colors - Objeto de cores do tema atual (dark ou light)
 */
export const createStyles = (colors: any) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  backgroundParticles: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },

  particle: {
    position: "absolute",
    borderRadius: 999,
    opacity: 0.1,
  },

  particle1: {
    width: 300,
    height: 300,
    backgroundColor: colors.particleColor,
    top: "5%",
    right: "-20%",
  },

  particle2: {
    width: 250,
    height: 250,
    backgroundColor: colors.particleColorSecondary,
    top: "40%",
    left: "-25%",
  },

  particle3: {
    width: 200,
    height: 200,
    backgroundColor: colors.particleColor,
    bottom: "10%",
    right: "20%",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 16,
    backgroundColor: colors.accent,
  },

  headerButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    alignItems: "center",
    justifyContent: "center",
  },

  headerCenter: {
    flexDirection: "row",
    alignItems: "center",
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#fff",
    letterSpacing: 0.5,
  },

  compareButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.glassBackground,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.glassBorder,
    gap: 6,
    shadowColor: colors.shadowColor,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },

  compareButtonText: {
    fontSize: 13,
    fontWeight: "700",
    color: colors.textPrimary,
    letterSpacing: 0.3,
  },

  filterRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginBottom: 8,
  },

  filterButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.inputBackground,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.inputBorder,
    gap: 8,
  },

  filterButtonText: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: "600",
  },

  filterBadge: {
    backgroundColor: colors.accent,
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  filterBadgeText: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "700",
  },

  resultCount: {
    backgroundColor: colors.inputBackground,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },

  resultCountText: {
    color: colors.textSecondary,
    fontSize: 13,
    fontWeight: "600",
  },

  statsBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginHorizontal: 16,
    marginTop: 8,
    marginBottom: 8,
    padding: 16,
    backgroundColor: colors.glassBackground,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.glassBorder,
  },

  statItem: {
    alignItems: "center",
  },

  statNumber: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.accent,
  },

  statLabel: {
    fontSize: 12,
    color: colors.textSecondary,
    fontWeight: "500",
  },

  statDivider: {
    width: 1,
    height: 40,
    backgroundColor: colors.glassBorder,
  },

  listContent: {
    paddingVertical: 16,
    paddingBottom: 24,
  },

  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
  },

  emptyTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.textPrimary,
    marginTop: 20,
    marginBottom: 12,
  },

  emptyText: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: "center",
    marginBottom: 24,
  },

  emptyButton: {
    backgroundColor: colors.accent,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
  },

  emptyButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },

  badge: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    width: 18,
    height: 18,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
  },
});