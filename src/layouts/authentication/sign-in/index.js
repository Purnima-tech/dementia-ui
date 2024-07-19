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

  const defaultformData = {
    "fname": "",
    "lname": "",
    "age": '',
    "email": "",
    "addressline1": "",
    "addressline2": "",
    "addressline3": "",
    "city": "",
    "state": "",
    "pin": "",
    "contact": "",
    "patientimage": "",
    "emergencycontact": "",
    "guardianfirstname":"",
    "guardianlastname":"",
    "guardiancontact":"",
    "guardianAddress1":"",
    "guardianCity":"",
    "guardianState":"",
    "guardianPin":""
}
const [formData, setFormData] = useState(defaultformData);


const handleUploadClick = event => {
  console.log();
  var file = event.target.files[0];
  const reader = new FileReader();
  var url = reader.readAsDataURL(file);

  // reader.onloadend = function(e) {
  //   this.setState({
  //     selectedFile: [reader.result]
  //   });
  // }.bind(this);
  // console.log(url); // Would see a path?

  // this.setState({
  //   mainState: "uploaded",
  //   selectedFile: event.target.files[0],
  //   imageUploaded: 1
  // });
};
const handleChange=(event) =>{
    setFormData({...formData, [event.target.name]: event.target.value});
}

const handleSubmit = () => {
  fetch('http://104.199.113.211:8082/patient',{
      method: 'POST',
      headers: {
          Accept: 'application/json',
                  'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
  }).then(response => {
          console.log(response)
          alert(response)
      })
      .catch(error =>{
          console.log(error)
      })
}
  return (
    <DashboardLayout >
      <Card >
        <MDBox pt={3} pl={3}>
          <MDTypography variant='h3'>
            Registration
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
          <MDTypography style={{fontWeight:900, fontSize: 'medium'}} >
            Patient information
          </MDTypography>
            <Grid container pt={3} pb={2} spacing={2} >
  <Grid item xs={4}>
    <MDInput type="text" label="First Name" fullWidth value={formData.fname} name='fname' onChange={(event)=>handleChange(event)}/>
  </Grid>
  <Grid item xs={4}>
  <MDInput type="text" label="Last Name" fullWidth value={formData.lname} name='lname' onChange={(event)=>handleChange(event)}/>
  </Grid>
  <Grid item xs={4}>
  <MDInput type="email" label="Email" fullWidth value={formData.email} name='email' onChange={(event)=>handleChange(event)}/>
  </Grid>
  <Grid item xs={4}>
  <MDInput type="number" label="Age" fullWidth value={formData.age}  name='age' onChange={(event)=>handleChange(event)}/>
  </Grid>
  <Grid item xs={4}>
  <MDInput type="text" label="Address Line1" fullWidth value={formData.addressline1} name='addressline1' onChange={(event)=>handleChange(event)}/>
  </Grid>
  <Grid item xs={4}>
  <MDInput type="text" label="Address Line2" fullWidth value={formData.addressline2} name='addressline2'  onChange={(event)=>handleChange(event)}/>
  </Grid>
  <Grid item xs={4}>
  <MDInput type="text" label="Address Line3" fullWidth value={formData.addressline3} name='addressline3' onChange={(event)=>handleChange(event)}/>
  </Grid>
  <Grid item xs={4}>
  <MDInput type="text" label="City" fullWidth value={formData.city} name='city' onChange={(event)=>handleChange(event)}/>
  </Grid>
  <Grid item xs={4}>
  <MDInput type="text" label="State" fullWidth value={formData.state} name='state' onChange={(event)=>handleChange(event)}/>
  </Grid>
  <Grid item xs={4}>
  <MDInput type="number" label="Pincode" fullWidth value={formData.pin}  name='pin' onChange={(event)=>handleChange(event)}/>
  </Grid>
  <Grid item xs={4}>
  <MDInput type="number" label="Emergency Contact" fullWidth value={formData.emergencycontact} name='emergencycontact'  onChange={(event)=>handleChange(event)}/>
  </Grid>
</Grid>
<hr />
<MDTypography pt={2} style={{fontWeight:900, fontSize: 'medium'}}>
            CareTaker information
          </MDTypography>
            <Grid container pt={3} pb={2} spacing={2} >
  <Grid item xs={4}>
    <MDInput type="text" label="First Name" fullWidth value={formData.guardianfirstname} name='guardianfirstname' onChange={(event)=>handleChange(event)}/>
  </Grid>
  <Grid item xs={4}>
  <MDInput type="text" label="Last Name" fullWidth value={formData.guardianlastname} name='guardianlastname'  onChange={(event)=>handleChange(event)}/>
  </Grid>
  <Grid item xs={4}>
  <MDInput type="number" label="contact" fullWidth value={formData.guardiancontact}  name='guardiancontact' onChange={(event)=>handleChange(event)}/>
  </Grid>
  <Grid item xs={4}>
  {/* <MDInput type="image" label="Image" fullWidth value={formData.guardianImage} /> */}
  <input
              accept="image/*"
              label='Image'
              id="contained-button-file"
              type="file"
              value={formData.guardianImage}
              onChange={handleUploadClick}
              placeholder="Image"
            />
  </Grid>
  <Grid item xs={4}>
  <MDInput type="text" label="Address Line1" fullWidth value={formData.guardianAddress1}  name='guardianAddress1' onChange={(event)=>handleChange(event)}/>
  </Grid>
  <Grid item xs={4}>
  <MDInput type="text" label="Address Line2" fullWidth value={formData.guardianAddress2}  name='guardianAddress2' onChange={(event)=>handleChange(event)} />
  </Grid>
  <Grid item xs={4}>
  <MDInput type="text" label="Address Line3" fullWidth value={formData.guardianAddress3}  name='guardianAddress3' onChange={(event)=>handleChange(event)}/>
  </Grid>
  <Grid item xs={4}>
  <MDInput type="text" label="City" fullWidth value={formData.guardianCity}   name='guardianCity' onChange={(event)=>handleChange(event)}/>
  </Grid>
  <Grid item xs={4}>
  <MDInput type="text" label="State" fullWidth value={formData.guardianState}  name='guardianState' onChange={(event)=>handleChange(event)}/>
  </Grid>
  <Grid item xs={4}>
  <MDInput type="text" label="Pincode" fullWidth value={formData.guardianPin}  name='guardianPin' onChange={(event)=>handleChange(event)}/>
  </Grid>
  <Grid item xs={6} />
  <Grid item xs={3}>
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
              <MDButton variant="gradient" color="info" fullWidth onClick={handleSubmit}>
               Register
              </MDButton>
            </MDBox>
  </Grid>
</Grid>


            
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
