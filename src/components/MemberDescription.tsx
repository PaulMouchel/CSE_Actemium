import { TeamMember } from "../types/TeamMember.type";

type Props = Pick<TeamMember, 'fullName' | 'role' | 'holder' | 'executive' | 'president'> & {
    even: boolean
}

const MemberDescription = ({ fullName, role, holder, executive, president, even }: Props) => {
    return (
        <div className={`flex flex-col justify-center align-center  p-2  ${even ? "text-right" : ""}`}>
                <h3 className="text-gray-700 text-xl md:text-2xl font-bold">{fullName}</h3>
                {!president && <>
                    <p className="text-gray-700 md:text-lg">Collège {!executive && "non "}cadre</p>
                    <p className="text-gray-700 md:text-lg">{ holder ? "Titulaire" : "Suppléant"}</p>
                </>}
                <p className="text-gray-700 md:text-lg">{role}</p>
        </div>
    );
}

export default MemberDescription;