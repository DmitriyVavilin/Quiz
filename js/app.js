const questions = [
    {
        question: 'Какой язык работает в браузере?',
        answer: ['Java', 'JavaScript', 'Python', 'C++'],
        corrent: 4,
    },
    {
        question: 'Что означает Css?',
        answer: [
            'Central Style Sheets',
            'Cascading Style Sheets',
            'Cascading Simple Sheets',
            'Cars SUVs Sailboats'
        ],
        corrent: 2,
    },
    {
        question: 'Что означает Html?',
        answer: [
            'Hypertext Markup Languae',
            'Hupertext Mardown Language',
            'Hyperloor Machine Language',
            'Helicopters Terminals Motorboats Lamborginis',
        ],
        corrent: 1,
    },
    {
        question: 'В каком году был создан JavaScript',
        answer: ['1996', '1995', '1994', 'Все ответы не верны!'],
        corrent: 2,
    }
]


//Находим элеметы

const headerContainer = document.querySelector('#header')
const listContainer = document.querySelector('#list')
const submitBtn = document.querySelector('#submit')

headerContainer.innerHTML = '';

//Переменные игры
let score = 0; // Количество правильных ответов

let questionIndex = 0; // Текущий вопрос


