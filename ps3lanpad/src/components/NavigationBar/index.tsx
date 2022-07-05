import { StyleSheet, TextInput, View } from 'react-native';

interface NavigationBarProps {
}

export const NavigationBar: React.FC<NavigationBarProps> = () => {
    return (
        <View style={styles.mainView}>
            <TextInput 
                style={styles.ipTextInput}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    mainView: {
        backgroundColor: '#2d64e6',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        flex: 0.1,
    },
    ipTextInput: {
        backgroundColor: 'white',
        height: '65%',
        width: '90%',
        borderRadius: 30,
        outlineStyle: 'none',
        fontSize: 32,
        paddingHorizontal: 20,
        textAlign: 'center',
    }
});