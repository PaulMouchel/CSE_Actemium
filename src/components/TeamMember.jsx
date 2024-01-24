import VerticalLine from './VerticalLine'
import MemberDescription from './MemberDescription'
import deleteDocument from '../functions/deleteDocument';
import DeleteButton from './DeleteButton'
import Img from "react-cool-img";
import loadingImage from "../images/loading.gif";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { AnimatePresence } from 'framer-motion';
import { move } from '../functions/move.js';
import FadeButton from './FadeButton';
import { sendToastSuccess } from "../functions/sendToast";

const TeamMember = ({imageUrl, fullName, role, holder, executive, president, first, last, even, admin, id, order, docs, updateTeamOrders}) => {

    const handleDelete = () => {
        deleteDocument({docs, id, collection:'Team', next:updateTeamOrders, nextParams:id})
        sendToastSuccess("Membre supprimé")
    }

    const goDown = () => {
        if (last) return
        move(1, "Team", order, id)
    }

      const goUp = () => {
        if(first) return
        move(-1, "Team", order, id)
    }

    return (
        <>
            <div className={`w-full flex flex-row${!even && "-reverse"} justify-center md:max-h-56`}>
                <div className={`md:w-1/4 flex justify-${even ? "end" : "start"} flex-grow md:flex-grow-0`}>
                    <MemberDescription even={even} fullName={fullName} role={role} holder={holder} executive={executive} president={president} />
                </div>
                <div className="w-40 md:w-56 flex items-center justify-center mx-4">
                    <div className="h-40 md:h-56 w-40 md:w-56 bg-cover bg-center rounded-full border-4 md:border-8 relative">
                        <Img 
                            placeholder={loadingImage}
                            src={imageUrl} 
                            alt={fullName}
                            className={`absolute h-full w-full object-cover rounded-full`}/>
                        <DeleteButton admin={admin} onClick={handleDelete} info={fullName}/>
                        <AnimatePresence>
                            {admin &&
                                <>
                                    <div className="w-full h-full flex justify-center">
                                        {!first &&
                                            <FadeButton
                                            onClick={goUp}
                                            className="bg-primary w-8 h-8 rounded-full absolute -top-6 flex items-center justify-center focus:outline-none">
                                                <FaArrowUp className="text-white text-lg"/>
                                            </FadeButton>
                                        }
                                        {!last &&
                                            <FadeButton
                                            onClick={goDown}
                                            className="bg-primary w-8 h-8 rounded-full absolute -bottom-6 flex items-center justify-center focus:outline-none">
                                                <FaArrowDown className="text-white text-lg"/>
                                            </FadeButton>
                                        }
                                    </div>
                                </>
                            }
                        </AnimatePresence>
                    </div>
                </div>
                <div className="md:w-1/4"></div>
            </div>
            { !last && <VerticalLine/> }
        </>
    );
}

export default TeamMember;