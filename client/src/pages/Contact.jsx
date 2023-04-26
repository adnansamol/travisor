import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { colors } from "../constant/colors";

const Container = styled.div`
  background-color: whitesmoke;
  width: 100%;
  min-height: 100vh;
  padding: 150px;
`;
const Card = styled.div`
  margin: auto;

  width: 600px;

  background-color: white;
  padding: 20px 25px;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
`;
const Title = styled.div`
  font-size: 35px;
  font-weight: 600;
  text-align: center;
`;
const Form = styled.form``;
const Label = styled.label`
  padding: 10px 5px 5px;
`;
const Input = styled.input`
  width: 100%;
  font-size: 16px;
  padding: 5px 10px;
  border: 1px solid ${colors.lightgray};
  border-radius: 5px;
  &:focus {
    outline: none;
    border: 1px solid ${colors.teal500};
  }
`;
const TextArea = styled.textarea`
  width: 100%;
  font-size: 16px;
  padding: 10px 15px;
  border: 1px solid ${colors.lightgray};
  resize: none;
  border-radius: 5px;

  &:focus {
    outline: none;
    border: 1px solid ${colors.teal500};
  }
`;
const Row = styled.div`
  display: flex;
  gap: 10px;
`;
const Column = styled.div`
  flex: 50%;
`;
const SubmitButton = styled.a`
  background-color: ${colors.dodgerblue};
  display: block;
  text-align: center;
  color: white;
  text-decoration: none;
  padding: 8px 16px;
  width: 100%;
  margin-top: 10px;
  border-radius: 5px;

  &:hover {
    color: white;
    filter: brightness(95%);
  }
`;
const CallUsText = styled.div`
  text-align: center;
  font-size: 18px;
  color: ${colors.gray};
  font-weight: 600;
`;
const TollFreeNumber = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  color: ${colors.dodgerblue};
`;
const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const setMessageHandler = (event) => {
    const body = `From: ${phone}, ${name}%0D%0A${event.target.value}`;
    setMessage(body.replace(" ", "%20"));
  };
  return (
    <>
      <Header isStatic={true} />
      <Container>
        <Card>
          <Title>Contact Us</Title>

          <Form>
            <Row>
              <Column>
                <Label>Name</Label>
                <Input
                  name="name"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </Column>
              <Column>
                <Label>Phone</Label>
                <Input
                  name="phone"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Column>
            </Row>

            <Label>Message</Label>
            <TextArea
              rows={3}
              name="message"
              required
              onChange={setMessageHandler}
            />
            <SubmitButton
              href={`mailto:samoladnan@gmail.com?subject=Travisor&body=${message}`}
            >
              Submit
            </SubmitButton>
          </Form>
          <h4 style={{ textAlign: "center", margin: 10 }}>OR</h4>
          <CallUsText>Call us on our Toll free Number</CallUsText>
          <TollFreeNumber>+91 9898-700-5555</TollFreeNumber>
        </Card>
      </Container>
      <Footer />
    </>
  );
};

export default Contact;
