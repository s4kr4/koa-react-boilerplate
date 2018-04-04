import React from 'react'
import axios from 'axios'

export default class Example extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {}
    }
  }

  componentDidMount() {
    axios.get('/api/example')
      .then((res) => {
        this.setState({
          data: res.data
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <div className="example">
        {this.state.data.foo}
      </div>
    )
  }
}
