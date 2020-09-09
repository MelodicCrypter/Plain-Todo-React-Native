import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';

const Adder = ({ onAddNew, isVisible }) => {
    const [newTodo, setNewTodo] = useState('');

    const handleChange = (input) => setNewTodo(input);

    const handleOnPressAdd = () => {
        // If new is empty
        if (newTodo === '') return;

        onAddNew(newTodo);
        setNewTodo('');
    };

    return (
        <View style={styles.mainWrap}>
            <View style={styles.inputWrap}>
                <TextInput
                    placeholder="Type your todos here"
                    style={styles.input}
                    onChangeText={handleChange}
                    value={newTodo}
                />

                <TouchableOpacity style={styles.buttonWrap}>
                    <Text
                        style={styles.button}
                        title="Add"
                        onPress={handleOnPressAdd}
                    >
                        {' '}
                        ADD{' '}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainWrap: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-end',
        marginBottom: 36,
        alignItems: 'center',
    },
    inputWrap: {
        flexDirection: 'row',
    },
    input: {
        padding: 10,
        borderBottomColor: '#d4d4d4',
        borderBottomWidth: 1,
        width: '76%',
        height: 50,
        borderRadius: 3,
    },
    buttonWrap: {
        backgroundColor: '#36314b',
        width: '14%',
        height: 40,
        borderRadius: 3,
    },
    button: {
        padding: 10,
        color: 'white',
        textAlign: 'center',
    },
});

export default Adder;
