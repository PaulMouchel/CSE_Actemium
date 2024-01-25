import Title from './Title'
import Benefit from './Benefit'
import { sortByOrder } from '../functions/sortByOrder';
import { useBenefits } from '../hooks/useBenefits';

type Props = {
    admin: boolean
    textColor: string
}

const Benefits = ({ admin, textColor }: Props) => {

    const benefits = useBenefits()

    return (
        <div className="min-h-screen pb-10">
            <Title textColor={textColor}>Nos avantages</Title>
            <div className="pb-4" >
                <div>
                    { benefits && sortByOrder(benefits).map((benefit, index) =>
                        <Benefit 
                            key={benefit.id} 
                            {...benefit} 
                            admin={admin} 
                            even={index%2 === 0} 
                            first={index===0} 
                            last={index===benefits.length - 1} 
                            textColor={textColor}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Benefits;