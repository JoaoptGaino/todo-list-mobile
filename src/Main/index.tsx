import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import styles from './styles';
import { Button, Text, TextInput, View } from 'react-native';
export default function Main() {
    const [value, setValue] = useState<string>("");
    const [todos, setTodos] = useState<Todo[]>([]);
    const [error, showError] = useState<Boolean>(false);

    const handleSubmit = (): void => {
        if (value.trim()) {
            setTodos([...todos, { text: value, complete: false }]);
        } else {
            showError(true);
        }
        setValue("");
    }
    const removeItem = (index: number): void => {
        const newToDoList = [...todos];
        newToDoList.splice(index, 1);
        setTodos(newToDoList);
    };

    const toggleComplete = (index: number): void => {
        const newToDoList = [...todos];
        newToDoList[index].complete = !newToDoList[index].complete;
        setTodos(newToDoList);
    };
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Todo List</Text>

            <Text style={styles.taskTitle}>Your tasks:</Text>
            {todos.length === 0 && <Text>No todos</Text>}
            {todos.map((todo: Todo, index: number) => (
                <View style={styles.listItem} key={`${index}_${todo.text}`}>
                    <Text
                        style={[
                            styles.task,
                            { textDecorationLine: todo.complete ? 'line-through' : 'none' }
                        ]}
                    >
                        {todo.text}
                    </Text>
                    <Button title={todo.complete ? "Completed" : "Complete"}
                        onPress={() => toggleComplete(index)}
                    />
                    <Button
                        title="X"
                        onPress={() => { removeItem(index) }}
                        color="crimson"
                        
                    />
                </View>
            ))}
            <View style={styles.inputBlock}>
                <TextInput
                    placeholder="Task"
                    value={value}
                    onChangeText={e => {
                        setValue(e);
                        showError(false);
                    }}
                    style={styles.inputBox}
                />
                <Button title="Add Task" onPress={handleSubmit} />
            </View>
            {error && <Text>Input empty</Text>}
        </View>
    );
}
