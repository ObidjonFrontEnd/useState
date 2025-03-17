import React, { useState } from 'react'

function Add() {

	let [data1 , dataSet1] = useState([])
	let [data2 , dataSet2] = useState([])
	let [data3 , dataSet3] = useState([])




	return (
		<section className='w-full   font-kumbh leading-[100%] tracking-[0%] py-[30px] px-[15px]'>
			<div className='title  flex flex-col gap-[30px]'>
				<p className='text-center text-gray-600 font-semibold text-[36px] '>
					{data1}
				</p>
				<p className='text-center text-gray-600 font-semibold text-[36px]'>
					{data2}
				</p>
				<p className='text-center text-gray-600 font-semibold text-[36px]'>
					{data3}
				</p>
			</div>
			<form id='form'
				action=''
				className='max-w-[512px] px-[70px] md:px-[132px] py-[72px] bg-white mx-auto'
			>
				<p className='mx-auto max-w-[238px] text-center text-[16px] font-medium text-[#667085] mb-[34px] leading-[25px]'>
				
				</p>

				<label htmlFor=''>
					<input id='email'
						type='text'
						placeholder='Enter your Email'
						className='border-solid border-[0.5px] border-[#A7A7A7] rounded-[4px] px-[13px] py-[13px] outline-none mb-[14px] w-full' onChange={(value)=> dataSet1('Email: '+value.target.value)}
					/>
				</label>

				<label htmlFor=''>
					<input id='fullName'
						type='text'
						placeholder='Enter your Fullname'
						className='border-solid border-[0.5px] border-[#A7A7A7] rounded-[4px] px-[13px] py-[13px] outline-none mb-[14px] w-full' onChange={(value)=> dataSet2('FullName: '+value.target.value)}
					/>
				</label>

				<label htmlFor=''>
					<input id='age'
						type='text'
						placeholder='Enter your Age'
						className='border-solid border-[0.5px] border-[#A7A7A7] rounded-[4px] px-[13px] py-[13px] outline-none w-full'  onChange={(value)=> dataSet3('Age: '+value.target.value)}
					/>
				</label>

			
				
			</form>
		</section>
	)
}

export default Add
