import { GamepadButton } from '../GamepadButton';

interface MainContainerProps {
}

export const MainContainer: React.FC<MainContainerProps> = () => {
    return (
        <div>
            <GamepadButton
                ip='192.168.15.24'
                buttonName='psbtn'
            />
        </div>
    );
}