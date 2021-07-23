const quotes = [
  {
    quote:
    "감정 배제하고 목표만 보자.",
    author:
    "- 윤경환",
  },
  {
    quote:
    "다 애들이다, 어른답게 행동하자.",
    author:
    "- 윤경환",
  },{
    quote:
    "quote 3",
    author:
    "author 1",
  },{
    quote:
    "quote 4",
    author:
    "author 1",
  },{
    quote:
    "quote 5",
    author:
    "author 1",
  },{
    quote:
    "quote 6",
    author:
    "author 1",
  },{
    quote:
    "quote 7",
    author:
    "author 1",
  },{
    quote:
    "quote 8",
    author:
    "author 1",
  },{
    quote:
    "quote 9",
    author:
    "author 1",
  },{
    quote:
    "quote 10",
    author:
    "author 1",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
