import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, SafeAreaView, Button } from 'react-native';
// to dispatch redux actions
import { useDispatch } from 'react-redux';
// redux actions
import { addNote, editNote } from '../store/notes/action';

function AddNotes(props) {
  // initializing useState hooks
  const [noteTitle, setNoteTitle] = useState('');
  const [noteDescription, setNoteDescription] = useState('');

  const dispatchAction = useDispatch();

  const item = props?.route?.params?.item;

  // Use Effect hooks 
  useEffect(() => {
    if (item) {
      // checking if its from edit, then show current selected note other its a new note so initialize it with empty
      setNoteTitle(item.title ? item.title : '');
      setNoteDescription(item.description ? item.description : '');
    }
  }, []);

  // creating edit note action  then navigating back to previous screen
  const editNoteToReducer = () => {
    const params = {
      id: item.id,
      title: noteTitle,
      description: noteDescription,
    };
    dispatchAction(editNote(params));

    props.navigation.goBack();
  };

  // Adding a new note with new random note id with reducer
  const addNoteToReducer = () => {
    if (noteTitle.length > 0 && noteDescription.length > 0) {
      const note = {
        id: Math.floor(Math.random() * 1000000),
        title: noteTitle,
        description: noteDescription,
      };

      dispatchAction(addNote(note));

      props.navigation.goBack();
    } else {
      alert('Please add title and description first!');
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <TextInput
          placeholder="Add Note Title here"
          style={styles.title}
          onChangeText={title => setNoteTitle(title)}
          value={noteTitle}
        />

        <TextInput
          placeholder="Add Note Description"
          style={styles.text}
          value={noteDescription}
          onChangeText={noteDescription => setNoteDescription(noteDescription)}
          multiline={true}
          underlineColorAndroid="transparent"
        />

        <Button
          title={item ? 'Update Note' : 'Add a Note'}
          style={styles.addNoteButton}
          onPress={() => {
            item ? editNoteToReducer() : addNoteToReducer();
          }}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    marginHorizontal: 15,
  },

  title: {
    fontSize: 14,
    marginBottom: 16,
    height: 40,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 16,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default AddNotes;
