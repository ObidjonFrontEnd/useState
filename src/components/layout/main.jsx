import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
function Main() {
	let [trueOr , trueOrSet] = useState(true);

	return (
		<section className='w-full h-[100vh] flex relative overflow-x-hidden'>
			<div className={` ${ trueOr ? "max-w-[100px] min-w-[100px] md:max-w-[241px] md:min-w-[241px]" : "md:max-w-[100px] md:min-w-[100px] max-w-[241px] min-w-[241px]" } duration-[1s] flexLeft  h-full bg-[rgb(21,34,89)] `}>
				<div  className='logo flex justify-center flex-col gap-[22px] pb-[27px] border-b-solid border-b-[#BDBDBD] border-b-[0.5px] px-[28px] py-[26px]'>
					
					<div className='font-kumbh font-semibold mx-auto text-center text-[#FFFFFF] text-[14px] leading-[100%] tracking-[0]'>
						<p className={`${trueOr ? "hidden md:block " : "md:hidden block"} `}>Demo test</p>
					</div>
				</div>

				<ul className='nav flex flex-col pl-[28px] pr-[21px] py-[26px] gap-[10px] text-[14px] font-kumbh font-semibold leading-[100%] tracking-[0] text-white mb-[114px] w-full'>
					<Link to='/'>
						<li  className='py-[11px] px-[16px] flex items-center gap-[16px] hover:bg-[#509CDB] rounded-[4px] activeBtn'>
							<i  className='bx bx-home text-[18px]'></i> <span className={`${trueOr ? "md:block hidden" : "md:hidden block"}`}>Users table</span>
						</li>
					</Link>
					<Link to='add'>
						<li className='py-[11px] px-[16px] flex items-center gap-[16px] duration-[0.5s]  hover:bg-[#509CDB] rounded-[4px]'>
							<i className='bx bx-home text-[18px]'></i><span className={`${trueOr ? "md:block hidden" : "md:hidden block"}`}>Users add</span>
						</li>
					</Link>
					
				</ul>

				
			</div>

			<div className='flexRight w-full'>
				<div className=""><i onClick={()=>trueOrSet(!trueOr)} className={`${trueOr ? "rotate-180 md:rotate-0" : "rotate-0 md:rotate-180"}  bx bx-arrow-to-left text-[35px]`}></i></div>
				<div className='rightBottom px-[30px] py-[10px] '>
					<Outlet />
				</div>
			</div>

			
		</section>
	)
}

export default Main
