import React, { Component } from 'react'
import { VerticalTimeline } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import Company from '../Company'
import PropTypes from 'prop-types'

class Work extends Component {
  constructor (props) {
    super(props)
    this.state = {
      companies: props.companies
    }
  }

  render () {
    const { companies } = this.state
    return (
      <div>
        <div className='inner-title'>
          <h3>My Experiences</h3>
          <p>What I did in the past and what I am doing now.</p>
        </div>
        <div className='inner-content'>
          <VerticalTimeline>
            {
              companies.map((company, i) => <Company data={company} key={i} />)
            }
          </VerticalTimeline>
        </div>
      </div>
    )
  }
}

Work.propTypes = {
  companies: PropTypes.array.isRequired
}

export default Work
