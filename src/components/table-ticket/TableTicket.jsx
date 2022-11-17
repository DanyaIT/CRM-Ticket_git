import React from "react";
import { Table } from "react-bootstrap";
import {Link} from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'

const TableTicket = ({ dataTickets }) => {
  if(dataTickets.length)
  return (
    <Table striped bordered hover className="text-center">
      <thead>
        <tr>
          <th>#</th>
          <th>Тема</th>
          <th>Статус</th>
          <th>Дата просмотра</th>
        </tr>
      </thead>
      <tbody>
        {
        dataTickets.length? 
        dataTickets.map((row) => (
          <LinkContainer to = {`/ticket/${row.id}`}>
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.topic}</td>
            <td>{row.status}</td>
            <td>{row.addedDat}</td>
          </tr>
          </LinkContainer>
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
