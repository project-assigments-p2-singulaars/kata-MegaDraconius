const isString = (param) => {
  return isNaN(+param);
};

const askUserContinue = () => {
  const userContinue = confirm(`Do you want to continue?`);
  if (!userContinue) {
    alert(`See you stranger`);
  }
  return userContinue;
};

let getUserName = () => {
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
    alert("That's no name, stranger, try again");
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

let questionUser = () => {
  const question = prompt(`What would you like to know?`);

  if (!isString(question)) {
    alert("Dumb, that's not a question, try again.");
    return questionUser();
  }

  if (question.length < 3) {
    alert("That couldn't be considered a question... Let's try again.");
    return questionUser();
  }
};

getUserName();
questionUser();
