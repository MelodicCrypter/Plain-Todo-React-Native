import React from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

const Lister = ({ data, onDelete }) => {
    return (
        <FlatList
            keyExtractor={(item, indx) => item.id}
            data={data}
            style={styles.lists}
            renderItem={({ item }) => (
                <TouchableOpacity>
                    <View style={styles.listStyle}>
                        <Text style={styles.listTextStyle}>{item.value}</Text>
                        <Text onPress={() => onDelete(item.id)}>X Delete</Text>
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
        paddingLeft: 40,
        paddingRight: 40,
    },
    listStyle: {
        marginVertical: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    listTextStyle: {
        fontSize: 16,
        color: '#767676',
    },
});

export default Lister;
