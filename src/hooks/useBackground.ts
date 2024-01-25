import useFirestore from './useFirestore';
import { Background } from '../types/Background.type';

export const useBackground = () => {
    const result = useFirestore<Background>("Background")
    return result.docs.at(0)
}