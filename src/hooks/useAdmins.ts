import useFirestore from './useFirestore';
import { Admins } from '../types/Admins.type';

export const useAdmins = () => {
    const result = useFirestore<Admins>("Admins")
    return result.docs
}