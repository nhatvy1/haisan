import { useEffect } from 'react';
import { getCategoryAll } from '../../store/slices/categorySlice';
import { RootState, useAppDispatch } from '../../store/store';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { path } from '../../utils/constant/routes';

const MainMenu = () => {
    const dispatch = useAppDispatch();
    const categoriesList = useSelector(
        (state: RootState) => state.category.categoriesList,
    );

    useEffect(() => {
        dispatch(getCategoryAll());
    }, []);

    return (
        <ul className="min-w-282 bg-gray-100">
            {categoriesList?.length > 0 &&
                categoriesList.map((category) => (
                    <li
                        key={category.id}
                        className="border-b border-mainEF bg-mainF4  py-2 px-3 hover:bg-[#2cbde5]"
                    >
                        <Link className="flex gap-3 items-center" to={`${path.PRODUCT_BY_CATEGORY}/${category.id}`}>
                            <img
                                src={`/images/icon-menu/ca_hoi.svg`}
                                height={24}
                                width={24}
                                alt=""
                            />
                            <span className="text-main20 text-sm font-normal not-italic leading-22 ">
                                {category?.value}
                            </span>
                        </Link>
                    </li>
                ))}
        </ul>
    );
};

export default MainMenu;
