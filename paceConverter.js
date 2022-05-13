// global variables for pace

const mpkm = document.getElementById("mpkm");
const mpm = document.getElementById("mpm");
const mpkmMiles = document.getElementById("mpkmMiles");
const mpmMiles = document.getElementById("mpmMiles");
const resultsBox = document.getElementById("paceResultsBox");
const pcSubmitKm = document.getElementById("pcSubmitKm");
const pcResetKm = document.getElementById("pcResetKm");
const pcSubmitMiles = document.getElementById("pcSubmitMiles");
const pcResetMiles = document.getElementById("pcResetMiles");
const paceFormKm = document.getElementById("paceForm");
const paceFormMiles = document.getElementById("paceFormMiles");
let originalPace = document.getElementById("original");
let newPace = document.getElementById("new");
let originalUnits = document.getElementById("originalUnits");
let newUnits = document.getElementById("newUnits");


// selecting pace

const changeToMilesForm = () => {
  paceFormKm.style.display = "none";
  paceFormMiles.style.display = "block";
  resultsBox.style.display = "none";
  paceFormMiles.style.border = "5px black solid";
}

const changeToKmForm = () => {
  paceFormMiles.style.display = "none";
  paceFormKm.style.display = "block";
  resultsBox.style.display = "none";
  paceFormKm.style.border = "5px black solid";

}

mpm.onclick = changeToMilesForm;
mpkmMiles.onclick = changeToKmForm;

// maths km

const kmToMilesPerMinute = (mins, secs) => {
  let minInt = parseInt(mins);
  let secInt = parseInt(secs);
  let functionResult = "";
  let kmPaceInSeconds = (minInt * 60) + secInt; // converting KM pace a single number of seconds
  let milePaceMinutesFromKM = Math.floor(kmPaceInSeconds * 1.60934 / 60); // converting that into the equivalent number of second, then minutes over mile, then rounding down to the nearest minute
  let milePaceSecondsFromKM = Math.round((kmPaceInSeconds * 1.60934) % 60); // finding the number of seconds not included after rounding down in previous variable
  
  // ensuring that paces are displayed in (0)0:00 format and logging to console
  if (secInt < 10 && milePaceSecondsFromKM < 10) {
    functionResult = `${milePaceMinutesFromKM}:0${milePaceSecondsFromKM}`;
  } else if (kmPaceInSeconds < 10 && milePaceSecondsFromKM >= 10) {
    functionResult = `${milePaceMinutesFromKM}:${milePaceSecondsFromKM}`; 
  } else if (kmPaceInSeconds >= 10 && milePaceSecondsFromKM < 10) {
    functionResult = `${milePaceMinutesFromKM}:0${milePaceSecondsFromKM}`;
  } else {
    functionResult = `${Math.floor(milePaceMinutesFromKM)}:${milePaceSecondsFromKM}`;
  }
  return functionResult;
}

// submit km 

const formDataKm = () => {
  let kmPaceMinutes = document.getElementById("paceMinutes").value;
  let kmPaceSeconds = document.getElementById("paceSeconds").value;
  if (kmPaceMinutes != "" && kmPaceSeconds != "") {
    let result = kmToMilesPerMinute(kmPaceMinutes, kmPaceSeconds);
    originalPace.innerHTML = `${kmPaceMinutes}:${kmPaceSeconds}`;
    newPace.innerHTML = result;
    paceFormKm.style.borderBottom = "0";
    resultsBox.style.display = "block";
    pcResetKm.style.display = "block";
    pcSubmitKm.style.display = "none";
  }
}


pcSubmitKm.onclick = formDataKm;

const resetKm = () => {
  document.getElementById("paceMinutes").value = "";
  document.getElementById("paceSeconds").value = "";
  paceFormKm.style.border = "5px black solid";
  resultsBox.style.display = "none";
  pcResetKm.style.display = "none";
  pcSubmitKm.style.display = "block";
}


