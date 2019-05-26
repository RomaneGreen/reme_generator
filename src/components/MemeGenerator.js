import React, { Component } from 'react'
import '../App.css'


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
            // console.log(memes)
            // console.log(this.state.randomImgs[3].url)
        })
        
       
       
    }

    submitForm = (ev) => {
            ev.preventDefault()
        const newImage = this.state.randomImgs[Math.floor(Math.random()*100)].url
            this.setState({
                image: newImage
            })
           
    }


  render() {
   
    return (
      <div>
            <h2>Random Meme Generator</h2>
        <form>
            <img style={{ border: '50px solid black', height:'500px', width:'500px'}} alt="initialImg" src={this.state.image}></img>
            {/* <input type="text" placeholder="enter topic..."></input> */}
            <button style={{ display: "block" }}type="submit" onClick={this.submitForm}>Click to Generate random Meme</button>
        </form>
      </div>
    )
    }
}
