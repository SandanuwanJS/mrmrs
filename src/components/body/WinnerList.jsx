import React from 'react'
import WinSample from '../../assets/winners/win2.jpg'

function WinnerList() {
  return (
	<div className="mt-[90px] p-4 font-redHat">
		<h1 className="text-3xl font-extrabold mb-6 text-center ">Mr.මිසිස් Winners</h1>
		<h2 className="text-[20px] font-semibold mb-1 text-center">Winners From ## / ## / #### To ## / ## / ####</h2>
		<div className='border rounded-md overflow-hidden max-w-[200000px] mb-10'>
			<img src={WinSample} className="" />
		</div>
	</div>
  )
}

export default WinnerList