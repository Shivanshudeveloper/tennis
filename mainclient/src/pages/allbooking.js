import Head from "next/head";
import React, { useState, useEffect } from "react";
import { Box, Container, Typography, Button, IconButton, Tooltip, TextField } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { DatePicker, TimePicker } from "@mui/lab";


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Dialog, DialogContent, DialogActions, DialogTitle } from "@mui/material";
import { Snackbar } from "@mui/material";
import Chip from '@mui/material/Chip';


import { DashboardLayout } from "../components/dashboard-layout";
import axios from "axios";
// Get access to the sessionStorage object for userId and userEmail
import useSessionStorage from "src/hooks/useSessionStorage";

const AllBooking = () => {

    const [showBookingModal, setShowBookingModal] = React.useState(false);
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

    // Create a new booking : Post to API
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

        let baseURL = `http://localhost:5000/api/v1/main/bookings`;

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

                setOpenSnackBar(true)

                handleCloseBookingModal()
            })

    };

    // New reservation
    const [dateValue, setDateValue] = React.useState(new Date());
    const [sTimeValue, setStimeValue] = React.useState(new Date().getTime());
    const [eTimevalue, setEtimeValue] = React.useState(new Date().getTime());
    // Post userId along with the new booking for identification 
    const userId = useSessionStorage('userId')

    let [newBooking, setNewBooking] = useState({
        numberOfPeople: 1,
        message: " "
    })

    // Delete a booking
    function deleteBooking(bookingId) {
        let baseURL = `http://localhost:5000/api/v1/main/bookings/${bookingId}`;

        axios.delete(baseURL)
            .then(result => {
                console.log(result.data)
                setToggler(!toggler)
            })
            .catch(err => {
                console.log(err)
            })

    }

    // All the bookings corresponding to the current userId
    let [bookings, setBookings] = useState([])
    let [toggler, setToggler] = useState(false)

    useEffect(async () => {
        // Initially when the component firsts mounts the userId may not be set 
        // If so then return 
        if (!userId)
            return

        // Once the userId is set make a get request
        let baseURL = `http://localhost:5000/api/v1/main/bookings/${userId}`;

        await axios.get(baseURL)
            .then((res) => {
                console.log(res.data)
                setBookings(res.data.reverse())
            })
            .catch((err) => { throw err })

    }, [userId, toggler])

    // Format the date and time before displaying
    function getFormattedDate(date) {
        var year = date.getFullYear();

        var month = (1 + date.getMonth()).toString();
        month = month.length > 1 ? month : '0' + month;

        var day = date.getDate().toString();
        day = day.length > 1 ? day : '0' + day;

        return day + ' / ' + month + ' / ' + year;
    }

    // For the "edit booking" dialog-box
    let [showEditingModel, setShowEditingModel] = useState(false)
    let [selectedBooking, setSelectedBooking] = useState()

    const openEditor = (bookingId) => {
        setSelectedBooking(bookingId)
        setShowEditingModel(true);
    };

    const closeEditor = () => {
        setShowEditingModel(false);
    };

    // When an existing booking is selected then fetch it's data
    let [bookingToEdit, setBookingToEdit] = useState({
        numberOfPeople: 0,
        message: ""
    })

    const [dateValueToEdit, setDateValueToEdit] = React.useState(new Date());
    const [sTimeValueToEdit, setStimeValueToEdit] = React.useState(new Date().getTime());
    const [eTimevalueToEdit, setEtimeValueToEdit] = React.useState(new Date().getTime());

    useEffect(() => {
        if (!showEditingModel)
            return;

        let baseURL = `http://localhost:5000/api/v1/main/getBooking/${selectedBooking}`;

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

                console.log(data)
            })
            .catch((err) => { throw err })

    }, [selectedBooking])

    // Once the user submits send a patch request
    async function handleEdit() {

        const editedBooking = {
            ...bookingToEdit,
            date: dateValueToEdit,
            startTime: sTimeValueToEdit,
            endTime: eTimevalueToEdit,
            status: "Pending"
        }

        let baseURL = `http://localhost:5000/api/v1/main/bookings/${selectedBooking}`;

        axios.patch(baseURL, editedBooking)
            .then((res) => {
                setToggler(!toggler)
                closeEditor()
            })
            .catch((err) => { throw err })
    }



    // For the snackbar
    // Opens when a new agreement is created
    let [openSnackBar, setOpenSnackBar] = useState(false)

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={() => {
                    setOpenSnackBar(false)
                }}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );


    return (
        <>
            {/* Opens after a new agreement is submitted */}
            <Snackbar
                open={openSnackBar}
                autoHideDuration={6000}
                onClose={() => {
                    setOpenSnackBar(false)
                }}
                message="New booking created"
                action={action}
            />
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

            {/* Editing an existing booking */}
            <Dialog
                open={showEditingModel}
                onClose={closeEditor}
                aria-labelledby="alert-dialog-title"
                fullWidth
                maxWidth="sm"
                aria-describedby="alert-dialog-description"
            >
                <div className="container">
                    <DialogTitle id="alert-dialog-title" sx={{ float: "left" }}>
                        View/Edit booking
                    </DialogTitle>
                    <DialogActions>
                        <Button color="error" onClick={closeEditor}>
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
                    <Button onClick={() => {
                        closeEditor()
                        deleteBooking(selectedBooking)
                    }}
                        color="error"
                    >
                        Cancel reservation
                    </Button>
                    <Button onClick={closeEditor} autoFocus>
                        Close
                    </Button>
                    <Button autoFocus onClick={handleEdit}>
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>



            <Head>
                <title>All Booking</title>
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
                        All Booking
                    </Typography>

                    <Button
                        color="primary"
                        variant="contained"
                        sx={{ float: "right", mb: 2 }}
                        onClick={handleBookingModal}
                    >
                        Create new booking
                    </Button>

                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Sl No.</TableCell>
                                    <TableCell align="center">Booking Date</TableCell>
                                    <TableCell align="center">
                                        Check In Time
                                    </TableCell>
                                    <TableCell
                                        align="center">
                                        Check Out Time
                                    </TableCell>
                                    <TableCell
                                        align="center">
                                        Status
                                    </TableCell>
                                    <TableCell align="center">
                                        Action
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>

                                {bookings?.map((booking, i) => {
                                    return <TableRow
                                        key={booking._id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {i + 1}
                                        </TableCell>
                                        <TableCell align="center">
                                            {getFormattedDate(new Date(booking.date))}
                                        </TableCell>
                                        <TableCell align="center">
                                            {new Date(booking.startTime).toLocaleTimeString('en-US')}
                                        </TableCell>
                                        <TableCell align="center">
                                            {new Date(booking.endTime).toLocaleTimeString('en-US')}
                                        </TableCell>
                                        <TableCell align="center">
                                            <Chip
                                                label={booking.status}
                                                color={booking.status === "Pending" ? "warning"
                                                    : (booking.status === "Accepted" ? "success" : "error")}
                                            />
                                        </TableCell>
                                        <TableCell align="center">
                                            <Tooltip title="Edit">
                                                <IconButton onClick={() => { openEditor(booking._id) }} color="primary" aria-label="upload picture" component="span">
                                                    <EditIcon />
                                                </IconButton>
                                            </Tooltip>
                                        </TableCell>
                                    </TableRow>
                                })}

                            </TableBody>
                        </Table>
                    </TableContainer>
                </Container>
            </Box>
        </>
    );
};

AllBooking.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default AllBooking;
