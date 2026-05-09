import { POST1, POST2, POST6, POST7, POST8 } from '@/app/assets';
import React from 'react';
import {
    FlatList,
    ImageSourcePropType,
    StyleSheet
} from 'react-native';
import StoryAvatar from '../StoryAvatar';
// import StoryAvatar from '../StoryAvatar';

type StoryItem = {
  id: string;
  title: string;
  image: ImageSourcePropType;
};

interface StoriesListProps {
  stories: StoryItem[];
  onPressStory?: (story: StoryItem) => void;
}

const stories_data = [
  {
    id: '1',
    title: 'New',
    image: POST1,
  },
  {
    id: '2',
    title: 'Friends',
    image: POST6,
  },
  {
    id: '3',
    title: 'Sport',
    image: POST7,
  },
  {
    id: '4',
    title: 'Design',
    image: POST8,
  },
  {
    id: '5',
    title: 'Travel',
    image: POST2,
  },
];

const StoriesList = ({
  stories,
  onPressStory,
}: StoriesListProps) => {
  return (
    <FlatList
      horizontal
      data={stories_data}
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.listContent}
      renderItem={({ item }) => (
        <StoryAvatar
          image={item.image}
          title={item.title}
          onPress={() =>
            onPressStory?.(item)
          }
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContent: {
    // paddingHorizontal: 16,
    paddingVertical: 12,
  },

  storyContainer: {
    alignItems: 'center',
    marginRight: 10,
    width: 80,
  },

  outerCircle: {
    width: 74,
    height: 74,
    borderRadius: 37,
    borderWidth: 2,
    borderColor: '#D1D5DB',
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: 66,
    height: 66,
    borderRadius: 33,
  },

  title: {
    marginTop: 6,
    fontSize: 13,
    color: '#111',
  },
});

export default StoriesList;