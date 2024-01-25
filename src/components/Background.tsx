import { useState, useEffect, PropsWithChildren, CSSProperties, Dispatch, SetStateAction } from 'react';
import { useBackground } from '../hooks/useBackground';

type Props = {
    image: string | null,
    setImage: Dispatch<SetStateAction<string | null>>,
    className?: CSSProperties
}

const Background = ({ image, setImage, className, children }: PropsWithChildren<Props>) => {
    
    const background = useBackground();
    const [displayedImage, setDisplayedImage] = useState("")

    useEffect(() => {
        if (image) {
            setDisplayedImage(image)
        } else if (background) {
            setImage(background.imageUrl)
        } else {
            setDisplayedImage("")
        }
        },[image, background]);

    return (
        <div className={`w-screen min-h-screen bg-cover bg-center bg-fixed ${className ?? ''}`}
            style={background && {backgroundImage: `url("${displayedImage}")`}}>
                {children}
        </div>
    );
}

export default Background;