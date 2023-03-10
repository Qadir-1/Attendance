/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import { AiFillDelete } from "react-icons/ai";
import { toast } from "react-toastify";

const users = [
  {
    name: "Service",
    price: "45,000",
  },
  {
    name: "Service1",
    price: "5000",
  },
];

const Labour = () => {
  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Services
          </span>
        </div>
      </section>

      <Table
        striped
        bordered
        hover
        style={{
          marginTop: "2%",
          scrollBehavior: "smooth",
          overflow: "scroll",
        }}
      >
        <thead>
          <tr>
            <th>Image</th>
            <th> Service Name </th>
            <th> Price </th>

            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((i, index) => (
            <tr key={index}>
              <td> 
              <img src='data:image/jpeg;base64,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'
              </td>
              <td> {i.name} </td>
              <td> {i.price} </td>
              <td>
                <div style={{ display: "flex", gap: "10px" }}>
                  <AiFillDelete
                    color="red"
                    cursor="pointer"
                    onClick={() => toast.success("Labour Deleted SuccessFully")}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default HOC(Labour);
