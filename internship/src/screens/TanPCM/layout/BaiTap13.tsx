import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import {
  avatars,
  iconMenu,
  iconPlus,
  iconPlusList,
  iconChange,
  iconAvatar,
  iconNet,
  iconFriend,
  iconBook,
  iconLook,
} from '../url';

const BaiTap13 = () => {
  const data = [
    {
      image: iconAvatar,
      title: "Change Avatar",
      subTitle: "Set",
    },
    {
      image: iconChange,
      title: "Change Username",
      subTitle: "Alexis Gorzov",
    },
    {
      image: iconFriend,
      title: "Alarm Circles",
      subTitle: "S4 Friends",
    },
    {
      image: iconNet,
      title: "Set Unlock Pattern",
      subTitle: "Default Pattern Set",
    },
    {
      image: iconBook,
      title: "Set Content",
      subTitle: "Lorem ipsum dolor sit amet..."
    },
    {
      image: iconLook,
      title: "Set Time",
      subTitle: "25 Dec 2021 | 09:00 am"
    },
    {
      image: iconFriend,
      title: "Set Friend",
      subTitle: "2 Friend"
    },
  ];

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
          <Text style={[styles.textInfo, { marginVertical: 0 }]}>
            105 Friends
          </Text>
        </View>
      </View>

      <View style={styles.flex8}>
        <ScrollView>
        {data.map((item, index) => {
          return (
            <View style={[styles.row, {
              backgroundColor: index % 2 === 0 ? "#fffaf0" :
                "#faebd7"
            }]}>
              <View style={styles.flex1}>
                <View style={styles.image}>
                  <Image source={item.image} />
                </View>
              </View>
              <View style={styles.textList}>
                <Text style={styles.textHeader}>{item.title}</Text>
                <Text>{item.subTitle}</Text>
              </View>
              <View style={styles.flex1}>
                <Image source={iconPlusList} />
              </View>
            </View>
          );
        })}
        </ScrollView>

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
    backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    color: "white",
    fontWeight: "600",
  },
  viewInfo: {
    flex: 5,
    paddingHorizontal: 20,
    backgroundColor: "red",
    flexDirection: "row",
  },
  viewImage: {
    flex: 1,
    paddingRight: 20,
    justifyContent: "center",
  },
  imgAvatar: {
    height: 170,
    aspectRatio: 1 / 1,
    borderRadius: 100,
    borderWidth: 10,
    borderColor: "yellow",
  },
  viewText: {
    flex: 1,
    justifyContent: "center",
  },
  textInfo: {
    fontSize: 14,
    marginVertical: 10,
    fontWeight: "600",
    color: "white",
  },
  textInfoName: {
    marginVertical: 10,
    fontSize: 20,
    fontWeight: "600",
    color: "yellow",
  },
  row: {
    height: 100,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  textHeader: {
    paddingVertical: 10,
    color: "red",
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
    alignSelf: "center",
  },
});
