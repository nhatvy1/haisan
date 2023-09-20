import { BannerTop } from '../../../components';
import Header from '../Pages/Header';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Menu } from '..';

export default function Home() {
    return (
        <div>
            <BannerTop />
            <Header />

            <Menu />

            <div className='w-full'>
                <Outlet />
            </div>

            <ToastContainer
                position="top-right"
                pauseOnFocusLoss
                pauseOnHover
                theme="light"
            />
        </div>
    );
}
