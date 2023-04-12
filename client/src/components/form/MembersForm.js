import React, { useState } from "react";
import styled from "styled-components";
import Button from "../ui/Button";

const Container = styled.div``;
const Form = styled.form``;
const FormLabel = styled.label``;
const FormInput = styled.input``;
const AddMember = styled(Button)``;
const MembersForm = () => {
  const [members, setMembers] = useState(1);
  return (
    <Container>
      <AddMember onClick={() => setMembers((old) => old + 1)}>
        Add Guest
      </AddMember>
      {Array.from(Array(members)).map((_, i) => (
        <Form>
          <FormLabel>Full name</FormLabel>
          <FormInput />
          <FormLabel>Age</FormLabel>
          <FormInput />
        </Form>
      ))}
    </Container>
  );
};

export default MembersForm;
