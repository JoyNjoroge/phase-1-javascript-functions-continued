// code your solution here
function saturdayFun (activity = 'roller-skate') {
   return (`This Saturday, I want to ${activity}!`);
}
saturdayFun('bathe my dog');

function mondayWork (activityUno = 'go to the office') {
    return (`This Monday, I will ${activityUno}.`);
}
mondayWork('work from home')

function wrapAdjective (flair = "*") {
    return function (adjective = "special"){
       return`You are ${flair}${adjective}${flair}!`;
    }
}