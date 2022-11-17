import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import SearchTicket from "../search-form/SearchTicket";
import TableTicket from "../table-ticket/TableTicket";
import dataTable from "../../assets/data/data-ticket.json";
import {Link} from 'react-router-dom'


const TicketLists = () => {
  const [searchStr, setSearchStr] = useState("");
  const [sortTickets, setSortTicket] = useState(dataTable);

  useEffect(() => {}, [searchStr, sortTickets]);

  const handleOnChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setSearchStr(value);
    sortTicket(value);
  };

  const sortTicket = (str) => {
    let sortedTickets = dataTable.filter((row) =>
      row.topic.toLowerCase().includes(str.toLowerCase())
    );
    setSortTicket(sortedTickets);
    console.log("1");
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col>
        <Link to = '/add-ticket'>
          <Button variant="info">Добавить новую заявку</Button>
        </Link>
        </Col>
        <Col>
          <SearchTicket searchStr={searchStr} handleOnChange={handleOnChange} />
        </Col>
      </Row>
      <hr />
      <Row className="mt-5">
        <Col>
          <TableTicket dataTickets={sortTickets} />
        </Col>
      </Row>
    </Container>
  );
};

export default TicketLists;
