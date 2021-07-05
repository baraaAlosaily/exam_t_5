import axios from 'axios'
import React, { Component } from 'react'
import Apidata from './Apidata'
export class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apiData: [],
      showdata: false,
      message: '',
      showFavorite: false
    }
  }
  componentDidMount = async () => {
    const request = await axios.get(`http://localhost:8080/game`)
    this.setState({
      apiData: request.data,
      showdata: true
    })
  }
  addToFavorite = async (objData) => {
    const postReq = await axios.post(`http://localhost:8080/game/list`, objData)
    this.setState({
      message: postReq.data,
      showFavorite: true
    })
  }
  render() {
    return (
      <>
        {
          this.state.showdata &&
          <Apidata apiData={this.state.apiData} addToFavorite={this.addToFavorite} />
        }
      </>
    )
  }
}

export default Main
