import { CSSProperties, PropsWithChildren } from 'react';
import defaultBg from '../images/defaultBg.jpg'

type Props = {
    className?: CSSProperties
}

const DefaultBackground = ({ className, children }: PropsWithChildren<Props>) => {
    
    return (
        <div className={`w-screen min-h-screen bg-cover bg-center bg-fixed ${className ?? ''}`}
            style={{backgroundImage: `url(${defaultBg})`}}>
                {children}
        </div>
    );
}

export default DefaultBackground;