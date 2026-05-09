import React, { useState } from 'react';
import {
    Dimensions,
    FlatList,
    Image,
    ImageSourcePropType,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';

import { POST1, POST2, POST3, POST4, POST5, POST6, POST7, POST8, POST9 } from '@/app/assets';
import Ionicons from '@expo/vector-icons/Ionicons';

const SCREEN_WIDTH = Dimensions.get('window').width;
const IMAGE_SIZE = SCREEN_WIDTH / 3;

type PostItem = {
  id: string;
  image: ImageSourcePropType;
};

interface ProfileTabsGridProps {
  posts?: PostItem[];
  taggedPosts?: PostItem[];
}

const posts_data = [
  {
    id: '1',
    image: POST1,
  },
  {
    id: '2',
    image: POST2,
  },
  {
    id: '3',
    image: POST3,
  },
  {
    id: '4',
    image: POST4,
  },
  {
    id: '5',
    image: POST5,
  },
  {
    id: '6',
    image: POST6,
  },
  {
    id: '7',
    image: POST7,
  },
  {
    id: '8',
    image: POST8,
  },
  {
    id: '9',
    image: POST9,
  },
];

const ProfileTabsGrid = ({
  posts,
  taggedPosts = [],
}: ProfileTabsGridProps) => {
  const [activeTab, setActiveTab] = useState<
    'posts' | 'tagged'
  >('posts');

  const data =
    activeTab === 'posts'
      ? posts
      : taggedPosts;

  return (
    <View style={styles.container}>
      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={styles.tab}
          onPress={() =>
            setActiveTab('posts')
          }
        >
          <Ionicons
            name="grid-outline"
            size={28}
            color={
              activeTab === 'posts'
                ? '#111'
                : '#9CA3AF'
            }
          />

          {activeTab === 'posts' && (
            <View style={styles.activeLine} />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tab}
          onPress={() =>
            setActiveTab('tagged')
          }
        >
          <Ionicons
            name="person-outline"
            size={28}
            color={
              activeTab === 'tagged'
                ? '#111'
                : '#9CA3AF'
            }
          />

          {activeTab === 'tagged' && (
            <View style={styles.activeLine} />
          )}
        </TouchableOpacity>
      </View>

      {/* Grid */}
      <FlatList
        data={posts_data}
        keyExtractor={(item,index) => index.toString()}
        numColumns={3}
        nestedScrollEnabled
        scrollEnabled={false}
        renderItem={({ item }) => (
          <Image
            source={item.image}
            style={styles.image}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  tabsContainer: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },

  tab: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  activeLine: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 2,
    backgroundColor: '#111',
  },

  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    borderWidth: 0.5,
    borderColor: '#fff',
  },
});

export default ProfileTabsGrid;