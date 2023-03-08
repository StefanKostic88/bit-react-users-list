import ContentWraper from "../components/ContentWraper";
import UserListItem from "../components/UserListItem/UserListItem";

const HomePage = ({ data }) => {
  const usersData = data.map((user) => {
    return {
      name: user.name.first + " " + user.name.last,
      email: user.email,
      image: user.picture.medium,
      dateOfBirth: new Date(user.dob.date)
        .toLocaleString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        })
        .split("/")
        .join("-"),
    };
  });

  return (
    <ContentWraper>
      {usersData.map((user, index) => (
        <UserListItem {...user} key={index} />
      ))}
    </ContentWraper>
  );
};

export default HomePage;
