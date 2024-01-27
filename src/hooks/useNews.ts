import useFirestore from './useFirestore';
import { News } from '../types/News.type';

export const useNews = () => {
    const result = useFirestore<News>("News")
    return result.docs
}