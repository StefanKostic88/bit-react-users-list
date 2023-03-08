import React from "react";
import { Stack, Box, Typography } from "@mui/material";

const UserListItem = ({ name, email, dateOfBirth, image }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 2, sm: 1 }}
        sx={(theme) => ({
          paddingLeft: 2,
          marginTop: 1,
          paddingTop: 1,
          paddingBottom: 1,
          backgroundColor: theme.palette.grey[100],
          boxShadow: `0 0 0 1px ${theme.palette.grey[400]}`,
          borderRadius: "3px",
        })}
      >
        <img
          style={{ height: "45px", width: "45px", borderRadius: "50%" }}
          src={image}
          alt={name}
        />
        <Box>
          <Typography variant="body1">Name: {name}</Typography>
          <Typography variant="body2">Email: {email}</Typography>
          <Typography variant="body2">Date of Birth: {dateOfBirth}</Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default UserListItem;
