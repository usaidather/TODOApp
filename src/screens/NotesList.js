import React, { useLayoutEffect, useEffect } from 'react';
import { StyleSheet, View, FlatList, Text, Button } from 'react-native';

import { useSelector } from 'react-redux';
import Note from '../components/Note';

function NotesList({ navigation }) {
  // fetching notes from redux
  let notes = useSelector(state => state.noteReducer.notes);

  // setting up right bar button at navigation bar 
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => {
            navigation.navigate('AddNewNote');
          }}
          title="Add"
        />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* handling empty list */}
      {!notes?.length > 0 ? (
        <View style={styles.titleContainer}>
          <Text style={styles.title}>You do not have any Notes</Text>
        </View>
      ) : (
          <FlatList
            data={notes}
            renderItem={({ item }) => (
              <Note item={item} navigation={navigation}></Note>
            )}
            keyExtractor={item => item?.id?.toString()}
          />
        )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontSize: 20,
  },

});

export default NotesList;
