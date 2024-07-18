
import { Grid } from '@mui/material';
import MDAlert from 'components/MDAlert';
import MDButton from 'components/MDButton';
import MDButtonRoot from 'components/MDButton/MDButtonRoot';
import MDSnackbar from 'components/MDSnackbar';
import MDTypography from 'components/MDTypography';
import React, { useState, useRef } from 'react'
import DefaultImage from "../../assets/images/camera.png";
import UploadingAnimation from "../../assets/images/loading.gif";

const ImageUpload = () => {
    const [avatarURL, setAvatarURL] = useState(DefaultImage);
    const [enableButton, setEnableButton] = useState(false);
    // const [formData, setFormData] = useState(new FormData());
    const [warningSB, setWarningSB] = useState(false);
    const openWarningSB = () => setWarningSB(true);
    const closeWarningSB = () => setWarningSB(false);
    const renderWarningSB = (
        <MDSnackbar
            color="warning"
            icon="star"
            title="Unable to search"
            content="Please try again"
            dateTime="11 mins ago"
            open={warningSB}
            onClose={closeWarningSB}
            close={closeWarningSB}
            bgWhite
        />
    );
    const fileUploadRef = useRef();
    // const { SERVER_URL } = process.env;
const SERVER_URL = 'https://localhost:8080'

    const handleImageUpload = (event) => {
        event.preventDefault();
        fileUploadRef.current.click();
    }

    const alertContent = (name) => (
        <MDTypography variant="body2" color="white">
            Unable to search at the moment
        </MDTypography>
    );

    const uploadImageDisplay = async () => {
        try {
            setAvatarURL(UploadingAnimation);
            const uploadedFile = fileUploadRef.current.files[0];
            // setAvatarURL(uploadedFile);
            const cachedURL = URL.createObjectURL(uploadedFile);
            setAvatarURL(cachedURL);
            console.log(uploadedFile)
            setEnableButton(true)
            // setFormData(formData);

        } catch (error) {
            console.error(error);
            setEnableButton(false)
            setAvatarURL(DefaultImage);
        }
    }

    const postImage = async () => {
       
            const uploadedFile = fileUploadRef.current.files[0];
            const formData = new FormData();
            formData.append("file", uploadedFile);
            console.log(formData)
            try {
            const response = await fetch(SERVER_URL, {
                method: "post",
                body: formData
            });

            if (response.status === 201) {
                const data = await response.json();
                // setAvatarURL(data?.location);
            }
        } catch (error) {
            console.error(error);
            setAvatarURL(DefaultImage);
            openWarningSB();
            setEnableButton(false)
        }
    }

    return (
        <div className='search-container'>
            <div className="relative h-96 w-96 m-8 upload-container">
                {/* <img 
        src={avatarURL}
        alt ="Avatar"
        className="h-96 w-96 rounded-full" /> */}

                <form id="form" encType='multipart/form-data'>
                    <button
                        type='submit'
                        onClick={handleImageUpload}
                        className='flex-center absolute bottom-12 right-14 h-9 w-9 rounded-full upload-button'>
                        {/* <Icon fontSize="small" className='object-cover'>search</Icon> */}
                        <img
                            src={avatarURL}
                            alt="Edit"
                            className="h-96 w-96 rounded-full" />
                    </button>
                    <input
                        type="file"
                        id="file"
                        ref={fileUploadRef}
                        onChange={uploadImageDisplay}
                        hidden />
                </form>

            </div>
            <MDButton variant="outlined" color="info" size="small"
                onClick={postImage} disabled={!enableButton}>
                Search
            </MDButton>
            <Grid item xs={12} sm={6} lg={3}>
            
                {renderWarningSB}
            </Grid>

        </div>
    )
}

export default ImageUpload;



