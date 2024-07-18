/**/

import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// Dementia care React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

function Basic() {
  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <DashboardLayout >
      <Card >
        <MDBox pt={3} pl={3}>
          <MDTypography variant='title'>
            Registeration
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <Grid container spacing={2} >
  <Grid item xs={6}>
    <MDInput type="text" label="First Name" fullWidth />
  </Grid>
  <Grid item xs={6}>
  <MDInput type="email" label="Last Name" fullWidth />
  </Grid>
  <Grid item xs={6}>
  <MDInput type="email" label="Last Name" fullWidth />
  </Grid>
  <Grid item xs={6}>
  <MDInput type="date" label="Date Of Birth" fullWidth />
  </Grid>
  <Grid item xs={6}>
  <MDInput type="email" label="Address Line1" fullWidth />
  </Grid>
  <Grid item xs={6}>
  <MDInput type="text" label="Address Line2" fullWidth />
  </Grid>
  <Grid item xs={6}>
  <MDInput type="email" label="Address Line3" fullWidth />
  </Grid>
  <Grid item xs={6}>
  <MDInput type="email" label="City" fullWidth />
  </Grid>
  <Grid item xs={6}>
  <MDInput type="email" label="State" fullWidth />
  </Grid>
  <Grid item xs={6}>
  <MDInput type="email" label="Pincode" fullWidth />
  </Grid>
  <Grid item xs={6}>
  <MDInput type="email" label="Contact" fullWidth />
  </Grid>
</Grid>
            <MDBox mb={2}>
              <MDInput type="password" label="Password" fullWidth />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Remember me
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth>
                sign in
              </MDButton>
            </MDBox>
            {/* <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Don&apos;t have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-up"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign up
                </MDTypography>
              </MDTypography>
            </MDBox> */}
          </MDBox>
        </MDBox>
      </Card>
    </DashboardLayout>
  );
}

export default Basic;
