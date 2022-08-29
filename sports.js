const dataLoad = (first, last)=>{
    fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${first}_${last} `)
    .then(res => res.json())
    .then(data => playerData(data.player[0]))
}
const playerData = (data)=>{
        const playerInfo = document.getElementById('player-info')
        
        playerInfo.innerHTML =`
        <div class="py-20 bg-base-200 px-4">
        <div class="flex flex-col md:flex-row">
         <div class="w-1/2 flex justify-center items-center">
            <img src="${data.strThumb}" class="max-w-sm max-w-lg rounded-lg shadow-2xl " />
         </div>

          <div class="w-1/2">
            <h1 class="text-5xl font-bold text-center text-orange-800">${data.strPlayer}</h1>
            <p class="text-2xl my-1 text-blue-400">about ${data.strPlayer} :<small> ${data.strDescriptionEN.split(' ').slice(0,100).join(' ')}</small>....</p>
            <div class="grid grid-cols-2 gap-4 my-3">
                <p class="text-2xl">nationality</p>
            <p class="text-2xl">${data.strNationality}</p>
            <p class="text-2xl">Club</p>
            <p class="text-2xl">${data.strTeam}</p>
            <p class="text-2xl">Height</p>
            <p class="text-2xl">${data.strHeight}</p>
            <p class="text-2xl">wight</p>
            <p class="text-2xl">${data.strWeight}</p>
            <p class="text-2xl">Bithday</p>
            <p class="text-2xl">${data.dateBorn}</p>
            <p class="text-2xl">birth Location</p>
            <p class="text-2xl">${data.strBirthLocation}</p>
            <p class="text-2xl">Follow : </p>
            <p class="text-4xl pl-4">  <a target="_blank" href="https://${data.strFacebook}"><i class="fa-brands fa-facebook text-blue-700"></i></a> <a target="_blank" href="https://${data.strInstagram}"><i class="fa-brands fa-instagram pl-3 text-red-500"></i></a></p>

            </div>
            <p class="text-2xl"><p/>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
        `
}

const inputvalue = (input)=>{
    const nameInput = document.getElementById(input);
    const nameValue = nameInput.value;
    return nameValue;
}

const buttonValue = ()=>{
    const FirstInput = inputvalue('first-input');
    const secondInput = inputvalue('second-input');
    dataLoad(FirstInput.trim(),secondInput.trim());
    
}
window.addEventListener('load',()=>{
   const laod =  document.getElementById('load')
   laod.style.display='none'
   
})
// dataLoad('lionel', 'messi') 
