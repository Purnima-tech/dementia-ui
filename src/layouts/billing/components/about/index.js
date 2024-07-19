/**/

// @mui material components
import Card from "@mui/material/Card";

// Dementia care React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import './index'

function DementiaInformation() {
  return (
    <Card id="delete-account">
      <MDBox pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium">
        What Is Dementia?
        </MDTypography>
      </MDBox>
      <MDBox pt={1} pb={2} px={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <p style={{fontSize:"medium"}}>Dementia is an umbrella term used to describe a range of neurological conditions affecting the brain that worsen over time. It is the loss of the ability to think, remember, and reason to levels that affect daily life and activities. Some people with dementia cannot control their emotions and other behaviors, and their personality may change.
</p>
<p style={{fontSize:"medium"}}>
In the past, dementia was sometimes referred to as “senility” and was thought to be a normal part of aging, likely because it is more common as people age. About one-third of all people age 85 or older may have some form of dementia. But dementia is not a normal part of aging and not everyone develops dementia as they grow older. In rare cases, some people develop dementia in midlife.
</p>
<h5>

What Causes Dementia?
  
</h5>
<p style={{fontSize:"medium"}}>
Dementia is the result of changes in certain brain regions that cause neurons (nerve cells) and their connections to stop working properly. Researchers have connected changes in the brain to certain forms of dementia, but, in most cases, the underlying causes are unknown. For a small number of people, rare genetic variants that cause dementia have been identified.

Although some people may be diagnosed simply as having “dementia,” to best tailor treatment and prepare for the future, it is ideal to know the specific type.
</p>
<h5>

What Are the Signs and Symptoms of Dementia?
  
</h5>
<p style={{fontSize:"medium"}}>
Many people associate dementia with memory loss. This is because memory problems are often one of the early symptoms of a dementia disorder, but they are not the only one. The symptoms of dementia can vary, depending on the type of dementia and which areas of the brain are affected. Symptoms may include:

Memory loss, poor judgment, and confusion
Changes in the ability to speak, understand, and express thoughts and/or words and to write and read
Wandering and getting lost in a familiar neighborhood
Trouble handling money and paying bills
Repeating questions
Using unusual words to refer to familiar objects
Taking longer to complete normal daily tasks
Loss of interest in normal daily activities or events
Hallucinations, delusions, and paranoia
Acting impulsively
Not caring about other people’s feelings
Problems with balance and movement
</p>
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default DementiaInformation;
