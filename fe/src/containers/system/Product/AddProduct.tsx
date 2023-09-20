import axios from '../../../axios/axios.config';
import { Product } from '../../../utils/types/product';
import { useState } from 'react';

const stateRegister: Product = {
    name: '',
    price: '',
    discount: '',
    unit: '',
    description: '',
    images: null,
    quantity: '',
    giftContent: '',
    categoryId: ''
};

const AddProduct = ()=> {
    const [formData, setFormData] = useState<Product>(stateRegister);

    const handleUploadImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target && event.target.files && event.target.files[0]) {
            const files = event.target.files;
            setFormData((prev)=> ({
                ...prev,
                images: files[0]
            }))
        }
    };

    const handleSubmit = async(event: React.FormEvent<HTMLFormElement>)=> {
        event.preventDefault()
        console.log('Check payload: ', formData)
        const data = new FormData()
        data.append('images', formData.images || '')
        const response = await axios.post('api/v1/products/add', data)
        console.log('Check response add product: ', response)
    }
    
    return (
        <div>
            <div className="container mx-auto flex gap-4">
                <div className="w-login flex flex-col gap-4 box-shadow-md bg-white rounded-xl p-4">
                    <h1 className="text-3xl text-center">Thêm sản phầm</h1>
                    <form onSubmit={(event) => handleSubmit(event)} encType='multipart/form-data'>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-4">
                                <input
                                    type="text"
                                    placeholder="* Nhập tên sản phẩm"
                                    className="w-full border border-gray-400 rounded-md p-2 outline-none"
                                    value={formData.name}
                                    onChange={(event) =>
                                        setFormData((prev) => ({
                                            ...prev,
                                            name: event.target.value,
                                        }))
                                    }
                                />
                                <input
                                    type="text"
                                    placeholder="* Nhập giá sản phẩm"
                                    className="w-full border border-gray-400 rounded-md p-2 outline-none"
                                    value={formData.price}
                                    onChange={(event) =>
                                        setFormData((prev) => ({
                                            ...prev,
                                            price: event.target.value,
                                        }))
                                    }
                                />
                                <input
                                    type="text"
                                    placeholder="* Nhập giảm giá"
                                    className="w-full border border-gray-400 rounded-md p-2 outline-none"
                                    value={formData.discount}
                                    onChange={(event) =>
                                        setFormData((prev) => ({
                                            ...prev,
                                            discount: event.target.value,
                                        }))
                                    }
                                />
                            </div>
                            <input
                                type="text"
                                placeholder="* Nhập đơn giá"
                                className="w-full border border-gray-400 rounded-md p-2 outline-none"
                                value={formData.unit}
                                onChange={(event) =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        unit: event.target.value,
                                    }))
                                }
                            />
                            <input
                                type="text"
                                placeholder="* Nhập mô tả"
                                className="w-full border border-gray-400 rounded-md p-2 outline-none"
                                value={formData.description}
                                onChange={(event) =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        description: event.target.value,
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
                            <input
                                type="text"
                                placeholder="* Nhập số lượng"
                                className="w-full border border-gray-400 rounded-md p-2 outline-none"
                                value={formData.quantity}
                                onChange={(event) =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        quantity: event.target.value,
                                    }))
                                }
                            />
                            <input
                                type="text"
                                placeholder="* Nhập quà tặng"
                                className="w-full border border-gray-400 rounded-md p-2 outline-none"
                                value={formData.giftContent}
                                onChange={(event) =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        giftContent: event.target.value,
                                    }))
                                }
                            />
                            <input
                                type="text"
                                placeholder="* Nhập loại"
                                className="w-full border border-gray-400 rounded-md p-2 outline-none"
                                value={formData.categoryId}
                                onChange={(event) =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        categoryId: event.target.value,
                                    }))
                                }
                            />
                            <button className="bg-beach p-2 rounded-3xl text-white font-semibold text-sm">
                                Thêm
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddProduct