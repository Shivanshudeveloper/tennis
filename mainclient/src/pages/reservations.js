import Head from "next/head";
import React, { useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Container, Grid, Typography, Button, TextField } from "@mui/material";
import { Dialog, DialogContent, DialogActions, DialogTitle } from "@mui/material";
import { DatePicker, TimePicker } from "@mui/lab";
import { DashboardLayout } from "../components/dashboard-layout";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

import FullCalendar from "@fullcalendar/react";
// The import order DOES MATTER here. If you change it, you'll get an error!
import interactionPlugin from "@fullcalendar/interaction";
// import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";

import { useRouter } from "next/router";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Reservations = () => {
  const Router = useRouter();
  const auth = getAuth();
  useEffect(() => {
    if (typeof window !== "undefined") {
      onAuthStateChanged(auth, (user) => {
        if (!user) {
          Router.push("/login");
        }
      });
    }
  }, []);
  const [showBookingModal, setShowBookingModal] = React.useState(false);
  const [dateValue, setDateValue] = React.useState(new Date());
  const [sTimeValue, setStimeValue] = React.useState(new Date().getTime());
  const [eTimevalue, setEtimeValue] = React.useState(new Date().getTime());
  const calendarRef = React.useRef(null);
  const [event, setEvent] = React.useState({});

  const events = [
    {
      // id: "a",
      title: "Booking 1",
      numberOfPeople: 5,
      start: "2022-01-01",
    },
    {
      // id: "a",
      title: "Booking 2",
      numberOfPeople: 4,
      start: "2022-01-26",
    },
    {
      // id: "a",
      title: "Booking 3",
      numberOfPeople: 8,
      start: "2022-01-11",
    },
  ];

  const handleBookingModal = () => {
    setShowBookingModal(true);
  };

  const handleCloseBookingModal = () => {
    setShowBookingModal(false);
  };

  const handleAddEvent = () => {};

  return (
    <>
      <Dialog
        open={showBookingModal}
        onClose={handleCloseBookingModal}
        aria-labelledby="alert-dialog-title"
        fullWidth
        maxWidth="sm"
        aria-describedby="alert-dialog-description"
      >
        <div className="container">
          <DialogTitle id="alert-dialog-title" sx={{ float: "left" }}>
            Reserve a Tennis Court
          </DialogTitle>
          <DialogActions>
            <Button color="error" onClick={handleCloseBookingModal}>
              <CloseIcon />
            </Button>
          </DialogActions>
        </div>

        <DialogContent>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Date"
              value={dateValue}
              onChange={(newValue) => {
                setDateValue(newValue);
              }}
              renderInput={(params) => (
                <TextField sx={{ marginBottom: "1rem" }} fullWidth {...params} />
              )}
            />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <TimePicker
              label="Start Time"
              value={sTimeValue}
              onChange={(newValue) => {
                setStimeValue(newValue);
              }}
              renderInput={(params) => (
                <TextField fullWidth sx={{ marginBottom: "1rem" }} {...params} />
              )}
            />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <TimePicker
              label="End Time"
              value={eTimevalue}
              onChange={(newValue) => {
                setEtimeValue(newValue);
              }}
              renderInput={(params) => (
                <TextField fullWidth sx={{ marginBottom: "1rem" }} {...params} />
              )}
            />
          </LocalizationProvider>
          <TextField fullWidth label="Number of people?" required sx={{ marginBottom: "1rem" }} />
          <TextField
            fullWidth
            label="Message (optional)"
            multiline
            rows={3}
            sx={{ marginBottom: "1rem" }}
          />
        </DialogContent>

        <DialogActions>
          <Button color="error" onClick={handleCloseBookingModal} autoFocus>
            Close
          </Button>
          <Button onClick={handleAddEvent} autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>

      <Head>
        <title>Reservations | Material Kit</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Typography sx={{ mb: 3 }} variant="h4">
            Reservation
            <Button onClick={handleBookingModal} variant="contained" sx={{ float: "right" }}>
              Book Now
            </Button>
          </Typography>

          {/* <Grid container spacing={3}> */}
          <FullCalendar
            ref={calendarRef}
            plugins={[timeGridPlugin, interactionPlugin]}
            initialView="timeGridWeek"
            editable
            selectable
            events={events}
            dateClick={(info) => {
              // alert("Clicked on: " + info.date);
              setDateValue(new Date(info.date));
              handleBookingModal();
            }}
          />
          {/* </Grid> */}
        </Container>
      </Box>
    </>
  );
};

Reservations.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Reservations;
