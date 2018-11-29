const {Requests, Round} = require("../src/rps")

describe("history", function () {
    describe("no rounds", function () {
        it("should tell the ui there are no rounds", function () {
            let ui = jasmine.createSpyObj("ui", ["noRounds"])

            new Requests().getHistory(ui)

            expect(ui.noRounds).toHaveBeenCalled()
        })
    })

    fdescribe("rounds have been played", function () {
        it('should send the rounds to the UI', function () {
            let requests = new Requests()
            let playRoundUI = {invalid(){}}
            let ui = jasmine.createSpyObj("ui", ["rounds"])

            let repo = {
                isEmpty(){},
                all(){},
                save(){}
            }

            requests.playRound("rock", "sailboat", playRoundUI, repo)
            requests.getHistory(ui, repo)

            expect(ui.rounds).toHaveBeenCalledWith([new Round("rock", "sailboat", "invalid")])
        });
    })
})