import useFirestore from './useFirestore';
import { Quotation } from '../types/Quotation.type';

export const useQuotation = () => {
    const result = useFirestore<Quotation>("Quotation")
    return result.docs.at(0)
}