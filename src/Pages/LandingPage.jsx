import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
function LandingPage() {
  return (
    <>
    {/* header */}
    <Row className='mt-5 align-items-center justify-content-between w-100'>
      <Col></Col>
      <Col lg={5}>
        <h1 style={{ fontSize: "30px", color: "red" }}>Welcome To <span>Media Player</span></h1>
        <p>Lorem ipsum dolor, sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, impedit. Eligendi vero repellat est labore iusto obcaecati repudiandae deleniti laboriosam! Excepturi quaerat fugiat beatae veniam ullam, quas minima voluptatibus doloribus. consectetur adipisicing elit... Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam ipsam recusandae natus quos impedit placeat consequuntur, assumenda consectetur sit laudantium explicabo ut ipsa id iste qui earum? Sequi quo iure, iusto dolorum eius reprehenderit molestias illum consectetur perferendis quis odio?</p>
        <Link to={"/Home"}><Button className="btn btn-info">Get Started</Button></Link>
      </Col>
      <Col lg={5}>
        <img src="https://media.tenor.com/OiwgU0MtwOcAAAAC/213.gif" alt="Exciting Media Animation"/>
      </Col>
      <Col></Col>
    </Row>

{/* card-section */}
    <div className="container mt-3 d-flex justify-content-center align-items-center flex-coloumn w-100 mb-5">
      <h2 className="text-center text-danger">Features</h2></div>
      <div className="container d-flex  align-items-center justify-content-between w-100 mt-5 mb-5">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn.dribbble.com/users/6190/screenshots/4263671/browserpreview_tmp-1.gif" />
    <Card.Body>
        <Card.Title>Video Manager</Card.Title>
        <Card.Text className='mt-3 mb-2'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Go somewhere</Button>
      </Card.Body>
    </Card>
      <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" style={{height:"215px"}} src="https://i.pinimg.com/originals/c6/c1/1d/c6c11d8ba0b9f26caf0a6a8ee3a3e78e.gif" />
      <Card.Body>
        <Card.Title>Categorized Videos</Card.Title>
        <Card.Text className='mt-3 mb-2'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Go somewhere</Button>
      </Card.Body>
    </Card>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/63/ea/7b/63ea7bc8ade0d560728dbe29a9bfe091.gif" />
      <Card.Body>
        <Card.Title>WatchHistory</Card.Title>
        <Card.Text className='mt-3 mb-2'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Go somewhere</Button>
      </Card.Body>
    </Card>

      </div>

{/* details section */}
<div className="container border border-2 d-flex align-items justify-content-center mt-5 p-3">
  <div className="col-lg-5">
    <h4 className='text-danger fw-bolder'>Lets Enjoy The Youth</h4>
    <h6 className='m-3'><span className='fw-bolder text-warning'>Play Everything</span>:Lorem ipsum dolor, sit amet consectetur adipisicing elit. A soluta praesentium optio accusamus iusto, necessitatibus corrupti eveniet nesciunt, quis ullam veniam consequatur veritatis quidem tenetur doloremque error. Modi, consectetur a.</h6>

    <h6 className='m-3'><span className='fw-bolder text-warning'>Catogorize Videos</span>:Lorem ipsum dolor, sit amet consectetur adipisicing elit. A soluta praesentium optio accusamus iusto, necessitatibus corrupti eveniet nesciunt, quis ullam veniam consequatur veritatis quidem tenetur doloremque error. Modi, consectetur a.</h6>

    <h6 className='m-3'><span className='fw-bolder text-warning'>Manage videos</span>:Lorem ipsum dolor, sit amet consectetur adipisicing elit. A soluta praesentium optio accusamus iusto, necessitatibus corrupti eveniet nesciunt, quis ullam veniam consequatur veritatis quidem tenetur doloremque error. Modi, consectetur a.</h6>
  </div>
  <div className="col-lg-5">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/B2UBMTA57JI?si=6G1Rb3ri6gITT1we" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>
  </div>
</div>

    </>

  );
}

export default LandingPage;