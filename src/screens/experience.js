import React, { Component } from 'react';
import {
  ListGroup,
  ListGroupItem,
  Alert,
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardHeader,
  Spinner,
} from 'reactstrap';
import '../App.css';

class Experience extends Component {
  componentDidMount() {
    if (!this.props.allData) {
      return;
    }

    if (this.props.allData.length === 0) {
      this.props.getData();
    }
  }

  render() {
    if (this.props.allData === undefined) {
      return (
        <Alert color="danger">
          Failed to load data. Please try again later.
          </Alert>
      )
    }

    if (this.props.allData.length === 0) {
      return <Spinner color="dark" className="spinner_center"/>;
    }

    let experienceItems = this.props.allData.map((item) => {
      const { data } = item;
      return (
        <ListGroupItem key={item.id}>
          <Card>
            {data.name && <CardHeader tag="h3" className="text-center">{data.name}</CardHeader>}
            <CardBody className="text-center">
              {data.title && <CardTitle tag="h5">{data.title}</CardTitle>}
              {data.start_date && data.end_date && <CardSubtitle><em>{data.start_date} - {data.end_date}</em></CardSubtitle>}
              {data.location && <CardSubtitle><small><em>{data.location}</em></small></CardSubtitle>}
              {data.description && <CardText>{data.description}</CardText>}
            </CardBody>
          </Card>
        </ListGroupItem>
      );
    });

    return (
      <ListGroup>
        {experienceItems}
      </ListGroup>
    );
  }
}

export default Experience;