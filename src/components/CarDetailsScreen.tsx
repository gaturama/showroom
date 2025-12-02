import React from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";
import { Appbar, Chip } from "react-native-paper";
import { CarImageCarousel } from "../components/CarCarousel";
import { styles } from "../styles/stylesCarDetails";
import { Ionicons } from "@expo/vector-icons";

type Props = NativeStackScreenProps<RootStackParamList, "CarDetails">;

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function CarDetailsScreen({ navigation, route }: Props) {
  const { car } = route.params;

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={() => navigation.goBack()} color="#fff" />
        <Appbar.Content title={car.brand} color="#fff" />
        <Appbar.Action icon="heart-outline" color="#fff" />
      </Appbar.Header>

      <ScrollView showsVerticalScrollIndicator={false}>
        <CarImageCarousel images={car.images} height={280} />

        <View style={styles.mainInfo}>
          <Text style={styles.carName}>{car.name}</Text>
          <Text style={styles.carModel}>
            {car.model} • {car.year}
          </Text>

          <View style={styles.priceContainer}>
            <Text style={styles.priceLabel}>Preço</Text>
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
              <Ionicons name="speedometer-outline" size={24} color="#4CAF50" />
              <Text style={styles.highlightValue}>{car.maxSpeed} km/h</Text>
              <Text style={styles.highlightLabel}>Velocidade Máx.</Text>
            </View>

            <View style={styles.highlightCard}>
              <Ionicons name="flash-outline" size={24} color="#FF9800" />
              <Text style={styles.highlightValue}>{car.acceleration}</Text>
              <Text style={styles.highlightLabel}>0-100 km/h</Text>
            </View>

            <View style={styles.highlightCard}>
              <Ionicons
                name="hardware-chip-outline"
                size={24}
                color="#2196F3"
              />
              <Text style={styles.highlightValue}>{car.horsepower} cv</Text>
              <Text style={styles.highlightLabel}>Potência</Text>
            </View>

            <View style={styles.highlightCard}>
              <Ionicons name="scale-outline" size={24} color="#9C27B0" />
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

        <View style={styles.actionContainer}>
          <Appbar.Action
            icon="phone"
            color="#fff"
            size={20}
            style={styles.actionButton}
            onPress={() => console.log("Contato")}
          />
          <Text style={styles.actionButtonText}>Entrar em Contato</Text>
        </View>

        <View style={styles.bottomSpacing} />
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
      <Ionicons name={icon} size={20} color="#888" />
      <Text style={styles.specLabel}>{label}</Text>
    </View>
    <Text style={styles.specValue}>{value}</Text>
  </View>
);