const HomeHero = () => {
  return (
    <section className='py-[24.5] max-w-[1440px] mx-auto relative'>
        <div className=' h-full flex flex-col lg:flex-row justify-between lg:m-5 xl:m-14  '>
            <div className='flex flex-col justify-center lg:ml-5 p-5'>
                <div className='space-y-4 lg:space-y-5'>
                    <h1 className=' font-bold whitespace-nowrap'>
                        Welcome 
                        to <br className='hidden xl:block' /> 
                        <br className='block xl:hidden' />
                        <span className='text-orange-700'>
                            Diadem foods
                        </span>
                    </h1>

                    <p className='font-normal text-xl md:text-3xl'>“It’s not just food, it’s an experience” </p>

                    <a href="#menu">
                        <button className='bg-[#CB3530] bg-gradient-to-br via-[#c46002] hover:via-black/80 from-[#CB3530] to-[#CB3530]  px-3 md:px-5 py-1 md:py-2 rounded-[10px] text-white text-2xl'>Shop now</button>
                    </a>
                </div>
                
            </div>

            <div className='hidden lg:block xl:absolute -top-36 lg:right-0 z-0'>
                <img className='h-full w-full object-cover' src="/images/hero-img.png" alt="" />
            </div>
        </div>
    </section>
  )
}

export default HomeHero