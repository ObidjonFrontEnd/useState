import React, { useState, useEffect } from 'react'

function Home() {
	let [data, dataSet] = useState([])

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(rev => rev.json())
			.then(rev => {
				dataSet(rev)
			})
	}, [])


	return (
		<>
			<table>
			<thead>
				<tr>
					<th className='border-solid border-[1px] border-black '>name</th>
					<th className='border-solid border-[1px] border-black '>username</th>
					<th className='border-solid border-[1px] border-black '>email</th>
					<th className='border-solid border-[1px] border-black '>address</th>
					<th className='border-solid border-[1px] border-black '>phone</th>
					<th className='border-solid border-[1px] border-black '>website</th>
					<th className='border-solid border-[1px] border-black '>company</th>
				</tr>
			</thead>
			{data.map((obj , index)=>{
				return <tbody key={index}>
					<tr>
						<td  className=' border-solid border-[1px] border-black'>
								{obj.name}
							</td>
							<td className='border-solid border-[1px] border-black '>
								{obj.username}
							</td>
							<td className='border-solid border-[1px] border-black '>
								{obj.email}
							</td>
							<td className='border-solid border-[1px] border-black '>
								{obj.address.street}
								{obj.address.suite}
								{obj.address.city}
								{obj.address.zipcode}
							</td>
							<td className='border-solid border-[1px] border-black '>
								{obj.phone}
							</td>
							<td className='border-solid border-[1px] border-black '>
								{obj.website}
							</td>
							<td className='border-solid border-[1px] border-black '>
								{obj.company.name}
								{obj.company.catchPhrase}
								{obj.company.bs}

							</td>
							
					</tr>
					
				</tbody>
			})}		
				
			</table>
		</>
	)
}

export default Home
