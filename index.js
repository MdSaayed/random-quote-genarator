//selecting dom element
const qoute_text = document.querySelector('.qoute-text');
const random_quote_btn = document.querySelector('.random-quote-btn');
const author = document.querySelector('.author');
const sound = document.querySelector('.sound');
const copy = document.querySelector('.copy');
const twitter = document.querySelector('.twitter');


//genarate Random Quote function
function genarateRandomQuote(){
    fetch('https://api.quotable.io/random')
        .then(res => res.json())
        .then(result => {
            qoute_text.innerHTML = result.content;
            author.innerHTML = `--- ${result.author}`;
                random_quote_btn.style.backgroundColor = ' rgba(39, 39, 211, 0.733)';
                random_quote_btn.innerHTML = 'Loading....';

            setInterval(()=>{
                random_quote_btn.innerHTML = 'New Quote';
                random_quote_btn.style.backgroundColor = 'rgba(39, 39, 211, 0.945)';
            },1000);
        });
}

//read the quote
sound.addEventListener('click',()=>{
    const utterance = new SpeechSynthesisUtterance(`${qoute_text.innerHTML}  by ${author.innerHTML}`);
    speechSynthesis.speak(utterance);
});

//read the quote
copy.addEventListener('click',()=>{
    const copySound = new Audio('click sound.mp3');
    copySound.play();
    navigator.clipboard.writeText(qoute_text.innerHTML);
});

//read the quote
twitter.addEventListener('click',()=>{
    const tweetUrl = `https://twitter.com/intent/tweet?url=${qoute_text.innerHTML }`;
    window.open(tweetUrl,'_blank');
});

//genarate Random Quote button
random_quote_btn.addEventListener('click',genarateRandomQuote);







