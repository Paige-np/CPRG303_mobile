import {
  TextInput,
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  SafeAreaView,  
  Pressable,  
  
} from 'react-native';
import MyComp from './my-comp';
import React, {useState} from 'react';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';


function App(): JSX.Element {
  const [inputText, setInputText] = useState('');
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk cat']);

  let condition = true;

  let dynamicStyles = condition ? styles.text : styles.textRed;

  const data = [];
  for (let n = 0; n < 20; n++) {
    const item = {id: n, name: `Item ${n}`};
    data.push(item);
  }

  const renderItem = ({...item}) => <Text> {item.text} </Text>;

  const handleTextInput = (text: React.SetStateAction<string>) => {
    setInputText(text);
  };

  const handlePress = () => {
    // some code
  };
  return (
    <View style={styles.container}>
      {/* <Text style={dynamicStyles}>Hello World!!</Text> */}
      {/* <MyComp /> */}
      {/* <Image source={require('./first_pic.jpg')} style={styles.image} /> */}
      {/* <TextInput
        placeholder="Please enter your name."
        value={inputText}
        onChangeText={handleTextInput}
      /> */}
      {/* <Button title="Submit" onPress={handlePress}/> */}
      {/* <FlatList data={data} renderItem={renderItem} /> */}
      <Text style={dynamicStyles}>To do list</Text>
      <ToDoForm/>
      {/* <ToDoList/> */}
      <ToDoList tasks={tasks} />      
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    
    
    //alignItems: 'center', // only work when using <View>, use <ScrollView> cannot use alignItems
  },
  text: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontsize: 30,
    },
  textRed: {
    fontSize: 20,
    color: 'red',
  },
  image: {
    width: 240,
    height: 150,
    marginLeft: 80,
    marginBottom: 20,
    
  },
  
  
});

export default App;
