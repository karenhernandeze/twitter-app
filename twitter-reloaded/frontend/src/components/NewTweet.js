import * as React from 'react';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import ManageTweetsService from '../service/ManageTweetsService';

const NewTweet = ({dataUpdated}) => {

    const [open, setOpen] = React.useState(false);
    const [inputText, setInputText] = React.useState('');
    const [limitText, setLimitText] = React.useState(false);
    const [invalidText, setInvalidText] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(!open);
        setInputText('');
        setLimitText(false)
    };

    const handleText = (event) => {
        const text = event.target.value;
        setInputText(text);
        setInvalidText(false)
        if (inputText.length >= 300) {
            setLimitText(true)
        } else {
            setLimitText(false)
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputText === '') {
            setInvalidText(true);
        } else if (limitText === false) {
            const tweet = {
                content: inputText
            }
            ManageTweetsService.createTweet(tweet)
                .then(response => {
                    setOpen(!open);
                    dataUpdated()
                });
        }
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

            <Dialog open={open} onClose={handleClickOpen}>
                <DialogTitle>Start Tweeting</DialogTitle>
                <DialogContent>
                    <TextField
                        error={limitText || invalidText}
                        id="new-tweet-text"
                        onChange={handleText}
                        multiline
                        rows={4}
                        value={inputText}
                        placeholder="What's happening?"
                        style={{ width: "500px" }}
                        helperText={invalidText ? "Invalid Input" : limitText ? "300 max characters." : null}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClickOpen}>Cancel</Button>
                    <Button onClick={handleSubmit}>Tweet</Button>
                </DialogActions>
            </Dialog>
        </div>

    );
};

export default NewTweet;