function Requests() {
    this.playRound = function (p1Throw, p2Throw, ui) {
        new PlayRoundRequest(p1Throw, p2Throw, ui).process()
    }
}

function PlayRoundRequest(p1Throw, p2Throw, ui){
    this.process = function(){
        if (invalid(p1Throw) || invalid(p2Throw))
            ui.invalid()
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

module.exports = Requests