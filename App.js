import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    KeyboardAvoidingView,
    SafeAreaView,
    TouchableWithoutFeedback,
    Keyboard,
    Text,
} from 'react-native';

import Adder from './components/normal/Adder';
import Lister from './components/normal/Lister';
import StringEditor from './components/common/StringEditor';

const App = () => {
    const [allTodos, setAllTodos] = useState([]);
    const [showDef, setShowDef] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [toBeEdited, setToBeEdited] = useState({ id: '', value: '' });

    useEffect(() => {
        if (allTodos.length > 0) setShowDef(false);
    }, []);

    useEffect(() => {
        if (allTodos.length === 0) setShowDef(true);
    }, [allTodos]);

    // Main Functions
    const handleAddNewBtnClick = () => setShowDef(false);
    const handleAddNewTodo = (newlyAddedTodoTitle) => {
        setAllTodos(getTodosAfterMerge(newlyAddedTodoTitle));
    };
    const handleDeleteTodo = async (id) => {
        const finalTodos = await getTodosAfterDelete(id);
        setAllTodos(finalTodos);
    };
    const handleEditClick = (id, value) => {
        setIsEditing(true);
        setToBeEdited({ id, value });
    };
    const handleEditTodo = (value) => {
        if (value === '') {
            setIsEditing(false);
            return;
        }

        const newTodos = allTodos.map((todo) => {
            if (todo.id === toBeEdited.id) {
                todo.value = value;
            }

            return todo;
        });
        setAllTodos(newTodos);
        setIsEditing(false);
    };

    // Helpers
    const getTodosAfterDelete = (id) =>
        allTodos.filter((todo) => todo.id !== id);
    const getTodosAfterMerge = (todoTitle) => {
        return [
            ...allTodos,
            { id: Math.random().toString(), value: todoTitle },
        ];
    };

    // Main: return text only if list is empty
    return showDef ? (
        <View style={styles.emptyDataWrap}>
            <Text style={styles.emptyText} onPress={handleAddNewBtnClick}>
                List is empty, Add New
            </Text>
            <StatusBar style="auto" />
        </View>
    ) : (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : null}
            style={styles.firstLayerWrap}
        >
            <SafeAreaView style={styles.secondLayerWrap}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.mainInnerWrap}>
                        <Lister
                            data={allTodos}
                            onDelete={handleDeleteTodo}
                            onEditClick={handleEditClick}
                        />

                        {!isEditing && (
                            <Adder
                                onAddNew={handleAddNewTodo}
                                dataEmpty={allTodos.length === 0 && true}
                            />
                        )}

                        {isEditing && (
                            <StringEditor
                                currentString={toBeEdited.value}
                                visible={isEditing}
                                onEdit={handleEditTodo}
                            />
                        )}
                    </View>
                </TouchableWithoutFeedback>
            </SafeAreaView>

            <StatusBar style="auto" />
        </KeyboardAvoidingView>
    );
};

// Styles for this component
const styles = StyleSheet.create({
    firstLayerWrap: {
        flex: 1,
    },
    secondLayerWrap: {
        flex: 1,
    },
    mainInnerWrap: {
        padding: 10,
        flex: 1,
        justifyContent: 'flex-end',
    },
    emptyDataWrap: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    emptyText: {
        fontWeight: '500',
        fontSize: 15,
    },
});

export default App;
