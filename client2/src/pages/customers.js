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


const Customers = () => {

  let [registeredUsers, setRegisteredUsers] = useState([])
  let [toggler, setToggler] = useState(false)
  useEffect(() => {

    let baseURL = `http://localhost:5000/api/v1/main/users`;

    axios.get(baseURL)
      .then((res) => {
        setRegisteredUsers(res.data)
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

    let baseURL = `http://localhost:5000/api/v1/main/findUsers/${query}`;

    axios.get(baseURL, query)
      .then((res) => {
        console.log(res.data)
        setRegisteredUsers(res.data)
      })


  }, [query])

  return (<>
    <Head>
      <title>
        Members
      </title>
    </Head>
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
          <CustomerListResults customers={registeredUsers} />
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
