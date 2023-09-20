import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { logout } from '../../store/slices/authSlice';
import { logoutUser } from '../../store/slices/userSlice';
import { Link, useNavigate } from 'react-router-dom';
import { path } from '../../utils/constant/routes';

const User = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state: RootState) => state.user);

    const handleLogout = () => {
        console.log();
        dispatch(logout());
        dispatch(logoutUser());
        navigate('/login');
    };

    return (
        <div className="relative text-white cursor-pointer group z-20">
            <span>{`${user.firstName} ${user.lastName}`}</span>
            <div className="hidden absolute top-full right-0 w-[150px] shadow-lg rounded-md border bg-white text-black group-hover:block">
                <ul>
                    <Link to={path.USER}>
                        <li className="p-2 border-b hover:bg-gray-200">
                            Trang cá nhân
                        </li>
                    </Link>
                    <li
                        className="p-2 hover:bg-gray-200"
                        onClick={() => handleLogout()}
                    >
                        <button>Đăng xuất</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default User;
