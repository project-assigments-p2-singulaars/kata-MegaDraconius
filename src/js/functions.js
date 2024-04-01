const isString = (param) => {
  return isNaN(+param);
};

export const askUserContinue = () => {
  const userContinue = confirm(`Do you want to continue?`);
  if (!userContinue) {
    alert(`See you stranger`);
  }
  return userContinue;
};

export const getUserName = () => {
  const userName = prompt(`Welcome stranger, what is your name?`);

  if (userName === null) {
    const userContinue = askUserContinue();
    if (userContinue) {
      return getUserName();
    } else {
      return false;
    }
  }

  if (!isString(userName)) {
    alert("That's no a name, stranger, try again");
    return getUserName();
  }

  if (userName.length < 3) {
    alert("You must be kidding, right? Try again.");
    return getUserName();
  }

  if (userName === "") {
    alert("I'm sure you have a name, let's start over");
    return getUserName();
  }

  alert(
    `Nice to meet you ${userName}, now if you want, ask me a question and I'll try to tell you how likely it is to happen.`
  );
  return userName;
};

export const questionUser = () => {
  const question = prompt(`What would you like to know?`);

  if (question === null) {
    const questionContinue = askUserContinue();
    if (!questionContinue) {
      return false;
    } else {
      return questionUser();
    }
  }

  if (!isString(question)) {
    alert("Dumb, that's not a question, try again.");
    return questionUser();
  }

  if (question.length < 3) {
    alert("That couldn't be considered a question... Let's try again.");
    return questionUser();
  }

  return true;
};

export const AnswerToUser = () => {
  const answer = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
  ];

  const randomIndex = Math.floor(Math.random() * answer.length);
  const randomAnswer = answer[randomIndex];

  alert(randomAnswer);
};
