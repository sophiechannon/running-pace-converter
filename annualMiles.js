const months = {
    january : {
        daysPassed: 0
    },
    february : {
        daysPassed: 31
    },
    march : {
        daysPassed: 29
    },
    april : {
        daysPassed: 31
    },
    may : {
        daysPassed: 30
    },
    /* {june : 31},
    {july : 30},
    {august : 31},
    {september : 31},
    {october : 30},
    {november : 31},
    {december : 30}*/
}; 

const annualKmToGo = (day, month, kmRun, runToday) => {
    const target = 1609;
    const daysInYear = 366; 
    let dailyAverage = target / daysInYear; 
    let daysSoFar = "";
    if (month === "january") {
        daysSoFar = day;
    } else if (month === "february") {
        daysSoFar = 31 + day; 
    } else if (month === "march") {
        daysSoFar = 60 + day;
    }  else if (month === "april") {
        daysSoFar = 91 + day;
    }  else if (month === "may") {
        daysSoFar = 121 + day;
    }  else if (month === "june") {
        daysSoFar = 152 + day;
    }  else if (month === "july") {
        daysSoFar = 182 + day;
    }  else if (month === "august") {
        daysSoFar = 212 + day;
    }  else if (month === "september") {
        daysSoFar = 243 + day;
    }  else if (month === "october") {
        daysSoFar = 273 + day;
    }  else if (month === "november") {
        daysSoFar = 304 + day;
    }  else if (month === "december") {
        daysSoFar = 334 + day;
    } else {
        console.log("Enter a valid month")
    }

    /*
    let daysSoFar = months.month + day;

    */

    runToday ? daysSoFar = daysSoFar + 1 : daysSoFar = daysSoFar;

    let expectedDistance = dailyAverage * daysSoFar;
    let kmToGo = target - kmRun;
    let newDailyAverage = kmToGo /(daysInYear - daysSoFar);

    if (Math.round(kmRun) === Math.round(expectedDistance)) { /* on pace */
        console.log(`You're on pace, good work. You have ${kmToGo.toFixed(2)} KM left to go which is ${newDailyAverage.toFixed(2)} KM a day.`)
    } else if (kmRun > expectedDistance) { /*ahead of pace*/
        console.log(`Good work you're ${(kmRun - expectedDistance).toFixed(2)} KM ahead of pace! You have ${kmToGo.toFixed(2)} KM left to go, which is ${newDailyAverage.toFixed(2)} KM a day.`)
    } else { /*behind pace*/
        console.log(`You're not keeping up and are ${(expectedDistance - kmRun).toFixed(2)} KM behind pace. You have ${kmToGo.toFixed(2)} KM left to go which is ${newDailyAverage.toFixed(2)} KM a day.`)
    } 
} 

annualKmToGo(5, "may", 461, true); /*If you keep working on the 200km per month target, then you should be back on pace at the end of June (c. 28 June)*/