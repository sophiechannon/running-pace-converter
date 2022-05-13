const kmPerDayLeftThisMonth = (kmRun, day, month, runToday) => {
    month = month.toLowerCase();
    const monthlyTarget = 200; //setting the overall target
    let monthLength = "";
         if (month === "april" || month === "june" || month === "september" || month === "november") {
            monthLength = 30;
      } else if (month === "february") {
            monthLength = 28;
      } else {
            monthLength = 31;
      } // setting th length of the month
    let dailyAverage = monthlyTarget / monthLength;
    let expectedDistance = dailyAverage * day;
    let daysRemainingThisMonth = monthLength - day;
      

        if (runToday === false) {
        daysRemainingThisMonth = daysRemainingThisMonth + 1;
      } // corrects output if you've already run today

    let kmToGo = (monthlyTarget - kmRun);
    let newDailyAverage = kmToGo / daysRemainingThisMonth;
  
    
    if (newDailyAverage > 10) {
        console.log(`Ha ha ha ha ha! It's ${day} ${month} so you should have run ${expectedDistance.toFixed(2)} KM (${(expectedDistance * .621371).toFixed(2)} miles) by now putting you ${(expectedDistance - kmRun).toFixed(2)} KM behind pace!. WHAT HAVE YOU BEEN DOING?! You still need to run ${kmToGo.toFixed(2)} KM (${(kmToGo * .621371).toFixed(2)} miles) this month and to achieve this you will need to run an average of ${newDailyAverage.toFixed(2)} KM (${(newDailyAverage * .621371).toFixed(2)} miles) per day / ${(newDailyAverage * 7).toFixed(2)} KM (${((newDailyAverage * .621371) * 7).toFixed(2)} miles) per week. I'd like to see you try. GOOD LUCK SUCKER!`);
    } else if (Math.round(expectedDistance) === Math.round(kmRun)) {
        console.log(`It's ${day} ${month} and you're pretty much on pace! This means there is no room for ever and your future self isn't thanking your past self. You still need to run ${kmToGo.toFixed(2)} KM (${(kmToGo * .621371).toFixed(2)} miles) this month and to achieve this you will need to run an average of ${newDailyAverage.toFixed(2)} KM (${(newDailyAverage * .621371).toFixed(2)} miles) per day / ${(newDailyAverage * 7).toFixed(2)} KM (${((newDailyAverage * .621371) * 7).toFixed(2)} miles) per week.`);
    } else if (expectedDistance < kmRun) {
        console.log(`It's ${day} ${month} so you should have run ${expectedDistance.toFixed(2)} KM (${(expectedDistance * .621371).toFixed(2)} miles) by the end of the day, putting you ${(kmRun - expectedDistance).toFixed(2)} KM ahead of pace! Fucking hero! Don't get cocky though becase you still need to run ${kmToGo.toFixed(2)} KM (${(kmToGo * .621371).toFixed(2)} miles) this month and achieve this you will need to run an average of ${newDailyAverage.toFixed(2)} KM (${(newDailyAverage * .621371).toFixed(2)} miles) per day / ${(newDailyAverage * 7).toFixed(2)} KM (${((newDailyAverage * .621371) * 7).toFixed(2)} miles) per week.`);
    } else { 
        console.log(`Dragging our feet are we? It's ${day} ${month} so you should have run ${expectedDistance.toFixed(2)} KM (${(expectedDistance * .621371).toFixed(2)} miles) by the end of the day, putting you ${(expectedDistance - kmRun).toFixed(2)} KM behind pace! You now still need to run ${kmToGo.toFixed(2)} KM (${(kmToGo * .621371).toFixed(2)} miles) this month and to achieve this you will need to run an average of ${newDailyAverage.toFixed(2)} KM (${(newDailyAverage * .621371).toFixed(2)} miles) per day / ${(newDailyAverage * 7).toFixed(2)} KM (${((newDailyAverage * .621371) * 7).toFixed(2)} miles) per week. You're not that far off, but you do need to buck up your ideas.`);
    }
}
  // number of KM, day, month, have you run today?
  kmPerDayLeftThisMonth(23.2, 3, "May", true);
