import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {avatars, clock, icon, plus, shape} from '../../../url';

export default dashBoard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundHeader}>
        <Image source={shape} style={styles.imgHeader} />
        <Image source={avatars} style={styles.imgAvatar} />
        <Text style={styles.textWC}>Welcome Minh Tan</Text>
      </View>
      <View>
        <Text style={styles.textAfternoon}>Good Afternoon</Text>
        <Image style={styles.imgClock} source={clock} />
        <Text style={styles.textTask}>Tasks List</Text>
      </View>
      <View style={styles.viewBox}>
        <View style={styles.headerBox}>
          <Text style={styles.textDaily}>Daily Tasks</Text>
          <Image style={styles.iconPlus} source={plus} />
        </View>
        <View style={styles.viewContent}>
          <Image style={styles.icon} source={icon} />
          <Text style={styles.contentDaily}>Learn programming by 12am</Text>
        </View>
        <View style={styles.viewContent}>
          <Image style={styles.icon} source={icon} />
          <Text style={styles.contentDaily}>Learn how to cook by 1pm</Text>
        </View>
        <View style={styles.viewContent}>
          <Image style={styles.icon} source={icon} />
          <Text style={styles.contentDaily}>Pick up the kid by 2pm</Text>
        </View>
        <View style={styles.viewContent}>
          <Image style={styles.icon} source={icon} />
          <Text style={styles.contentDaily}>Have launch by 3pm</Text>
        </View>
        <View style={styles.viewContent}>
          <Image style={styles.icon} source={icon} />
          <Text style={styles.contentDaily}>Go visit mum by 4pm</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
  },
  imgHeader: {
    position: 'absolute',
    top: 0,
    left: -10,
  },
  backgroundHeader: {
    width: '100%',
    position: 'relative',
    height: 229,
    backgroundColor: '#CF7751',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgAvatar: {
    borderRadius: 100,
    width: 100,
    height: 100,
    marginTop: 50,
  },
  textWC: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 20,
    paddingTop: 20,
    color: 'white',
  },
  imgClock: {
    width: 120,
    height: 120,
    marginTop: 52,
    alignSelf: 'center',
  },
  textAfternoon: {
    fontSize: 14,
    fontWeight: '600',
    alignSelf: 'flex-end',
    paddingTop: 10,
    paddingRight: 25,
  },
  textTask: {
    fontSize: 14,
    fontWeight: '600',
    paddingTop: 10,
    paddingLeft: 25,
  },
  viewBox: {
    backgroundColor: 'white',
    height: 170,
    margin: 25,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  headerBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:"center",
    padding: 10,
  },
  textDaily: {
    fontSize: 14,
    fontWeight: '600',
  },
  iconPlus: {
    width: 24,
    height: 24,
  },
  viewContent: {
    flexDirection: 'row',
    paddingTop: 5,
    marginLeft: 18,
    alignItems: 'center',
  },
  icon: {
    width: 8,
    height: 8,
  },
  contentDaily: {
    paddingLeft: 8,
  },
});