pcResetKm.onclick = resetKm;

// maths miles

const milesToKmPerMinute = (mins, secs) => {
  let minInt = parseInt(mins);
  let secInt = parseInt(secs);
  let functionResult = "";
  let milePaceInSeconds = (minInt * 60) + secInt; // converting KM pace a single number of seconds
  let kmPaceMinutesFromMiles = Math.floor(milePaceInSeconds * 0.621371 / 60); // converting that into the equivalent number of second, then minutes over mile, then rounding down to the nearest minute
  let kmPaceSecondsFromMiles = Math.round((milePaceInSeconds * 0.621371) % 60); // finding the number of seconds not included after rounding down in previous variable
  
  // ensuring that paces are displayed in (0)0:00 format and logging to console
  if (secInt < 10 && kmPaceSecondsFromMiles < 10) {
    functionResult = `${kmPaceMinutesFromMiles}:0${kmPaceSecondsFromMiles}`;
  } else if (milePaceInSeconds < 10 && kmPaceSecondsFromMiles >= 10) {
    functionResult = `${kmPaceMinutesFromMiles}:${kmPaceSecondsFromMiles}`; 
  } else if (milePaceInSeconds >= 10 && kmPaceSecondsFromMiles < 10) {
    functionResult = `${kmPaceMinutesFromMiles}:0${kmPaceSecondsFromMiles}`;
  } else {
    functionResult = `${Math.floor(kmPaceMinutesFromMiles)}:${kmPaceSecondsFromMiles}`;
  }
  return functionResult;
}

// submit miles 

const formDataMiles = () => {
  let milePaceMinutes = document.getElementById("paceMinutesMiles").value;
  let milePaceSeconds = document.getElementById("paceSecondsMiles").value;
  if (milePaceMinutes != "" && milePaceSeconds != "") {
    let result = milesToKmPerMinute(milePaceMinutes, milePaceSeconds);
    originalPace.innerHTML = `${milePaceMinutes}:${milePaceSeconds}`;
    newPace.innerHTML = result;
    originalUnits.innerHTML = "min/miles"
    newUnits.innerHTML = "min/KM"
    paceFormMiles.style.borderBottom = "0";
    resultsBox.style.display = "block";
    pcResetMiles.style.display = "block";
    pcSubmitMiles.style.display = "none";

  }
}


pcSubmitMiles.onclick = formDataMiles;

const resetMiles = () => {
  document.getElementById("paceMinutesMiles").value = "";
  document.getElementById("paceSecondsMiles").value = "";
  paceFormMiles.style.border = "5px black solid";
  resultsBox.style.display = "none";
  pcResetMiles.style.display = "none";
  pcSubmitMiles.style.display = "block";
}


pcResetMiles.onclick = resetMiles;

// global variables for speed
const speedFormKmph = document.getElementById("speedFormKmph");
const speedFormMph = document.getElementById("speedFormMph");
const kmphKm = document.getElementById("kmphKm");
const mphKm = document.getElementById("mphKm");
const kmphMiles = document.getElementById("kmphMiles");
const mphMiles = document.getElementById("mphMiles");

const kmphSubmit = document.getElementById("kmphSubmit");
const kmphReset = document.getElementById("kmphReset");
const mphSubmit = document.getElementById("mphSubmit");
const mphReset = document.getElementById("mphReset");

const kmphSubmitTAndD = document.getElementById("kmphSubmitTAndD");
const kmphResetTAndD = document.getElementById("kmphResetTAndD");
const mphSubmitTAndD = document.getElementById("mphSubmitTAndD");
const mphResetTAndD = document.getElementById("mphResetTAndD");

const speedResultsBox = document.getElementById("speedResultsBox");
const originalSpeed = document.getElementById("originalSpeed");
const newSpeed = document.getElementById("newSpeed");
const originalUnitsSpeed = document.getElementById("originalUnitsSpeed");
const newUnitsSpeed = document.getElementById("newUnitsSpeed");

