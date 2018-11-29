function Requests(repo) {
    this.playRound = function (p1Throw, p2Throw, ui) {
        new PlayRoundRequest(p1Throw, p2Throw, ui, repo).process()
    }

    this.getHistory = function(ui){
        if (repo.isEmpty())
            ui.noRounds()
        else
            ui.rounds(repo.all())
    }
}

function PlayRoundRequest(p1Throw, p2Throw, ui, repo){
    this.process = function(){
        if (invalid(p1Throw) || invalid(p2Throw))
            handleResult("invalid")
        else if (tie())
            handleResult("tie")
        else if (p1Wins())
            handleResult("p1Wins")
        else
            handleResult("p2Wins")
    }

    function handleResult(result){
        ui[result]()
        repo.save(new Round(p1Throw, p2Throw, result))
    }

    function invalid(aThrow) {
        let validThrows = ["rock", "paper", "scissors"]
        return !validThrows.includes(aThrow)
    }

    function tie() {
        return p1Throw === p2Throw
    }

    function p1Wins() {
        return (
            p1Throw === "rock"     && p2Throw === "scissors" ||
            p1Throw === "scissors" && p2Throw === "paper"    ||
            p1Throw === "paper"    && p2Throw === "rock"
        )
    }
}


function Round(p1Throw, p2Throw, result){
    this.p1Throw = p1Throw
    this.p2Throw = p2Throw
    this.result  = result
}

module.exports = {Requests,Round}