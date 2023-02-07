/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import { Button, Modal, Form, Container, Table } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { toast } from "react-toastify";

const data = [ 
  {
    role : "User"
  },
  {
    role : "Admin"
  },
  {
    role : "Manager"
  },
  {
    role : "HOD"
  },
]


const CommonUser = () => {
  const [data, setData] = useState([]);

  const fetchHandler = async () => {
    try {
      const { data } = await axios.get(
        "http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:5002/api/customertohero_Router/get_customer_to_hero"
      );
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchHandler()
  },[])

  return (
    <>
      <div style={{ display: "flex", gap: "20px", marginBottom: "2%" }}>
        <img
          src={img}
          alt=""
          style={{
            backgroundColor: "#4099ff",
            padding: "8px",
            borderRadius: "5px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            width: "40px",
            height: "40px",
            marginTop: "5px",
          }}
        />
        <p style={{ color: "black", fontSize: "18px", margin: "0" }}>
          Common User's List <br />
          <span style={{ fontSize: "14px" }}>All Common User's List</span>
        </p>
      </div>

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
            All Common User's
            <hr style={{ width: "70%" }} />
          </span>
        </div>

        <div
          style={{
            marginTop: "2%",
          }}
        >
          <Table striped bordered hover>
            <thead>
              <tr>
                <th> Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>City</th>
                <th>Gender</th>
                <th>DOB</th>
                <th>Website</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
           {data?.data?.map((i , index) => (
            <tr key={index}>
              <td>{i.name} </td>
              <td>{i.email} </td>
              <td>{i.phoneNumber} </td>
              <td>{i.city} </td>
              <td>{i.gender} </td>
              <td>{i.birth.slice(0 ,10)} </td>
              <td> {i.website} </td>
              <td> {i.rating} </td>
            </tr>
           ))}
            </tbody>
          </Table>
        </div>
      </section>
    </>
  );
};

export default HOC(CommonUser);
