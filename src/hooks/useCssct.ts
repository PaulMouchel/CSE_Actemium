import useFirestore from './useFirestore';
import { Cssct } from '../types/Cssct.type';

export const useCssct = () => {
    const result = useFirestore<Cssct>("Cssct")
    return result.docs
}