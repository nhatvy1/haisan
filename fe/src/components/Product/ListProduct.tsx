import { useSelector } from "react-redux"
import { ProductCard } from ".."
import { RootState, useAppDispatch } from "../../store/store"
import { useEffect } from "react"
import { getProductsAll } from "../../store/slices/product.slice"

const ListProduct = ()=> {
    const dispatch = useAppDispatch()

    const productList = useSelector((state: RootState)=> state.product.productsList)

    useEffect(()=> {
        dispatch(getProductsAll())
    }, [])

    return (
        <div className="flex justify-start flex-wrap gap-8">
            {productList?.length > 0 && productList.map(product=> (
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
    )
}

export default ListProduct