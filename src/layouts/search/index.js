/**/

import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Dementia care React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Dementia care React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ImageUpload from "./ImageUpload";
import MDButton from "components/MDButton";
import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";

function Search() {
  


  return (
    <DashboardLayout>
      {/* <DashboardNavbar /> */}
      <MDBox mt={6} mb={3}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} lg={8}>
            <Card>
              <MDBox p={2}>
                {/* <MDTypography variant="h4">Upload / Click image to search</MDTypography> */}
                <MDTypography variant="" >Upload / Click image to search</MDTypography>
                <MDTypography variant="h6" fontWeight="light">
                  Search a person by clicking their photo or uploading image to find out about different wasy to help them and caregiver information.
                </MDTypography>
              </MDBox>
              <MDBox pt={2} px={2}>
                <ImageUpload />
              </MDBox>
            </Card>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Card sx={{ height: "100%" }}>
              <MDBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
                <MDTypography variant="h6" fontWeight="medium">
                  Support Services
                </MDTypography>
                <MDButton variant="outlined" color="warning" size="small">
                  Call helpline
                </MDButton>
              </MDBox>
              <MDBox p={2}>
                <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
                  <List>
                    <ListItem>
                      <h6>To speak to a specialist dementia nurse about any aspect of dementia, please call our free Dementia Helpline on 0800 888 6678 (Monday-Friday 9am-9pm, Saturday and Sunday 9am-5pm, every day except 25th December or email helpline@dementiauk.org
                        <br /><br />
                        If you prefer, you can book a phone or video appointment with a specialist dementia nurse in our virtual clinics.</h6>
                    </ListItem>

                  </List>

                </MDBox>
              </MDBox>
            </Card>
          </Grid>

        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Search;
