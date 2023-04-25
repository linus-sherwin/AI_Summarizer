import { logo } from '../assets';



const Hero = () => {
  return (
    <header className='w-full flex justify.center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz-logo' className='w-28 object-contain'/>
        <button type='button' onClick={()=>window.open('https://github.com/linus-sherwin')} className='black_btn'>GitHub</button>
      </nav>
      <h1 className='head_text'>
        Summarize Articles using <br className='max-md:hidden'/>
        <span className='orange_gradient'>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>Simplify your essays using <span className='orange_gradient'>summarAIze</span>, an open-source article summarizer application that transforms 
      lengthy and complex paragraphs or essays to clear and concise summaries</h2>
    </header>
  )
}

export default Hero