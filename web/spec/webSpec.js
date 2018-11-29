const React = require("react")
const ReactDOM = require("react-dom")

class PlayForm extends React.Component {
    constructor(){
        super()
        this.state = {message:""}
    }

    handleSubmit(){
        this.setState({message: "INVALID"})
    }

    render(){
        return <div>
            {this.state.message}
            <button onClick={this.handleSubmit.bind(this)}>PLAY</button>
        </div>
    }
}

describe("play form", function () {
    describe("the game logic reported that the round was invalid", function () {
        it("display 'INVALID' to the user", function () {
            let domFixture = document.createElement("div")
            domFixture.id = "hello"
            document.body.appendChild(domFixture)

            let alwaysInvalid = {
                play: function(p1, p2, ui){
                    ui.invalid()
                }
            }

            ReactDOM.render(
                <PlayForm requests={alwaysInvalid}/>,
                domFixture
            )

            expect(domFixture.innerText).not.toContain("INVALID")
            document.querySelector("button").click()
            expect(domFixture.innerText).toContain("INVALID")

            domFixture.remove()
        })
    })

    describe("the game logic reported that P1 won", function () {
        it("jklfdsjaklfdsa", function () {

        })

    })

    describe("the game logic reported that P2 won", function () {
        it("jklfdsjaklfdsa", function () {

        })

    })

    describe("the game logic reported that they tied", function () {
        it("jklfdsjaklfdsa", function () {

        })

    })























})