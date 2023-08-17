import React from 'react'

import {LiaSortAmountDownSolid} from "react-icons/lia"
import {ImMenu} from "react-icons/im"
import {BsSearch} from "react-icons/bs"

function TopMain() {
  return (
    <div className='mx-[3rem] mt-12 border-b border-[#eee] pb-5'>
        <div className="grid grid-cols-2">
            <div className='flex items-center'>
                <select className='outline-none appearance-none bg-white shadow-sm pl-10 '>
                    <option className='hover:bg-gray-200'>جدیدترین کارها</option>
                    <option className='hover:bg-gray-200'>قدیمی ترین کارها</option>
                    <option className='hover:bg-gray-200'> بیشترین مبلغ</option>
                    <option className='hover:bg-gray-200'> کمترین مبلغ</option>
                </select>
                <LiaSortAmountDownSolid size={15}/>
            </div>
            <div className='flex items-center justify-end'>
                <div className='px-5 flex gap-5'>
                    <input type="text" placeholder='جستجو' className='placeholder:text-[#d3d3d3] text-right outline-none text-md' />
                    <BsSearch size={20} className='text-[#d3d3d3]'/>
                </div>
                <div className='h-full w-[3px] rounded-full mr-[150px] bg-[#6E6B7B]'></div>
                <div className='flex items-center gap-1'>
                    <p className='font-medium text-[20px]'>سفارشات کار</p>
                    <ImMenu size={30}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopMain