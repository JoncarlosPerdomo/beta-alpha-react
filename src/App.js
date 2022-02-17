import './App.css';
import logoName from './images/logoName.png';
function App() {
  return (
    <div>
      <nav className='fixed w-full py-10 px-0 bg-yellow-500'>
        <div className='flex center justify-between mx-20'>
          <div className='mr-250'>
            <a className='text-white' href='#'>
              <img src={logoName} alt='logo' height={50} width={200} />
            </a>
          </div>
          <ul className='text-white '>
            <li className='list-none inline-block'>
              <a href='#home' className='block ml-[25px]'>
                Home
              </a>
            </li>
            <li className='list-none inline-block'>
              <a href='#about' className='block ml-[25px]'>
                About
              </a>
            </li>
            <li className='list-none inline-block'>
              <a href='#events' className='block ml-[25px]'>
                Events
              </a>
            </li>
            <li className='list-none inline-block'>
              <a href='#abex' className='block ml-[25px]'>
                Abex
              </a>
            </li>
            <li className='list-none inline-block'>
              <a href='#ec' className='block ml-[25px]'>
                Exec
              </a>
            </li>
            <li className='list-none inline-block'>
              <a href='#alumni' className='block ml-[25px]'>
                Alumni
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <section>
        <div>
          <div></div>
        </div>
      </section>
    </div>
  );
}

export default App;