// selecting speed

const changeToMphForm = () => {
  speedFormKmph.style.display = "none";
  speedFormMph.style.display = "block";
  speedResultsBox.style.display = "none";
  speedFormMph.style.border = "5px black solid";
}

const changeToKmphForm = () => {
  speedFormMph.style.display = "none";
  speedFormKmph.style.display = "block";
  speedResultsBox.style.display = "none";
  speedFormKmph.style.border = "5px black solid";

}

mphKm.onclick = changeToMphForm;
kmphMiles.onclick = changeToKmphForm;

// maths kmph > mph

const kmphToMph = (speed) => {
  let kmSpeed = parseInt(speed);
  let newSpeed = (kmSpeed * 0.621371).toFixed(2)
  return newSpeed;
}

  // submit kmph > mph

const submitKmph = () => {
  let speed = document.getElementById("kmPerHour").value;
  if (speed != "") {
    let result = kmphToMph(speed);
    originalSpeed.innerHTML = speed;
    newSpeed.innerHTML = result;
    speedFormKmph.style.borderBottom = "0";
    speedResultsBox.style.display = "block";
    kmphReset.style.display = "block";
    kmphSubmit.style.display = "none";
  }
}

kmphSubmit.onclick = submitKmph;

const resetKmph = () => {
  document.getElementById("kmPerHour").value = "";
  speedFormKmph.style.border = "5px black solid";
  speedResultsBox.style.display = "none";
  kmphReset.style.display = "none";
  kmphSubmit.style.display = "block";
}

kmphReset.onclick = resetKmph;

// maths mph > kmph

const mphToKmph = (speed) => {
  let mileSpeed = parseInt(speed);
  let newSpeed = (mileSpeed * 1.60934).toFixed(2)
  return newSpeed;
}

// submit mph > kmph

const submitMph = () => {
  let speed = document.getElementById("milesPerHour").value;
  if (speed != "") {
    let result = mphToKmph(speed);
    originalSpeed.innerHTML = speed;
    newSpeed.innerHTML = result;
    speedFormMph.style.borderBottom = "0";
    speedResultsBox.style.display = "block";
    mphReset.style.display = "block";
    mphSubmit.style.display = "none";
  }
}

mphSubmit.onclick = submitMph;

const resetMph = () => {
  document.getElementById("milesPerHour").value = "";
  speedFormMph.style.border = "5px black solid";
  speedResultsBox.style.display = "none";
  mphReset.style.display = "none";
  mphSubmit.style.display = "block";
}

mphReset.onclick = resetMph;

// work out kmph maths

const workOutKmph = (distance, hours, mins, secs) => {
  let distanceInt = parseInt(distance);
  let hourInt = parseInt(hours);
  let minInt = parseInt(mins);
  let secInt = parseInt(secs);
  let timeInSecs = ((hourInt * 60) + minInt) * 60 + secInt;
  let speed = (distanceInt / timeInSecs * 3600)
  return speed;
}

// submit work out kmph

const submitKmphTAndD = () => {
  let distanceKmph = document.getElementById("distanceKmph").value;
  let hoursKmph = document.getElementById("hoursKmph").value;
  let minsKmph = document.getElementById("minsKmph").value;
  let secsKmph = document.getElementById("secsKmph").value;
  if (distanceKmph != "") {
    let originalResult = workOutKmph(distanceKmph, hoursKmph, minsKmph, secsKmph);
    let newResult = kmphToMph(originalResult);
    originalSpeed.innerHTML = originalResult.toFixed(2);
    newSpeed.innerHTML = newResult;
    speedFormKmph.style.borderBottom = "0";
    speedResultsBox.style.display = "block";
    kmphResetTAndD.style.display = "block";
    kmphSubmitTAndD.style.display = "none";
  }  
}

