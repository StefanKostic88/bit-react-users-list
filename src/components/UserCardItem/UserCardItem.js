import React from "react";

import { Card, CardMedia, CardContent, Typography, Stack } from "@mui/material";

const UserCardItem = ({ name, email, dateOfBirth, image }) => {
  return (
    <Card>
      <CardMedia
        sx={{ height: "340px", position: "relative" }}
        image={image}
        alt={name}
      >
        <Typography
          variant="h5"
          color="grey"
          sx={{ position: "absolute", top: "90%", left: "2.5%" }}
        >
          Olivier
        </Typography>
      </CardMedia>
      <CardContent>
        <Stack direction="row" justifyContent="space-between">
          <Typography gutterBottom>Name: {name}</Typography>
          <Typography>{email}</Typography>
        </Stack>
        <Stack>
          <Typography>{dateOfBirth}</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default UserCardItem;
