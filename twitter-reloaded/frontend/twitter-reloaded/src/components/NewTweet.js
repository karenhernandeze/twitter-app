import * as React from 'react';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

const NewTweet = () => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            paddingLeft: "16px",
            paddingRight: "16px",
            marginTop: "16px"
        }}>
            <Box sx={{ width: 4 / 5 }}>
                <Button variant="contained" onClick={handleClickOpen}>
                    New Tweet
                </Button>
            </Box>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Start Tweeting</DialogTitle>
                <DialogContent>
                    <TextField
                        id="outlined-multiline-static"
                        // label="Multiline"
                        multiline
                        rows={4}
                        defaultValue="Default Value"
                        style={{ width: "500px" }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Tweet</Button>
                </DialogActions>
            </Dialog>
        </div>

    );
};

export default NewTweet;