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

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const MOCK_CARS: Car[] = [
  {
    id: "1",
    name: "Porsche 911 Turbo S",
    brand: "Porsche",
    model: "911 Turbo S",
    year: 2024,
    engine: "3.8L Boxer 6 Twin-Turbo",
    horsepower: 650,
    torque: "81,6 kgfm",
    transmission: "PDK 8 marchas",
    drivetrain: "AWD (Tração nas 4 rodas)",
    fuelType: "Gasolina",
    maxSpeed: 330,
    acceleration: "2.7s",
    weight: 1640,
    price: 1800000,
    description:
      "O Porsche 911 Turbo S representa o ápice da engenharia esportiva alemã. Com seu icônico motor boxer de seis cilindros biturbo montado na traseira, oferece uma experiência de condução incomparável. Combina luxo refinado com desempenho brutal, sendo capaz de surpreender tanto em pistas quanto no uso diário.",
    images: [
      require("../assets/porsche_turbo_s_front.jpg"),
      require("../assets/porsche_turbo_s_back.jpg"),
      require("../assets/porsche_turbo_s_side.jpg"),
    ],
  },
  {
    id: "2",
    name: "Ferrari F8 Tributo",
    brand: "Ferrari",
    model: "F8 Tributo",
    year: 2022,
    engine: "3.9L V8 Twin-Turbo",
    horsepower: 720,
    torque: "78,5 kgfm",
    transmission: "DCT 7 marchas",
    drivetrain: "RWD (Tração traseira)",
    fuelType: "Gasolina",
    maxSpeed: 340,
    acceleration: "2.9s",
    weight: 1330,
    price: 4200000,
    description:
      "A Ferrari F8 Tributo é uma homenagem ao motor V8 mais premiado da história da Ferrari. Com design aerodinâmico agressivo e tecnologia de ponta, este superesportivo italiano oferece uma experiência visceral de pilotagem. Cada detalhe foi pensado para maximizar performance e emoção.",
    images: [
      require("../assets/ferrari_f8_front.jpg"),
      require("../assets/ferrari_f8_back.jpg"),
      require("../assets/ferrari_f8_side.jpg"),
    ],
  },
  {
    id: "3",
    name: "Lamborghini Huracán EVO",
    brand: "Lamborghini",
    model: "Huracán EVO",
    year: 2023,
    engine: "5.2L V10 Aspirado",
    horsepower: 640,
    torque: "61,2 kgfm",
    transmission: "DCT 7 marchas",
    drivetrain: "AWD (Tração nas 4 rodas)",
    fuelType: "Gasolina",
    maxSpeed: 325,
    acceleration: "2.9s",
    weight: 1422,
    price: 3800000,
    description:
      "O Lamborghini Huracán EVO traz o DNA da marca italiana de forma ainda mais evoluída. Seu motor V10 de aspiração natural entrega um som inconfundível, enquanto a tecnologia LDVI (Lamborghini Dinamica Veicolo Integrata) antecipa suas necessidades e otimiza o desempenho em tempo real.",
    images: [
      require("../assets/lamborghini_huracan_front.jpg"),
      require("../assets/lamborghini_huracan_back.jpg"),
      require("../assets/lamborghini_huracan.jpg"),
    ],
  },
  {
    id: "4",
    name: "Mercedes-AMG GT R",
    brand: "Mercedes-AMG",
    model: "AMG GT R",
    year: 2021,
    engine: "4.0L V8 Biturbo",
    horsepower: 585,
    torque: "71,4 kgfm",
    transmission: "DCT 7 marchas",
    drivetrain: "RWD (Tração traseira)",
    fuelType: "Gasolina",
    maxSpeed: 318,
    acceleration: "3.6s",
    weight: 1630,
    price: 1950000,
    description:
      'O Mercedes-AMG GT R, apelidado de "A Fera do Inferno Verde", foi desenvolvido e afinado em Nürburgring. Com suspensão adaptativa, aerodinâmica ativa e um motor V8 biturbo devastador, oferece o equilíbrio perfeito entre conforto e performance extrema.',
    images: [
      require("../assets/mercedes_amg_gt_front.jpg"),
      require("../assets/mercedes_amg_gt_side.jpg"),
      require("../assets/mercedes_amg_gt.jpg"),
    ],
  },
  {
    id: "5",
    name: "Audi R8 Performance",
    brand: "Audi",
    model: "R8 V10 Performance",
    year: 2022,
    engine: "5.2L V10 Aspirado",
    horsepower: 610,
    torque: "57,1 kgfm",
    transmission: "DCT 7 marchas",
    drivetrain: "AWD (Tração Quattro)",
    fuelType: "Gasolina",
    maxSpeed: 330,
    acceleration: "3.2s",
    weight: 1595,
    price: 1700000,
    description:
      "O Audi R8 V10 Performance combina a tecnologia de corrida da Audi Sport com o luxo característico da marca alemã. Compartilha o motor com o Lamborghini Huracán, mas oferece uma experiência mais refinada e cotidiana. O sistema Quattro garante tração excepcional em qualquer condição.",
    images: [
      require("../assets/audi_r8_back.jpg"),
      require("../assets/audi_r8_front.jpg"),
      require("../assets/audi_r8_side.jpg"),
    ],
  },
  {
    id: "6",
    name: "Bentley Continental GT",
    brand: "Bentley",
    model: "Continental GT",
    year: 2020,
    engine: "4.0L Twin-Turbo V8",
    horsepower: 550,
    torque: "67,3 kgfm",
    transmission: "Automático 8 marchas",
    drivetrain: "AWD (Tração Integral)",
    fuelType: "Gasolina",
    maxSpeed: 303,
    acceleration: "4s",
    weight: 2295,
    price: 2000000,
    description:
      "O Bentley Continental GT V8 é a definição de luxo com alma esportiva. Debaixo do capô, o motor V8 biturbo entrega potência e torque de sobra, garantindo acelerações fortes e um ronco marcante — tudo isso sem abrir mão da suavidade característica da Bentley.",
    images: [
      require("../assets/bentley_frontSide.jpg"),
      require("../assets/bentley_back.jpg"),
      require("../assets/bentley_side.jpg"),
    ],
  },
  {
    id: "7",
    name: "Koenigsegg Regera",
    brand: "Koenigsegg",
    model: "Regera",
    year: 2016,
    engine: "5.0L Twin-Turbo V8 Híbrido",
    horsepower: 1500,
    torque: "203,9 kgfm",
    transmission: "Automático 1 marcha",
    drivetrain: "RWD (Tração Traseira)",
    fuelType: "Gasolina/Eletrecidade",
    maxSpeed: 303,
    acceleration: "2,8s",
    weight: 1420,
    price: 30000000,
    description:
      "O Koenigsegg Regera é o ápice da engenharia automotiva moderna — um hipercarro híbrido sueco que redefine o que significa desempenho sem concessões. Com um sistema híbrido inovador combinando um motor V8 twin-turbo de alta potência com motores elétricos integrados, o Regera entrega uma aceleração brutal, torque instantâneo e tecnologia de transmissão direta que elimina a necessidade de uma caixa de câmbio tradicional.",
    images: [
      require("../assets/koenigsegg_regera_back.jpg"),
      require("../assets/koenigsegg_regera_front.jpg"),
      require("../assets/koenigsegg_regera_side.jpg"),
    ],
  },
  {
    id: "8",
    name: "BMW M3 Competition",
    brand: "BMW",
    model: "M3 Competition",
    year: 2023,
    engine: "3.0L Twin-Turbo",
    horsepower: 510,
    torque: "66,3 kgfm",
    transmission: "Automático 8 marchas",
    drivetrain: "RWD (Tração Traseira)",
    fuelType: "Gasolina",
    maxSpeed: 290,
    acceleration: "3,9s",
    weight: 1730,
    price: 6022030,
    description:
      "O BMW M3 Competition é a síntese perfeita entre desempenho bruto e usabilidade diária. Com um motor twin-turbo de 6 cilindros em linha que entrega uma potência vigorosa e um som inconfundível, essa versão Competition eleva o M3 a um patamar ainda mais esportivo — resposta instantânea do acelerador, aceleração feroz e controle preciso em qualquer curva.",
    images: [
      require("../assets/bmw_m3_frontSide.jpg"),
      require("../assets/bmw_m3_back.jpg"),
      require("../assets/bmw_m3_side.jpg"),
    ],
  },
  {
    id: "9",
    name: "McLaren Senna",
    brand: "McLaren",
    model: "Senna",
    year: 2018,
    engine: "4.0L Twin-Turbo V8",
    horsepower: 800,
    torque: "81,6 kgfm",
    transmission: "Automático 7 marchas",
    drivetrain: "RWD (Tração Traseira)",
    fuelType: "Gasolina",
    maxSpeed: 340,
    acceleration: "2,8s",
    weight: 1198,
    price: 14000000,
    description:
      "O McLaren Senna é a mais pura expressão da obsessão pela performance — um hipercarro projetado para dominar pistas, inspirado no lendário piloto Ayrton Senna. Com um motor V8 biturbo de alta rotação e uma relação peso-potência impressionante, ele entrega aceleração visceral, respostas instantâneas e performance cirúrgica em cada curva.",
    images: [
      require("../assets/mcLaren_Senna_front.jpg"),
      require("../assets/mcLaren_Senna_side.jpg"),
      require("../assets/mcLaren_Senna_back.jpg"),
    ],
  },
];

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

      {/* Stats Bar */}
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
          <Text style={styles.statNumber}>
            {MOCK_CARS.reduce((acc, car) => acc + car.horsepower, 0)}
          </Text>
          <Text style={styles.statLabel}>HP Total</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>
            R${" "}
            {(
              MOCK_CARS.reduce((acc, car) => acc + car.price, 0) / 1000000
            ).toFixed(1)}
            M
          </Text>
          <Text style={styles.statLabel}>Valor</Text>
        </View>
      </Animated.View>

      {/* Car List */}
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
