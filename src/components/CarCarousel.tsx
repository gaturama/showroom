import React, { useState } from 'react';
import { View, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';

interface CarImageCarouselProps {
  images: string[];
  height?: number;
}

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CARD_MARGIN = 32; // margins do card (16 * 2)
const IMAGE_WIDTH = SCREEN_WIDTH - CARD_MARGIN;

export const CarImageCarousel: React.FC<CarImageCarouselProps> = ({ 
  images, 
  height = 180 
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (event: any) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = Math.floor(event.nativeEvent.contentOffset.x / slideSize);
    setActiveIndex(index);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        style={{ height }}
      >
        {images.map((image, index) => (
          <Image
            key={index}
            source={typeof image === 'string' ? { uri: image } : image}
            style={[styles.image, { width: IMAGE_WIDTH, height }]}
            resizeMode="cover"
          />
        ))}
      </ScrollView>

      {/* Indicadores de página */}
      <View style={styles.pagination}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              index === activeIndex && styles.dotActive,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  image: {
    backgroundColor: '#1a1a1a',
  },
  pagination: {
    position: 'absolute',
    bottom: 12,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginHorizontal: 4,
  },
  dotActive: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#fff',
  },
});