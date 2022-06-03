import jsonIcon from '../assets/diskette.png';

import { PersonalData } from "./PersonalData/PersonalData.js";

import '../App.css';

function App() {
  return (
    <div className='w-[100vw] h-[100vh] bg-stone-200'>
      <header>
        <div className='bg-stone-300'>
          <div className='flex flex-row pl-8 pt-1 border-2 border-stone-300 border-b-black'>
            <div className='flex flex-row py-[2px] px-[10px] items-center justify-between gap-2 bg-stone-300 border-2 border-x-black border-t-orange-600 border-b-stone-300 text-center'>
              <img 
                src={jsonIcon}
                className='w-[17px] h-[17px]'
              >
              </img>
              <div>
                AryaanBhimani.json
              </div>
            </div>
          </div>
        </div>
      </header>
      <body>
        <code>
          <ul>
            {PersonalData.map((element, index) => {
              return (
                <li className='RowData'>
                  <div className='bg-stone-300' id='LineNumber'>{index + 1}</div>
                  <div className='bg-stone-200' id='Data'>{element}</div>
                </li>
              )
            })}
          </ul>
        </code>
      </body>
    </div>
  );
}

export default App;
