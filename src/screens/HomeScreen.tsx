import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, FlatList } from "react-native";
import { RootStackParamList } from "../navigation/types";
import { Appbar } from "react-native-paper";
import { styles } from "../styles/stylesHome";
import { CarCard } from "../components/CarCard";
import { Car } from "../navigation/car";
import { styles as ProfileStyles } from "../styles/stylesProfile";

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
    name: "Audi R8 V10 Performance",
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
];

export default function HomeScreen({ navigation }: Props) {
  const handleProfile = () => {
    navigation.navigate("Profile");
  };

  const handleCarPress = (car: Car) => {
    navigation.navigate("CarDetails", { car });
  };

  return (
    <View style={styles.container}>
      <Appbar.Header style={ProfileStyles.head}>
        <Appbar.BackAction onPress={() => navigation.goBack()} color="#fff" />
        <Appbar.Content title="Garagem" color="#fff" />
        <Appbar.Action icon="account" onPress={handleProfile} color="#fff" />
      </Appbar.Header>

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
