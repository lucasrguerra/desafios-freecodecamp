function getAverage(scores) {
    let size = scores.length;
    let sum = 0;
    for (let index = 0; index < size; index++) {
        sum += scores[index];
    }
    return sum / size;
}

function getGrade(score) {
    if (score === 100) {
        return "A++";
    } else if (score > 89) {
        return "A";
    } else if (score > 79) {
        return "B";
    } else if (score > 69) {
        return "C";
    } else if (score > 59) {
        return "D";
    } else {
        return "F";
    }
}

function hasPassingGrade(score) {
    return getGrade(score) !== "F";
}

function studentMsg(totalScores, studentScore) {
    let average = getAverage(totalScores);
    let grade = getGrade(studentScore);
    let message = `Class average: ${average}. Your grade: ${grade}. `;
    if (hasPassingGrade(studentScore)) {
        message += "You passed the course.";
    } else {
        message += "You failed the course.";
    }
    return message;
}