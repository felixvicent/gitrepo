import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const App = () => {
	return (
		<View style={styles.container} >
			<Text style={styles.text} >Hello Felps</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		fontSize: 18,
	}
});

export default App;
