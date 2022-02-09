import Head from "next/head";
import { Box, Container, Typography } from "@mui/material";
import { DashboardLayout } from "../components/dashboard-layout";

const paymentsSettings = () => (
  <>
    <Head>
      <title>Payments | Material Kit</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Typography sx={{ mb: 3 }} variant="h4">
          Payments
        </Typography>
      </Container>
    </Box>
  </>
);

paymentsSettings.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default paymentsSettings;
