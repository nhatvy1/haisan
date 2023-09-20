import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { RootState, useAppDispatch } from '../../../store/store';
import { ProductCard } from '../../../components';
import { getProductByCategory } from '../../../store/slices/product.slice';
import ReactPaginate from 'react-paginate';
import { useParams } from 'react-router-dom';

const ProductCategory = () => {
    const dispatch = useAppDispatch();
    const { id } = useParams()

    console.log('Check params id: ', id)

    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(2);

    const productsList = useSelector((state: RootState) => state.product.productsList);
    const totalPage = useSelector((state: RootState) => state.product.totalPage);
    const totalRows = useSelector((state: RootState) => state.product.totalRows);

    useEffect(() => {
        dispatch(
            getProductByCategory({
                categoryId: +id! || 1,
                page: currentPage,
                limit: limit,
            }),
        );
    }, [currentPage, limit, id]);

    const handlePageClick = ({ selected }: { selected: number }) => {
        const page = selected;
        setCurrentPage(page + 1);
    };

    return (
        <div className="container mx-auto mt-10">
            <div className="w-full h-[400px] border-4"></div>
            <div className="flex justify-start flex-wrap gap-8 mt-10 mb-10">
                {productsList?.length > 0 &&
                    productsList.map((product) => (
                        <ProductCard
                            id={product.id}
                            name={product.name}
                            images={product.images!}
                            price={+product.price!}
                            discount={+product.discount!}
                            unit={product.unit}
                            key={product.id}
                        />
                    ))}
            </div>
            <div className="py-5">
                <ReactPaginate
                    previousLabel="Previous"
                    nextLabel="Next"
                    pageClassName="page-item" // nút
                    pageLinkClassName="page-link flex items-center justify-center h-[35px] w-[35px]"
                    previousClassName="page-item"
                    previousLinkClassName="page-link flex justify-center border p-2 bg-[#2cbde5] text-white font-bold rounded-lg w-[80px]"
                    nextClassName="page-item"
                    nextLinkClassName="page-link flex justify-center border p-2 bg-[#2cbde5] text-white font-bold rounded-lg w-[80px]"
                    breakLabel="..."
                    pageCount={totalPage}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName="pagination"
                    activeLinkClassName="active border-[#2cbde5] border-2 rounded-full"
                    disabledLinkClassName="pointer-events-none bg-gray-400"
                    disabledClassName="p-2 text-white"
                    forcePage={0}
                    className="flex items-center gap-4"
                />
            </div>
        </div>
    );
};

export default ProductCategory;
