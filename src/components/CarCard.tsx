import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { CarImageCarousel } from './CarCarousel';
import { Car } from '../navigation/car';
import { useTheme } from '../context/ThemeContext';
import { useThemedStyles } from '../hooks/useThemedStyles';
import { createStyles } from '../styles/stylesCarCard';

interface CarCardProps {
  car: Car;
  onPress?: () => void;
}

export const CarCard: React.FC<CarCardProps> = ({ car, onPress }) => {
  const styles = useThemedStyles(createStyles)
  
  return (
    <Pressable 
      style={styles.card}
      onPress={onPress}
      android_ripple={{ color: '#333' }}
    >
      <CarImageCarousel images={car.images} height={180} />
      
      <View style={styles.info}>
        <Text style={styles.name}>{car.name}</Text>
        
        <View style={styles.specs}>
          <View style={styles.specItem}>
            <Text style={styles.specLabel}>Motor</Text>
            <Text style={styles.specValue}>{car.engine}</Text>
          </View>
          
          <View style={styles.specItem}>
            <Text style={styles.specLabel}>0-100 km/h</Text>
            <Text style={styles.specValue}>{car.acceleration}</Text>
          </View>
          
          <View style={styles.specItem}>
            <Text style={styles.specLabel}>Vel. Máxima</Text>
            <Text style={styles.specValue}>{car.maxSpeed} km/h</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};