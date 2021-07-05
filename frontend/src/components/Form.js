import React, { Component } from 'react'

export class Form extends Component {
  render() {
    return (

      <form onSubmit={this.props.updateItem}>
        <input onChange={this.props.changedesc} type="text" value={this.props.psiPowers} />
        <input type="submit" value="Update" />
      </form>

    )
  }
}

export default Form
