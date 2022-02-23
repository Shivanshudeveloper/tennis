import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Box, Container } from '@mui/material';
import { CustomerListResults } from '../components/customer/customer-list-results';
import { CustomerListToolbar } from '../components/customer/customer-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { customers } from '../__mocks__/customers';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Search as SearchIcon } from '../icons/search';
import { Upload as UploadIcon } from '../icons/upload';
import { Download as DownloadIcon } from '../icons/download';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SvgIcon from '@mui/material/SvgIcon';
import axios from 'axios';
import { Dialog, DialogContent, DialogActions, DialogTitle } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Tooltip } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import EditIcon from '@mui/icons-material/Edit';
import DoDisturbAltIcon from '@mui/icons-material/DoDisturbAlt';
import CheckIcon from '@mui/icons-material/Check';
import { API_SERVICE } from "src/config/URI";


const Customers = () => {

  let [registeredUsers, setRegisteredUsers] = useState([])
  let [toggler, setToggler] = useState(false)
  useEffect(() => {

    let baseURL = `${API_SERVICE}/api/v1/main/users`;

    axios.get(baseURL)
      .then((res) => {
        setRegisteredUsers(res.data.reverse())
      })

  }, [toggler])


  // Item to search for 
  let [query, setQuery] = useState("")

  useEffect(() => {

    // If the query has been emptied then return
    if (query === "") {
      setToggler(!toggler)
      return
    }

    // If the query only contains white spaces do noting
    if (/^\s*$/.test(query)) {
      return
    }

    console.log(query)

    let baseURL = `${API_SERVICE}/api/v1/main/findUsers/${query}`;

    axios.get(baseURL, query)
      .then((res) => {
        console.log(res.data)
        setRegisteredUsers(res.data)
      })


  }, [query])


  // Select a user and view their bookings : For admins
  let [selectedUser, setSelectedUser] = useState()
  let [bookings, setBookings] = useState([])
  let [viewer, setViewer] = useState(false)

  useEffect(async () => {
    if (!selectedUser)
      return

    // Get all the bookings of the selected user
    let baseURL = `${API_SERVICE}/api/v1/main/bookings/${selectedUser}`;

    await axios.get(baseURL)
      .then((res) => {
        console.log(res.data)
        setBookings(res.data.reverse())
      })
      .catch((err) => { throw err })

  }, [selectedUser, toggler])

  function viewUser(id) {
    console.log(id)
    setSelectedUser(id)
    openViewer()
  }

  function openViewer() {
    setViewer(true)
  }

  function closeViewer() {
    setViewer(false)
  }

  function getFormattedDate(date) {
    var year = date.getFullYear();

    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;

    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;

    return day + ' / ' + month + ' / ' + year;
  }

  function acceptBooking(booking) {
    let baseURL = `${API_SERVICE}/api/v1/main/bookings/${booking._id}`;

    let editedBooking = {
      ...booking,
      status: "Accepted"
    }

    axios.patch(baseURL, editedBooking)
      .then((res) => {
        setToggler(!toggler)
      })
      .catch((err) => { throw err })
  }

  function rejectBooking(booking) {
    let baseURL = `${API_SERVICE}/api/v1/main/bookings/${booking._id}`;

    let editedBooking = {
      ...booking,
      status: "Rejected"
    }

    axios.patch(baseURL, editedBooking)
      .then((res) => {
        setToggler(!toggler)
      })
      .catch((err) => { throw err })
  }

  return (<>
    <Head>
      <title>
        Members
      </title>
    </Head>

    {/* For viewing user's bookings */}
    <Dialog
      open={viewer}
      onClose={closeViewer}
      aria-labelledby="alert-dialog-title"
      fullWidth
      maxWidth="lg"
      aria-describedby="alert-dialog-description"
    >
      <div className="container">
        <DialogTitle id="alert-dialog-title" sx={{ float: "left" }}>
          Bookings
        </DialogTitle>
        <DialogActions>
          <Button color="error" onClick={closeViewer}>
            <CloseIcon />
          </Button>
        </DialogActions>
      </div>

      <DialogContent>
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
                  key={booking?._id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {i + 1}
                  </TableCell>
                  <TableCell align="center">
                    {getFormattedDate(new Date(booking?.date))}
                  </TableCell>
                  <TableCell align="center">
                    {new Date(booking?.startTime).toLocaleTimeString('en-US')}
                  </TableCell>
                  <TableCell align="center">
                    {new Date(booking?.endTime).toLocaleTimeString('en-US')}
                  </TableCell>
                  <TableCell align="center">
                    <Chip
                      label={booking?.status}
                      color={booking?.status === "Pending" ? "warning"
                        : (booking?.status === "Accepted" ? "success" : "error")}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <Tooltip title="Deny">
                      <IconButton color="error" aria-label="upload picture" component="span"
                        onClick={() => {
                          rejectBooking(booking)
                        }}
                      >
                        <DoDisturbAltIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Accept">
                      <IconButton color="primary" aria-label="upload picture" component="span"
                        onClick={() => {
                          acceptBooking(booking)
                        }}>
                        <CheckIcon />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              })}

            </TableBody>
          </Table>
        </TableContainer>
      </DialogContent>
    </Dialog>


    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <Box >
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              m: -1
            }}
          >
            <Typography
              sx={{ m: 1 }}
              variant="h4"
            >
              Members
            </Typography>
            <Box sx={{ m: 1 }}>
              <Button
                startIcon={(<UploadIcon fontSize="small" />)}
                sx={{ mr: 1 }}
              >
                Import
              </Button>
              <Button
                startIcon={(<DownloadIcon fontSize="small" />)}
                sx={{ mr: 1 }}
              >
                Export
              </Button>
              <Button
                color="primary"
                variant="contained"
              >
                Add Members
              </Button>
            </Box>
          </Box>
          <Box sx={{ mt: 3 }}>
            <Card>
              <CardContent>
                <Box sx={{ maxWidth: 500 }}>
                  <TextField
                    value={query}
                    onChange={(e) => {
                      setQuery(e.target.value)
                    }}
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SvgIcon
                            color="action"
                            fontSize="small"
                          >
                            <SearchIcon />
                          </SvgIcon>
                        </InputAdornment>
                      )
                    }}
                    placeholder="Search member"
                    variant="outlined"
                  />
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>

        <Box sx={{ mt: 3 }}>
          <CustomerListResults customers={registeredUsers} viewUser={viewUser} />
        </Box>
      </Container>
    </Box>
  </>)
};

Customers.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Customers;
