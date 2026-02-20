import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Animated,
  StatusBar,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";
import { CarCard } from "../components/CarCard";
import { Car } from "../navigation/car";
import { Ionicons } from "@expo/vector-icons";
import { MOCK_CARS } from "../data/carsData";
import {
  BrandFilter,
  FilterModal,
  SortOption,
} from "../components/FilterModal";
import { SearchBar } from "../components/SearchBar";
import { useTheme } from "../context/ThemeContext";
import { useThemedStyles } from "../hooks/useThemedStyles";
import { createStyles } from "../styles/stylesHome";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [sortBy, setSortBy] = useState<SortOption>("price-desc");
  const [brandFilter, setBrandFilter] = useState<BrandFilter>("all");
  const [viewHistory, setViewHistory] = useState<Car[]>([]);

  const styles = useThemedStyles(createStyles);

  const { colors } = useTheme();

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(-20)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.spring(slideAnim, {
        toValue: 0,
        tension: 20,
        friction: 7,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const filteredAndSortedCars = useMemo(() => {
    let result = [...MOCK_CARS];

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (car) =>
          car.name.toLowerCase().includes(query) ||
          car.brand.toLowerCase().includes(query) ||
          car.model.toLowerCase().includes(query),
      );
    }

    if (brandFilter !== "all") {
      result = result.filter((car) => car.brand === brandFilter);
    }

    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "hp-asc":
        result.sort((a, b) => a.horsepower - b.horsepower);
        break;
      case "hp-desc":
        result.sort((a, b) => b.horsepower - a.horsepower);
        break;
      case "speed-desc":
        result.sort((a, b) => b.maxSpeed - a.maxSpeed);
        break;
      case "year-desc":
        result.sort((a, b) => b.year - a.year);
        break;
      case "year-asc":
        result.sort((a, b) => a.year - b.year);
        break;
    }

    return result;
  }, [searchQuery, brandFilter, sortBy]);

  const handleProfile = () => {
    navigation.navigate("Profile");
  };

  const handleCarPress = (car: Car) => {
    navigation.navigate("CarDetails", { car });
  };

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  const handleApplyFilters = () => {
    setFilterModalVisible(false);
  };

  const handleResetFilters = () => {
    setSortBy("year-asc");
    setBrandFilter("all");
  };

  const getActiveFilterCount = () => {
    let count = 0;
    if (sortBy !== "year-asc") count++;
    if (brandFilter !== "all") count++;
    return count;
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={colors.statusBarStyle}
        backgroundColor={colors.accent}
      />

      <View style={styles.backgroundParticles}>
        <Animated.View style={[styles.particle, styles.particle1]} />
        <Animated.View style={[styles.particle, styles.particle2]} />
        <Animated.View style={[styles.particle, styles.particle3]} />
      </View>

      <Animated.View
        style={[
          styles.header,
          {
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }],
          },
        ]}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Favorites")}
          style={styles.headerButton}
        >
          <Ionicons name="heart" size={24} color="white" />
        </TouchableOpacity>

        <View style={styles.headerCenter}>
          <Ionicons
            name="car-sport"
            size={24}
            color="white"
            style={{ marginRight: 8 }}
          />
          <Text style={styles.headerTitle}>Garagem Premium</Text>
        </View>

        <TouchableOpacity onPress={handleProfile} style={styles.headerButton}>
          <Ionicons name="person-circle" size={28} color="white" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("History")}>
          <Ionicons name="time" size={24} color="#fff"/>
          {viewHistory.length > 0 && (
            <View style={styles.badge}>
              <Text>{viewHistory.length}</Text>
            </View>
          )}
        </TouchableOpacity>
      </Animated.View>

      <Animated.View
        style={{
          opacity: fadeAnim,
          transform: [{ translateY: slideAnim }],
        }}
      >
        <SearchBar
          value={searchQuery}
          onChangeText={setSearchQuery}
          onClear={handleClearSearch}
          placeholder="Buscar por nome, marca ou modelo..."
        />
      </Animated.View>

      <Animated.View
        style={[
          styles.filterRow,
          {
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }],
          },
        ]}
      >
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => setFilterModalVisible(true)}
        >
          <Ionicons name="options" size={20} color={colors.textPrimary} />
          <Text style={styles.filterButtonText}>Filtros</Text>
          {getActiveFilterCount() > 0 && (
            <View style={styles.filterBadge}>
              <Text style={styles.filterBadgeText}>
                {getActiveFilterCount()}
              </Text>
            </View>
          )}
        </TouchableOpacity>

        {/* Botão de Comparação */}
        <TouchableOpacity
          style={styles.compareButton}
          onPress={() => navigation.navigate("Compare")}
        >
          <Ionicons name="git-compare" size={18} color={colors.accent} />
          <Text style={styles.compareButtonText}>Comparar</Text>
        </TouchableOpacity>

        <View style={styles.resultCount}>
          <Text style={styles.resultCountText}>
            {filteredAndSortedCars.length}{" "}
            {filteredAndSortedCars.length === 1 ? "carro" : "carros"}
          </Text>
        </View>
      </Animated.View>

      {filteredAndSortedCars.length > 0 && (
        <Animated.View
          style={[
            styles.statsBar,
            {
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }],
            },
          ]}
        >
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>
              {filteredAndSortedCars.length}
            </Text>
            <Text style={styles.statLabel}>Carros</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>
              {filteredAndSortedCars.reduce(
                (acc, car) => acc + car.horsepower,
                0,
              )}
            </Text>
            <Text style={styles.statLabel}>HP Total</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>
              R${" "}
              {(
                filteredAndSortedCars.reduce((acc, car) => acc + car.price, 0) /
                1000000
              ).toFixed(1)}
              M
            </Text>
            <Text style={styles.statLabel}>Valor</Text>
          </View>
        </Animated.View>
      )}

      {filteredAndSortedCars.length === 0 ? (
        <View style={styles.emptyState}>
          <Ionicons
            name="car-sport-outline"
            size={80}
            color={colors.textTertiary}
          />
          <Text style={styles.emptyTitle}>Nenhum carro encontrado</Text>
          <Text style={styles.emptyText}>
            Tente ajustar sua busca ou filtros
          </Text>
          <TouchableOpacity
            style={styles.emptyButton}
            onPress={() => {
              setSearchQuery("");
              handleResetFilters();
            }}
          >
            <Text style={styles.emptyButtonText}>Limpar Filtros</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={filteredAndSortedCars}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CarCard car={item} onPress={() => handleCarPress(item)} />
          )}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      )}

      <FilterModal
        visible={filterModalVisible}
        onClose={() => setFilterModalVisible(false)}
        sortBy={sortBy}
        setSortBy={setSortBy}
        brandFilter={brandFilter}
        setBrandFilter={setBrandFilter}
        priceRange={{ min: 0, max: 50000000 }}
        setPriceRange={() => {}}
        onApply={handleApplyFilters}
        onReset={handleResetFilters}
      />
    </View>
  );
}
