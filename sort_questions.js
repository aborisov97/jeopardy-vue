var fs = require('fs');

fs.readFile('jeopardy_questions_database.json', function(err, data) {
    var questions = JSON.parse(data)
    console.log(questions)

    var sortedQuestionsHistory = [];
    questions.forEach(element => {
        if (element.category === 'HISTORY'){
            if(element.value===null || element.value.includes(','))
            element.value = '$100'
            element.value = Number(element.value.substring(1, element.value.length))
            sortedQuestionsHistory.push(element)
        }
    });
    var sortedQuestionsSports = [];
    questions.forEach(element => {
        if (element.category === 'SPORTS'){
            if(element.value===null || element.value.includes(','))
            element.value = '$100'
            element.value = Number(element.value.substring(1, element.value.length))    
            sortedQuestionsSports.push(element)
        }
    });
    var sortedQuestionsMovies = [];
    questions.forEach(element => {
        if (element.category === 'MOVIES IN OTHER WORDS'){
            if(element.value===null || element.value.includes(','))
            element.value = '$100'
            element.value = Number(element.value.substring(1, element.value.length))  
            sortedQuestionsMovies.push(element)
        }
    });
    
    sortedQuestionsHistory.sort((a, b) => {
        if(a.value > b.value) 
            return 1;
        if(a.value < b.value)
            return -1;
        return 0;
    })
    sortedQuestionsSports.sort((a, b) => {
        if(a.value > b.value) 
            return 1;
        if(a.value < b.value)
            return -1;
        return 0;
    })
    sortedQuestionsMovies.sort((a, b) => {
        if(a.value > b.value) 
            return 1;
        if(a.value < b.value)
            return -1;
        return 0;
    })
    console.log(sortedQuestionsSports);


    fs.appendFile('sport_questions.json', JSON.stringify(sortedQuestionsSports), function (err) {
        if (err) throw err;
        console.log('Sports Saved!');
    });
    fs.appendFile('history_questions.json', JSON.stringify(sortedQuestionsHistory), function (err) {
        if (err) throw err;
        console.log('History Saved!');
    });
    fs.appendFile('movie_questions.json', JSON.stringify(sortedQuestionsMovies), function (err) {
        if (err) throw err;
        console.log('Movies Saved!');
    });



    // SPORT SORT

    var sortedQuestionsJeopardy = [];
    var sortedQuestionsDoubleJeopardy = [];
    var sortedQuestionsFinalJeopardy = [];
    sortedQuestionsSports.forEach(element => {
        if (element.round === 'Jeopardy!'){
            sortedQuestionsJeopardy.push(element)
        }
        if (element.round === 'Double Jeopardy!'){
            sortedQuestionsDoubleJeopardy.push(element)
        }
        if (element.round === 'Final Jeopardy!'){
            sortedQuestionsFinalJeopardy.push(element)
        }
    });
    
    fs.appendFile('sport_questions_jeopardy.json', JSON.stringify(sortedQuestionsJeopardy), function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
    fs.appendFile('sport_questions_doublejeopardy.json', JSON.stringify(sortedQuestionsDoubleJeopardy), function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
    fs.appendFile('sport_questions_finaljeopardy.json', JSON.stringify(sortedQuestionsFinalJeopardy), function (err) {
        if (err) throw err;
        console.log('Saved!');
    });

    // HISTORY SORT
    sortedQuestionsJeopardy = [];
    sortedQuestionsDoubleJeopardy = [];
    sortedQuestionsFinalJeopardy = [];
    sortedQuestionsHistory.forEach(element => {
        if (element.round === 'Jeopardy!'){
            sortedQuestionsJeopardy.push(element)
        }
        if (element.round === 'Double Jeopardy!'){
            sortedQuestionsDoubleJeopardy.push(element)
        }
        if (element.round === 'Final Jeopardy!'){
            sortedQuestionsFinalJeopardy.push(element)
        }
    });
    
    fs.appendFile('history_questions_jeopardy.json', JSON.stringify(sortedQuestionsJeopardy), function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
    fs.appendFile('history_questions_doublejeopardy.json', JSON.stringify(sortedQuestionsDoubleJeopardy), function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
    fs.appendFile('history_questions_finaljeopardy.json', JSON.stringify(sortedQuestionsFinalJeopardy), function (err) {
        if (err) throw err;
        console.log('Saved!');
    });


    // MOVIE SORT
    sortedQuestionsJeopardy = [];
    sortedQuestionsDoubleJeopardy = [];
    sortedQuestionsFinalJeopardy = [];
    sortedQuestionsMovies.forEach(element => {
        if (element.round === 'Jeopardy!'){
            sortedQuestionsJeopardy.push(element)
        }
        if (element.round === 'Double Jeopardy!'){
            sortedQuestionsDoubleJeopardy.push(element)
        }
        if (element.round === 'Final Jeopardy!'){
            sortedQuestionsFinalJeopardy.push(element)
        }
    });
    
    fs.appendFile('movies_questions_jeopardy.json', JSON.stringify(sortedQuestionsJeopardy), function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
    fs.appendFile('movies_questions_doublejeopardy.json', JSON.stringify(sortedQuestionsDoubleJeopardy), function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
    fs.appendFile('movies_questions_finaljeopardy.json', JSON.stringify(sortedQuestionsFinalJeopardy), function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
});



