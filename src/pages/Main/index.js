import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { styles } from './styles';
import { colors } from 'react-native-elements';

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
    </View>
  );
}
