
export function Home() {
  return (
    <>
    <section className='w-full flex items-center justify-center flex-row'>
      <aside>
        <img src="/section-bg.svg" className='w-[1140px] h-[600px] wide:w-[1480px] wide:h-[728px] absolute wide:absolute left-0 top-28 wide:top-40'>
        </img>
        <div className='w-72 h-80 flex items-center justify-between flex-col absolute left-16 bottom-40 wide:bottom-64 text-white '>
          <span className='text-4xl font-medium '>True Venice Tradition</span>
          <div>
          <p className='text-sm mb-6'>Vehicula purus ultricies et aliquam elementum nulla velit quam ipsum. Adipiscing sit volutpat arcu aliquet sem at. Duis dui diam massa amet mauris vel ante sagittis. Ipsum lacus suspendisse velit convallis vel pellentesque tincidunt varius massa.</p>
            <a href="#" className='cursor-pointer hover:underline'>View the collection</a>
          </div>
        </div>
      </aside>
      <aside>
        <span className='font-bold text-xltext-black absolute right-24 top-96 wide:top-[440px] animate-pulse'>The best clothes in the f* world!</span>
      </aside>
      </section>
    </>
  )
}