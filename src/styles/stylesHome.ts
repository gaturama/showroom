import { StyleSheet } from "react-native";

export const createStyles = (colors: any) =>
  StyleSheet.create({
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
      opacity: 0.12,
    },

    particle1: {
      width: 280,
      height: 280,
      backgroundColor: colors.particleColor,
      top: "10%",
      right: "-20%",
    },

    particle2: {
      width: 240,
      height: 240,
      backgroundColor: colors.particleColorSecondary,
      top: "45%",
      left: "-25%",
    },

    particle3: {
      width: 180,
      height: 180,
      backgroundColor: colors.particleColor,
      bottom: "8%",
      right: "25%",
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
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.35,
      shadowRadius: 12,
      elevation: 10,
    },

    headerButton: {
      width: 40,
      height: 40,
      borderRadius: 12,
      backgroundColor: "rgba(255,255,255,0.12)",
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

    filterRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 16,
      marginBottom: 10,
      marginTop: 8,
    },

    filterButton: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: colors.glassBackground,
      paddingHorizontal: 16,
      paddingVertical: 12,
      borderRadius: 14,
      borderWidth: 1,
      borderColor: colors.glassBorder,
      shadowColor: colors.shadowColor,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.25,
      shadowRadius: 8,
      elevation: 6,
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
      backgroundColor: colors.glassBackground,
      paddingHorizontal: 14,
      paddingVertical: 10,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: colors.glassBorder,
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
      marginVertical: 10,
      padding: 18,
      backgroundColor: colors.glassBackground,
      borderRadius: 22,
      borderWidth: 1,
      borderColor: colors.glassBorder,
      shadowColor: colors.shadowColor,
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.3,
      shadowRadius: 16,
      elevation: 12,
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
      marginTop: 4,
    },

    statDivider: {
      width: 1,
      height: 40,
      backgroundColor: colors.glassBorder,
    },

    listContent: {
      paddingVertical: 16,
      paddingBottom: 30,
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
      paddingVertical: 14,
      borderRadius: 14,
      shadowColor: colors.accent,
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.4,
      shadowRadius: 12,
      elevation: 8,
    },

    emptyButtonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "700",
    },
  });
