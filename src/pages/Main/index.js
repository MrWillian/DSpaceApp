import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { styles } from './styles';

export default function Main() {
  return (
    <View style={styles.container}>
      <View style={styles.containerSearch}>
        <View style={styles.search}>
          <Icon style={styles.searchIcon} name="search" size={16} />
          <Text style={styles.searchText}>Pesquisar...</Text>
        </View>
        <TouchableOpacity style={styles.menuDrawerButton}>
          <Icon style={styles.menuIcon} name="bars" size={15} />
        </TouchableOpacity>
      </View>
      <View style={styles.containerBottomButtons}>
        <TouchableOpacity style={styles.btnLeft}>
          <Icon style={styles.icon} name="bookmark" size={18} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnMiddle}>
          <Icon style={styles.icon} name="map-marker" size={36} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnRight}>
          <Icon style={styles.icon} name="user" size={18} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
