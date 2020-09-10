import React, { useState, useRef, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';

const Adder = ({ onAddNew }) => {
    const inputRef = useRef(null);

    const [newTodo, setNewTodo] = useState('');

    useEffect(() => {
        inputRef.current.focus();
    }, []);

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
                    ref={inputRef}
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
                        ADD
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
        marginBottom: 28,
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
        fontSize: 16,
    },
    buttonWrap: {
        backgroundColor: 'rgba(47,50,78,0.62)',
        width: '14%',
        height: 48,
        borderRadius: 3,
    },
    button: {
        paddingTop: 14,
        fontWeight: '600',
        color: 'white',
        textAlign: 'center',
    },
});

export default Adder;
