import React, { useEffect, useRef } from "react";
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
import { styles } from "../styles/stylesHome";
import { CarCard } from "../components/CarCard";
import { Car } from "../navigation/car";
import { Ionicons } from "@expo/vector-icons";
import { MOCK_CARS, getTotalHorsePower, getTotalValue } from "../data/carsData";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {
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

  const handleProfile = () => {
    navigation.navigate("Profile");
  };

  const handleCarPress = (car: Car) => {
    navigation.navigate("CarDetails", { car });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#DC143C" />

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
        <View style={styles.headerCenter}>
          <Ionicons
            name="car-sport"
            size={24}
            color="#fff"
            style={{ marginRight: 8 }}
          />
          <Text style={styles.headerTitle}>Garagem Premium</Text>
        </View>

        <TouchableOpacity onPress={handleProfile} style={styles.headerButton}>
          <Ionicons name="person-circle" size={28} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Favorites")}
          style={styles.headerButton}
        >
          <Ionicons name="heart" size={24} color="#fff" />
        </TouchableOpacity>
      </Animated.View>

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
          <Text style={styles.statNumber}>{MOCK_CARS.length}</Text>
          <Text style={styles.statLabel}>Carros</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{getTotalHorsePower()}</Text>
          <Text style={styles.statLabel}>HP Total</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>
            R$ {(getTotalValue() / 1000000).toFixed(1)}M
          </Text>
          <Text style={styles.statLabel}>Valor</Text>
        </View>
      </Animated.View>

      <FlatList
        data={MOCK_CARS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CarCard car={item} onPress={() => handleCarPress(item)} />
        )}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}