import { Entypo, Feather } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const ProfileHeader = () => {
    return (
        <View style={[styles.flexRow, {justifyContent:'center' }]} >
            <View style={[styles.flexRow]}>
                <Text style={styles.titleText} >Yadwinder</Text>
                <Entypo name='chevron-small-down' size={28} color={'black'} />
            </View>
            <Feather style={{ right: 0, position: 'absolute' }} name="menu" size={24} color="black" />
        </View>
    )
}

export default ProfileHeader