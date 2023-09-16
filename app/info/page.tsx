import React from 'react'

export default function page() {
  return (
    <main className="flex h-screen items-center justify-between p-2 bg-kyle-white">
      <div className='grid grid-cols-3 md:grid-cols-12 p-4 gap-2 h-screen w-full'>

        {/* Left side Profile Pic */}
        <div className='bg-red-700 lg:h-2/3 mt-36 flex flex-col col-span-6 justify-center'>
          <img alt='Headshot of myself' height={300} width={300} src='@/public/images/cynd.jpg' className=' align-center justify-center'/>
        </div>

        {/* Right side Text contents */}
        {/* Should be 1 column, if bigger than 12 col each occupying 6 col */}
        <div className='bg-green-700 col-span-6'>

        </div>

      </div>
    </main>
  )
}
