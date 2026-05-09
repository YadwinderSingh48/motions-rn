import React from 'react';
import {
    Image,
    ImageSourcePropType,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

interface StatProps {
  value: string | number;
  label: string;
}

interface ProfileDetailsProps {
  image: ImageSourcePropType;
  name: string;
  bio: string;
  posts: number;
  followers: number;
  following: number;
  username?: string;
  onEditPress?: () => void;
}

const Stat = ({ value, label }: StatProps) => {
  return (
    <View style={styles.statContainer}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
};

const ProfileDetails = ({
  image,
  name,
  bio,
  posts,
  followers,
  following,
  username,
  onEditPress,
}: ProfileDetailsProps) => {
  return (
    <View style={styles.container}>
      {/* Top Section */}
      <View style={styles.topSection}>
        {/* Profile Image */}
        <View style={styles.avatarBorder}>
          <Image source={image} style={styles.avatar} />
        </View>

        {/* Stats */}
        <View style={styles.statsRow}>
          <Stat value={posts} label="Posts" />
          <Stat value={followers} label="Followers" />
          <Stat value={following} label="Following" />
        </View>
      </View>

      {/* Bio */}
      <View style={styles.bioSection}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.bio}> {"Software developer at "}
        {username && (
          <Text style={styles.username}>
             @{username}
          </Text>
        )}
        </Text>

        <Text style={styles.bio}>{" "+bio}</Text>
      </View>

      {/* Button */}
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button}
        onPress={onEditPress}
      >
        <Text style={styles.buttonText}>
          Edit Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 1,
  },

  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  avatarBorder: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 2,
    borderColor: '#D1D5DB',
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatar: {
    width: 86,
    height: 86,
    borderRadius: 43,
  },

  statsRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: 20,
  },

  statContainer: {
    alignItems: 'center',
  },

  statValue: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111',
  },

  statLabel: {
    fontSize: 16,
    color: '#222',
    marginTop: 4,
  },

  bioSection: {
    marginTop: 14,
    // backgroundColor:'red'
  },

  name: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111',
  },

  username: {
    fontSize: 14,
    color: '#2563EB',
    marginTop: 4,
  },

  bio: {
    fontSize: 14,
    color: '#222',
    marginTop: 4,
    // lineHeight: 24,
  },

  button: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'rgba(60, 60, 67, 0.18)',
    borderRadius: 10,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111',
  },
});

export default ProfileDetails;