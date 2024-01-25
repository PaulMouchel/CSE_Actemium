import Title from './Title'
import TeamMember from './TeamMember'
import { sortByOrder } from '../functions/sortByOrder';
import { updateOrders } from '../functions/updateOrders';
import { useTeam } from '../hooks/useTeam';

type Props = {
    textColor: string
    admin: boolean
}

const Team = ({ textColor, admin }: Props) => {

    const team = useTeam()

    const updateTeamOrders = (exeptionId: string) => {
        updateOrders(team, "Team", exeptionId)
    }

    return (
        <>
            <Title textColor={textColor}>L'équipe du CSE</Title>
            <div className="flex flex-col pt-12 pb-32">
                {team && sortByOrder(team).map((member, index) =>
                    <TeamMember 
                        key={index} 
                        {...member} 
                        first={index === 0} 
                        last={index === team.length - 1} 
                        even={index%2 === 0} 
                        admin={admin} 
                        docs={team} 
                        updateTeamOrders={updateTeamOrders}
                    />
                )}
            </div>
        </>
    );
}

export default Team;