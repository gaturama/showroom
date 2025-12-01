// src/components/CarCard.tsx
import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { CarImageCarousel } from './CarCarousel';
import { Car } from '../navigation/car';

interface CarCardProps {
  car: Car;
  onPress?: () => void;
}

export const CarCard: React.FC<CarCardProps> = ({ car, onPress }) => {
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

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1e1e1e',
    borderRadius: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  info: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
  },
  specs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  specItem: {
    flex: 1,
  },
  specLabel: {
    fontSize: 12,
    color: '#888',
    marginBottom: 4,
  },
  specValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
  },
});