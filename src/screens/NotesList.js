import React, { useState, useLayoutEffect, useEffect } from 'react';
import { StyleSheet, View, FlatList, Text, Button } from 'react-native';
// import { Text, FAB, List } from 'react-native-paper'
// import Header from '../component/Header'
import { useSelector } from 'react-redux';

function NotesList({ navigation }) {
  const notes = useSelector(state => state.noteReducer.notes);
  useEffect(() => {
    console.log(notes)
  }, [notes])

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
    <>
      <View style={styles.container}>
        {!notes?.length > 0 ? (
          <View style={styles.titleContainer}>
            <Text style={styles.title}>You do not have any Notes</Text>
          </View>
        ) : (
            <FlatList
              data={notes}
              renderItem={({ item }) => <Text>{item.noteTitle}</Text>}
              keyExtractor={item => item.id.toString()}
            />
          )}
      </View>
    </>
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
  listTitle: {
    fontSize: 20,
  },
});

export default NotesList;
