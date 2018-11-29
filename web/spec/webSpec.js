const React = require("react")
const ReactDOM = require("react-dom")
const ReactTestUtils = require("react-dom/test-utils")

class PlayForm extends React.Component {
    constructor(){
        super()
        this.state = {message:""}
    }

    handleSubmit(){
        this.props.requests.play("p1 throw placeholder", "p2 throw placeholder", this)
    }

    invalid(){
        this.setState({message: "INVALID"})
    }

    tie(){
        this.setState({message: "TIE"})
    }

    p1Wins(){
        this.setState({message: "P1 Wins!"})
    }

    p2Wins(){
        this.setState({message: "P2 Wins!"})
    }

    render(){
        return <div>
            {this.state.message}
            <input name="p1Throw"/>
            <button onClick={this.handleSubmit.bind(this)}>PLAY</button>
        </div>
    }
}

describe("play form", function () {
    describe("the game logic reported that the round was invalid", function () {
        beforeEach(function () {
            let alwaysInvalid = {
                play: function(p1, p2, ui){
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
                play: function(p1, p2, ui){
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
                play: function(p1, p2, ui){
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
                play: function(p1, p2, ui){
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

        renderForm({play: playSpy})

        let input = document.querySelector("[name='p1Throw']")
        input.value = "foo"
        ReactTestUtils.Simulate.change(input)
        //fill in p1 throw
        //fill in p2 throw
        //submit the form

        submitForm()

        //verify the game logic received those inputs
        expect(playSpy).toHaveBeenCalledWith("foo", "bar", jasmine.any(Object))
    })


    let domFixture

    beforeEach(function () {
        setupDOM()
    })

    afterEach(function () {
        cleanupDOM()
    })

    function setupDOM() {
        domFixture = document.createElement("div")
        domFixture.id = "hello"
        document.body.appendChild(domFixture)
    }

    function cleanupDOM() {
        domFixture.remove()
    }

    function renderForm(requests) {
        ReactDOM.render(
            <PlayForm requests={requests}/>,
            domFixture
        )
    }

    function page() {
        return domFixture.innerText;
    }

    function submitForm() {
        document.querySelector("button").click()
    }
})