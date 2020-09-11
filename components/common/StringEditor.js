import React, { useState, useRef, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Modal,
} from 'react-native';

const StringEditor = ({ currentString, visible, onEdit }) => {
    const inputRef = useRef(null);

    const [finalString, setFinalString] = useState(currentString);
    const [isVisible, setIsVisible] = useState(visible);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleChange = (input) => setFinalString(input);
    const handleOnPressOuter = () => onEdit('');
    const handleOnPressSave = () => {
        if (finalString === '') return;
        onEdit(finalString);
    };

    return (
        <Modal animationType="slide" transparent visible={visible}>
            <TouchableOpacity
                style={styles.mainWrap}
                activeOpacity={1}
                onPress={handleOnPressOuter}
            >
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
                                onPress={handleOnPressSave}
                            >
                                SAVE
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        </Modal>
    );
};

const styles = StyleSheet.create({
    mainWrap: {
        flex: 1,
        backgroundColor: 'rgba(38,38,41,0.56)',
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
