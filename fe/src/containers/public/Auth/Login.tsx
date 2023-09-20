import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import logoFB from '/images/facebook.svg';
import logoGG from '/images/google.svg';
import { Login } from '../../../utils/types/login';
import { toast } from 'react-toastify';
import { RootState, useAppDispatch } from '../../../store/store';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../store/slices/authSlice';
const stateLogin: Login = {
    username: '',
    password: '',
};

export default function Login() {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const [formData, setFormData] = useState<Login>(stateLogin);
    const [showPassword, setShowPassword] = useState(false);

    const { isLoggedIn, loginStatus } = useSelector((state: RootState) => state.auth.auth)

    useEffect(()=> {
        isLoggedIn && navigate('/')
    }, [isLoggedIn])

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>)=> {
        event.preventDefault()
        dispatch(login(formData))
        // const loginAsyncThunk = await dispatch(login(formData))
        // if(loginAsyncThunk.type.includes('rejected')) {
        //     toast.error('Không được để trống')
        // }
    }

    const registerGoogle = ()=> {
        toast.info('Chức năng chưa phát triển.')
    }

    return (
        <div className="bg-banner-login p-5 flex items-center border-b border-dotted border-black">
            <div className="container mx-auto">
                <div className="w-login flex flex-col gap-4 shadow-md bg-white rounded-xl p-4">
                    <h1 className="text-3xl text-center">ĐĂNG NHẬP</h1>
                    <p className="text-sm">
                        <span className="text-beach font-semibold">
                            ĐẢO HẢI SẢN
                        </span>{' '}
                        chào bạn, để nhận nhiều ưu đãi hấp dẫn và ĐẢO phục vụ
                        bạn tốt hơn nữa, bạn vui lòng đăng nhập/ đăng ký tài
                        khoản trước khi mua hàng nhé!{' '}
                    </p>
                    <form onSubmit={(event)=> handleSubmit(event)}>
                        <div className="flex flex-col gap-4">
                            <input
                                type="text"
                                placeholder="* Nhập tài khoản"
                                className="w-full border border-gray-400 rounded-md p-2 outline-none"
                                value={formData.username}
                                onChange={(event) =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        username: event.target.value,
                                    }))
                                }
                            />
                            <div className="relative w-full h-[40px]">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="* Nhập mật khẩu"
                                    className="absolute w-full border border-gray-400 rounded-md p-2 outline-none"
                                    value={formData.password}
                                    onChange={(event) =>
                                        setFormData((prev) => ({
                                            ...prev,
                                            password: event.target.value,
                                        }))
                                    }
                                />
                                <span
                                    className="absolute right-2 top-3 cursor-pointer"
                                    onClick={() => handleShowPassword()}
                                >
                                    {showPassword ? (
                                        <AiOutlineEye />
                                    ) : (
                                        <AiOutlineEyeInvisible />
                                    )}
                                </span>
                            </div>
                            <button className="bg-beach p-2 rounded-3xl text-white font-semibold text-sm">
                                {loginStatus === 'pending' ? 'Đang đăng nhập...': 'Đăng nhập'}
                            </button>
                        </div>
                    </form>
                    <span className="text-center text-sm leading-5">
                        Bạn chưa có tài khoản?
                        <span
                            onClick={() => navigate('/register')}
                            className="text-beach cursor-pointer"
                        >
                            {' '}
                            Đăng Ký{' '}
                        </span>
                        tại đây <br />
                        <a href="#" className="text-beach">
                            Quên mật khẩu?
                        </a>
                    </span>
                    <div className="border border-gray-100"></div>
                    <span className="text-sm text-center">
                        Hoặc đăng nhập bằng
                    </span>
                    <p className="flex items-center justify-center">
                        <a href="#"
                            onClick={()=> registerGoogle()}
                        >
                            <img
                                src={logoFB}
                                alt="err"
                                width={50}
                                height={50}
                            />
                        </a>
                        <a href="#"
                            onClick={()=> registerGoogle()}
                        >
                            <img
                                src={logoGG}
                                alt="err"
                                width={50}
                                height={50}
                            />
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
