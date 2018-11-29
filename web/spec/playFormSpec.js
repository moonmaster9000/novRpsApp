const React = require("react")
const ReactDOM = require("react-dom")
const ReactTestUtils = require("react-dom/test-utils")
const PlayForm = require("../src/components/PlayForm.js")

describe("play form", function () {
    describe("the game logic reported that the round was invalid", function () {
        beforeEach(function () {
            let alwaysInvalid = {
                playRound: function(p1, p2, ui){
                    ui.invalid()
                }
            }

            renderForm(alwaysInvalid)
        })

        it("display 'INVALID' to the user", function () {
            expect(page()).not.toContain("INVALID")
            submitForm()
            expect(page()).toContain("INVALID")
        })
    })

    describe("the game logic reported that P1 won", function () {
        beforeEach(function () {
            let p1AlwaysWins = {
                playRound: function(p1, p2, ui){
                    ui.p1Wins()
                }
            }

            renderForm(p1AlwaysWins)
        })
        
        it("displays 'P1 Wins!'", function () {
            expect(page()).not.toContain("P1 Wins!")
            submitForm()
            expect(page()).toContain("P1 Wins!")
        })
    })

    describe("the game logic reported that P2 won", function () {
        beforeEach(function () {
            let p2AlwaysWins = {
                playRound: function(p1, p2, ui){
                    ui.p2Wins()
                }
            }

            renderForm(p2AlwaysWins)
        })


        it("displays 'P2 Wins!'", function () {
            expect(page()).not.toContain("P2 Wins!")
            submitForm()
            expect(page()).toContain("P2 Wins!")
        })
    })

    describe("the game logic reported that it was a tie", function () {
        beforeEach(function () {
            let alwaysTies = {
                playRound: function(p1, p2, ui){
                    ui.tie()
                }
            }

            renderForm(alwaysTies)
        })


        it("displays 'TIE'", function () {
            expect(page()).not.toContain("TIE")
            submitForm()
            expect(page()).toContain("TIE")
        })
    })

    it("sends the user input to the game module", function () {
        let playSpy = jasmine.createSpy()

        renderForm({playRound: playSpy})

        fillIn("p1Throw", "foo")
        fillIn("p2Throw", "bar")

        submitForm()

        expect(playSpy).toHaveBeenCalledWith("foo", "bar", jasmine.any(Object))
    })

    function fillIn(inputName, inputValue) {
        let input = document.querySelector(`[name='${inputName}']`)
        input.value = inputValue
        ReactTestUtils.Simulate.change(input)
    }

    function renderForm(requests) {
        renderComponent(<PlayForm requests={requests}/>)
    }

    function submitForm() {
        document.querySelector("button").click()
    }
})