import Head from "next/head";
import { Box, Container, Typography } from "@mui/material";
import { DashboardLayout } from "../components/dashboard-layout";

const ClubSettings = () => (
  <>
    <Head>
      <title>Club Settings | Material Kit</title>
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
          Club Settings
        </Typography>
      </Container>
    </Box>
  </>
);

ClubSettings.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default ClubSettings;
