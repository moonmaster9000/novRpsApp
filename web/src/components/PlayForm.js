const React = require("react")

class PlayForm extends React.Component {
    constructor(){
        super()
        this.state = {message:""}
    }

    handleSubmit(){
        this.props.requests.playRound(this.state.p1Throw, this.state.p2Throw, this)
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

    handleInputChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    render(){
        return <div>
            {this.state.message}
            <input name="p1Throw" onChange={this.handleInputChange.bind(this)}/>
            <input name="p2Throw" onChange={this.handleInputChange.bind(this)}/>
            <button onClick={this.handleSubmit.bind(this)}>PLAY</button>
        </div>
    }
}

module.exports = PlayForm