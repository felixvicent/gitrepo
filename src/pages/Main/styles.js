import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30 + getStatusBarHeight(true),
    },
    title: {
        fontSize: 32,
        color: '#fff',
        fontWeight: 'bold',
        paddingHorizontal: 20,
    },
    form: {
        flexDirection: 'row',
        marginTop: 10,
        marginHorizontal: 20,
    },
    input : {
        flex: 1,
        paddingVertical: 12,
        paddingHorizontal: 15,
        borderRadius: 4,
        fontSize: 16,
        color: '#333',
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#fff',
    },
    submit: {
        backgroundColor: '#6bd4c1',
        marginLeft: 10,
        justifyContent: 'center',
        borderRadius: 4,
        paddingHorizontal: 14,
    },
    list: {
        marginTop: 20,
    }
})

export default styles;