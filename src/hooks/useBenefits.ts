import useFirestore from './useFirestore';
import { Benefit } from '../types/Benefit.type';

export const useBenefits = () => {
    const result = useFirestore<Benefit>("Benefits")
    return result.docs
}