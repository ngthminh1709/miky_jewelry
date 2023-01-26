import { useState, useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { cartState } from 'src/recoils/cartState'
import FormatPrice from 'src/utils/formatPrice'
import {CaretDown, Delete} from 'src/components/Icons/icons.js';
import { useRouter } from 'next/router';
import Button from 'src/components/Button';
import OrderEmpty from 'src/components/OrderEmpty/OrderEmpty';
import axiosAuth from "../../../../utils/axios";
import Loading from "../../../Loading";
import {dataUser} from "../../../../recoils/dataUser";
export default function ListOrder() {
    const router = useRouter()
    const user = useRecoilValue(dataUser)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [limitProduct, setLimitProduct] = useState(5)
    const [lengthProducts, setLengthProducts] = useState(0)
    const [hidden, setHidden] = useState(true)

    useEffect(() => {
        setLoading(false)
    }, [])
    useEffect(() => {
        axiosAuth({
            method: 'GET',
            url: `/api/cart/history?limit=${limitProduct}&id=${user.id}&status=PENDING`,
        })
            .then(res => {
                setData(res.data.carts)
                setLengthProducts(res.data.totalItems)
            })
            .catch(err => console.error(err))
    }, [limitProduct])
    if (loading) return <Loading/>
    return (
        <>
            {data.length ?
                <div className="flex flex-col px-[30px]">
                    <h1 className="text-[20px] font-bold">Lịch sử</h1>
                    <table className="mt-[20px]">
                        <thead className="">
                        <tr>
                            <th className="py-3 bg-[#ffe1d1]">Mã đơn hàng</th>
                            <th className="py-3 bg-[#ffe1d1]">Sản phẩm</th>
                            <th className="py-3 bg-[#ffe1d1]">Số lượng</th>
                            <th className="py-3 bg-[#ffe1d1]">Kích cỡ</th>
                            <th className="py-3 bg-[#ffe1d1]">Giá</th>
                        </tr>
                        </thead>
                        {data.map((item, index) => {
                            return (
                                <tbody className='text-center'>
                                <tr key={index} className="border-b-[1px] border-b-solid border-b-[#ccc] ">
                                    <td rowSpan={item.products.length} className='py-3 px-6'>{item._id.substring(item._id.length - 1, (item._id.length - 1) - 4)}</td>
                                    <td className='flex py-3 px-6 items-center gap-[10px]'>
                                        <img src={item.products[0].image} className='max-w-[100px]' />
                                        <div className='max-w-[150px]'>
                                            <p>{item.products[0].name}</p>
                                        </div>
                                    </td>
                                    <td className='py-3 px-6'>{item.products[0].quantity}</td>
                                    <td className='py-3 px-6'>{item.products[0].size}</td>
                                    <td className='py-3 px-6'><FormatPrice price={item.products[0].price} /></td>
                                </tr>
                                {item.products.slice(1).map(product => (
                                    <tr className="border-b-[1px] border-b-solid border-b-[#000] " key={product.name} >
                                        <td className='flex py-3 px-6 items-center gap-[10px]'>
                                            <img src={product.image} className='max-w-[100px]' />
                                            <div className='max-w-[150px]'>
                                                <p>{product.name}</p>
                                            </div>
                                        </td>
                                        <td className='py-3 px-6'>{product.quantity}</td>
                                        <td className='py-3 px-6'>{product.size}</td>
                                        <td className='py-3 px-6'><FormatPrice price={product.price} /></td>
                                    </tr>

                                ))}
                                </tbody>
                            )
                        })}
                    </table>
                    {data.length ?
                        hidden ?
                            <p onClick={e => {
                                setLimitProduct(lengthProducts)
                                setHidden(false)
                            }}
                               className='flex gap-[10px] items-center justify-end mt-[20px] cursor-pointer font-bold'>{`Còn ${lengthProducts - limitProduct} sản phẩm (Xem thêm)`}
                                <CaretDown />
                            </p>
                            :
                            <p onClick={e => {
                                setLimitProduct(1)
                                setHidden(true)
                            }}
                               className='flex gap-[10px] items-center justify-end mt-[20px] cursor-pointer font-bold'>{`Ẩn sản phẩm `}
                                <CaretDown />
                            </p>
                        :
                        <div className='flex justify-center mt-12'>Bạn chưa có đơn hàng nào trước đây</div>
                    }
                    {
                    }


                    <Button
                        primary
                        className="mt-[32px] max-w-[300px] mx-[auto] bg-gradient-to-t duration-500 from-[#ffe1d1] to-[#ffd1b9] text-2nd-text"
                        classHover="hover:shadow-shadow-btn"
                    >
                        Mua lại
                    </Button>
                </div >
                :
                <OrderEmpty title='Giỏ hàng bạn đang trống !!' />
            }
        </>

    )
}
