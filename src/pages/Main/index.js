import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Keyboard } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';
import getRealm from '../../services/realm';

import styles from './styles';

import Repository from '../../components/Repository';

const Main = () => {
    const [ input, setInput ] = useState('');
    const [ error, setError ] = useState(false);
    const [repositories, setRepositories ] = useState([]);

    useEffect(() => {
        async function loadRepository() {
            const realm = await getRealm();

            const data = realm.objects('Repository').sorted('stars', true);

            setRepositories(data);
        }

        loadRepository();
    }, []);

    async function saveRepository(repository) {
        const data = {
            id: repository.id,
            name: repository.name,
            fullName: repository.full_name,
            description: repository.description,
            stars: repository.stargazers_count,
            forks: repository.forks_count,
        };

        const realm = await getRealm();

        realm.write(() => {
            realm.create('Repository', data, 'modified');
        });

        return data;
    };

    async function handleAddRepository() {
        try {
            const response = await api.get(`/repos/${input}`);

            await saveRepository(response.data);

            setInput('');
            setError(false);
            Keyboard.dismiss();
        }
        catch(err){
            setError(true);
        }
    }

    async function handleRefreshRepository(repository) {
        const response = await api.get(`/repos/${repository.fullName}`);

        const data = await saveRepository(response.data);

        setRepositories(repositories.map(repo => (repo.id === data.id ? data : repo)));
    }

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
                    value={ input }
                    error={ error }
                    onChangeText={ setInput }
                    style={[ styles.input, { borderColor: error ? '#ff7272' : '#fff' } ]}
                    autoCapitalize="none"
                    autoCorrect={ false }
                    placeholder="Procurar repositório..."
                    placeholderTextColor="#999"
                />

                <TouchableOpacity
                    style={ styles.submit }
                    onPress={ handleAddRepository }
                >
                    <Icon name="add" size={ 22 } color="#fff" />
                </TouchableOpacity>
            </View>

            <FlatList
                style={ styles.list }
                contentContainerStyle={{ paddingHorizontal: 20 }}
                showsVerticalScrollIndicator={ false }
                keyboardShouldPersistTaps="handled"
                data={repositories}
                keyExtractor={ item => String(item.id) }
                renderItem={({ item }) => (
                    <Repository data={ item } onRefresh={ () => handleRefreshRepository(item) } />
                )}
            />
		</LinearGradient>
	);
}

export default Main;