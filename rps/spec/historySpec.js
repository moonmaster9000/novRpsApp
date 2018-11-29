const {Requests, Round} = require("../src/rps")
const FakeRoundRepo = require("./FakeRoundRepo")

describe("history", function () {
    let repo, requests

    beforeEach(function () {
        repo = new FakeRoundRepo()
        requests = new Requests(repo)
    })

    describe("no rounds", function () {
        it("should tell the ui there are no rounds", function () {
            let ui = jasmine.createSpyObj("ui", ["noRounds"])

            requests.getHistory(ui)

            expect(ui.noRounds).toHaveBeenCalled()
        })
    })

    describe("rounds have been played", function () {
        it('should send the rounds to the UI', function () {
            let playRoundUI = {invalid(){}, tie(){}, p1Wins(){}, p2Wins(){}}
            let ui = jasmine.createSpyObj("ui", ["rounds"])

            requests.playRound("rock", "sailboat", playRoundUI)
            requests.playRound("rock", "rock", playRoundUI)
            requests.playRound("rock", "scissors", playRoundUI)
            requests.playRound("rock", "paper", playRoundUI)

            requests.getHistory(ui)

            expect(ui.rounds).toHaveBeenCalledWith([
                new Round("rock", "sailboat", "invalid"),
                new Round("rock", "rock", "tie"),
                new Round("rock", "scissors", "p1Wins"),
                new Round("rock", "paper", "p2Wins"),
            ])
        });
    })
})