const btn = document.querySelector('.talk');
const content = document.querySelector('.content');
const speechrecongnition = window.speechrecongnition || window.webkitSpeechRecognition;
const recoginition = new speechrecongnition();

//few arrays
const greetings = ['sir i am good, and hope you are also having fun today, sir today you wake at seven twenty so your coding time is going to aproximately 12 hours.', 'sir i am good, there is no important message for you today' ];

const weather = [
    'Weather is fine',
    'you need to sleep',
]

recoginition.onstart = function() {
    console.log('voice is activated. you can speak through microphone');
};

recoginition.onresult = function(event){
    const current = event.resultIndex;
    
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readoutloud(transcript);

};

// add the listener to the button
btn.addEventListener('click', ()=>{
    recoginition.start();
});

function readoutloud(message){
    const speech = new SpeechSynthesisUtterance();
    speech.text = 'i dont know what you said';
    if(message.includes('how are you')){
        const finaltext = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finaltext;
    }
    if(message.includes('organisation')){
        const finaltext = 'spaceket organization was founded by sksingh who is the ceo of this aerospace organization, this organization works on cryogenic and scampther propulsion based engine';
        speech.text = finaltext;
    }
    if(message.includes('Jarvis')){
        const finaltext = 'bhosdike madhar chod behen chod beti chod behen chod beti chod Lund lega kya. Ab bol na madhar chod ah aha aha ha ha aaooh oh ah ahahaha aha fuck me fast fuuuuuuckkk fuck fuck';
        speech.text = finaltext;
    }
    if(message.includes('jar')){
        const finaltext = 'bhosdike. madhar chod behen chod beti chod Gand marvale';
        speech.text = finaltext;
    }

    if(message.includes('where I am now')){
        const finaltext = 'India, new delhi, greater kailash 1,block s , building number 360';
        speech.text = finaltext;
    }
    if(message.includes('My name')){
        const finaltext = 's u s h i l, sushil';
        speech.text = finaltext;
    }
    if(message.includes('time')){
        const finaltext = 'now time is';
        speech.text = finaltext;
    }
    
    
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}
