const buttonText = [
    'Ugh.',
    '🤦🏻‍♂️',
    'omg dad.',
    'you are the worst',
    'seriously',
    'stop it.',
    'please stop',
    'that was the worst one',
    "acha",
    "lame",
    "mid"
  
  ];

  const jokeBtn = document.querySelector(".getJoke");
  const jokeHolder = document.querySelector(".joke p");
  const loader = document.querySelector('.loader')

  async function fetchJoke(){
    loader.classList.remove('hidden');
    jokeBtn.classList.add('hidden');
    const response = await fetch("https://icanhazdadjoke.com/", {
        headers:{
            Accept: 'application/json'
        },
    });
    const data = await response.json();
    loader.classList.add('hidden');
    jokeBtn.classList.remove('hidden');
    

    return data;
   
  }


  function randomItem(arr, not){
    const item = arr[Math.floor(Math.random() * arr.length)]
      if(item === not){
        console.log('run again');
             console.log(not);
        return randomItem(arr,not)
      }
      return item
}



async function clickforJoke(){
const {joke} =   await fetchJoke();
jokeHolder.textContent=joke;
jokeBtn.textContent = randomItem(buttonText, jokeBtn.textContent)

}

jokeBtn.addEventListener('click', clickforJoke)

