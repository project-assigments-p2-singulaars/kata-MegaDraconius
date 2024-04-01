import {
  getUserName,
  questionUser,
  AnswerToUser,
  askUserContinue,
} from "../js/functions.js";

let play8Ball = () => {
  const userName = getUserName();

  if (!userName) return;

  while (true) {
    const questionResult = questionUser();
    if (!questionResult) break;
    AnswerToUser();
    if (!askUserContinue()) break;
  }
};

play8Ball();
