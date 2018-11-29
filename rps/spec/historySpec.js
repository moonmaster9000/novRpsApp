const {Requests, Round} = require("../src/rps")

describe("history", function () {
    describe("no rounds", function () {
        it("should tell the ui there are no rounds", function () {
            let ui = jasmine.createSpyObj("ui", ["noRounds"])

            new Requests().getHistory(ui)

            expect(ui.noRounds).toHaveBeenCalled()
        })
    })

    describe("rounds have been played", function () {
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

function FakeRoundRepo(){
    let rounds = []

    this.isEmpty = function(){
        return rounds.length === 0
    }

    this.save = function(aRound){
        rounds.push(aRound)
    }

    this.all = function(){
        return rounds
    }
}

function roundRepoContract(repoClass){
    fdescribe("repo contract", function () {
        let repo

        beforeEach(function () {
            repo = new repoClass()
        })

        describe("when no rounds have been saved", function () {
            it('is empty', function () {
                expect(repo.isEmpty()).toBe(true)
            })

        })

        describe("when rounds have been saved", function () {
            let round

            beforeEach(function () {
                round = new Round()
                repo.save(round)
            })

            it("is not empty", function () {
                expect(repo.isEmpty()).toBe(false)
            })

            it("returns all saved rounds", function () {
                expect(repo.all()).toContain(round)
            })
        })
    })
}

roundRepoContract(FakeRoundRepo)
















