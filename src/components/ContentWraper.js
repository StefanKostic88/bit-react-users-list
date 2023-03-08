import React from "react";
import { Container, Box } from "@mui/material";
const ContentWraper = ({ children }) => {
  return (
    <Container maxWidth="lg" sx={{ paddingTop: 1 }}>
      <Box sx={(theme) => ({ marginTop: theme.mixins.toolbar })} />
      {children}
    </Container>
  );
};

export default ContentWraper;
