const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
    { text: "The mind is everything. What you think you become.", author: "Buddha" },
    { text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
    { text: "Life is what happens when you’re busy making other plans.", author: "John Lennon" },
    { text: "Get busy living or get busy dying.", author: "Stephen King" },
    { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
    { text: "In the end, we only regret the chances we didn’t take.", author: "Lewis Carroll" },
    { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
    { text: "Life is either a daring adventure or nothing at all.", author: "Helen Keller" },
    { text: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde" },
    { text: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
    { text: "Life is either a daring adventure or nothing at all.", author: "Helen Keller" },
    { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
];

const quoteTextElement = document.getElementById('quote-text');
const quoteAuthorElement = document.getElementById('quote-author');
const newQuoteBtn = document.getElementById('new-quote-btn');
const copyBtn = document.getElementById('copy-btn');
const tweetBtn = document.getElementById('tweet-btn');
const quoteWrapper = document.querySelector('.quote-wrapper');

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function displayQuote(quote) {
    // รีเซ็ต animation
    quoteWrapper.classList.remove('fade');
    void quoteWrapper.offsetWidth; // trick เพื่อให้ animation เล่นใหม่
    quoteWrapper.classList.add('fade');

    quoteTextElement.textContent = quote.text;
    quoteAuthorElement.textContent = `— ${quote.author}`;
}

function showNewQuote() {
    const newQuote = getRandomQuote();
    displayQuote(newQuote);
}

function copyQuote() {
    const textToCopy = `"${quoteTextElement.textContent}" ${quoteAuthorElement.textContent}`;
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert("คัดลอกคำคมเรียบร้อยแล้ว!");
    });
}

function tweetQuote() {
    const tweetText = encodeURIComponent(`"${quoteTextElement.textContent}" ${quoteAuthorElement.textContent}`);
    const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;
    window.open(tweetUrl, '_blank');
}

newQuoteBtn.addEventListener('click', showNewQuote);
copyBtn.addEventListener('click', copyQuote);
tweetBtn.addEventListener('click', tweetQuote);

// แสดงคำคมเริ่มต้น
showNewQuote();
