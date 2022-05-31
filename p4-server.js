const fastify = require("fastify")();
const fs = require("fs");
const { data } = require("./p4-data.js");

const {
  getQuestions,
  getAnswers,
  getQuestionsAnswers,
  getQuestion,
  getAnswer,
  getQuestionAnswer,
  addQuestionAnswer,
} = require("./p4-module.js");

fastify.get("/cit/question", (request, reply) => {
  
  reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send({error:"", statusCode: 200, questions: getQuestions()});
});

fastify.get("/cit/answer", (request, reply) => {
  
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send({error:"", statusCode: 200, answers: getAnswers()});
  });

  fastify.get("/cit/questionanswer", (request, reply) => {
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send({error:"", statusCode: 200, questions_answers: getQuestionsAnswers()});
  });

  fastify.get("/cit/question/:number", (request, reply) => {
    const { number } = request.params;
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send({error:"", statusCode: 200, question: getQuestion(parseInt(number))});
  });

  fastify.get("/cit/answer/:number", (request, reply) => {
    const { number } = request.params;
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send({error:"", statusCode: 200, answer: getAnswer(parseInt(number))});
  });

  fastify.get("/cit/questionanswer/:number", (request, reply) => {
    const { number } = request.params;
    const q = getQuestionAnswer(parseInt(number));

console.log(q);
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send({error:"", statusCode: 200, question: q.question, answer: q.answer });
  });

  fastify.post("/cit/question", (request, reply) => {
    const { number, question, answer } = request.body;
    const num = null;

      for (const question of data) {
        if (question.num > num) {
          question = question.num;
        }
      }
      question++;
      question.push({ question });

      for (const answer of data) {
        if (answer.num > num) {
          answer = answer.num;
        }
      }
      answer++;
      answer.push({ answer });

    reply
    let response = request.body;
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send({error:"", statusCode: 200, response});
  });


fastify.get("*", (request, reply) => {
    
    reply
      .code(404)
      .header("Content-Type", "application/json; charset=utf-8")
      .send({error: "Route not found", statusCode: 404});
  });

// Start server here:
const listenIP = "localhost";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});

// fastify.get("/cit/answer", (request, reply) => {
//     let q = "question:";
//     let s = "statusCode: 200";
//     let e = "error:";
//     reply
//       .code(200)
//       .header("Content-Type", "application/json; charset=utf-8")
//       .send(`${q}, ${s}, ${e}` + " " + getQuestions());
//   });