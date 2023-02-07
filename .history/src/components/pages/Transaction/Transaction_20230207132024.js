import React, { useCallback, useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import { Button, Modal, Form, Container, Table } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { toast } from "react-toastify";
import axios from "axios";

const Transaction = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [data, setData] = useState([]);

  const AdminToken = localStorage.getItem("token");

  const fetchRoles = useCallback(async () => {
    try {
      const { data } = await axios.get(
        "https://nxyf2bcbj9.execute-api.ap-south-1.amazonaws.com/dev/api/v1/admin/districts",
        {
          headers: {
            Authorization: `Bearer ${AdminToken}`,
          },
        }
      );
      setData(data);
    } catch (err) {
      console.log(err);
    }
  }, [AdminToken]);

  useEffect(() => {
    fetchRoles();
  }, [fetchRoles]);

  const deleteHandler = async (id) => {
    try {
      const { data } = await axios.delete(
        `https://nxyf2bcbj9.execute-api.ap-south-1.amazonaws.com/dev/api/v1/admin/districts/${id}`,
        {
          headers: {
            Authorization: `Bearer ${AdminToken}`,
          },
        }
      );
      toast.success(`${data?.msg}`);
      fetchRoles();
    } catch (err) {
      console.log(err);
    }
  };


  function MyVerticallyCenteredModal(props) {
    const [district, setRole] = useState("");

    const AddRole = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.post(
          "https://nxyf2bcbj9.execute-api.ap-south-1.amazonaws.com/dev/api/v1/admin/districts",
          {
            district,
          },
          {
            headers: {
              Authorization: `Bearer ${AdminToken}`,
            },
          }
        );
        toast.success(data?.msg);
        fetchRoles();
        props.onHide();
      } catch (err) {
        console.log(err);
      }
    };
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Add Medical Officer's</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
          <Form onSubmit={AddRole}>
              <Form.Group className='mb-3'>
                <Form.Label> Medical Officer </Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setRole(e.target.value)}
                />
              </Form.Group>
              <Button variant="outline-success" type="submit">
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
            All Medical Officer's
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
              <th>Medical Officer</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {data?.data?.map((i, index) => (
              <tr key={index}>
                <td> {i.district} </td>
                <td>
                  <AiFillDelete
                    color="red"
                    cursor={"pointer"}
                    onClick={() => deleteHandler(i._id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </section>
    </>
  );
};


export default HOC(Transaction);
