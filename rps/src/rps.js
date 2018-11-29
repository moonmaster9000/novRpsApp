function Requests() {
    this.playRound = function (p1Throw, p2Throw, ui, repo) {
        new PlayRoundRequest(p1Throw, p2Throw, ui, repo).process()
    }

    this.getHistory = function(ui, repo){
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
        else if (tie())
            ui.tie()
        else if (p1Wins())
            ui.p1Wins()
        else
            ui.p2Wins()
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


function Round(){}

module.exports = {Requests,Round}