import Head from "next/head";
import React from "react";
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


import { DashboardLayout } from "../components/dashboard-layout";

const AllBooking = () => {

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
                        <TableCell align="center">
                            Action
                        </TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow
                            key={1}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                1
                            </TableCell>
                            <TableCell align="center">
                                22/01/2022
                            </TableCell>
                            <TableCell align="center">
                                05:00 PM
                            </TableCell>
                            <TableCell align="center">
                                05:30 PM
                            </TableCell>
                            <TableCell align="center">
                                <Tooltip title="Edit">
                                    <IconButton onClick={handleBookingModal} color="primary" aria-label="upload picture" component="span">
                                        <EditIcon />
                                    </IconButton>
                                    
                                </Tooltip>

                                <Tooltip title="Delete">
                                    <IconButton color="error" aria-label="upload picture" component="span">
                                        <DeleteIcon />
                                    </IconButton>
                                </Tooltip>
                            </TableCell>
                        </TableRow>


                        <TableRow
                            key={1}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                2
                            </TableCell>
                            <TableCell align="center">
                                23/01/2022
                            </TableCell>
                            <TableCell align="center">
                                05:00 PM
                            </TableCell>
                            <TableCell align="center">
                                05:30 PM
                            </TableCell>
                            <TableCell align="center">
                                <Tooltip title="Edit">
                                    <IconButton onClick={handleBookingModal} color="primary" aria-label="upload picture" component="span">
                                        <EditIcon />
                                    </IconButton>
                                    
                                </Tooltip>

                                <Tooltip title="Delete">
                                    <IconButton color="error" aria-label="upload picture" component="span">
                                        <DeleteIcon />
                                    </IconButton>
                                </Tooltip>
                            </TableCell>
                        </TableRow>

                        <TableRow
                            key={1}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                3
                            </TableCell>
                            <TableCell align="center">
                                24/01/2022
                            </TableCell>
                            <TableCell align="center">
                                05:00 PM
                            </TableCell>
                            <TableCell align="center">
                                05:30 PM
                            </TableCell>
                            <TableCell align="center">
                                <Tooltip title="Edit">
                                    <IconButton onClick={handleBookingModal} color="primary" aria-label="upload picture" component="span">
                                        <EditIcon />
                                    </IconButton>
                                    
                                </Tooltip>

                                <Tooltip title="Delete">
                                    <IconButton color="error" aria-label="upload picture" component="span">
                                        <DeleteIcon />
                                    </IconButton>
                                </Tooltip>
                            </TableCell>
                        </TableRow>

                        <TableRow
                            key={1}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                4
                            </TableCell>
                            <TableCell align="center">
                                25/01/2022
                            </TableCell>
                            <TableCell align="center">
                                05:00 PM
                            </TableCell>
                            <TableCell align="center">
                                05:30 PM
                            </TableCell>
                            <TableCell align="center">
                                <Tooltip title="Edit">
                                    <IconButton onClick={handleBookingModal} color="primary" aria-label="upload picture" component="span">
                                        <EditIcon />
                                    </IconButton>
                                    
                                </Tooltip>

                                <Tooltip title="Delete">
                                    <IconButton color="error" aria-label="upload picture" component="span">
                                        <DeleteIcon />
                                    </IconButton>
                                </Tooltip>
                            </TableCell>
                        </TableRow>
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
