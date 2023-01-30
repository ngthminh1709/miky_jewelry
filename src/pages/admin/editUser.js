import React from 'react'
import OverLay from 'src/layouts/managementPage/overlay/OverLay';
import DetailUser from 'src/components/DetailUser/DetailUser'
import Head from "next/head";
export default function addUser() {
    return (
        <OverLay>
            <Head>
                <title>Edit User | Miki</title>
            </Head>
            <div className=" bg-[#fff] rounded-16 m-[30px] pb-[30px] shadow-md">
                <h1 className="text-[30px] font-bold ml-10 pt-[25px]">Thông tin người dùng</h1>
                <DetailUser />
            </div>
        </OverLay>
    )
}
