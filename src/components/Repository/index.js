import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Repository = ({ data, onRefresh }) => (
    <View style={ styles.container }>
        <Text style={ styles.name }>{ data.name }</Text>
        <Text
            style={ styles.description }
            numberOfLines={ 2 }
        >{ data.description }</Text>

        <View style={ styles.stats }>
            <View style={ styles.stat }>
                <Icon name="star" size={ 16 } color="#333"/>
                <Text style={ styles.statCount }>{ data.stars }</Text>
            </View>

            <View style={ styles.stat }>
                <Icon name="code-fork" size={ 16 } color="#333"/>
                <Text style={ styles.statCount }>{ data.forks }</Text>
            </View>
        </View>

        <TouchableOpacity
            style={ styles.refresh }
            onPress={ onRefresh }
        >
            <Icon name="refresh" size={ 16 } color="#7159c1" />
            <Text style={ styles.refreshText }>ATUALIZAR</Text>
        </TouchableOpacity>
    </View>
);

export default Repository;