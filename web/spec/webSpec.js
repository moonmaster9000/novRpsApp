const React = require("react")
const ReactDOM = require("react-dom")

class PlayForm extends React.Component {
    render(){
        return <h1>Hello World!</h1>
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

            document.querySelector("button").click()
            expect(domFixture.innerText).toContain("INVALID")
        })
    })
})