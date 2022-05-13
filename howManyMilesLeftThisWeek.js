const kmPerDayLeftThisWeek = (kmRun, month, day, runToday) => {
  day = day.toLowerCase();
  month = month.toLowerCase();
    const monthlyTarget = 200; //setting the overall target
    let dailyAverage = "";
       if (month === "april" || month === "june" || month === "september" || month === "november") {
      dailyAverage = monthlyTarget / 30;
    } else if (month === "february") {
      dailyAverage = monthlyTarget / 28;
    } else {
      dailyAverage = monthlyTarget / 31;
    } // working our daily averge for the month

    
    let daysRemainingThisWeek="";
    
    if (day === "monday") {
        daysRemainingThisWeek = 7;
    } else if (day === "tuesday") {
        daysRemainingThisWeek = 6;
    } else if (day === "wednesday") {
        daysRemainingThisWeek = 5;
    } else if (day === "thursday") {
        daysRemainingThisWeek = 4;
    } else if (day === "friday") {
        daysRemainingThisWeek = 3;
    } else if (day === "saturday") {
        daysRemainingThisWeek = 2;
    } else if (day === "sunday") {
        daysRemainingThisWeek = 1;
    } else {
      console.log("Please enter a valid day.");
    }

    let weeklyAverage = dailyAverage * 7;
    let expectedDistance = weeklyAverage - (dailyAverage * (daysRemainingThisWeek -1));
    
    if (runToday === true) {
      daysRemainingThisWeek = daysRemainingThisWeek - 1;
    }


 
    let kmToGo = (weeklyAverage - kmRun);
    let newDailyAverage = kmToGo / daysRemainingThisWeek;
   

    if (kmRun < weeklyAverage && day === "sunday" && runToday === false) {
      console.log(`Come on! It's Sunday and you've only got ${kmToGo.toFixed(2)} KM left to go, so get your trainers on. You've got this!`);
    } else if (kmRun < weeklyAverage && day === "sunday" && runToday === true) {
      console.log(`Bad week? It's Sunday and you've still got ${kmToGo.toFixed(2)} KM left to go. Looks like you won't meet your target this week unless you go for another run today.`);
    } else if (kmRun < expectedDistance) {
      console.log(`It's ${day} and you're ${(expectedDistance - kmRun).toFixed(2)} KM behind pace! You still need to run ${kmToGo.toFixed(2)} KM this week and to achieve this you will need to run an average of ${newDailyAverage.toFixed(2)} KM per day, including today.`);
    } else {
      console.log(`It's ${day} and you're ${(kmRun - expectedDistance).toFixed(2)} KM ahead of pace! You still need to run ${kmToGo.toFixed(2)} KM this week and to achieve this you will need to run an average of ${newDailyAverage.toFixed(2)} KM per day.`);
    }
  }

kmPerDayLeftThisWeek(24.9, "may", "wednesday", true);