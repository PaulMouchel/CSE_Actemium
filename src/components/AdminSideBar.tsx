import AdminButton from './AdminButton'
import { adminMenuData } from '../data/adminMenu';

const AdminSidebar = () => {
    return (
        <nav className="fixed h-screen right-5 top-0 z-40 invisible md:visible">
            <ul className="m-5 mb-5 h-screen flex flex-col justify-center">
                {adminMenuData.map((item, index) =>
                    <AdminButton {...item} key={index} />  
                )}
            </ul>
        </nav>
    );
}

export default AdminSidebar;