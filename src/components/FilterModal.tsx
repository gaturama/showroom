import React from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export type SortOption = "price-asc" | "price-desc" | "hp-asc" | "hp-desc" | "speed-desc" | "year-desc" | "year-asc";
export type BrandFilter = "all" | "Porsche" | "Ferrari" | "Lamborghini" | "Mercedes-AMG" | "Audi" | "Bentley" | "Koenigsegg" | "BMW" | "McLaren"| "Aston Martin" | "Bugatti" | "Chevrolet" | "Dodge" | "Ford" | "Nissan";

interface FilterModalProps {
  visible: boolean;
  onClose: () => void;
  sortBy: SortOption;
  setSortBy: (option: SortOption) => void;
  brandFilter: BrandFilter;
  setBrandFilter: (brand: BrandFilter) => void;
  priceRange: { min: number; max: number };
  setPriceRange: (range: { min: number; max: number }) => void;
  onApply: () => void;
  onReset: () => void;
}

export const FilterModal: React.FC<FilterModalProps> = ({
  visible,
  onClose,
  sortBy,
  setSortBy,
  brandFilter,
  setBrandFilter,
  onApply,
  onReset,
}) => {
  const sortOptions: { value: SortOption; label: string; icon: string }[] = [
    { value: "price-asc", label: "Menor Preço", icon: "arrow-up" },
    { value: "price-desc", label: "Maior Preço", icon: "arrow-down" },
    { value: "hp-asc", label: "Menor Potência", icon: "flash-outline" },
    { value: "hp-desc", label: "Maior Potência", icon: "flash" },
    { value: "speed-desc", label: "Mais Rápido", icon: "speedometer" },
    { value: "year-desc", label: "Mais Novo", icon: "calendar" },
    { value: "year-asc", label: "Mais velho", icon: "calendar" },
  ];

  const brands: BrandFilter[] = [
    "all",
    "Porsche",
    "Ferrari",
    "Lamborghini",
    "Mercedes-AMG",
    "Audi",
    "Bentley",
    "Koenigsegg",
    "BMW",
    "McLaren",
    "Aston Martin",
    "Bugatti",
    "Chevrolet",
    "Dodge",
    "Ford",
    "Nissan",
  ];

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Filtros e Ordenação</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Ionicons name="close" size={28} color="#fff" />
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Ordenar Por</Text>
              {sortOptions.map((option) => (
                <TouchableOpacity
                  key={option.value}
                  style={[
                    styles.optionButton,
                    sortBy === option.value && styles.optionButtonActive,
                  ]}
                  onPress={() => setSortBy(option.value)}
                >
                  <Ionicons
                    name={option.icon as any}
                    size={20}
                    color={sortBy === option.value ? "#DC143C" : "rgba(255, 255, 255, 0.7)"}
                  />
                  <Text
                    style={[
                      styles.optionText,
                      sortBy === option.value && styles.optionTextActive,
                    ]}
                  >
                    {option.label}
                  </Text>
                  {sortBy === option.value && (
                    <Ionicons name="checkmark-circle" size={20} color="#DC143C" />
                  )}
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Filtrar por Marca</Text>
              <View style={styles.brandGrid}>
                {brands.map((brand) => (
                  <TouchableOpacity
                    key={brand}
                    style={[
                      styles.brandChip,
                      brandFilter === brand && styles.brandChipActive,
                    ]}
                    onPress={() => setBrandFilter(brand)}
                  >
                    <Text
                      style={[
                        styles.brandChipText,
                        brandFilter === brand && styles.brandChipTextActive,
                      ]}
                    >
                      {brand === "all" ? "Todas" : brand}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </ScrollView>

          <View style={styles.footer}>
            <TouchableOpacity style={styles.resetButton} onPress={onReset}>
              <Ionicons name="refresh" size={20} color="#DC143C" />
              <Text style={styles.resetButtonText}>Limpar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.applyButton} onPress={onApply}>
              <Text style={styles.applyButtonText}>Aplicar Filtros</Text>
              <Ionicons name="checkmark" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.85)",
    justifyContent: "flex-end",
  },

  modalContainer: {
    backgroundColor: "#1a1a1a",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    maxHeight: "85%",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255, 0.1)",
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#fff",
    letterSpacing: 0.3,
  },

  closeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    alignItems: "center",
    justifyContent: "center",
  },

  content: {
    flex: 1,
    paddingHorizontal: 20,
  },

  section: {
    marginTop: 24,
    marginBottom: 16,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 16,
    letterSpacing: 0.3,
  },

  optionButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
  },

  optionButtonActive: {
    backgroundColor: "rgba(220, 20, 60, 0.15)",
    borderColor: "#DC143C",
  },

  optionText: {
    flex: 1,
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.8)",
    marginLeft: 12,
    fontWeight: "500",
  },

  optionTextActive: {
    color: "#fff",
    fontWeight: "700",
  },

  brandGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },

  brandChip: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
  },

  brandChipActive: {
    backgroundColor: "#DC143C",
    borderColor: "#DC143C",
  },

  brandChipText: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.8)",
    fontWeight: "500",
  },

  brandChipTextActive: {
    color: "#fff",
    fontWeight: "700",
  },

  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: "rgba(255, 255, 255, 0.1)",
    gap: 12,
  },

  resetButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    borderRadius: 12,
    backgroundColor: "rgba(220, 20, 60, 0.1)",
    borderWidth: 1,
    borderColor: "#DC143C",
    gap: 8,
  },

  resetButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#DC143C",
  },

  applyButton: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    borderRadius: 12,
    backgroundColor: "#DC143C",
    gap: 8,
    shadowColor: "#DC143C",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 8,
  },

  applyButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
  },
});