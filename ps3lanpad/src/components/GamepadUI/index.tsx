import { StyleSheet, View } from 'react-native';
import { GamepadButton } from '../GamepadButton';

interface GamepadUIProps {
    ip: string
}

export const GamepadUI: React.FC<GamepadUIProps> = ({ip}: GamepadUIProps) => {
    return (
        <View style={styles.mainView}>
            <GamepadButton
                ip={ip}
                buttonName='psbtn'
            />
        </View>
    );
}

const styles = StyleSheet.create({
    mainView: {
        backgroundColor: '#121212',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        flex: 1
    },
});