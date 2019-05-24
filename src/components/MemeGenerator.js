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

  render() {


    
    
    
    
    return (
      <div>
        <form>

            <button>Generate</button>
        </form>
      </div>
    )
    }
}
