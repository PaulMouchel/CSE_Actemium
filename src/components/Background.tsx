import { useState, useEffect, PropsWithChildren, CSSProperties, Dispatch, SetStateAction } from 'react';
import useFirestore from '../hooks/useFirestore';

type Props = {
    image: string | null,
    setImage: Dispatch<SetStateAction<string | null>>,
    className?: CSSProperties
}

const Background = ({ image, setImage, className, children }: PropsWithChildren<Props>) => {
    
    const { docs } = useFirestore('Background');
    const [displayedImage, setDisplayedImage] = useState("")

    useEffect(() => {
        if (image) {
            setDisplayedImage(image)
        } else if (docs[0]) {
            setImage(docs[0].imageUrl)
        } else {
            setDisplayedImage("")
        }
        },[image, docs]);

    return (
        <div className={`w-screen min-h-screen bg-cover bg-center bg-fixed ${className ?? ''}`}
            style={docs && docs[0] && {backgroundImage: `url("${displayedImage}")`}}>
                {children}
        </div>
    );
}

export default Background;