import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import SearchTicket from "../search-form/SearchTicket";
import TableTicket from "../table-ticket/TableTicket";
import dataTable from "../../assets/data/data-ticket.json";
import {Link} from 'react-router-dom'
import { useDispatch } from "react-redux";
import {fetchAllticket} from './ticketAction'


const TicketLists = () => {
  const dispatch = useDispatch()
  const [searchStr, setSearchStr] = useState("");
  const [sortTickets, setSortTicket] = useState(dataTable);

  useEffect(() => {
    dispatch(fetchAllticket())
  }, [searchStr, sortTickets]);


  return (
    <Container className="mt-5">
      <Row>
        <Col>
        <Link to = '/add-ticket'>
          <Button variant="info">Добавить новую заявку</Button>
        </Link>
        </Col>
        <Col>
          <SearchTicket/>
        </Col>
      </Row>
      <hr />
      <Row className="mt-5">
        <Col>
          <TableTicket />
        </Col>
      </Row>
    </Container>
  );
};

export default TicketLists;
