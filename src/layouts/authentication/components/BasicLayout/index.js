/**/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// Dementia care React components
import MDBox from "components/MDBox";

// Dementia care React example components
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import PageLayout from "examples/LayoutContainers/PageLayout";

// Authentication pages components
import Footer from "layouts/authentication/components/Footer";

function BasicLayout({  children }) {
  return (
    <PageLayout>
      {/* <DefaultNavbar
        action={{
          type: "external",
          route: "https://creative-tim.com/product/material-dashboard-react",
          label: "free download",
          color: "dark",
        }}
      /> */}

      <MDBox px={1} width="100%" height="100vh" mx="auto">
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item xs={12} sm={9} md={9} lg={9} xl={9}>
            {children}
          </Grid>
        </Grid>
      </MDBox>
      <Footer light />
    </PageLayout>
  );
}

// Typechecking props for the BasicLayout
BasicLayout.propTypes = {
  image: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default BasicLayout;
