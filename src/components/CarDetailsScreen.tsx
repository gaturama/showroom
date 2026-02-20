import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Animated,
  StatusBar,
  ActivityIndicator,
  Image,
  FlatList,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";
import { Ionicons } from "@expo/vector-icons";
import { useFavorites } from "../components/Favorites";
import { useTheme } from "../context/ThemeContext";
import { useThemedStyles } from "../hooks/useThemedStyles";
import { createStyles } from "../styles/stylesCarDetails";
import { RatingsSection } from "../components/RatingsSection";
import { ShareModal } from "../components/ShareModal";
import { ImageGalleryModal } from "../components/ImageGalleryModal";
import { useUnsplash } from "../context/UnsplashContext";
import { useViewHistory } from "../context/ViewHistoryContext";

interface SpecRowProps {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  value: string;
}

type Props = NativeStackScreenProps<RootStackParamList, "CarDetails">;

export default function CarDetailsScreen({ navigation, route }: Props) {
  const { car } = route.params;
  const { isFavorite, toggleFavorite } = useFavorites();
  const [favorites, setFavorites] = useState(isFavorite(car.id));
  const [shareModalVisible, setShareModalVisible] = useState(false);
  const [galleryVisible, setGalleryVisible] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const { addToHistory } = useViewHistory();

  const {
    getCarImages,
    isLoading: loadingImages,
    refreshCarImages,
  } = useUnsplash();
  const [unsplashImages, setUnsplashImages] = useState<any[]>([]);
  const [hasLoadedImages, setHasLoadedImages] = useState(false);

  const { colors } = useTheme();
  const styles = useThemedStyles(createStyles);

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

    loadUnsplashImages();
  }, []);

  useEffect(() => {
    setFavorites(isFavorite(car.id));
  }, [car.id, isFavorite]);

  useEffect(() => {
    addToHistory(car);
  }, [car.id]);

  const loadUnsplashImages = async () => {
    try {
      const images = await getCarImages(car.id, car);
      if (images && images.length > 0) {
        const imageUrls = images.map((img) => ({
          uri: img.urls.regular,
        }));
        setUnsplashImages(imageUrls);
        setHasLoadedImages(true);
      }
    } catch (error) {
      console.error("Error loading Unsplash images:", error);
      setHasLoadedImages(true); 
    }
  };

  const handleRefreshImages = async () => {
    try {
      await refreshCarImages(car.id, car);
      await loadUnsplashImages();
    } catch (error) {
      console.error("Error refreshing images:", error);
    }
  };

  const SpecRow: React.FC<SpecRowProps> = ({ icon, label, value }) => (
    <View style={styles.specRow}>
      <View style={styles.specLeft}>
        <Ionicons name={icon} size={20} color={colors.textPrimary} />
        <Text style={styles.specLabel}>{label}</Text>
      </View>
      <Text style={styles.specValue}>{value}</Text>
    </View>
  );

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

  const handleImagePress = (index: number) => {
    setSelectedImageIndex(index);
    setGalleryVisible(true);
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={colors.statusBarStyle}
        backgroundColor={colors.accent}
      />

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

          <View style={{ flexDirection: "row", gap: 8 }}>
            <TouchableOpacity
              onPress={() => setShareModalVisible(true)}
              style={{
                width: 40,
                height: 40,
                borderRadius: 12,
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons name="share-social" size={22} color="#fff" />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleToggleFavorite}
              style={{
                width: 40,
                height: 40,
                borderRadius: 12,
                backgroundColor: colors.accentLight,
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
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            height: 300,
            backgroundColor: colors.surface,
            position: "relative",
          }}
        >
          {loadingImages && !hasLoadedImages ? (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ActivityIndicator size="large" color={colors.accent} />
              <Text
                style={{
                  color: colors.textSecondary,
                  marginTop: 12,
                  fontSize: 14,
                }}
              >
                Carregando fotos do Unsplash...
              </Text>
            </View>
          ) : unsplashImages.length > 0 ? (
            <>
              <FlatList
                data={unsplashImages}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item, index }) => (
                  <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => handleImagePress(index)}
                  >
                    <Image
                      source={item}
                      style={{ width: 400, height: 300 }}
                      resizeMode="cover"
                    />
                  </TouchableOpacity>
                )}
              />

              <TouchableOpacity
                style={{
                  position: "absolute",
                  bottom: 16,
                  right: 16,
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  paddingHorizontal: 16,
                  paddingVertical: 10,
                  borderRadius: 20,
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 8,
                }}
                onPress={() => setGalleryVisible(true)}
              >
                <Ionicons name="images" size={20} color="#fff" />
                <Text
                  style={{ color: "#fff", fontWeight: "700", fontSize: 13 }}
                >
                  Ver todas ({unsplashImages.length})
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={handleRefreshImages}
              >
                <Ionicons name="refresh" size={20} color="#fff" />
              </TouchableOpacity>
            </>
          ) : (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons
                name="images-outline"
                size={60}
                color={colors.textTertiary}
              />
              <Text
                style={{
                  color: colors.textPrimary,
                  marginTop: 12,
                  fontSize: 16,
                  fontWeight: "600",
                }}
              >
                {car.name}
              </Text>
              <Text
                style={{
                  color: colors.textSecondary,
                  marginTop: 8,
                  fontSize: 14,
                }}
              >
                Nenhuma imagem disponível
              </Text>
              <TouchableOpacity
                style={{
                  marginTop: 16,
                  backgroundColor: colors.accent,
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  borderRadius: 12,
                }}
                onPress={handleRefreshImages}
              >
                <Text style={{ color: "#fff", fontWeight: "700" }}>
                  Carregar Fotos
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

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

          {unsplashImages.length > 0 && (
            <View style={styles.section}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 16,
                }}
              >
                <Text style={styles.sectionTitle}>
                  Galeria ({unsplashImages.length} fotos)
                </Text>
                <TouchableOpacity onPress={() => setGalleryVisible(true)}>
                  <Text
                    style={{
                      color: colors.accent,
                      fontSize: 14,
                      fontWeight: "600",
                    }}
                  >
                    Ver todas →
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
                {unsplashImages.slice(0, 6).map((image, index) => (
                  <TouchableOpacity
                    key={index}
                    style={{
                      width: "48%",
                      height: 150,
                      borderRadius: 12,
                      overflow: "hidden",
                    }}
                    onPress={() => handleImagePress(index)}
                  >
                    <Image
                      source={image}
                      style={{ width: "100%", height: "100%" }}
                    />
                    {index === 5 && unsplashImages.length > 6 && (
                      <View
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          backgroundColor: "rgba(0, 0, 0, 0.6)",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Text
                          style={{
                            color: "#fff",
                            fontSize: 28,
                            fontWeight: "700",
                          }}
                        >
                          +{unsplashImages.length - 6}
                        </Text>
                      </View>
                    )}
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          )}

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

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Avaliações</Text>
            <RatingsSection car={car} />
          </View>

          <View style={styles.actionsRow}>
            <TouchableOpacity
              style={[styles.actionButton, { flex: 1 }]}
              activeOpacity={0.8}
              onPress={() => setShareModalVisible(true)}
            >
              <Ionicons name="share-social" size={20} color="#fff" />
              <Text style={styles.actionButtonText}>Compartilhar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.actionButton, { flex: 1.5 }]}
              activeOpacity={0.8}
              onPress={() => console.log("Contato WhatsApp")}
            >
              <Ionicons name="logo-whatsapp" size={20} color="#fff" />
              <Text style={styles.actionButtonText}>Entrar em Contato</Text>
            </TouchableOpacity>
          </View>

          {unsplashImages.length > 0 && (
            <View style={{ padding: 16, alignItems: "center" }}>
              <Text style={{ fontSize: 11, color: colors.textTertiary }}>
                📸 Fotos por <Text style={{ fontWeight: "700" }}>Unsplash</Text>
              </Text>
            </View>
          )}

          <View style={styles.bottomSpacing} />
        </Animated.View>
      </ScrollView>

      <ShareModal
        visible={shareModalVisible}
        onClose={() => setShareModalVisible(false)}
        car={car}
      />

      {unsplashImages.length > 0 && (
        <ImageGalleryModal
          visible={galleryVisible}
          images={unsplashImages}
          initialIndex={selectedImageIndex}
          onClose={() => setGalleryVisible(false)}
        />
      )}
    </View>
  );
}
