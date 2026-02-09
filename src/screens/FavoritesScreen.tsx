import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Animated,
  StatusBar,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";
import { styles } from "../styles/stylesFavorites";
import { useFavorites } from "../components/Favorites";
import { CarCard } from "../components/CarCard";
import { Ionicons } from "@expo/vector-icons";

type Props = NativeStackScreenProps<RootStackParamList, "Favorites">;

export default function FavoritesScreen({ navigation }: Props) {
  const { favorites } = useFavorites();
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

  const handleCarPress = (car: any) => {
    navigation.navigate("CarDetails", { car });
  };

  const renderEmptyState = () => (
    <Animated.View
      style={[
        styles.emptyContainer,
        {
          opacity: fadeAnim,
          transform: [{ translateY: slideAnim }],
        },
      ]}
    >
      <View style={styles.emptyIconContainer}>
        <Ionicons
          name="heart-dislike-outline"
          size={80}
          color="rgba(255, 255, 255, 0.3"
        />
      </View>

      <Text style={styles.emptyTitle}>Nenhum Favorito</Text>
      <Text style={styles.emptyText}>
        Você ainda não adicionou nenhum carro aos favoritos.{"\n"}
        Explore a garagem e favorite seus carros preferidos!
      </Text>
      <TouchableOpacity
        style={styles.emptyButton}
        onPress={() => navigation.navigate("Home")}
        activeOpacity={0.8}
      >
        <Ionicons
          name="car-sport"
          size={20}
          color="#fff"
          style={{ marginRight: 8 }}
        />
        <Text style={styles.emptyButtonText}>Explorar Garagem</Text>
      </TouchableOpacity>
    </Animated.View>
  );

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
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.headerButton}
        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>

        <View style={styles.headerCenter}>
          <Ionicons
            name="heart"
            size={24}
            color="#fff"
            style={{ marginRight: 8 }}
          />
          <Text style={styles.headerTitle}>Favoritos</Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("Profile")}
          style={styles.headerButton}
        >
          <Ionicons name="person-circle" size={28} color="#fff" />
        </TouchableOpacity>
      </Animated.View>

      {/* Stats Bar */}
      {favorites.length > 0 && (
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
            <Ionicons name="heart" size={20} color="#DC143C" />
            <Text style={styles.statNumber}>{favorites.length}</Text>
            <Text style={styles.statLabel}>
              {favorites.length === 1 ? "Favorito" : "Favoritos"}
            </Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Ionicons name="speedometer" size={20} color="#DC143C" />
            <Text style={styles.statNumber}>
              {favorites.reduce((acc, car) => acc + car.horsepower, 0)}
            </Text>
            <Text style={styles.statLabel}>HP Total</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Ionicons name="cash" size={20} color="#DC143C" />
            <Text style={styles.statNumber}>
              R${" "}
              {(
                favorites.reduce((acc, car) => acc + car.price, 0) / 1000000
              ).toFixed(1)}
              M
            </Text>
            <Text style={styles.statLabel}>Valor</Text>
          </View>
        </Animated.View>
      )}

      {/* Car List or Empty State */}
      {favorites.length === 0 ? (
        renderEmptyState()
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CarCard car={item} onPress={() => handleCarPress(item)} />
          )}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}
