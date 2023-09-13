import { sf } from '@/app/fonts'

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-between p-24 bg-kyle-white">
      <div className="grid grid-cols-12 gap-2 h-auto w-full ">

        <div className='w-full col-span-3 col-start-2 '>
          <h1 className={`${sf.className} font-bold text-8xl px-5 mb-4 text-left text-kyle-dark`}>
            kyle <br className="mb-4" /> huynh,
          </h1>
          <h1 className={`${sf.className} font-light text-8xl px-5 text-left text-kyle-dark`}>
            designer
          </h1>
          <div className="h-[16rem]" />
        </div>

        <div className='w-full justify-center col-span-3 col-start-8 mt-[18rem] '>

          <h1 className={`${sf.className} font-medium text-4xl text-left text-kyle-dark`}>
            {'{'} good morning. {'}'}
          </h1>

          <div className='w-12 h-[7px] col-span-2 col-start-6 my-4 bg-kyle-dark' />

          <p className={`${sf.className} font-light text-3xl text-left text-kyle-dark`}>
            i’m kyle, a multi-disciplinary designer and software engineer based in seattle, wa
          </p>

        </div>

      </div>
    </main>
  )
}
