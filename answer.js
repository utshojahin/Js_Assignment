// Ans No. 1

function describeValue(param) {
    if (param) {
        return `${typeof(param)} | truthy`;
    } else {
        return `${typeof(param)} | falsy`;
    }
}


// Ans No. 2

function getDayType(day) {
    day = day.toLowerCase();

    switch (day) {
        case "friday":
        case "saturday":
            return "Weekend";

        case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
            return "Working Day";

        default:
            return "Invalid Day";
    }
}


// Ans No. 3

function validateUsername(username) {
    if (username.length < 4) {
        return "Too Short";
    }

    if (username.includes(" ")) {
        return "No Space Allowed";
    }

    if (username.toLowerCase().includes("admin")) {
        return "Reserved Word";
    }

    return "Available";
}


// Ans No. 4

function getCngFare(distance, isNight = false, waitingMinutes = 0) {
    let fare = 50;

    if (distance > 2) {
        fare = fare + (distance - 2) * 15;
    }

    if (waitingMinutes > 0) {
        fare = fare + waitingMinutes * 2;
    }

    if (isNight) {
        fare = fare * 1.20;
    }

    return fare;
}


// Ans No. 5

const getChaseVerdict = (target, scored, ballsLeft) => {
    const runsNeeded = target - scored;

    if (runsNeeded <= 0) {
        return "Won";
    }

    if (ballsLeft <= 0) {
        return "Lost";
    }

    const requiredRate = (runsNeeded / ballsLeft) * 6;

    if (requiredRate <= 6) {
        return `Need ${runsNeeded} runs in ${ballsLeft} balls | Comfortable`;
    } else if (requiredRate <= 12) {
        return `Need ${runsNeeded} runs in ${ballsLeft} balls | Tough`;
    } else {
        return `Need ${runsNeeded} runs in ${ballsLeft} balls | Almost Impossible`;
    }
};