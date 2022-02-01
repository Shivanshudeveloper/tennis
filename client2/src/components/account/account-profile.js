import { useRef, useState } from "react";
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

const user = {
  avatar: "/static/images/avatars/avatar_6.png",
  city: "Los Angeles",
  country: "USA",
  jobTitle: "Senior Developer",
  name: "Katarina Smith",
  timezone: "GTM-7",
};

export const AccountProfile = (props) => {
  const [profilePic, setProfilePic] = useState("");
  const [bannerPic, setBannerPic] = useState("");
  const profileInput = useRef();
  const bannerInput = useRef();

  console.log("profile: ", profilePic);
  console.log("banner: ", bannerPic);

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
            src={user.avatar}
            sx={{
              height: 64,
              mb: 2,
              width: 64,
            }}
          />
          <Typography color="textPrimary" gutterBottom variant="h5">
            {user.name}
          </Typography>
          <Typography color="textSecondary" variant="body2">
            {`${user.city} ${user.country}`}
          </Typography>
          <Typography color="textSecondary" variant="body2">
            {user.timezone}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions sx={{ display: "flex", flexDirection: "column" }}>
        <Button
          color="primary"
          fullWidth
          variant="text"
          onClick={() => profileInput.current.click()}
        >
          Upload profile picture
        </Button>
        <input
          style={{ display: "none" }}
          type="file"
          ref={profileInput}
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
        />
        <Button
          color="primary"
          fullWidth
          variant="text"
          onClick={() => bannerInput.current.click()}
        >
          Upload banner picture
        </Button>
        <input
          style={{ display: "none" }}
          type="file"
          ref={bannerInput}
          value={bannerPic}
          onChange={(e) => setBannerPic(e.target.value)}
        />
      </CardActions>
    </Card>
  );
};
