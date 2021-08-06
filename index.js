const texts = document.querySelector('.texts');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.interimResults = true;
recognition.continuous = true;

let p = document.createElement('p');

recognition.addEventListener('result', (e) =>{

  const text = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');


    p.innerText = text;
    texts.appendChild(p);

    if(e.results[0].isFinal){
      if(text.includes('hello')){
        p = document.createElement('p');
        p.classList.add('reply');
        p.innerText = 'Hi there! how may I help you ?';
        texts.appendChild(p);
      }
      if(text.includes('goodbye')){
        p = document.createElement('p');
        p.classList.add('reply');
        p.innerHTML = '<img src="images/wave.png"> <br> Have a good day!';
        texts.appendChild(p);
      }
      p = document.createElement('p');
    }
  console.log(text);
});

recognition.addEventListener('end', ()=>{
  recognition.start();
});

recognition.start();
