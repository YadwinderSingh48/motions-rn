import React, { memo } from 'react';
import {
    Image,
    ImageSourcePropType,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

interface StoryAvatarProps {
  image: ImageSourcePropType;
  title?: string;
  size?: number;
  borderColor?: string;
  onPress?: () => void;
}

const StoryAvatar = ({
  image,
  title,
  size = 72,
  borderColor = '#D1D5DB',
  onPress,
}: StoryAvatarProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={onPress}
    >
      <View
        style={[
          styles.outerCircle,
          {
            width: size + 8,
            height: size + 8,
            borderRadius: (size + 8) / 2,
            borderColor,
          },
        ]}
      >
        <Image
          source={image}
          style={{
            width: size,
            height: size,
            borderRadius: size / 2,
          }}
          resizeMode="cover"
        />
      </View>

      {title && (
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginRight: 16,
  },

  outerCircle: {
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    marginTop: 6,
    fontSize: 13,
    color: '#111',
  },
});

export default memo(StoryAvatar);