const questions = [
    {
        question: 'Какой язык работает в браузере?',
        answer: ['Java', 'JavaScript', 'Python', 'C++'],
        corrent: 2,
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
submitBtn.onclick = checkAnswer;

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
    let answerNumber = 1;
    for(item of questions[questionIndex]['answer']) {
        const questionTemplate =
         `<li>
				<label>
					<input value="%number%" type="radio" class="answer" name="answer" />
					<span>%answer%</span>
				</label>
        </li>`;
     const answerHtml = questionTemplate.replace('%answer%', item ).replace('%number%', answerNumber);

     listContainer.innerHTML += answerHtml;
     answerNumber++;
    }
}

function checkAnswer() {

    //Находим выбранную радио кнопку
    const checkedRadio = listContainer.querySelector('input[type="radio"]:checked')
    //Если ничего не выбрано ничего не делаем.
    if(!checkedRadio){
        submitBtn.blur();
        return
    }

    // Узнаем номер ответа пользователя
    const userAnswer = parseInt(checkedRadio.value)
    // Если ответил верно увеличиваем число
   console.log(userAnswer, questions[questionIndex]['corrent'])
   if(userAnswer === questions[questionIndex]['corrent']) {
        score++;
   }
   console.log('score = ', score)

   if(questionIndex !== questions.length - 1){
    console.log('Это не последний вопрос')
    questionIndex++
    clearPage()
    showQustions()
    return;
   }else {
    console.log('Это последний вопрос')
    clearPage()
    showResults()
   }
}

function showResults() {
    console.log('showResults started')
}