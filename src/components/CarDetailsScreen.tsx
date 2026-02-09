import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Animated,
  StatusBar,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";
import { CarImageCarousel } from "../components/CarCarousel";
import { styles } from "../styles/stylesCarDetails";
import { Ionicons } from "@expo/vector-icons";
import { useFavorites } from "../components/Favorites";

type Props = NativeStackScreenProps<RootStackParamList, "CarDetails">;

export default function CarDetailsScreen({ navigation, route }: Props) {
  const { car } = route.params;
  const { isFavorite, toggleFavorite } = useFavorites();
  const [favorites, setFavorites] = useState(isFavorite(car.id));

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;
  const heartScale = useRef(new Animated.Value(1)).current;

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

  useEffect(() => {
    setFavorites(isFavorite(car.id));
  }, [car.id, isFavorite]);

  const handleToggleFavorite = () => {
    Animated.sequence([
      Animated.timing(heartScale, {
        toValue: 1.3,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(heartScale, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();

    toggleFavorite(car);
    setFavorites(!favorites);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#DC143C" />

      <View style={styles.header}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 8,
            paddingTop: 50,
            paddingBottom: 12,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              width: 40,
              height: 40,
              borderRadius: 12,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 18,
              fontWeight: "700",
              color: "#fff",
              letterSpacing: 0.5,
            }}
          >
            {car.brand}
          </Text>

          <TouchableOpacity
            onPress={handleToggleFavorite}
            style={{
              width: 40,
              height: 40,
              borderRadius: 12,
              backgroundColor: favorites
                ? "rgba(220, 20, 60, 0.2)"
                : "rgba(255, 255, 255, 0.1)",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Animated.View style={{ transform: [{ scale: heartScale }] }}>
              <Ionicons
                name={favorites ? "heart" : "heart-outline"}
                size={24}
                color={favorites ? "#fff" : "#fff"}
              />
            </Animated.View>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <CarImageCarousel images={car.images} height={300} />

        <Animated.View
          style={{
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }],
          }}
        >
          <View style={styles.mainInfo}>
            <Text style={styles.carName}>{car.name}</Text>
            <Text style={styles.carModel}>
              {car.model} • {car.year}
            </Text>

            <View style={styles.priceContainer}>
              <Text style={styles.priceLabel}>Valor</Text>
              <Text style={styles.price}>
                R$ {car.price.toLocaleString("pt-BR")}
              </Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Sobre o veículo</Text>
            <Text style={styles.description}>{car.description}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Destaques</Text>
            <View style={styles.highlightsGrid}>
              <View style={styles.highlightCard}>
                <Ionicons
                  name="speedometer-outline"
                  size={28}
                  color="#4CAF50"
                />
                <Text style={styles.highlightValue}>{car.maxSpeed} km/h</Text>
                <Text style={styles.highlightLabel}>Velocidade Máx.</Text>
              </View>

              <View style={styles.highlightCard}>
                <Ionicons name="flash-outline" size={28} color="#FF9800" />
                <Text style={styles.highlightValue}>{car.acceleration}</Text>
                <Text style={styles.highlightLabel}>0-100 km/h</Text>
              </View>

              <View style={styles.highlightCard}>
                <Ionicons
                  name="hardware-chip-outline"
                  size={28}
                  color="#2196F3"
                />
                <Text style={styles.highlightValue}>{car.horsepower} cv</Text>
                <Text style={styles.highlightLabel}>Potência</Text>
              </View>

              <View style={styles.highlightCard}>
                <Ionicons name="scale-outline" size={28} color="#9C27B0" />
                <Text style={styles.highlightValue}>{car.weight} kg</Text>
                <Text style={styles.highlightLabel}>Peso</Text>
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Especificações Técnicas</Text>

            <View style={styles.specsContainer}>
              <SpecRow
                icon="calendar-outline"
                label="Ano de Fabricação"
                value={car.year.toString()}
              />
              <SpecRow icon="car-outline" label="Marca" value={car.brand} />
              <SpecRow
                icon="car-sport-outline"
                label="Modelo"
                value={car.model}
              />
              <SpecRow icon="build-outline" label="Motor" value={car.engine} />
              <SpecRow
                icon="flash-outline"
                label="Potência"
                value={`${car.horsepower} cv`}
              />
              <SpecRow
                icon="git-merge-outline"
                label="Torque"
                value={car.torque}
              />
              <SpecRow
                icon="settings-outline"
                label="Transmissão"
                value={car.transmission}
              />
              <SpecRow
                icon="swap-horizontal-outline"
                label="Tração"
                value={car.drivetrain}
              />
              <SpecRow
                icon="water-outline"
                label="Combustível"
                value={car.fuelType}
              />
              <SpecRow
                icon="speedometer-outline"
                label="Vel. Máxima"
                value={`${car.maxSpeed} km/h`}
              />
              <SpecRow
                icon="timer-outline"
                label="Aceleração 0-100"
                value={car.acceleration}
              />
              <SpecRow
                icon="scale-outline"
                label="Peso"
                value={`${car.weight} kg`}
              />
            </View>
          </View>

          <TouchableOpacity
            style={styles.actionContainer}
            activeOpacity={0.8}
            onPress={() => console.log("Contato")}
          >
            <Ionicons name="logo-whatsapp" size={24} color="#fff" />
            <Text style={styles.actionButtonText}>Entrar em Contato</Text>
          </TouchableOpacity>

          <View style={styles.bottomSpacing} />
        </Animated.View>
      </ScrollView>
    </View>
  );
}

interface SpecRowProps {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  value: string;
}

const SpecRow: React.FC<SpecRowProps> = ({ icon, label, value }) => (
  <View style={styles.specRow}>
    <View style={styles.specLeft}>
      <Ionicons name={icon} size={20} color="rgba(255, 255, 255, 0.6)" />
      <Text style={styles.specLabel}>{label}</Text>
    </View>
    <Text style={styles.specValue}>{value}</Text>
  </View>
);
