var moneyClicks = 0
var workers = 0
var workerCost = 10
var workersMPS = 1

var teamLeaders = 0
var teamLeadersCost = 25
var teamLeadersMPS = 5

var managers = 0
var managersCost = 50
var managersMPS = 15

function moneyClicked() {
    moneyClicks++
}

function buyClickers(items,cost) {
    if(moneyClicks >= window[cost]){
        window[items]++
        moneyClicks -= window[cost]
        window[cost] = Math.round(window[cost] * 1.5)
    }else{
        alert("Not Enough Money")
    }
}

// function getWorker() {
//     if(moneyClicks >= workerCost){
//         workers++
//         moneyClicks -= workerCost
//         workerCost = Math.round(workerCost * 1.5)
//     }else{
//         alert("Not Enough Money")
//     }
// }

// function getTeamleaders(){
//     if (moneyClicks >= teamLeadersCost){
//         teamLeaders++
//         moneyClicks -= teamLeadersCost
//         teamLeadersCost = Math.round(teamLeadersCost * 1.5)
//     }else{
//         alert("Not Enough Money")
//     }
// }


// function getManagers(){
//     if (moneyClicks >= managersCost){
//         managers++
//         moneyClicks -= managersCost
//         managersCost = Math.round(managersCost * 1.5)
//     }else{
//         alert("Not Enough Money")
//     }
// }

var moneyProducersTimer = setInterval(function(){
    moneyProducers()},1000)

var moneyClickTimer = setInterval(function(){
    updateMoney()},100)

function updateMoney(){
    var moneyPerSecond = (workers * workersMPS) + (teamLeaders * teamLeadersMPS) + (managers * managersMPS)
    document.getElementById("workerCost").innerHTML = workerCost + "$"
    document.getElementById("moneyPerSecond").innerHTML = moneyPerSecond + "$ Per Second"

    document.getElementById("moneyAmount").innerHTML = moneyClicks + "$"
    document.getElementById("numberOfWorkers").innerHTML = "Number Of Workers :" + workers

    document.getElementById("teamLeadersCost").innerHTML = teamLeadersCost + "$"
    document.getElementById("numberOfTeamLeaders").innerHTML = "Number Of Team Leaders : " + teamLeaders

    document.getElementById("managersCost").innerHTML = managersCost + "$"
    document.getElementById("numberOfManagers").innerHTML = "Number Of Managers : " + managers
    
}

function moneyProducers(){
    moneyClicks += workers * workersMPS
    moneyClicks += teamLeaders * teamLeadersMPS
    moneyClicks += managers * managersMPS
}

function popUp(){
    document.getElementById("popup-info").classList.toggle("visible")
}