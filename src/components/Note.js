import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

//importing dispatch action
import { deleteNote } from '../store/notes/action';
import { useDispatch } from 'react-redux';

// Note Items
export default function Note(props) {
  const item = props.item;
  const navigation = props.navigation;

  // to dispatch an action
  const dispatchAction = useDispatch();

  // to delete note on delete icon press
  const deleteNoteOnTapped = () => {
    // dispatching action to delete through redux
    dispatchAction(deleteNote(item.id));
  };

  // to edit note on icon press
  const editNoteOnTapped = () => {
    // navigating to next screen where we can edit a note, passing current note to next screen to edit
    navigation.navigate('AddNewNote', { item: item });
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
  noteTextContainer: { flex: 1 },
  title: {
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 5,
    height: 0.5,
    backgroundColor: 'black',
  },
});
