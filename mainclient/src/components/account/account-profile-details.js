import { useState, useEffect, useRef } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@mui/material";
import axios from "axios";
// Get access to the sessionStorage object for userId and userEmail
import useSessionStorage from "src/hooks/useSessionStorage";

const states = [
  {
    value: "alabama",
    label: "Alabama",
  },
  {
    value: "new-york",
    label: "New York",
  },
  {
    value: "san-francisco",
    label: "San Francisco",
  },
];

export const AccountProfileDetails = (props) => {
  const logoInput = useRef();

  const [values, setValues] = useState({
    firstName: "Katarina",
    lastName: "Smith",
    email: "demo@devias.io",
    phone: "",
    state: "Alabama",
    country: "USA",
    tennisCourtName: "",
    tennisCourtDesc: "",
    tennisCourtTag: "",
    tennisCourtLogo: "",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };


  function updateDetails() {
    if (!userId || !user)
      return

    let baseURL = `http://localhost:5000/api/v1/main/users/${userId}`;

    axios.patch(baseURL, user)
      .then((res) => {
        props.setToggler(!props.toggler)
      })
      .catch((err) => { throw err })
  }

  // Get the current user's information based on the userId
  const userId = useSessionStorage('userId')
  let [user, setUser] = useState()

  useEffect(() => {

    if (!userId)
      return

    let baseURL = `http://localhost:5000/api/v1/main/users/${userId}`;

    axios.get(baseURL)
      .then(result => {
        setUser(result.data)
      })
      .catch(err => {
        console.log(err)
      })


  }, [userId, props.toggler])

  return (
    <form autoComplete="off" noValidate {...props}>
      <Card>
        <CardHeader subheader="The information can be edited" title="Profile" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                helperText="Please specify the first name"
                // label="First name"
                name="firstName"
                onChange={(e) => {
                  setUser((prevVal) => {

                    let { name, value } = e.target

                    return {
                      ...prevVal,
                      [name]: value
                    }
                  })
                }}
                required
                value={user?.firstName}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                // label="Last name"
                name="lastName"
                onChange={(e) => {
                  setUser((prevVal) => {

                    let { name, value } = e.target

                    return {
                      ...prevVal,
                      [name]: value
                    }
                  })
                }}
                required
                value={user?.lastName}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                // label="Email Address"
                name="email"
                onChange={handleChange}
                required
                value={user?.email}
                variant="outlined"
                onChange={(e) => {
                  setUser((prevVal) => {

                    let { name, value } = e.target

                    return {
                      ...prevVal,
                      [name]: value
                    }
                  })
                }}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                // label="Phone Number"
                name="phoneNumber"
                onChange={handleChange}
                type="number"
                value={user?.phoneNumber}
                variant="outlined"
                onChange={(e) => {
                  setUser((prevVal) => {

                    let { name, value } = e.target

                    return {
                      ...prevVal,
                      [name]: value
                    }
                  })
                }}
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 2,
          }}
        >
          <Button color="primary" variant="contained"
            onClick={updateDetails}
          >
            Save details
          </Button>
        </Box>
      </Card>
    </form>
  );
};
