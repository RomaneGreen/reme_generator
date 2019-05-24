import React, { Component } from 'react'

export default class MemeGenerator extends Component {

    constructor(props){
        super(props) 
            this.state = {

                image:'https://i.imgflip.com/1bij.jpg'
            }
        
        }

    componentDidMount() {
        alert("halo!")
    }

    submitForm = () => {

        
            alert('damn!')
    }


  render() {
   
    return (
      <div>
        <form>
            <img style={{ border: "100px solid aqua"}} alt="initimg" src={this.state.image}></img>
            <input type="text" placeholder="enter topic..."></input>
            <button type="submit" onClick={this.submitForm}>Generate</button>
        </form>
      </div>
    )
    }
}
