import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, } from 'reactstrap';
import fb from '../firebase';
import { nameNoSpace } from '../scripts/strings';

class AwardsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // Handles the states for when you want to update a field
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  // Handles what happens when you actually press the update button
  handleUpdate = async () => {
    let newName = "";
    if (this.props.addition) {
      newName = "addition"
    } else {
      newName = nameNoSpace(this.props.item.data['name']);
    }

    let firebaseUpdateObject = {};
    // Iterate over all updated fields in this.state
    // eslint-disable-next-line
    for (let [key, value] of Object.entries(this.state)) {
      // Remove the temporary id of nameNoSpace so it matches the firebase key
      let fbKey = key.replace(newName, '');
      firebaseUpdateObject[fbKey] = value;
    }
    let itemRef = fb.awardsRef.doc(this.props.item.id);
    try {
      await itemRef.update(firebaseUpdateObject);
      console.log("Successfully updated");
    }
    catch (error) {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
    }
  }

  // Handles what happens when you delete an item
  handleDelete = async () => {
    // Get the id of the item we want to delete
    const { id } = this.props.item;

    await fb.awardsRef.doc(id).delete()
      .then(() => {
        console.log("Successfully deleted ", id);
      })
      .catch((err) => {
        console.error("Error deleting document: ", err);
      })
  }

  // Handles what happens when you want to add a new item
  handleNewSubmission = async () => {
    let newName = "";
    if (this.props.addition) {
      newName = "addition"
    } else {
      newName = nameNoSpace(this.props.item.data['name']);
    }

    let firebaseUpdateObject = {};
    // Iterate over all updated fields in this.state
    // eslint-disable-next-line
    for (let [key, value] of Object.entries(this.state)) {
      // Remove the temporary id of nameNoSpace so it matches the firebase key
      let fbKey = key.replace(newName, '');
      firebaseUpdateObject[fbKey] = value;
    }
    await fb.awardsRef.add(firebaseUpdateObject)
      .then((docRef) => {
        console.log("Document written with id ", docRef.id);
      })
      .catch((err) => {
        console.error("Error adding new document: ", err);
      })
  }

  render() {
    let newName = "";
    const { item } = this.props;

    // If in adding mode, make newName just 'addition' temporarily
    if (this.props.addition) {
      newName = "addition"
    } else {
      newName = nameNoSpace(item.data['name']);
    }

    // Use the name without spaces for unique key for form id's
    return (
      <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="name">Award Name</Label>
              <Input type="text" name="name" id={"name" + newName} placeholder={item ? item.data['name'] : ""} onChange={this.handleChange} />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="desc">Award Description</Label>
              <Input type="text" name="description" id={"description" + newName} placeholder={item ? item.data['description'] : ""} onChange={this.handleChange} />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="current">Order</Label>
              <Input type="number" name="order" id={"order" + newName} placeholder={item ? item.data['order'] : ""} onChange={this.handleChange} />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="current">Awarded when</Label>
              <Input type="text" name="awarded" id={"awarded" + newName} placeholder={item ? item.data['awarded'] : ""} onChange={this.handleChange} />
            </FormGroup>
          </Col>
        </Row>
        {
          this.props.addition
            ?
            <Row>
              <Col sm={6}>
                <Button onClick={this.handleNewSubmission}>Add</Button>
              </Col>
            </Row>
            :
            <Row>
              <Col sm={6}>
                <Button onClick={this.handleUpdate}>Update</Button>
              </Col>
              <Col sm={6}>
                <Button onClick={this.handleDelete}>Delete</Button>
              </Col>
            </Row>
        }
      </Form>
    );
  }
}

export default AwardsForm;