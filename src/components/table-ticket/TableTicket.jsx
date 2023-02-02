import React from "react";
import { Table } from "react-bootstrap";
import {Link} from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'
import { useSelector } from "react-redux";

const TableTicket = () => {
  const {tickets, isLoading, error, searchTicketsList} = useSelector(state => state.ticket)
  if(isLoading) return <h1>Загрузка...</h1>
  if(error) return <h1>{error}</h1>
  
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
        searchTicketsList.length? 
        searchTicketsList.map((row) => (
          <LinkContainer to = {`/ticket/${row._id}`} key = {row._id}>
          <tr key={row._id}>
            <td>{row._id}</td>
            <td>{row.subject}</td>
            <td>{row.status}</td>
            <td>{row.openAt}</td>
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
