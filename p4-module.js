const { data } = require('./p4-data.js');
// //console.log({...data});

function getQuestions() {
    const questions = [];
    for (const Q of data){
        questions.push(Q.question);
    }
    return questions;
};
console.log(getQuestions());


function getAnswers(){
    const answers = [];
    for (const A of data){
        answers.push(A.answer);
    }
    return answers;
};
console.log(getAnswers());

function getQuestionsAnswers(){
    return data.map((item) => {
        return {...item};
});
}
console.log(getQuestionsAnswers());

function getQuestion(number = ''){
    let questionObj = {                                     
        question: "",
        number: "",
        error: "",
    };
   

if( !Number.isInteger(number) ){
    questionObj.error = "number must be an integer";        
    console.log("number must be an integer");               
}

else if(number > 3){
    questionObj.error = "number must be less than 3";       
    console.log("number must be less than 3");              
}

else if(number <= 0){
    questionObj.error = "number must be greater than 0";    
    console.log("number must be greater than 0");          
}
else{
    index = number -1;
questionObj.number = number;                          
questionObj.question = data[index].question;       
}

return questionObj
};
console.log(getQuestion(1));

function getAnswer(number = ''){
    let answerObj = {                                     
        answer: "",
        number: "",
        error: "",
    };
   
if( !Number.isInteger(number) ){
    answerObj.error = "number must be an integer";        
    console.log("number must be an integer");               
}

else if(number > 3){
    answerObj.error = "number must be less than 3";       
    console.log("number must be less than 3");              
}

else if(number <= 0){
    answerObj.error = "number must be greater than 0";    
    console.log("number must be greater than 0");          

} else {
    index = number -1;
answerObj.number = number;                          
answerObj.answer = data[index].answer;       
}

return answerObj
};
console.log(getAnswer(2));


function getQuestionAnswer(number = ""){
   let questAnswerObj = {   
    question: "",                                  
    answer: "",
    number: "",
    error: "",
};

if( !Number.isInteger(number) ){
questAnswerObj.error = "number must be an integer";        
console.log("number must be an integer");               
}

else if(number > 3){
questAnswerObj.error = "number must be less than 3";       
console.log("number must be less than 3");              
}

else if(number <= 0){
questAnswerObj.error = "number must be greater than 0";    
console.log("number must be greater than 0");          

} else {
index = number -1;
questAnswerObj.number = number;                          
questAnswerObj.answer = data[index].answer;  
questAnswerObj.question = data[index].question;     
}

return questAnswerObj
};
console.log(getQuestionAnswer(2));

function addQuestionAnswer(info = {}){

};

module.exports = {
getQuestions,
 getAnswers, 
 getQuestionsAnswers, 
 getQuestion, 
 getAnswer, 
 getQuestionAnswer,
 addQuestionAnswer,
}


// /*****************************
//   Module function testing
// ******************************/
// function testing(category, ...args) {
//     console.log(`\n** Testing ${category} **`);
//     console.log("-------------------------------");
//     for (const o of args) {
//       console.log(`-> ${category}${o.d}:`);
//       console.log(o.f);
//     }
//   }
  
//   // Set a constant to true to test the appropriate function
//   const testGetQs = false;
//   const testGetAs = false;
//   const testGetQsAs = false;
//   const testGetQ = false;
//   const testGetA = false;
//   const testGetQA = false;
//   const testAdd = false;      // Extra credit
//   const testUpdate = false;   // Extra credit
//   const testDelete = false;   // Extra credit

// getQuestions()
// if (testGetQs) {
//     testing("getQuestions", { d: "()", f: getQuestions() });
//   }
  
//   // getAnswers()
//   if (testGetAs) {
//     testing("getAnswers", { d: "()", f: getAnswers() });
//   }
  
//   // getQuestionsAnswers()
//   if (testGetQsAs) {
//     testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
//   }
  
//   // getQuestion()
//   if (testGetQ) {
//     testing(
//       "getQuestion",
//       { d: "()", f: getQuestion() },      // Extra credit: +1
//       { d: "(0)", f: getQuestion(0) },    // Extra credit: +1
//       { d: "(1)", f: getQuestion(1) },
//       { d: "(4)", f: getQuestion(4) }     // Extra credit: +1
//     );
//   }
  
//   // getAnswer()
//   if (testGetA) {
//     testing(
//       "getAnswer",
//       { d: "()", f: getAnswer() },        // Extra credit: +1
//       { d: "(0)", f: getAnswer(0) },      // Extra credit: +1
//       { d: "(1)", f: getAnswer(1) },
//       { d: "(4)", f: getAnswer(4) }       // Extra credit: +1
//     );
//   }
  
//   // getQuestionAnswer()
//   if (testGetQA) {
//     testing(
//       "getQuestionAnswer",
//       { d: "()", f: getQuestionAnswer() },    // Extra credit: +1
//       { d: "(0)", f: getQuestionAnswer(0) },  // Extra credit: +1
//       { d: "(1)", f: getQuestionAnswer(1) },
//       { d: "(4)", f: getQuestionAnswer(4) }   // Extra credit: +1
//     );
//   }
