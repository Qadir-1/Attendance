/** @format */

import React from "react";
import HOC from "../layout/HOC";
import {
  Table
} from "react-bootstrap";

const data = [
  {
   Name : "Lorem Ipsum" , 
   Date : "12/02/2023",
   type : "lorem ipsum" , 
   reason : "lorem ipsum lorem" , 
  },
  {
   Name : "Lorem Ipsum" , 
   Date : "12/02/2023",
   type : "lorem ipsum" , 
   reason : "lorem ipsum lorem" , 
  },
];

const Leave = () => {

  const fetchData = asycn 
 
    return (
        <>
      
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
                All Leave's
                <hr style={{ width: "70%" }} />
              </span>
            </div>
    
            <div style={{ width: "100%", overflowX: "auto" }}>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Reason</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((i, index) => (
                    <tr key={index}>
                    <td>{i.Name} </td>
                    <td>{i.Date} </td>
                    <td>{i.type} </td>
                    <td>{i.reason} </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </section>
        </>
      );
    };
export default HOC(Leave)