kmphSubmitTAndD.onclick = submitKmphTAndD;

const resetKmphTAndD = () => {
  document.getElementById("distanceKmph").value = "";
  document.getElementById("hoursKmph").value = "";
  document.getElementById("minsKmph").value = "";
  document.getElementById("secsKmph").value = "";
  speedFormKmph.style.border = "5px black solid";
  speedResultsBox.style.display = "none";
  kmphResetTAndD.style.display = "none";
  kmphSubmitTAndD.style.display = "block";
}

kmphResetTAndD.onclick = resetKmphTAndD;


// work out mph maths

const workOutMph = (distance, hours, mins, secs) => {
  let distanceInt = parseInt(distance);
  let hourInt = parseInt(hours);
  let minInt = parseInt(mins);
  let secInt = parseInt(secs);
  let timeInSecs = ((hourInt * 60) + minInt) * 60 + secInt;
  let speed = (distanceInt / timeInSecs * 3600)
  return speed;
}

// submit work out mph

const submitMphTAndD = () => {
  let distanceMph = document.getElementById("distanceMph").value;
  let hoursMph = document.getElementById("hoursMph").value;
  let minsMph = document.getElementById("minsMph").value;
  let secsMph = document.getElementById("secsMph").value;
  if (distanceMph != "") {
    let originalResult = workOutMph(distanceMph, hoursMph, minsMph, secsMph);
    let newResult = mphToKmph(originalResult);
    originalSpeed.innerHTML = originalResult.toFixed(2);
    newSpeed.innerHTML = newResult;
    originalUnitsSpeed.innerHTML = "MPH";
    newUnitsSpeed.innerHTML = "KMPH";
    speedFormMph.style.borderBottom = "0";
    speedResultsBox.style.display = "block";
    mphResetTAndD.style.display = "block";
    mphSubmitTAndD.style.display = "none";
  }  
}

mphSubmitTAndD.onclick = submitMphTAndD;

const resetMphTAndD = () => {
  document.getElementById("distanceMph").value = "";
  document.getElementById("hoursMph").value = "";
  document.getElementById("minsMph").value = "";
  document.getElementById("secsMph").value = "";
  speedFormMph.style.border = "5px black solid";
  speedResultsBox.style.display = "none";
  mphResetTAndD.style.display = "none";
  mphSubmitTAndD.style.display = "block";
}

mphResetTAndD.onclick = resetMphTAndD;

// speed to pace maths

const speedToPace = (speed) => {
  let speedInt = parseFloat(speed);
  let mps = speedInt/60;
  let paceInDecimalsString = (1/mps).toString();
  let paceStringArray = paceInDecimalsString.split(".");
  let minutes = parseInt(paceStringArray[0]);
  let decimalSeconds = `.${paceStringArray[1]}`;
  let decimalSecondsInt = parseFloat(decimalSeconds);
  let seconds = (decimalSecondsInt/100*60).toFixed(2);
  let secondsTimes100 = seconds * 100;
  let result = `${minutes}:${secondsTimes100}`;
  return result;
}

// pace to speed maths

const paceToSpeed = (pace) => {
  let resultDecimal = "";
  if (pace.includes(":")) {
    let safePace = pace.replace(":", ".");
    let safePaceInt = parseFloat(safePace);
    resultDecimal = 60 / safePaceInt;
  } else {
    let paceInt = parseFloat(pace);
    resultDecimal = 60 / paceInt;
  }
  let decimalString = resultDecimal.toString();
  let decimalStringArray = decimalString.split(".");
  let minutes = parseInt(decimalStringArray[0]);
  let decimalSeconds = `.${decimalStringArray[1]}`;
  let decimalSecondsInt = parseFloat(decimalSeconds);
  let seconds = (decimalSecondsInt/100*60).toFixed(2);
  let secondsTimes100 = seconds * 100;
  let result = `${minutes}.${secondsTimes100}`;
  return result;
}
