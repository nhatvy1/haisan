import { useLocation } from 'react-router-dom';
import { MainMenu } from '../../../components';

const Menu = () => {
    const location = useLocation();

    if (location.pathname === '/') {
        console.log('hidden');
    }

    return (
        <div className="cate-navbar lg:bg-[#2CBDE5] bg-main2E sticky z-10 py-4 lg:py-0 lg:top-0">
            <div className="container mx-auto max-w-[1200px]">
                <div className="flex justify-start items-center gap-6">
                    <div
                        className={`group lg:flex cursor-pointer relative cate-main  px-3 py-4 justify-between bg-[#0073A0] w-[282px]`}
                    >
                        <div className="flex gap-3">
                            <img
                                src="/images/bar-menu.svg"
                                alt=""
                                height={20}
                                width={20}
                            />
                            <p className="text-base text-white font-semibold not-italic">
                                DANH MỤC
                            </p>
                        </div>
                        <img
                            src="/images/icon-down.svg"
                            alt=""
                            height={24}
                            width={24}
                        />
                        <div
                            className={`absolute top-full w-full max-h-0 group-hover:max-h-[400px] left-0 overflow-hidden duration-500`}
                        >
                            <MainMenu />
                        </div>
                    </div>
                    <div className="flex basis-full gap-6">
                        <div className="basis-full lg:basis-4/6 relative">
                            <input
                                placeholder="Tìm kiếm trên DAOHAISAN"
                                className="w-full px-3 py-2 pr-12  rounded-md outline-0 "
                            />
                            <button className="absolute r-0 h-full r-3 cursor-pointer">
                                <img
                                    src="/images/search.svg"
                                    alt=""
                                    height={24}
                                    width={24}
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;
