import React from 'react';
import {View, SafeAreaView, StyleSheet, Text, Image} from 'react-native';
import {
  avatars,
  iconMenu,
  iconPlus,
  iconPlusList,
  iconChange,
  iconAvatar,
  iconNet,
  iconFriend,
} from '../url';

const BaiTap13 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={iconMenu} />
        <Text style={styles.title}>Your Profile</Text>
        <Image source={iconPlus} />
      </View>
      <View style={styles.viewInfo}>
        <View style={styles.viewImage}>
          <Image source={avatars} style={styles.imgAvatar} />
        </View>
        <View style={styles.viewText}>
          <Text style={styles.textInfoName}>Me</Text>
          <Text style={styles.textInfo}>
            Tap hear to change your profile status
          </Text>
          <Text style={styles.textInfo}>32 Scheduled</Text>
          <Text style={[styles.textInfo, {marginVertical: 0}]}>
            105 Friends
          </Text>
        </View>
      </View>

      <View style={styles.flex8}>
        <View style={styles.row}>
          <View style={styles.flex1}>
            <View style={styles.image}>
              <Image source={iconAvatar} />
            </View>
          </View>
          <View style={styles.textList}>
            <Text style={styles.textHeader}>Change Avatar</Text>
            <Text>Set</Text>
          </View>
          <View style={styles.flex1}>
            <Image source={iconPlusList} />
          </View>
        </View>

        <View style={[styles.row, {backgroundColor: '#faebd7'}]}>
          <View style={styles.flex1}>
            <View style={styles.image}>
              <Image source={iconChange} />
            </View>
          </View>
          <View style={styles.textList}>
            <Text style={styles.textHeader}>Change Username</Text>
            <Text>Alexis Gorzov</Text>
          </View>
          <View style={styles.flex1}>
            <Image source={iconPlusList} />
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.flex1}>
            <View style={styles.image}>
              <Image source={iconFriend} />
            </View>
          </View>
          <View style={styles.textList}>
            <Text style={styles.textHeader}>Alarm Circles</Text>
            <Text>S4 Friends</Text>
          </View>
          <View style={styles.flex1}>
            <Image source={iconPlusList} />
          </View>
        </View>

        <View style={[styles.row, {backgroundColor: '#faebd7'}]}>
          <View style={styles.flex1}>
            <View style={styles.image}>
              <Image source={iconNet} />
            </View>
          </View>
          <View style={styles.textList}>
            <Text style={styles.textHeader}>Set Unlock Pattern</Text>
            <Text>Default Pattern Set</Text>
          </View>
          <View style={styles.flex1}>
            <Image source={iconPlusList} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default BaiTap13;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flex1: {
    flex: 1,
  },
  flex8: {
    flex: 8,
  },
  header: {
    flex: 1,
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: 'white',
    fontWeight: '600',
  },
  viewInfo: {
    flex: 5,
    paddingHorizontal: 20,
    backgroundColor: 'red',
    flexDirection: 'row',
  },
  viewImage: {
    flex: 1,
    paddingRight: 20,
    justifyContent: 'center',
  },
  imgAvatar: {
    height: 170,
    aspectRatio: 1 / 1,
    borderRadius: 100,
    borderWidth: 10,
    borderColor: 'yellow',
  },
  viewText: {
    flex: 1,
    justifyContent: 'center',
  },
  textInfo: {
    fontSize: 14,
    marginVertical: 10,
    fontWeight: '600',
    color: 'white',
  },
  textInfoName: {
    marginVertical: 10,
    fontSize: 20,
    fontWeight: '600',
    color: 'yellow',
  },
  row: {
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: '#fffaf0',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textHeader: {
    paddingVertical: 10,
    color: 'red',
  },
  textList: {
    flex: 3,
    paddingHorizontal: 20,
  },
  image: {
    borderWidth: 2,
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 50,
    alignSelf: 'center',
  },
});
