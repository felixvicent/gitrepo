import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

const Main = () => {
	return (
        <LinearGradient
            style={styles.container}
            colors={[ '#7159c1', '#9b49c1' ]}
            start={{
                x: 0,
                y: 0,
            }}
            end={{
                x: 1,
                y: 1,
            }}
        >
			<Text style={ styles.title }>Repositórios</Text>

            <View style={ styles.form }>
                <TextInput
                    style={ styles.input }
                    autoCapitalize="none"
                    autoCorrect={ false }
                    placeholder="Procurar repositório..."
                    placeholderTextColor="#999"
                />

                <TouchableOpacity
                    style={ styles.submit }
                    onPress={ () => {} }
                >
                    <Icon name="add" size={ 22 } color="#fff" />
                </TouchableOpacity>
            </View>
		</LinearGradient>
	);
}

export default Main;