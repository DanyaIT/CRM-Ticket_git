import React from "react";
import { Table } from "react-bootstrap";

const TableTicket = ({ dataTickets }) => {
  if(dataTickets.length)
  return (
    <Table striped bordered hover className="text-center">
      <thead>
        <tr>
          <th>#</th>
          <th>Тема</th>
          <th>Статус</th>
          <th>Дата просмотрапше</th>
        </tr>
      </thead>
      <tbody>
        {dataTickets.length? 
        dataTickets.map((row) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.topic}</td>
            <td>{row.status}</td>
            <td>{row.addedDat}</td>
          </tr>
        ))
        : 
        <tr>
            <td colSpan='4' className="text-center">Заявок нет</td>
        </tr>
        }
      </tbody>
    </Table>
  );
};

export default TableTicket;
