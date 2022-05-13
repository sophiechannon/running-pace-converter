const months = {
    january : 0,
    february : 31,
    march : 60,
    april : 91,
    may : 121,
    june : 152,
    july : 182,
    august : 212,
    september : 243,
    october : 273,
    november : 304,
    december : 334
}; 


const annualKmToGo = (day, month, kmRun, runToday) => {
  const target = 1609;
  const daysInYear = 366; 
  let dailyAverage = target / daysInYear; 
  let daysSoFar = "";
  if (months[month]) {
    daysSoFar = months[month] + day;
  } else {
      console.log("Enter a valid month")
  };

  
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
};

annualKmToGo(5, "june", 461, true); /*If you keep working on the 200km per month target, then you should be back on pace at the end of June (c. 28 June)*/