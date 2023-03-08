import React from "react";
import ContentWraper from "../components/ContentWraper";
import UserCardItem from "../components/UserCardItem/UserCardItem";

import { Grid } from "@mui/material";

const convertToStars = (str) => {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    newStr += "*";
  }
  return newStr;
};

const hideEmail = (str1, str2, str3, cb) => {
  return str1 + cb(str2) + str3;
};

const CardOverview = ({ data }) => {
  const usersData = data.map((user) => {
    return {
      name: user.name.first,
      email: hideEmail(
        user.email.slice(0, 3),
        user.email.slice(3, user.email.indexOf("@")),
        user.email.slice(user.email.indexOf("@")),
        convertToStars
      ),
      image: user.picture.large,
      dateOfBirth: new Date(user.dob.date)
        .toLocaleString("en-US", {
          year: "numeric",
          month: "long",
          day: "2-digit",
        })
        .split("/")
        .join("-"),
    };
  });

  return (
    <ContentWraper>
      <Grid
        container
        spacing={5}
        justifyContent="center"
        sx={{ paddingTop: 2, paddingBottom: 5 }}
      >
        {usersData.map((user, index) => (
          <Grid key={index} item xms={12} sm={6} md={4}>
            <UserCardItem {...user} />
          </Grid>
        ))}
      </Grid>
    </ContentWraper>
  );
};

export default CardOverview;
