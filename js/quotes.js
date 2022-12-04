const quotes = [
    {
        quotes: "삶이 있는 한 희망은 있다 ",
        author: "키케로",
    },
    {
        quotes: "산다는것 그것은 치열한 전투이다 ",
        author: "로망로랑",
    },
    {
        quotes: "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다 ",
        author: "사무엘존슨",
    },
    {
        quotes: "진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해 ",
        author: "찰리 채플린",
    },
    {
        quotes: "직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다 ",
        author: "엘버트 허버드",
    },
    {
        quotes: "신은 용기있는자를 결코 버리지 않는다 ",
        author: "켄러",
    },
    {
        quotes: "피할수 없으면 즐겨라 ",
        author: "로버트 엘리엇",
    },
    {
        quotes: "절대 어제를 후회하지 마라 . 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다 ",
        author: "L.론허바드",
    },
    {
        quotes: "한번의 실패와 영원한 실패를 혼동하지 마라 ",
        author: "F.스콧 핏제랄드",
    },
    {
        quotes: "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다 ",
        author: "앙드레 말로",
    },
    {
        quotes: "성공의 비결은 단 한 가지, 잘할 수 있는 일에 광적으로 집중하는 것이다 ",
        author: "톰 모나건",
    },
    {
        quotes: "고통이 남기고 간 뒤를 보라! 고난이 지나면 반드시 기쁨이 스며든다 ",
        author: "괴테",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quotes;
author.innerText = todaysQuote.author;
