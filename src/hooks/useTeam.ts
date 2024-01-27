import useFirestore from './useFirestore';
import { TeamMember } from '../types/TeamMember.type';

export const useTeam = () => {
    const result = useFirestore<TeamMember>("Team")
    return result.docs
}