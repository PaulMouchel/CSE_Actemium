import Title from './Title'
import CssctMission from './CssctMission'
import { useCssct } from '../hooks/useCssct';

type Props = {
    admin: boolean
    textColor: string
}

const Cssct = ({admin, textColor}: Props) => {
  
    const cssct = useCssct()

    return (
        <div className="h-screen pb-10">
            <Title textColor={textColor}>CSSCT</Title>
            <div className="pb-4 h-4/6">
                <p className="text-xl text-center text-gray-50">Les missions de la CSSCT</p>
                <p className="h-0 md:invisible text-center text-gray-50">(Cliquer sur une image pour afficher le détail)</p>
                <div className="flex w-full h-full my-8 items-center justify-center">
                    <div className="flex w-5/6 h-full flex-col md:flex-row">
                    {cssct?.map((mission, index) =>
                        <CssctMission key={index} {...mission} admin={admin} docs={cssct}/>
                    )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cssct;