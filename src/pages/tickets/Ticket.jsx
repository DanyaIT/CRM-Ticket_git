import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Spinner, Alert } from "react-bootstrap";
import Message from "../../components/message/Message";
import MessageReply from "../../components/message/MessageRaply";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchSingleTicket, closeTicket } from "../../components/ticket-listining/ticketAction";

const Ticket = () => {
  const dispatch = useDispatch();
  const { tid } = useParams();
  const { isLoading, selectedTicket, error, replyTicketFail, replyMessage} = useSelector(
    (state) => state.ticket
  )
  useEffect(() => {
    dispatch(fetchSingleTicket(tid));
  }, [tid, dispatch]);

  return (
    <Container>
      <Row className="mt-3">
        <Row>
          {isLoading && <Spinner variant="primary" animation="border" />}
          {error && <Alert variant="danger">{error}</Alert>}
          {replyTicketFail && <Alert variant="danger">{replyTicketFail}</Alert>}
          {replyMessage && <Alert variant="success">{replyMessage}</Alert>}
        </Row>
        <Col>
          <div className="topic">Тема: {selectedTicket.subject}</div>
          <div className="date">Дата прочтения: {selectedTicket.openAt && new Date(selectedTicket.openAt).toLocaleString('ru-GB')}</div>
          <div className="status">Cтатус: {selectedTicket.status}</div>
        </Col>
        <Col className="text-end mt-3">
          <Button variant="info"
          onClick={() => dispatch(closeTicket(tid))}
          disabled = {selectedTicket.status === 'Закрыт'}
          >
          Закрыть заявку
          </Button>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Message message={selectedTicket.conversations} />
        </Col>
      </Row>
      <Row>
        <Col>
          <MessageReply ticketId={tid} />
        </Col>
      </Row>
    </Container>
  );
};

export default Ticket;
