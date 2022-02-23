import Head from "next/head";
import React, { useEffect, useState } from "react";
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
import axios from "axios";
// Get access to the sessionStorage object for userId and userEmail
import useSessionStorage from "src/hooks/useSessionStorage";
import { API_SERVICE } from "src/config/URI";

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
  const calendarRef = React.useRef(null);
  const [events, setEvents] = React.useState([]);

  // New reservation
  const [dateValue, setDateValue] = React.useState(new Date());
  const [sTimeValue, setStimeValue] = React.useState(new Date().getTime());
  const [eTimevalue, setEtimeValue] = React.useState(new Date().getTime());

  let [newBooking, setNewBooking] = useState({
    numberOfPeople: 1,
    message: " "
  })


  // Fetch all the "Accepted" bookings of a user
  let [acceptedBookings, setAcceptedBookings] = useState([])
  // Post userId along with the new booking for identification 
  const userId = useSessionStorage('userId')


  let [toggler, setToggler] = useState(false)

  useEffect(async () => {
    // Initially when the component firsts mounts the userId may not be set 
    // If so then return 
    if (!userId)
      return

    // Once the userId is set make a get request
    let baseURL = `${API_SERVICE}/api/v1/main/acceptedBookings/${userId}`;

    await axios.get(baseURL)
      .then((res) => {
        console.log(res.data)
        setAcceptedBookings(res.data.reverse())
      })
      .catch((err) => { throw err })

  }, [userId, toggler])

  function formatDateTime(date, time) {
    date = new Date(date)
    time = new Date(time)

    let timeString = time.getHours() + ':' + time.getMinutes() + ':00';

    var year = date.getFullYear();
    var month = date.getMonth() + 1; // Jan is 0, dec is 11
    var day = date.getDate();
    var dateString = '' + year + '-' + month + '-' + day;
    return new Date(dateString + ' ' + timeString);
  }

  // Once all the accepted bookings are fetched set the "event" state
  useEffect(async () => {
    if (!userId)
      return

    if (acceptedBookings.length === 0)
      return

    let temp = acceptedBookings.map((booking, i) => {

      return {
        title: "Reservation " + booking.message,
        start: formatDateTime(booking.date, booking.startTime),
        id: booking._id
      }
    })
    // formatDateTime(booking.date, booking.startTime)

    setEvents(temp)

  }, [acceptedBookings])

  const handleBookingModal = () => {
    setShowBookingModal(true);
  };

  const handleCloseBookingModal = () => {
    setShowBookingModal(false);
  };

  const handleAddEvent = () => {
    // console.log(sTimeValue, eTimevalue, dateValue, newBooking.message, newBooking.numberOfPeople)

    var bookingToCreate = {
      ...newBooking,
      date: dateValue,
      startTime: sTimeValue,
      endTime: eTimevalue,
      status: "Pending",
      userId
    }

    let baseURL = `${API_SERVICE}/api/v1/main/bookings`;

    axios.post(baseURL, bookingToCreate)
      .then((res) => {
        console.log(res.data)
        setToggler(!toggler)

        // Reset the states
        setNewBooking({
          numberOfPeople: 1,
          message: " "
        })

        setDateValue(new Date())
        setStimeValue(new Date().getTime())
        setEtimeValue(new Date().getTime())

        handleCloseBookingModal()
      })
  };

  // When an existing booking is selected then fetch it's data
  let [bookingToEdit, setBookingToEdit] = useState({
    numberOfPeople: 0,
    message: ""
  })

  const [dateValueToEdit, setDateValueToEdit] = React.useState(new Date());
  const [sTimeValueToEdit, setStimeValueToEdit] = React.useState(new Date().getTime());
  const [eTimevalueToEdit, setEtimeValueToEdit] = React.useState(new Date().getTime());

  let [selectedEvent, setSelectedEvent] = useState()
  let [showViewer, setShowViewer] = useState(false)

  function openViewer() {
    setShowViewer(true)
  }

  function closeViewer() {
    setShowViewer(false)
  }

  useEffect(() => {
    if (!selectedEvent)
      return;

    openViewer()

    let baseURL = `${API_SERVICE}/api/v1/main/getBooking/${selectedEvent}`;

    axios.get(baseURL)
      .then((res) => {
        let data = res.data

        setDateValueToEdit(data.date)
        setStimeValueToEdit(data.startTime)
        setEtimeValueToEdit(data.endTime)
        setBookingToEdit({
          numberOfPeople: data.numberOfPeople,
          message: data.message
        })

        // console.log(data)
      })
      .catch((err) => { throw err })
  }, [selectedEvent])

  function cancelReservation() {
    let baseURL = `${API_SERVICE}/api/v1/main/bookings/${selectedEvent}`;

    axios.delete(baseURL)
      .then(result => {
        console.log(result.data)
        setToggler(!toggler)
        closeViewer()
      })
      .catch(err => {
        console.log(err)
      })

  }

  return (
    <>
      {/* Show/Edit a booking */}
      <Dialog
        open={showViewer}
        onClose={closeViewer}
        aria-labelledby="alert-dialog-title"
        fullWidth
        maxWidth="sm"
        aria-describedby="alert-dialog-description"
      >
        <div className="container">
          <DialogTitle id="alert-dialog-title" sx={{ float: "left" }}>
            View/Cancel booking
          </DialogTitle>
          <DialogActions>
            <Button color="error" onClick={closeViewer}>
              <CloseIcon />
            </Button>
          </DialogActions>
        </div>

        <DialogContent>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Date"
              value={dateValueToEdit}
              onChange={(newValue) => {
                setDateValueToEdit(newValue);
              }}
              renderInput={(params) => (
                <TextField sx={{ marginBottom: "1rem" }} fullWidth {...params} />
              )}
            />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <TimePicker
              label="Start Time"
              value={sTimeValueToEdit}
              onChange={(newValue) => {
                setStimeValueToEdit(newValue);
              }}
              renderInput={(params) => (
                <TextField fullWidth sx={{ marginBottom: "1rem" }} {...params} />
              )}
            />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <TimePicker
              label="End Time"
              value={eTimevalueToEdit}
              onChange={(newValue) => {
                setEtimeValueToEdit(newValue);
              }}
              renderInput={(params) => (
                <TextField fullWidth sx={{ marginBottom: "1rem" }} {...params} />
              )}
            />
          </LocalizationProvider>
          <TextField fullWidth label="Number of people?" required sx={{ marginBottom: "1rem" }}
            name="numberOfPeople"
            value={bookingToEdit.numberOfPeople}
            onChange={(e) => {
              let { name, value } = e.target
              setBookingToEdit((preVal) => {
                return {
                  ...preVal,
                  [name]: value
                }
              })
            }}
          />
          <TextField
            fullWidth
            label="Message (optional)"
            multiline
            rows={3}
            sx={{ marginBottom: "1rem" }}
            name="message"
            value={bookingToEdit.message}
            onChange={(e) => {
              let { name, value } = e.target
              setBookingToEdit((preVal) => {
                return {
                  ...preVal,
                  [name]: value
                }
              })
            }}
          />
        </DialogContent>

        <DialogActions>
          <Button autoFocus color="error" onClick={cancelReservation} >
            Cancel reservation
          </Button>
          <Button onClick={closeViewer} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Add a new booking */}
      {/* Dialog for creating a new booking_________________________________________________________________ */}
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
          <TextField fullWidth label="Number of people?" required sx={{ marginBottom: "1rem" }}
            name="numberOfPeople"
            value={newBooking.numberOfPeople}
            onChange={(e) => {
              let { name, value } = e.target
              setNewBooking((preVal) => {
                return {
                  ...preVal,
                  [name]: value
                }
              })
            }}
          />
          <TextField
            fullWidth
            label="Message (optional)"
            multiline
            rows={3}
            sx={{ marginBottom: "1rem" }}
            name="message"
            value={newBooking.message}
            onChange={(e) => {
              let { name, value } = e.target
              setNewBooking((preVal) => {
                return {
                  ...preVal,
                  [name]: value
                }
              })
            }}
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
              setDateValue(new Date(info.date));
              setStimeValue(new Date(info.date).getTime())
              handleBookingModal();
            }}
            eventClick={(info) => {
              setSelectedEvent(info.event.id)
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
