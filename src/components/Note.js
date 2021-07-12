import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {deleteNote} from '../store/notes/action';
import {useDispatch} from 'react-redux';

export default function Note(props) {
  const item = props.item;
  const navigation = props.navigation;
  const dispatchAction = useDispatch();

  const deleteNoteOnTapped = () => {
    dispatchAction(deleteNote(item.id));
  };

  const editNoteOnTapped = () => {
    console.log('ITEM:', item);
    navigation.navigate('AddNewNote', {item: item});
  };

  return (
    <>
      <View style={styles.noteContainer}>
        <View style={styles.noteTextContainer}>
          <Text style={styles.title}>{item.title} </Text>
          <Text>{item.description}</Text>
        </View>
        <TouchableOpacity onPress={() => deleteNoteOnTapped()}>
          <Image
            source={require('../assets/delete.png')}
            style={styles.imageStyle}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => editNoteOnTapped()}>
          <Image
            source={require('../assets/pencil.png')}
            style={styles.imageStyle}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.separator}></View>
    </>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    width: 20,
    height: 20,
    margin: 5,
  },
  noteContainer: {
    marginVertical: 10,
    flexDirection: 'row',
  },
  noteTextContainer: {flex: 1},
  title: {
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 5,
    height: 0.5,
    backgroundColor: 'black',
  },
});
