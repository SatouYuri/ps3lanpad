import { StyleSheet, Text, View, Button } from 'react-native';
import { GamepadButton } from '../GamepadButton';
import { NavigationBar } from '../NavigationBar';
import { GamepadUI } from '../GamepadUI';

interface MainContainerProps {
}

export const MainContainer: React.FC<MainContainerProps> = () => {
    return (
        <View style={styles.mainView}>
            <NavigationBar/>
            <GamepadUI ip='192.168.15.24' /*PAROU AQUI 05/07/2022 02:15 - Como vou mandar o IP de dentro de NavigationBar para o GamepadUI???? Provavelmente vou ter que mexer com state... *//>
        </View>
    );
}

const styles = StyleSheet.create({
    mainView: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1,
    },
});
  