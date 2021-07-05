import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export class FavoriteList extends Component {
  render() {
    return (
      this.props.apiListData.map((obj, idx) => {
        return (
          <div key={idx}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={obj.img} />
              <Card.Body>
                <Card.Title>{obj.name}</Card.Title>
                <Card.Text>
                  {obj.gender}
                </Card.Text>
                <Card.Text>
                  {obj.psiPowers}
                </Card.Text>
                <Button onClick={e => this.props.deleteItem(obj.slug)} variant="primary">Delete</Button>
                <Button onClick={e => this.props.showForm(obj.slug, obj.psiPowers)} variant="primary">Update</Button>
              </Card.Body>
            </Card>
          </div>
        )
      })
    )
  }
}

export default FavoriteList