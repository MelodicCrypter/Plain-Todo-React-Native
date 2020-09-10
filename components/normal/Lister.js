import React, { useEffect, useState } from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

const Lister = ({ data, onDelete, onEdit }) => {
    return (
        <FlatList
            keyExtractor={(item, indx) => item.id}
            data={data}
            style={styles.lists}
            renderItem={({ item }) => (
                <TouchableOpacity>
                    <View style={styles.listStyle}>
                        <Text style={styles.listTextStyle}>{item.value}</Text>
                        <View style={styles.optionsWrap}>
                            <Text
                                style={styles.optionsText}
                                onPress={() => onEdit(item.id)}
                            >
                                Edit |
                            </Text>
                            <Text
                                style={styles.optionsText}
                                onPress={() => onDelete(item.id)}
                            >
                                {' '}
                                Delete
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            )}
        />
    );
};

const styles = StyleSheet.create({
    lists: {
        flexDirection: 'column',
        textAlign: 'left',
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 20,
    },
    listStyle: {
        marginVertical: 14,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    listTextStyle: {
        fontSize: 16,
        fontWeight: '500',
        color: '#5c5c5c',
    },
    optionsWrap: {
        flexDirection: 'row',
    },
    optionsText: {
        marginTop: 2,
        fontSize: 13,
        color: '#838383',
    },
});

export default Lister;
