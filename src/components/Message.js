import React from "react";

const Message = ({ msg }) => {
  const styles = {
    padding: "1rem",
    marginBottom: "1rem",
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
    backgroundColor: "red",
  };

  return (
    <>
      <h2 style={styles}>{msg}</h2>
    </>
  );
};

export default Message;
