import useFirestore from './useFirestore';
import { News } from '../types/News.type';
import { Benefit } from '../types/Benefit.type';

export const useNewsOrBenefits = (collection: "News" | "Benefits") => {
    const result = useFirestore<News | Benefit>(collection)
    return result.docs
}