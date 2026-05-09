import { POST1 } from '@/app/assets';
import { ProfileDetails, ProfileHeader, ProfileTabsGrid, StoriesList } from '@/app/components';
import React from 'react';
import { FlatList, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './syles';

const ProfileScreen = () => {
    const insets = useSafeAreaInsets();
    return (
        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: insets.top }} >
            <FlatList
                data={['']}
                // stickyHeaderIndices={[1]}
                nestedScrollEnabled
                ListHeaderComponent={
                    <View style={[styles.container, {}]} >
                        <ProfileHeader />
                        <View></View>
                        <ProfileDetails
                            image={POST1}
                            name="Yadwinder Singh"
                            username="margelo"
                            bio="Building High End Mobile Applications."
                            posts={54}
                            followers={834}
                            following={162}
                            onEditPress={() => {
                                console.log('Edit Profile');
                            }}
                        />
                        <StoriesList stories={[]} />
                    </View>
                }
                renderItem={() => (
                    <ProfileTabsGrid />
                )}
            />



        </View>
    )
}

export default ProfileScreen