import React,{ useState} from 'react'
//import CardCol from '../Components/CardCol'
// import arena from '../Assets/arena.jpg'
import box from '../Assets/box.png'
import { BsFillPenFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom'


// import { Link } from 'react-router-dom'
import data from '../Data/questions.json'
import CountDown from '../Components/CountDown'
import GameEnd from '../Components/GameEnd';
import win from '../Assets/win.png'


const Game = () => {
  const [step, setStep] = useState(0);
  const [xOption, setXOption] = useState('');
  const [yOption, setYOption] = useState('');
  const [ques, setQues] = useState('');
  const [hideOption, setHideOption] = useState(false);
  var [showQue, setShowque] = useState(false);
  const [showAnswers, setShowAnswers] = useState([]);
  var [balance, setBalance] = useState(50);
  const [realAns, setRealAns] = useState('');
  const [check, setCheck] = useState(false);
  const [sec,setSec] = useState(60)
  const [stage2, setStage2] = useState(false);
  const [stage3, setStage3] = useState(false);
  const [count, setCount] = useState(0);

  const [end, setEnd] = useState(false);
  const [vic, setVic] = useState(false);
  const [loss, setLoss] = useState(false);


  const [drop1, setDrop1] = useState('');
  const [drop2, setDrop2] = useState('');
  const [drop3, setDrop3] = useState('');
  const [drop4, setDrop4] = useState('');

  const navigate = useNavigate();



  const [money, setMoney] = useState({
    money1: '',
    money2: '',
    money3: '',
    money4: '',
  });


  const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  let arr = [1,2,3,4,5,6,7,8,9,10,11];
  let arr2 = [0,1,2,3,4];

  const onClose = ()=>{
    setShowAnswers([])
    setCheck(false)
    money.money1 = '';
    money.money2 = '';
    money.money3=  '';
    money.money4 = '';
    setShowque(false)
    setHideOption(true)
    setCount(0)
    setStep(0);
    setBalance(50);
    navigate("/profile")

  }


  const play = () => {
    if(step===0){
      shuffleArray(arr);
      shuffleArray(arr2);
      console.log(arr2);
      console.log(arr);
      setStep(step+1);

      let k = arr[0];

      setXOption((data.FourAnswers1.find(element => element.id === k)).name)
      setYOption((data.FourAnswers2.find(element => element.id === k)).name)
    
    }else if(step===7){
      setEnd(true);
      balance===0? setLoss(true): setVic(true)
      alert('Game over! Congratulations!!')
     
    }else if(balance===0){
      setEnd(true);
      setLoss(true);
      alert('Game over! Congratulations!!')
     
    
    }else{
      setStep(step+1);
      console.log(step)
      setCheck(false)
      setShowque(false)
      setSec(60)
      console.log(sec)
      setHideOption(!hideOption)
      setShowAnswers([])
      var x = arr[step]

      if(step>=0 && step<3){
        setXOption((data.FourAnswers1.find(element => element.id === x)).name)
        setYOption((data.FourAnswers2.find(element => element.id === x)).name)
        }
      else if(step>2 && step<5){
        setXOption((data.ThreeAnswers1.find(element => element.id === x)).name)
        setYOption((data.ThreeAnswers2.find(element => element.id === x)).name)
        setStage2(true);
        }
      else if(step>4 && step<8){
        setXOption((data.TwoAnswers1.find(element => element.id === x)).name)
        setYOption((data.TwoAnswers2.find(element => element.id === x)).name)
        setStage3(true);

        }

    }
   
  }
                                                  // 👉️👉️👉️👉️👉️👉️👉️👉️👉️👉️ Turning point👉️👉️👉️👉️👉️👉️👉️👉️👉️👉️👉️👉️👉️

  const getQue = (array,option) => {
    setCount(count=> count+1)
    const index = array.findIndex(object => {
      return object.name === option;
    });
    console.log(index);
    console.log(count);
    var x =0;
    
    count>=5?  x = arr2[count-5]:
     x = arr2[count]
    console.log(x);

    setQues(array[index].cato[x].question);
    setShowAnswers(array[index].cato[x].answers);
    setRealAns(array[index].cato[x].TAnswer);
}

                                                  // 👉️👉️👉️👉️👉️👉️👉️👉️👉️👉️ Turning point👉️👉️👉️👉️👉️👉️👉️👉️👉️👉️👉️👉️👉️

  const optionClick = (side) => {
    
    setHideOption(!hideOption);
    setSec(60)
    console.log(sec)
    setShowque(true);
  
    money.money1 = '';
    money.money2 = '';
    money.money3 = '';
    money.money4 = '';
  
    if(step>=0 && step<4 && side==='left'){
      getQue(data.FourAnswers1,xOption);

      }
      else if(step>=0 && step<4 && side==='right'){
        getQue(data.FourAnswers2,yOption);
    
      }
      else if(step>3 && step<6 && side==='left'){
        getQue(data.ThreeAnswers1,xOption);
    
      }
      else if(step>3 && step<6 && side==='right'){
        getQue(data.ThreeAnswers2,yOption);
     
      }
     else if(step>5 && step<8 && side==='left'){
        getQue(data.TwoAnswers1,xOption);
    
      }
      else if(step>5 && step<8 && side==='right'){
        getQue(data.TwoAnswers2,yOption);

      }
  }

  const lightDrop = ()=>{
    if(showAnswers[0]===realAns){
      setDrop1('transparent')
      setDrop2('red')
      setDrop3('red')
      setDrop4('red')
      money.money2 = '';
      money.money3= '';
      money.money4 = '';
      setBalance(money.money1)

    }else if(showAnswers[1]===realAns){
      setDrop1('red')
      setDrop2('transparent')
      setDrop3('red')
      setDrop4('red')
      money.money1 = '';
      money.money3= '';
      money.money4 = '';
      setBalance(money.money2)


    }else if(showAnswers[2]===realAns){
      setDrop1('red')
      setDrop2('red')
      setDrop3('transparent')

      setDrop4('red')
      money.money4 = '';
      money.money2 = '';
      money.money1 = '';
      setBalance(money.money3)


    }else{
      setDrop1('red')
      setDrop2('red')
      setDrop3('red')
      setDrop4('transparent')

      money.money1 = '';
      money.money3= '';
      money.money2 = '';
      setBalance(money.money4)

    }
    console.log(realAns)
  }

 

  const checkAnswer = () => {
    var total=0;
    var x,y,w,z;
    var f=0
    var arrMoney = [money.money1, money.money2, money.money3, money.money4];
    var ab = [x,y,w,z];

    // console.log("111111"+(money.money1))
    // console.log("222222"+(money.money2))
    // console.log("333333"+(money.money3))
    // console.log("4444444"+(money.money4))

   
    for(let i=0; i<arrMoney.length; i++){
      if (arrMoney[i] !== '') {
        f = f +1;
        ab[i] = Number(arrMoney[i]);
        total= total + ab[i];
    }
  }

  // console.log("abababab"+ab);
  // console.log("total"+total);
  // console.log("ffffffff"+f);


   if(step>0 && step<4){
    if(f===0){
      alert('Keep your remaining money on drops!')
    } else if(f===4){
      alert('Keep one drop without money. A rule!!')
    } else if(total!==Number(balance)){
      alert('Check your remaining money balance!'+ balance)
    }else{
      lightDrop();
      setCheck(!check); 
 
    }
 
    } else if(step>3 && step<6){
      if(f===0){
        alert('Keep your remaining money on drops!')
      }
      else if(f===3){
        alert('Keep one drop without money. A rule!!')
      } else if(total!==Number(balance)){
        alert('Check your remaining money balance!')
  
      }else{
        lightDrop(); 
        setCheck(!check); 

      }

  }else if(step>5 && step<8){
    if(f===0){
      alert('Keep your remaining money on drops!')
    }
    else if(f===2){
      alert('Keep one drop without money. A rule!!')
    } else if(total!==Number(balance)){
      alert('Check your remaining money balance!')

    }else{
      lightDrop();
      setCheck(!check); 
  
    }
  }
  


   



  
}


  
  
  return (
    <div className='w-screen flex justify-start items-center flex-col bg-gray-900'>
        {/* <img src={arena} alt='' className='relative w-full object-cover bg-no-repeat bg-center h-auto brightness-50 '/> */}

        {end && vic && <GameEnd bal={balance} onClick={onClose} matter="Congralutions" icon={win}/>}
        {end && loss && <GameEnd bal={balance} onClick={onClose} matter="Try Again" icon={win}/>}

        
        <div className={`w-11/12 md:w-3/4 gap-2 ${hideOption ? 'hidden ':'flex-col md:flex md:flex-row justify-center items-center'}`}>
         <div className='w-full flex-col md:flex md:flex-row justify-center items-center'>
            <div class="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg transform border-black transition-all duration-300 scale-100 hover:scale-95 mt-8 bg-white">
              <div class="px-6 py-2 text-center">
                <button onClick={() => optionClick('left')} className='text-sm  text-zinc-700 my-4 py-3'>{xOption}</button>
              </div>
            
            </div>

            <div class="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg transform  border-black transition-all duration-300 scale-100 hover:scale-95 mt-8 bg-slate-300">
              <div class="px-6 py-2 text-center">
                <button onClick={() => optionClick('right')} className='text-sm  text-zinc-700 my-4 py-3'>{yOption}</button>
              </div>
            
            </div>
         </div>
        </div>

        

        <div className={`w-5/6 ${showQue ? 'flex ':'hidden'}`}>
         
         <div class=" w-full md:w-11/12 lg:w-full sm:w-11/12 rounded-2xl overflow-hidden shadow-lg transform border-black transition-all duration-300 scale-100 hover:scale-95 mt-8 bg-white">
           <div class="px-6 py-2 text-center">
             <div className='text-lg  text-zinc-700 my-4 py-3'>{ques}</div>
           </div>
          
         </div>     
       </div>



        <div className='w-3/4 sm:w-1/2 flex justify-center items-center rounded-2xl overflow-hidden shadow-lg transform border-black transition-all duration-300 scale-100 hover:scale-95 mt-8 bg-white'>
            <div class="w-full flex justify-center items-center">
              <div class="px-6 text-center py-3">             
                  <p className='text-sm text-black md:text-xl'>Rs. {balance} ,00, 000</p>
              </div>
            </div>
        </div>

        <div class={`my-5 ${showQue ? 'flex ':'hidden'}`}>
          <button onClick={checkAnswer} class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-lg lg:font-bold  text-white px-4 sm:px-10 border border-indigo-700 py-2 sm:py-4 text-sm rounded-xl">
          <svg aria-hidden="true" role="status" class="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
          </svg>Check Answer</button>
        </div> 

        
        <div class="flex my-5 justify-center items-center gap-2">
              
          <button class="flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-indigo-700 py-2 sm:py-4 text-sm v cursor-not-allowed "disabled>
          <svg aria-hidden="true" class="mr-2 -ml-1 w-5 h-5 md:my-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
              <CountDown seconds={sec} stop={check} start={showQue}/></button>
                    
          <button onClick={play} class="flex py-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white bg-white transition duration-150 ease-in-out hover:border-white lg:text-xl lg:font-bold  hover:text-indigo-600 rounded border border-indigo-700 text-indigo-700 px-4 sm:px-10 sm:py-4 text-sm">
          {step===0? 'Start ':'Next'}     
            {step===0? <svg aria-hidden="true" class="ml-2 -mr-1 w-5 h-5 md:my-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>:<span class="inline-flex md:my-auto justify-center items-center ml-2 w-6 h-6 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">{step}</span>}
          </button>
             
        </div>   



        <div className={`my-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 ${stage2 && 'md:max-w-5xl md:mx-auto sm:grid-cols-2 lg:grid-cols-3 gap-6'}  ${stage3 && 'md:max-w-3xl md:mx-auto sm:grid-cols-1 md:grid-cols-2 gap-16 items-center'}`}>
        
          <div class={`max-w-sm min-w-[250px] rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 scale-100 hover:scale-95 w-1/2 m-4 ${check && drop1==='red' ? 'bg-red-700 ':' bg-transparent'}`}>
            <img class="w-full pb-3 h-[180px] object-cover" src={box} alt="Sunset in the mountains"/>
            <div class="px-6 py-3 bg-white" >
              <div class="text-base text-white mb-2 absolute top-2 left-2 rounded-xl px-4 py-1 w-[70px] text-center bg-orange-600">{1}</div>

                <p class="text-lg text-bold text-black">{showAnswers[0]}
                </p>
                <hr class="my-4 border-gray-200 sm:mx-auto dark:border-gray-300" />

                <div className='flex items-center p-1'>
                  <BsFillPenFill />
                  {/* <div class="text-base ml-2">{money}</div> */}
                  <form>
                    <div className='border-2 text-center'>
                    <input type='text' value={money.money1} placeholder='Rs.0' 
                    onChange={(e) => {
                      setMoney({
                          ...money,
                          money1: e.target.value.replace(/\D/g, ''),
                      });
                      }} />
                    </div>              
                  </form>
              
                </div>
              
            </div>
          {/* <div class="px-6 pt-4 pb-2">
              <span class="hidden bg-white rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">{tags}</span>
      
          </div> */}
          </div>

          <div class={`max-w-sm min-w-[250px] rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 scale-100 hover:scale-95 w-1/2 m-4 ${check && drop2==='red' ? 'bg-red-700 ':' bg-transparent'}`}>
            <img class="w-full pb-3 h-[180px] object-cover" src={box} alt="Sunset in the mountains"/>
            <div class="px-6 py-3 bg-white" >
              <div class="text-base text-white mb-2 absolute top-2 left-2 rounded-xl px-4 py-1 w-[70px] text-center bg-orange-600">{2}</div>

                <p class="text-lg text-bold text-black">{showAnswers[1]}
                </p>
                <hr class="my-4 border-gray-200 sm:mx-auto dark:border-gray-300" />

                <div className='flex items-center p-1'>
                  <BsFillPenFill />
                  {/* <div class="text-base ml-2">{money}</div> */}
                  <form>
                    <div className='border-2 text-center'>
                    <input type='text' value={money.money2} placeholder='Rs.0' 
                    onChange={(e) => {
                      setMoney({
                          ...money,
                          money2: e.target.value.replace(/\D/g, ''),
                      });
                      }} />                    </div>              
                  </form>
              
                </div>
              
            </div>
          {/* <div class="px-6 pt-4 pb-2">
              <span class="hidden bg-white rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">{tags}</span>
      
          </div> */}
          </div>

          <div class={`${check && drop3==='red' ? 'bg-red-700 ':' bg-transparent'} ${stage3 ? 'hidden':'max-w-sm min-w-[250px] rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 scale-100 hover:scale-95 w-1/2 m-4'}` }>
            <img class="w-full pb-3 h-[180px] object-cover" src={box} alt="Sunset in the mountains"/>
            <div class="px-6 py-3 bg-white" >
              <div class="text-base text-white mb-2 absolute top-2 left-2 rounded-xl px-4 py-1 w-[70px] text-center bg-orange-600">{3}</div>

                <p class="text-lg text-bold text-black">{showAnswers[2]}
                </p>
                <hr class="my-4 border-gray-200 sm:mx-auto dark:border-gray-300" />

                <div className='flex items-center p-1'>
                  <BsFillPenFill />
                  {/* <div class="text-base ml-2">{money}</div> */}
                  <form>
                    <div className='border-2 text-center'>
                    <input type='text' value={money.money3} placeholder='Rs.0'  
                    onChange={(e) => {
                      setMoney({
                          ...money,
                          money3: e.target.value.replace(/\D/g, ''),
                      });
                      }} />
                    </div>              
                  </form>
              
                </div>
              
            </div>
          {/* <div class="px-6 pt-4 pb-2">
              <span class="hidden bg-white rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">{tags}</span>
      
          </div> */}
          </div>

          <div class={`${check && drop4==='red' ? 'bg-red-700 ':' bg-transparent'} ${stage2 ? 'hidden':'max-w-sm min-w-[250px] rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 scale-100 hover:scale-95 w-1/2 m-4'}` }>
            <img class="w-full pb-3 h-[180px] object-cover" src={box} alt="Sunset in the mountains"/>
            <div class="px-6 py-3 bg-white" >
              <div class="text-base text-white mb-2 absolute top-2 left-2 rounded-xl px-4 py-1 w-[70px] text-center bg-orange-600">{4}</div>

                <p class="text-lg text-bold text-black">{showAnswers[3]}
                </p>
                <hr class="my-4 border-gray-200 sm:mx-auto dark:border-gray-300" />

                <div className='flex items-center p-1'>
                  <BsFillPenFill />
                  {/* <div class="text-base ml-2">{money}</div> */}
                  <form>
                    <div className='border-2 text-center'>
                    <input type='text'  value={money.money4} placeholder='Rs.0'
                    onChange={(e) => {
                      setMoney({
                          ...money,
                          money4: e.target.value.replace(/\D/g, ''),
                      });
                      }} />                    
                      </div>              
                  </form>
              
                </div>
              
            </div>
        
          </div>

        </div>

        


           
      </div>
    

  )
}

export default Game