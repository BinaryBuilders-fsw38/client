import React from "react";

const NavbarAdmin = () => {
    return(
        <>
        <div className="w-full flex justify-center item-center bg-slate-900 h-20">
            <div className="flex w-full item-center bg-orange-400">
                <ul className="flex item-center gap-10">
                    <li><a href="/admin/add-product">Add product</a></li>
                    <li><a href="/admin/dashboard">Add product</a></li>
                    <li><a href="/admin/add-product">Add product</a></li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default NavbarAdmin
