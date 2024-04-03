// code your solution here
function saturdayFun (activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun("bathe my dog");

const mondayWork = function(activity = "go to the office"){
    return `This Monday, I will ${activity}.`;
}
mondayWork("work from home");

function wrapAdjective (target = "*a hard worker*") {
    const part1 = "special";
        return function () {
             return `You are ${target}!`};
    };
const encouragingPromptFunction = wrapAdjective("a hard worker")();