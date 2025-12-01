import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, FlatList, StyleSheet } from "react-native";
import { RootStackParamList } from "../navigation/types";
import { Appbar } from "react-native-paper";
import { styles as profileStyles } from "../styles/stylesProfile";
import { CarCard } from "../components/CarCard";
import { Car } from "../navigation/car";
import { styles } from "../styles/stylesHome";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const MOCK_CARS: Car[] = [
  {
    id: '1',
    name: 'Porsche 911 Turbo S',
    engine: '3.8L Twin-Turbo',
    maxSpeed: 330,
    acceleration: '2.6s',
    images: [
      require('../assets/porsche_turbo_s_front.jpg'),
      require('../assets/porsche_turbo_s_back.jpg'),
      require('../assets/porsche_turbo_s_side.jpg'),
    ],
  },
  {
    id: '2',
    name: 'Ferrari F8 Tributo',
    engine: '3.9L V8 Twin-Turbo',
    maxSpeed: 340,
    acceleration: '2.9s',
    images: [
      require('../assets/ferrari_f8_front.jpg'),
      require('../assets/ferrari_f8_back.jpg'),
      require('../assets/ferrari_f8_side.jpg'),
    ],
  },
  {
    id: '3',
    name: 'Lamborghini Huracán',
    engine: '5.2L V10',
    maxSpeed: 320,
    acceleration: '3.4s',
    images: [
      require('../assets/lamborghini_huracan_front.jpg'),
      require('../assets/lamborghini_huracan_back.jpg'),
      require('../assets/lamborghini_huracan.jpg'),
    ],
  },
  {
    id: '4',
    name: 'Mercedes-AMG GT',
    engine: '4.0L V8 Biturbo',
    maxSpeed: 318,
    acceleration: '3.2s',
    images: [
      require('../assets/mercedes_amg_gt_front.jpg'),
      require('../assets/mercedes_amg_gt_side.jpg'),
      require('../assets/mercedes_amg_gt.jpg'),
    ],
  },
  {
    id: '5',
    name: 'Audi R8 V10',
    engine: '5.2L V10',
    maxSpeed: 330,
    acceleration: '3.1s',
    images: [
      require('../assets/audi_r8_back.jpg'),
      require('../assets/audi_r8_front.jpg'),
      require('../assets/audi_r8_side.jpg'),
    ],
  },
];

export default function HomeScreen({ navigation }: Props) {
  const handleProfile = () => {
    navigation.navigate("Profile");
  };

  const handleCarPress = (car: Car) => {
    console.log('Carro selecionado:', car.name);
  };

  return (
    <View style={styles.container}>
      <Appbar.Header style={profileStyles.head}>
        <Appbar.BackAction onPress={() => navigation.goBack()} color="#fff" />
        <Appbar.Content title="Garagem" color="#fff" />
        <Appbar.Action 
          icon="account" 
          onPress={handleProfile} 
          color="#fff"
        />
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