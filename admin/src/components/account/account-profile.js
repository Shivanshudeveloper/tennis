import { useEffect, useRef, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import axios from "axios";
// Get access to the sessionStorage object for userId and userEmail
import useSessionStorage from "src/hooks/useSessionStorage";
import { API_SERVICE } from "src/config/URI";

export const AccountProfile = (props) => {
  // const [profilePic, setProfilePic] = useState("");
  // const [bannerPic, setBannerPic] = useState("");
  // const profileInput = useRef();
  // const bannerInput = useRef();

  // console.log("profile: ", profilePic);
  // console.log("banner: ", bannerPic);

  const userId = useSessionStorage('userId')
  let [user, setUser] = useState()

  useEffect(() => {

    if (!userId)
      return

    let baseURL = `${API_SERVICE}/api/v1/main/users/${userId}`;

    axios.get(baseURL)
      .then(result => {
        setUser(result.data)
      })
      .catch(err => {
        console.log(err)
      })


  }, [userId, props.toggler])


  return (
    <Card {...props}>
      <CardContent>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Avatar
            src="/static/images/avatars/avatar_6.png"
            sx={{
              height: 64,
              mb: 2,
              width: 64,
            }}
          />
          <Typography color="textPrimary" gutterBottom variant="h5">
            {user?.firstName + " " + user?.lastName}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
    </Card>
  );
};
