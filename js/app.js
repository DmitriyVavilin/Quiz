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


//Переменные игры
let score = 0; // Количество правильных ответов

let questionIndex = 0; // Текущий вопрос


clearPage()
showQustions()

function clearPage() {
    headerContainer.innerHTML = '';
    listContainer.innerHTML = '';
}

function showQustions() {
    //Вопрос
    const headerTemplate = `<h2 class="title">%title%</h2>`;
    const title = headerTemplate.replace('%title%', questions[questionIndex]['question'])
    headerContainer.innerHTML = title;

    // Варианты ответов
    for(item of questions[questionIndex]['answer']) {
        console.log(item)

        const questionTemplate =
         `<li>
				<label>
					<input type="radio" class="answer" name="answer" />
					<span>%answer%</span>
				</label>
        </li>`;

     const answerHtml = questionTemplate.replace('%answer%', item )
     console.log(answerHtml)

     listContainer.innerHTML = answerHtml;
    }
}