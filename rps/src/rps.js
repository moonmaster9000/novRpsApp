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
        if (invalid(p1Throw) || invalid(p2Throw)){
            ui.invalid()
            repo.save(new Round(p1Throw, p2Throw, "invalid"))
        }
        else if (tie()){
            ui.tie()
            repo.save(new Round(p1Throw, p2Throw, "tie"))
        }
        else if (p1Wins()){
            ui.p1Wins()
            repo.save(new Round(p1Throw, p2Throw, "p1Wins"))
        }
        else {
            ui.p2Wins()
            repo.save(new Round(p1Throw, p2Throw, "p2Wins"))
        }
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