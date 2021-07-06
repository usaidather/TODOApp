import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AddNewNote from '../screens/AddNewNote';
import NotesList from '../screens/NotesList';

const Stack = createStackNavigator();

function NotesFlow() {
  return (
    <NavigationContainer>
      <Stack.Navigator name="Notes">
        <Stack.Screen name="NotesList" component={NotesList} />
        <Stack.Screen name="AddNewNote" component={AddNewNote} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MainStackNavigator() {
  return NotesFlow();
}

export default MainStackNavigator;
