import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 20,
        borderRadius: 4,
        backgroundColor: '#fff',
        marginBottom: 15,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    description: {
        color: '#666',
        marginTop: 5,
        lineHeight: 20,
    },
    stats: {
        flexDirection: 'row',
        marginTop: 15,
    },
    stat: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    statCount: {
        marginLeft: 6,
    },
    refresh: {
        marginTop: 20,
        flexDirection: 'row',
    },
    refreshText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#9159c1',
        marginLeft: 5,
    }
});

export default styles;