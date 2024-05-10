import React from 'react';
import {Image, ScrollView, View} from 'react-native';

import style from './style';

const ProfileTabContent = () => {
  return (
    <ScrollView
      style={style.profileTabContentContainer}
      showsVerticalScrollIndicator={false}>
      <View style={style.profileTabContent}>
        <Image
          source={require('../../assets/images/default_post.png')}
          style={style.image}
          resizeMode="contain"
        />
        <Image
          source={require('../../assets/images/default_post.png')}
          style={style.image}
          resizeMode="contain"
        />
        <Image
          source={require('../../assets/images/default_post.png')}
          style={style.image}
          resizeMode="contain"
        />
        <Image
          source={require('../../assets/images/default_post.png')}
          style={style.image}
          resizeMode="contain"
        />
        <Image
          source={require('../../assets/images/default_post.png')}
          style={style.image}
          resizeMode="contain"
        />
        <Image
          source={require('../../assets/images/default_post.png')}
          style={style.image}
          resizeMode="contain"
        />
        <Image
          source={require('../../assets/images/default_post.png')}
          style={style.image}
          resizeMode="contain"
        />
        <Image
          source={require('../../assets/images/default_post.png')}
          style={style.image}
          resizeMode="contain"
        />
      </View>
    </ScrollView>
  );
};

export default ProfileTabContent;
