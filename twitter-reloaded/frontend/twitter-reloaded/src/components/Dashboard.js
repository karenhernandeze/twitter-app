import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';
import { CardHeader, IconButton, ListItem, Pagination, Stack, TextField, responsiveFontSizes } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ChatBubbleOutline from '@mui/icons-material/ChatBubbleOutline';
import ChatBubble from '@mui/icons-material/ChatBubble';
import SendIcon from '@mui/icons-material/Send';
import ManageTweetsService from '../service/ManageTweetsService';
import PaginationControlled from './PaginationControlled';

const Dashboard = ({ tweets }) => {
    const [tweetsData, setTweets] = useState([]);
    const [repliesData, setReplies] = useState([]);
    const [selectedIndexThread, setSelectedIndexThread] = useState(null);
    const [selectedIndexReply, setSelectedIndexReply] = useState(null);
    const [inputText, setInputText] = useState('');
    const [limitText, setLimitText] = useState(false);
    const [invalidText, setInvalidText] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {

        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const replyIdsResponse = await ManageTweetsService.getReplyIds();
            const replyIdsData = replyIdsResponse.data.data;

            const totalTweetsResponse = await ManageTweetsService.retrieveAllTweets();
            const totalTweetsData = totalTweetsResponse.data.data;
            const filteredTweets = totalTweetsData.filter(
                tweet => !replyIdsData.includes(tweet.tweetId)
            );
            setTweets(filteredTweets);
            const totalTweets = totalTweetsData.length;
            const totalReplays = replyIdsData.length;
            const paginationNum = Math.ceil((totalTweets - totalReplays) / 10);
            setTotalPages(paginationNum);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData()
    }, [tweets]);

    const handleClickThread = (index, tweet) => {
        setSelectedIndexThread((prevIndex) => (prevIndex === index ? null : index));
        const body = {
            tweetId: tweet.tweetId
        }
        ManageTweetsService.retrieveReplies(body).then(
            response => {
                setReplies(response.data.data)
            }
        )
    };

    const handleClickReply = (index) => {
        setSelectedIndexReply((prevIndex) => (prevIndex === index ? null : index));
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
        const _id = event.currentTarget.id
        if (inputText === '') {
            setInvalidText(true);
        } else if (limitText === false) {
            const tweet = {
                content: inputText
            }
            ManageTweetsService.createTweet(tweet)
                .then(response => {
                    handleReply(_id, response.data.data.tweetId)
                    setInputText('')
                });
        }
    };

    const handleReply = (tweetId, reply) => {
        const body = {
            parentId: tweetId,
            replyId: reply
        }
        ManageTweetsService.setAsReply(body).then(
            response => { console.log(response) }
        )
    };

    const startIndex = (page - 1) * 10;
    const endIndex = page * 10;
    const slicedTweetsData = tweetsData.slice(startIndex, endIndex);

    return (
        <div>
            <List>
                {slicedTweetsData.map((tweet, index) => {
                    const isTweetOpen = selectedIndexThread === index;
                    const isReplyOpen = selectedIndexReply === index;
                    return (
                        <ListItem style={{ justifyContent: "center" }} key={tweet.tweetId}>
                            <Card sx={{ width: 4 / 5 }}>
                                <CardHeader
                                    avatar={<AccountCircle />}
                                    title={tweet.userId}
                                    id={tweet.userId}
                                    subheader={tweet.createdAt}
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        {tweet.content}
                                    </Typography>
                                </CardContent>
                                <CardActions style={{ justifyContent: "space-between" }}>
                                    <IconButton onClick={() => handleClickReply(index)} color="primary" aria-label="delete">
                                        {
                                            isReplyOpen ? <ChatBubble /> : <ChatBubbleOutline />
                                        }
                                    </IconButton>
                                    <Button onClick={() => handleClickThread(index, tweet)} size="small">{isTweetOpen ? 'HIDE THREAD' : 'SHOW THREAD'}</Button>
                                </CardActions>
                                <Collapse in={isTweetOpen} timeout="auto" unmountOnExit>
                                    {
                                        repliesData.length !== 0 ?
                                            repliesData.map((reply) => {
                                                return (
                                                    <CardContent style={{ margin: "15px", textAlign: "end" }}>
                                                        <CardHeader
                                                            title={
                                                                <React.Fragment>
                                                                    <Typography variant="body1" fontSize={16} color="text.secondary">
                                                                        Karenhernandeze
                                                                        <IconButton>
                                                                            <AccountCircle fontSize="small" />
                                                                        </IconButton>
                                                                    </Typography>
                                                                </React.Fragment>
                                                            }
                                                            subheader={
                                                                <React.Fragment>
                                                                    <Typography variant="body2" color="text.secondary">
                                                                        September 14, 2016
                                                                    </Typography>
                                                                </React.Fragment>
                                                            }
                                                        />
                                                        <CardContent>
                                                            <Typography variant="body1" color="text.secondary">
                                                                {reply.content}
                                                            </Typography>
                                                        </CardContent>
                                                    </CardContent>
                                                )
                                            })
                                            :
                                            <CardContent style={{ margin: "15px", textAlign: "end" }}>
                                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                    Nothing to Show... yet!
                                                </Typography>
                                            </CardContent>
                                    }
                                </Collapse>
                                <Collapse in={isReplyOpen} timeout="auto" unmountOnExit>
                                    <CardContent>
                                        <TextField
                                            error={limitText || invalidText}
                                            style={{ width: "-webkit-fill-available" }}
                                            id="reply-text"
                                            onChange={handleText}
                                            multiline
                                            value={inputText}
                                            rows={4}
                                            label="Any thoughts..."
                                            helperText={invalidText ? "Invalid Input" : limitText ? "300 max characters." : null}
                                        />
                                        <CardActions style={{ justifyContent: "end" }}>
                                            <Button variant="outlined" endIcon={<SendIcon />} onClick={handleSubmit} id={tweet.tweetId}>
                                                Reply!
                                            </Button>
                                        </CardActions>
                                    </CardContent>
                                </Collapse>
                            </Card>
                        </ListItem>
                    )
                })
                }
            </List>

            <Stack spacing={2}>
                <Pagination
                    onChange={(event, value) => setPage(value)}
                    count={totalPages}
                    color="secondary"
                    style={{ justifyContent: "center", display: "flex" }}
                    page={page}
                />
            </Stack>
        </div>

    );
};

export default Dashboard;
