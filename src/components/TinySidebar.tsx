import SideButton from './SideButton'
import { navbarData } from '../data/navbar';

type Props = {
    visibleSection?: string
}

const TinySidebar = ({visibleSection}: Props) => {
    return (
        <nav className="hidden md:block fixed h-screen left-5 top-0 z-50">
            <ul className="mx-5 mb-5 h-screen flex flex-col justify-center">
                {navbarData.map((item, index) =>
                    <SideButton {...item} key={index} focus={visibleSection === item.href}/>
                )}
            </ul>
        </nav>
    );
}

export default TinySidebar;