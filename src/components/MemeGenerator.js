import React, { Component } from 'react'

export default class MemeGenerator extends Component {

    constructor(props){
        super(props) 
            this.state = {

                image:'https://i.imgflip.com/1bij.jpg',
                randomImgs: []
            }
        
        }

    componentDidMount() {
        fetch('https://api.imgflip.com/get_memes').
        then(response => response.json()).
        then( response => {
            const  memes  = response.data.memes
            this.setState({
                randomImgs : memes
            })
            console.log(memes)
            console.log(this.state.randomImgs[3].url)
        })
        
        alert("halo!")
       
    }

    submitForm = (ev) => {
            ev.preventDefault()
        const newImage = this.state.randomImgs[3].url
            this.setState({
                image: newImage
            })
            alert('damn!')
    }


  render() {
   
    return (
      <div>
        <form>
            <img style={{ border: "100px solid aqua"}} alt="initialImg" src={this.state.image}></img>
            <input type="text" placeholder="enter topic..."></input>
            <button type="submit" onClick={this.submitForm}>Generate</button>
        </form>
      </div>
    )
    }
}
