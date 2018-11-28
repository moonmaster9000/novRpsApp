function Requests() {
    this.play = function (p1, p2, ui) {
        new PlayRequest(p1, p2, ui).process()
    }
}

function PlayRequest(p1, p2, ui){
    this.process = function(){
        if (invalid(p1) || invalid(p2))
            ui.invalid()
        else if (draw(p1, p2))
            ui.tie()
        else if (p1Wins(p1, p2))
            ui.p1Wins()
        else
            ui.p2Wins()
    }

    function invalid(shape) {
        let validThrows = ["rock", "paper", "scissors"]
        return !validThrows.includes(shape)
    }

    function draw() {
        return p1 === p2
    }

    function p1Wins() {
        return (
            p1 === "rock"     && p2 === "scissors" ||
            p1 === "scissors" && p2 === "paper"    ||
            p1 === "paper"    && p2 === "rock"
        )
    }
}


describe("play", function () {
    let ui, requests

    beforeEach(function () {
        requests = new Requests()
    })

    describe("p1 win scenarios", function () {
        beforeEach(function () {
            ui = jasmine.createSpyObj("ui", ["p1Wins"])
        })

        it('rock v. scissors', function () {
            requests.play("rock", "scissors", ui)

            expect(ui.p1Wins).toHaveBeenCalled()
        })

        it('scissors v. paper', function () {
            requests.play("scissors", "paper", ui)

            expect(ui.p1Wins).toHaveBeenCalled()
        })

        it('paper v. rock', function () {
            requests.play("paper", "rock", ui)

            expect(ui.p1Wins).toHaveBeenCalled()
        })
    })

    describe("p2 win scenarios", function () {
        beforeEach(function () {
            ui = jasmine.createSpyObj("ui", ["p2Wins"])
        })

        it('scissors v. rock', function () {
            requests.play("scissors", "rock", ui)

            expect(ui.p2Wins).toHaveBeenCalled()
        })

        it('paper v. scissors', function () {
            requests.play("paper", "scissors", ui)

            expect(ui.p2Wins).toHaveBeenCalled()
        })

        it('rock v. paper', function () {
            requests.play("rock", "paper", ui)

            expect(ui.p2Wins).toHaveBeenCalled()
        })
    })

    describe("tie scnenarios", function () {
        beforeEach(function () {
            ui = jasmine.createSpyObj("ui", ["tie"])
        })

        it("rock v. rock", function () {
            requests.play("rock", "rock", ui)

            expect(ui.tie).toHaveBeenCalled()
        })
    })

    describe("invalid scenarios", function () {
        beforeEach(function () {
            ui = jasmine.createSpyObj("ui", ["invalid"])
        })

        it("invalid v. rock", function () {
            requests.play(Math.random(), "rock", ui)

            expect(ui.invalid).toHaveBeenCalled()
        })

        it("rock v. invalid", function () {
            requests.play("rock", Math.random(), ui)

            expect(ui.invalid).toHaveBeenCalled()
        })

        it('invalid v. same invalid', function () {
            requests.play("sailboat", "sailboat", ui)

            expect(ui.invalid).toHaveBeenCalled()
        })
    })
})