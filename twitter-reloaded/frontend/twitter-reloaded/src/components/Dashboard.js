import * as React from 'react';
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';
import { CardHeader, IconButton, ListItem, TextField } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ChatBubbleOutline from '@mui/icons-material/ChatBubbleOutline';


const Dashboard = () => {
    const [open, setOpen] = React.useState(false);
    const [openReply, setOpenReply] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const handleReply = () => {
        setOpenReply(!openReply);
    }

    return (
        <div>
            <List>
                <ListItem style={{ justifyContent: "center" }}>
                    <Card sx={{ width: 4/5 }}>
                        <CardHeader
                            avatar={<AccountCircle style={{color: "#3f50b5"}}/>}
                            title="Karenhernandeze"
                            subheader="September 14, 2016"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                Hello, This is my first tweet. Cheers!
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a
                                type specimen book.
                            </Typography>
                        </CardContent>
                        <CardActions style={{ justifyContent: "space-between" }}>
                            <IconButton onClick={handleReply} color="primary" aria-label="delete">
                                <ChatBubbleOutline />
                            </IconButton>
                            <Button onClick={handleClick} size="small">SHOW THREAD</Button>
                        </CardActions>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <CardContent style={{ margin: "15px", textAlign: "end" }}>
                                <CardHeader
                                    avatar={<AccountCircle />}
                                    title="Karenhernandeze"
                                    subheader="September 14, 2016"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        Hello, This is my first tweet. Cheers!
                                        Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum has been the industry's
                                        standard dummy text ever since the 1500s, when an unknown
                                        printer took a galley of type and scrambled it to make a
                                        type specimen book.
                                    </Typography>
                                </CardContent>
                            </CardContent>
                            <CardContent style={{ margin: "15px", textAlign: "end" }}>
                                <CardHeader
                                    avatar={<AccountCircle />}
                                    title="Karenhernandeze"
                                    subheader="September 14, 2016"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        Hello, This is my first tweet. Cheers!
                                        Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum has been the industry's
                                        standard dummy text ever since the 1500s, when an unknown
                                        printer took a galley of type and scrambled it to make a
                                        type specimen book.
                                    </Typography>
                                </CardContent>
                            </CardContent>
                            <CardContent style={{ margin: "15px", textAlign: "end" }}>
                                <CardHeader
                                    avatar={<AccountCircle />}
                                    title="Karenhernandeze"
                                    subheader="September 14, 2016"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        Hello, This is my first tweet. Cheers!
                                        Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum has been the industry's
                                        standard dummy text ever since the 1500s, when an unknown
                                        printer took a galley of type and scrambled it to make a
                                        type specimen book.
                                    </Typography>
                                </CardContent>
                            </CardContent>
                        </Collapse>
                        <Collapse in={openReply} timeout="auto" unmountOnExit>
                            <CardContent>
                                <TextField
                                    style={{ width: "-webkit-fill-available" }}
                                    id="outlined-multiline-static"
                                    label="Reply"
                                    multiline
                                    rows={4}
                                    defaultValue="Default Value"
                                />
                            </CardContent>
                        </Collapse>
                    </Card>
                </ListItem>

                <ListItem style={{ justifyContent: "center" }}>
                    <Card sx={{ width: 4/5 }}>
                        <CardHeader
                            avatar={<AccountCircle style={{color: "#3f50b5"}}/>}
                            title="Karenhernandeze"
                            subheader="September 14, 2016"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                Hello, This is my first tweet. Cheers!
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a
                                type specimen book.
                            </Typography>
                        </CardContent>
                        <CardActions style={{ justifyContent: "space-between" }}>
                            <IconButton onClick={handleReply} color="primary" aria-label="delete">
                                <ChatBubbleOutline />
                            </IconButton>
                        </CardActions>
                        <Collapse in={openReply} timeout="auto" unmountOnExit>
                            <CardContent>
                                <TextField
                                    style={{ width: "-webkit-fill-available" }}
                                    id="outlined-multiline-static"
                                    label="Reply"
                                    multiline
                                    rows={4}
                                    defaultValue="Default Value"
                                />
                            </CardContent>
                        </Collapse>
                    </Card>
                </ListItem>

            </List>
        </div>

    );
};

export default Dashboard;