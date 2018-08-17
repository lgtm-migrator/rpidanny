import React, { Component } from 'react'
import './styles.css'

class Dashboard extends Component {
  render () {
    return (
      <React.Fragment>
        <section id='home' className='large-header' >
          <canvas id='animated-canvas' />
          <div className='overlay typewriter'>
            <h1 id='main-title' className='main-title'>Abhishek Maharjan</h1>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default Dashboard
