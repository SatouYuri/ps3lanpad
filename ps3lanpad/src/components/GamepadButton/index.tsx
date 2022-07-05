import { Button } from 'react-native';

interface GamepadButtonProps {
    ip: string,
    buttonName: string
}

export const GamepadButton: React.FC<GamepadButtonProps> = ({ip, buttonName}: GamepadButtonProps) => {
    return (
        <Button
            title='SEND'
            onPress={() => {
                    if(!!ip && !!buttonName){
                        return fetch(`http://${ip}/pad.ps3?${buttonName}`, {
                                method: 'GET', 
                                mode: 'no-cors',
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            }
                        );
                    }
                }
            }
        />
    );
}