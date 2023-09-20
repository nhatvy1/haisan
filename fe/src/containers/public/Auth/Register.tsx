import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import logoFB from '/images/facebook.svg';
import logoGG from '/images/google.svg';
import { Register } from '../../../utils/types/register';
import { useNavigate } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../../store/store';
import { useSelector } from 'react-redux';
import { register } from '../../../store/slices/authSlice';

const stateRegister: Register = {
    firstName: '',
    lastName: '',
    phone: '',
    username: '',
    password: '',
    avatar: null,
};

export default function Register() {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const [formData, setFormData] = useState<Register>(stateRegister);
    const [showPassword, setShowPassword] = useState(false);
    const [previewImage, setPreviewImage] = useState('');

    const { isLoggedIn } = useSelector((state: RootState)=> state.auth.auth)

    const handleUploadImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setPreviewImage(URL.createObjectURL(event.target.files[0]));
            const files = event.target.files;
            setFormData((prev)=> ({
                ...prev,
                avatar: files[0]
            }))
        }
    };

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    useEffect(()=> {
        isLoggedIn && navigate('/')
    }, [isLoggedIn])

    useEffect(() => {
        // Cleanup
        return () => {
            previewImage && URL.revokeObjectURL(previewImage);
        };
    }, [previewImage]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Check data: ', formData);
        console.log('Blob: ', previewImage);
        dispatch(register(formData))
    };

    return (
        <div
            className="bg-banner-login w-full
            p-5 flex items-center border-b border-dotted border-black"
        >
            <div className="container mx-auto flex gap-4">
                <div className="w-login flex flex-col gap-4 box-shadow-md bg-white rounded-xl p-4">
                    <h1 className="text-3xl text-center">ĐĂNG KÝ</h1>
                    <form onSubmit={(event) => handleSubmit(event)}>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-4">
                                <input
                                    type="text"
                                    placeholder="* Nhập họ"
                                    className="w-full border border-gray-400 rounded-md p-2 outline-none"
                                    value={formData.firstName}
                                    onChange={(event) =>
                                        setFormData((prev) => ({
                                            ...prev,
                                            firstName: event.target.value,
                                        }))
                                    }
                                />
                                <input
                                    type="text"
                                    placeholder="* Nhập tên"
                                    className="w-full border border-gray-400 rounded-md p-2 outline-none"
                                    value={formData.lastName}
                                    onChange={(event) =>
                                        setFormData((prev) => ({
                                            ...prev,
                                            lastName: event.target.value,
                                        }))
                                    }
                                />
                                <input
                                    type="text"
                                    placeholder="* Nhập số điện thoại"
                                    className="w-full border border-gray-400 rounded-md p-2 outline-none"
                                    value={formData.phone}
                                    onChange={(event) =>
                                        setFormData((prev) => ({
                                            ...prev,
                                            phone: event.target.value,
                                        }))
                                    }
                                />
                                <input
                                    className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                                    type="file"
                                    onChange={(event) =>
                                        handleUploadImage(event)
                                    }
                                />
                            </div>
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
                                Đăng ký
                            </button>
                        </div>
                    </form>
                    <span className="text-center text-sm leading-5">
                        Bạn đã có tài khoản?
                        <span
                            onClick={() => navigate('/login')}
                            className="text-beach cursor-pointer"
                        >
                            {' '}
                            Đăng nhập{' '}
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
                        <a href="#">
                            <img
                                src={logoFB}
                                alt="err"
                                width={50}
                                height={50}
                            />
                        </a>
                        <a href="#">
                            <img
                                src={logoGG}
                                alt="err"
                                width={50}
                                height={50}
                            />
                        </a>
                    </p>
                </div>
                <div className="w-[250px] h-[250px] flex items-center justify-center bg-white border border-dashed border-gray-500">
                    {previewImage ? (
                        <img
                            src={previewImage}
                            alt="loi"
                            className="object-cover w-[200px] h-[200px]"
                        />
                    ) : (
                        <span>Preview image</span>
                    )}
                </div>
            </div>
        </div>
    );
}
