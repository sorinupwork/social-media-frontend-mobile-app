import React from 'react';
import PropTypes from 'prop-types';
import {Image, Text, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import {
  faBookmark,
  faHeart,
  faMessage,
} from '@fortawesome/free-regular-svg-icons';

import UserProfileImage from '../UserProfileImage/UserProfileImage';
import style from './style';
import {horizontalScale, scaleFontSize} from '../../assets/styles/scaling';

const UserPost = props => {
  return (
    <View style={style.userPostContainer}>
      <View style={style.user}>
        <View style={style.userContainer}>
          <UserProfileImage
            imageDimensions={horizontalScale(48)}
            profileImage={props.profileImage}
          />
          <View style={style.userTextContainer}>
            <Text style={style.username}>
              {props.firstName} {props.lastName}
            </Text>
            {props.location && (
              <Text style={style.location}>{props.location}</Text>
            )}
          </View>
        </View>
        <FontAwesomeIcon
          icon={faEllipsisH}
          color="#79869f"
          size={scaleFontSize(24)}
        />
      </View>
      <View style={style.postImage}>
        <Image source={props.image} />
      </View>
      <View style={style.userPostStats}>
        <View style={style.userPostStatButton}>
          <FontAwesomeIcon icon={faHeart} color="#79869f" />
          <Text style={style.userPostStatText}>{props.likes}</Text>
        </View>
        <View style={style.userPostStatButtonRight}>
          <FontAwesomeIcon icon={faMessage} color="#79869f" />
          <Text style={style.userPostStatText}>{props.comments}</Text>
        </View>
        <View style={style.userPostStatButtonRight}>
          <FontAwesomeIcon icon={faBookmark} color="#79869f" />
          <Text style={style.userPostStatText}>{props.bookmarks}</Text>
        </View>
      </View>
    </View>
  );
};

UserPost.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  location: PropTypes.string,
  image: PropTypes.any.isRequired,
  profileImage: PropTypes.any.isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  bookmarks: PropTypes.number.isRequired,
};

export default UserPost;
