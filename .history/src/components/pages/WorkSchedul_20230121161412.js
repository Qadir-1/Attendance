import React from "react";
import HOC from "../layout/HOC";
import { Button, Modal, Form, Container, Table } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { toast } from "react-toastify";

const data = [ 
  {
    office  : "Delhi" , 
    Emplyee : "Arun" , 
    WorkDate : "12/02/2023" , 
    WorkTitle : "Lorem Ipsum" , 
    WorkDetail : "Lorem Ipsum Lorem Ipsum Lorem Ipsum "
  },
  {
    office  : "Delhi" , 
    Emplyee : "Arun" , 
    WorkDate : "12/02/2023" , 
    WorkTitle : "Lorem Ipsum" , 
    WorkDetail : "Lorem Ipsum Lorem Ipsum Lorem Ipsum "
  },
  {
    office  : "Delhi" , 
    Emplyee : "Arun" , 
    WorkDate : "12/02/2023" , 
    WorkTitle : "Lorem Ipsum" , 
    WorkDetail : "Lorem Ipsum Lorem Ipsum Lorem Ipsum "
  },
  {
    office  : "Delhi" , 
    Emplyee : "Arun" , 
    WorkDate : "12/02/2023" , 
    WorkTitle : "Lorem Ipsum" , 
    WorkDetail : "Lorem Ipsum Lorem Ipsum Lorem Ipsum "
  },
  {
    office  : "Delhi" , 
    Emplyee : "Arun" , 
    WorkDate : "12/02/2023" , 
    WorkTitle : "Lorem Ipsum" , 
    WorkDetail : "Lorem Ipsum Lorem Ipsum Lorem Ipsum "
  },
  {
    office  : "Delhi" , 
    Emplyee : "Arun" , 
    WorkDate : "12/02/2023" , 
    WorkTitle : "Lorem Ipsum" , 
    WorkDetail : "Lorem Ipsum Lorem Ipsum Lorem Ipsum "
  },
]

const WorkSchedul = () => {
    const [modalShow, setModalShow] = React.useState(false);


    function MyVerticallyCenteredModal(props) {
      return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">Add State</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Form >
                <Form.Group className='mb-3'>
                  <Form.Label> State </Form.Label>
                  <Form.Control
                    type="text"
                  />
                </Form.Group>
  
                <Button variant="outline-success" onClick={() =>{
                  toast.success("Added")
                   props.onHide()}}>
                  Submit
                </Button>
              </Form>
            </Container>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      );
    }
  
  
  
    return (
      <>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        <section
          style={{
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            padding: "20px",
            width: "98%",
            marginLeft: "10px",
          }}
        >
          <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
            <span style={{ color: "black", fontSize: "15px", fontWeight: "400" }}>
              All States's
              <hr style={{ width: "70%" }} />
            </span>
            <Button
              style={{
                backgroundColor: "#4099ff",
                color: "#fff",
                borderRadius: "0",
                border: "1px solid #4099ff",
                padding: "10px",
              }}
              onClick={() => setModalShow(true)}
            >
              Add New
            </Button>
          </div>
  
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Office Location</th>
                <th>Employee</th>
                <th>Work Date</th>
                <th>Work Title</th>
                <th>Work Details</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((i, index) => (
                <tr key={index}>
                  <td> {i.office} </td>
                  <td> {i.Emplyee} </td>
                  <td> {i.WorkDate} </td>
                  <td> {i.WorkTitle} </td>
                  <td> {i.WorkDe} </td>
                  <td>
                    <AiFillDelete color="red" cursor={"pointer"} onClick={() => toast.success(" Deleted ")}  />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </section>
      </>
    );
  };

  
export default HOC(WorkSchedul)