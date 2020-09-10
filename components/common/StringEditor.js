import React, { useState, useRef, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Modal,
} from 'react-native';

const StringEditor = ({ currentString, visible }) => {
    const inputRef = useRef(null);

    const [finalString, setFinalString] = useState(currentString);
    const [isVisible, setIsVisible] = useState(visible);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleChange = (input) => setFinalString(input);

    const handleOnPressAdd = () => {
        setIsVisible(false);
        // If new is empty
        // if (newTodo === '') return;
        //
        // onAddNew(newTodo);
        // setNewTodo('');
    };

    return (
        <View style={styles.mainWrap}>
            <Modal animationType="slide" transparent visible={isVisible}>
                <View style={styles.mainWrap}>
                    <View style={styles.modalStyle}>
                        <View style={styles.inputWrap}>
                            <TextInput
                                ref={inputRef}
                                style={styles.input}
                                onChangeText={handleChange}
                                value={finalString}
                            />

                            <TouchableOpacity style={styles.buttonWrap}>
                                <Text
                                    style={styles.button}
                                    title="Add"
                                    onPress={handleOnPressAdd}
                                >
                                    SAVE
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    mainWrap: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalStyle: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
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
        width: '16%',
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

export default StringEditor;
