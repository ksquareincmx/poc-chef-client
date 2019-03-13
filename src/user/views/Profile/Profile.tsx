import React from "react";
import styled from "@emotion/styled";
import { Header } from "src/partner/modules/Header";

const Input = styled.input({
  width: "100%",
  height: "100%",
  border: "0",
  right: "10px",
});

const Fieldset = styled.fieldset({
  position: "absolute",
  padding: "2px",
  background: "white",
  width: "200px",
  border: "2px solid gray ",
  borderRadius: "8px 8px 8px 8px",
  bottom: "120px",
});

const Legend = styled.legend({
  color: "#e83f5d",
  fontWeight: "bold",
  fontSize: "16px",
});

const SaveButton = styled.button({
  position: "absolute",
  borderRadius: "35px",
  color: "#fff",
  padding: "10px 30px",
  background: "linear-gradient(to right, rgba(248, 130, 61,1) 0%, rgba(232,63,93, 1) 100%)",
  border: "0px",
  width: "175px",
  height: "50px",
  fontSize: "16px",
  bottom: "40px",
  boxShadow: "-2px 2px 10px #bdbdbd",
});

const ListItem = styled.div({
  boxShadow: "-2px 2px 10px #bdbdbd",
  background: "white",
  width: "90%",
  height: "350px",
  borderRadius: "10px",
  marginBottom: "10px",
  paddingBottom: "10px",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const ProfileContainer = styled.div({
  width: "100%",
  display: "flex",
  position: "relative",
  justifyContent: "center",
  marginTop: "-25px ",
});

const ImageButton = styled.button({
  position: "absolute",
  top: "50px",
  background: "gray",
  width: "125px",
  height: "125px",
  borderRadius: "50%",
  border: "2px solid white",
  boxShadow: "-2px 2px 10px #bdbdbd",
});

export const Profile: React.SFC = () => {
  const [name, setName] = React.useState("");

  const handleChangeName = (e: any) => {
    setName(e.target.value);
  };

  return (
    <div>
      <Header title="My orders" />
      <ProfileContainer>
        <ListItem>
          <ImageButton />
          <Fieldset>
            <Legend>Name</Legend>
            <Input type="text" name="name" value={name} onChange={handleChangeName} />
          </Fieldset>
          <SaveButton>Save</SaveButton>
        </ListItem>
      </ProfileContainer>
    </div>
  );
};
