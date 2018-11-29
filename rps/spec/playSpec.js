const Requests = require("../src/rps")

describe("playRound", function () {
    let ui, requests

    beforeEach(function () {
        requests = new Requests()
    })

    describe("p1 win scenarios", function () {
        beforeEach(function () {
            ui = jasmine.createSpyObj("ui", ["p1Wins"])
        })

        it('rock v. scissors', function () {
            requests.playRound("rock", "scissors", ui)

            expect(ui.p1Wins).toHaveBeenCalled()
        })

        it('scissors v. paper', function () {
            requests.playRound("scissors", "paper", ui)

            expect(ui.p1Wins).toHaveBeenCalled()
        })

        it('paper v. rock', function () {
            requests.playRound("paper", "rock", ui)

            expect(ui.p1Wins).toHaveBeenCalled()
        })
    })

    describe("p2 win scenarios", function () {
        beforeEach(function () {
            ui = jasmine.createSpyObj("ui", ["p2Wins"])
        })

        it('scissors v. rock', function () {
            requests.playRound("scissors", "rock", ui)

            expect(ui.p2Wins).toHaveBeenCalled()
        })

        it('paper v. scissors', function () {
            requests.playRound("paper", "scissors", ui)

            expect(ui.p2Wins).toHaveBeenCalled()
        })

        it('rock v. paper', function () {
            requests.playRound("rock", "paper", ui)

            expect(ui.p2Wins).toHaveBeenCalled()
        })
    })

    describe("tie scnenarios", function () {
        beforeEach(function () {
            ui = jasmine.createSpyObj("ui", ["tie"])
        })

        it("rock v. rock", function () {
            requests.playRound("rock", "rock", ui)

            expect(ui.tie).toHaveBeenCalled()
        })
    })

    describe("invalid scenarios", function () {
        beforeEach(function () {
            ui = jasmine.createSpyObj("ui", ["invalid"])
        })

        it("invalid v. rock", function () {
            requests.playRound(Math.random(), "rock", ui)

            expect(ui.invalid).toHaveBeenCalled()
        })

        it("rock v. invalid", function () {
            requests.playRound("rock", Math.random(), ui)

            expect(ui.invalid).toHaveBeenCalled()
        })

        it('invalid v. same invalid', function () {
            requests.playRound("sailboat", "sailboat", ui)

            expect(ui.invalid).toHaveBeenCalled()
        })
    })
})