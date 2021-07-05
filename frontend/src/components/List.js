import React, { Component } from 'react'
import axios from 'axios'
import FavoriteList from './FavoriteList'
import Form from './Form'
export class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apiListData: [],
      showListdata: false,
      message: '',
      showFavorite: false,
      slug: '',
      psiPowers: '',
      showForm: false
    }
  }
  showForm = async (slug, psiPowers) => {
    this.setState({
      slug: slug,
      psiPowers: psiPowers,
      showForm: true
    })
  }
  componentDidMount = async () => {
    const request = await axios.get(`http://localhost:8080/game/list`)
    this.setState({
      apiListData: request.data,
      showListdata: true
    })
  }
  deleteItem = async (slug) => {
    await axios.delete(`http://localhost:8080/game/list/${slug}`)
    const newFavList = this.state.apiListData.filter(obj => obj.slug !== slug)
    this.setState({
      apiListData: newFavList
    })
  }
  changedesc = (e) => this.setState({ psiPowers: e.target.value })
  updateItem = async (e) => {
    e.preventDefault()
    const request = await axios.put(`http://localhost:8080/game/list/${this.state.slug}`, { psiPowers: this.state.psiPowers })
    this.setState({
      apiListData: request.data
    })
  }
  render() {
    return (
      <>
        {
          this.state.showForm &&
          <Form
            changedesc={this.changedesc}
            updateItem={this.updateItem}
            psiPowers={this.state.psiPowers} />
        }
        {
          this.state.showListdata &&
          <FavoriteList
            apiListData={this.state.apiListData}
            deleteItem={this.deleteItem}
            showForm={this.showForm} />
        }
      </>
    )
  }
}

export default List
