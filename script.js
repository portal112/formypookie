function handleAnswer(answer) {
    const questionText = document.getElementById("question");

    if (questionText.innerText === "Do you really love me?") {
        if (answer === "yes") {
            questionText.innerText = "Do you think You are enough for me?";
        } else {
            window.location.href = "wrong-answer.html";
        }
    } else if (questionText.innerText === "Do you think You are enough for me?") {
        if (answer === "yes") {
            questionText.innerText = "Will you be my gf?";
        } else {
            window.location.href = "idc-love.html";
        }
    } else if (questionText.innerText === "Will you be my gf?") {
        if (answer === "yes") {
            window.location.href = "she-said-yes.html";
            console.log("she said yes");
        } else {
            window.location.href = "flower.html";
        }
    }
}