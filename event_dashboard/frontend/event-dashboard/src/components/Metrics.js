import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import './Metrics.css'
import { AdsClick, MapsUgc, People, ReplyAll, SentimentSatisfiedAlt } from '@mui/icons-material';
import { styled } from '@mui/system';
import { Card, CardContent, Typography, Avatar, Box } from '@mui/material';
import ManageTweetsService from '../service/ManageTweetsService';

const RootCard = styled(Card)(() => ({
    backgroundColor: 'white',
    color: '#rgb(17, 25, 39)',
    minHeight: '200px',
    height: '100%',
}));

const BudgetCardContent = styled(CardContent)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
});

const AvatarWrapper = styled(Avatar)(() => ({
    backgroundColor: 'rgb(240, 68, 56)',
    height: 56,
    width: 56,
}));


const Metrics = () => {
    const [countUsers, setCountUsers] = useState('');
    const [mostEvents, setMostEvents] = useState('');
    const [mostReplies, setMostReplies] = useState('');
    const [openCount, setOpenCount] = useState('');
    const [totalReplies, setTotalReplies] = useState('');
    const [totalTweets, setTotalTweets] = useState('');
    const [usernames, setUsernames] = useState('');
    const [tweets, setTweets] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        const fetchUsers = async () => {
            let updatedUsers = { ...usernames };
            for (let i = 1; i <= 5; ++i) {
                const body = {
                    userId: i
                };
                try {
                    const response = await ManageTweetsService.get_user(body);
                    updatedUsers = {
                        ...updatedUsers,
                        [i]: response.data.data.username
                    };
                } catch (error) {
                    console.log('Error fetching data:', error);
                }
            }
            setUsernames(updatedUsers);
        };

        const fetchTweets = async () => {
            try {
                ManageTweetsService.get_tweet().then(
                    response => { 
                        console.log(response.data.data)
                        setTweets(response.data.data) }
                )
            } catch (error) {
                console.log('Error fetching data:', error);
            }
        };
        fetchUsers();
        fetchTweets();
    }, []);

    const fetchData = async () => {
        try {
            ManageTweetsService.get_count_users().then(
                response => {
                    setCountUsers(response.data.data.userCount)
                }
            )
            ManageTweetsService.get_most_events().then(
                response => {
                    setMostEvents(response.data.data.userId)
                }
            )

            ManageTweetsService.get_most_replies().then(
                response => {
                    setMostReplies(response.data.data.repliesCount)
                }
            )
            
            ManageTweetsService.get_open().then(
                response => {
                    setOpenCount(response.data.data.openCount)
                }
            )
            ManageTweetsService.get_total_replies().then(
                response => {
                    setTotalReplies(response.data.data.totalReplies)
                }
            )
            ManageTweetsService.get_total_tweets().then(
                response => {
                    setTotalTweets(response.data.data.totalTweets)
                }
            )
        }
        catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const getKeyFromDictionary = (key) => {
        return usernames[key];
    };

    const getTweet = (tweetId) => {
        console.log(tweetId)
        for (const key in tweets) {
            console.log(tweets[key].tweetId)
          if (tweets[key].tweetId === tweetId) {
            return tweets[key].content;
          }
        }
      };

    return (
        <div style={{ width: "100%", margin: "20px" }}>
            <Grid xs={12} container spacing={2} style={{ margin: "20px" }} columns={{ xs: 3, sm: 6, md: 12 }}>

                {/* user who registered more events during the day */}
                <Grid xs={3}>
                    <RootCard>
                        <BudgetCardContent>
                            <div>
                                <Typography style={{ display: 'flex' }} variant="h6" gutterBottom>
                                    Username:
                                </Typography>
                                <Typography style={{ wordBreak: 'break-word', }} variant="h5">
                                    <b>
                                        {getKeyFromDictionary(mostEvents)}
                                    </b>
                                </Typography>
                            </div>
                            <AvatarWrapper>
                                <Box color="inherit" fontSize="large">
                                    <SentimentSatisfiedAlt />
                                </Box>
                            </AvatarWrapper>
                        </BudgetCardContent>
                        <CardContent>
                            <Typography variant="caption">User Who Registered More Event During The Day</Typography>
                        </CardContent>
                    </RootCard>
                </Grid>

                {/* most commented tweet  */}
                <Grid xs={3}>
                    <RootCard>
                        <BudgetCardContent>
                            <div>
                                <Typography style={{ display: 'flex' }} variant="h6" gutterBottom>
                                    Tweet:
                                </Typography>
                                <Typography variant="body1">
                                    <b>
                                        {getTweet(mostReplies)}
                                    </b>
                                </Typography>
                            </div>
                            <AvatarWrapper style={{ backgroundColor: "rgb(16, 185, 129)" }}>
                                <Box color="inherit" fontSize="large">
                                    <ReplyAll />
                                </Box>
                            </AvatarWrapper>
                        </BudgetCardContent>
                        <CardContent>
                            <Typography variant="caption">Most Commented Tweet</Typography>
                        </CardContent>
                    </RootCard>
                </Grid>

                {/* How many times the app opened */}
                <Grid xs={3}>
                    <RootCard>
                        <BudgetCardContent>
                            <div>
                                <Typography style={{ display: 'flex' }} variant="h6" gutterBottom>
                                    Times:
                                </Typography>
                                <Typography variant="h4">
                                    <b>
                                        {openCount}
                                    </b>
                                </Typography>
                            </div>
                            <AvatarWrapper style={{ backgroundColor: "rgb(247, 144, 9)" }}>
                                <Box color="inherit" fontSize="large">
                                    <AdsClick />
                                </Box>
                            </AvatarWrapper>
                        </BudgetCardContent>
                        <CardContent>
                            <Typography variant="caption"> Times The App Has Been Opened </Typography>
                        </CardContent>
                    </RootCard>
                </Grid>

                {/* # de tweets creados total */}
                <Grid xs={3}>
                    <RootCard>
                        <BudgetCardContent>
                            <div>
                                <Typography style={{ display: 'flex' }} variant="h6" gutterBottom>
                                    Number:
                                </Typography>
                                <Typography variant="h4">
                                    <b>
                                        {totalTweets}
                                    </b>
                                </Typography>
                            </div>
                            <AvatarWrapper style={{ backgroundColor: "rgb(99, 102, 241)" }}>
                                <Box color="inherit" fontSize="large">
                                    <MapsUgc />
                                </Box>
                            </AvatarWrapper>
                        </BudgetCardContent>
                        <CardContent>
                            <Typography variant="caption"> Number Of Created Tweets</Typography>
                        </CardContent>
                    </RootCard>
                </Grid>

                {/* # total de replies  */}
                <Grid xs={3}>
                    <RootCard>
                        <BudgetCardContent>
                            <div>
                                <Typography style={{ display: 'flex' }} variant="h6" gutterBottom>
                                    Number:
                                </Typography>
                                <Typography variant="h4">
                                    <b>
                                        {totalReplies}
                                    </b>
                                </Typography>
                            </div>
                            <AvatarWrapper style={{ backgroundColor: "#1976d2" }}>
                                <Box color="inherit" fontSize="large">
                                    <MapsUgc />
                                </Box>
                            </AvatarWrapper>
                        </BudgetCardContent>
                        <CardContent>
                            <Typography variant="caption"> Number Of Total Replies</Typography>
                        </CardContent>
                    </RootCard>
                </Grid>

                {/* 6. How Many Registered Users */}
                <Grid xs={3}>
                    <RootCard>
                        <BudgetCardContent>
                            <div>
                                <Typography style={{ display: 'flex' }} variant="h6" gutterBottom>
                                    Total:
                                </Typography>
                                <Typography variant="h4">
                                    <b>
                                        {countUsers}
                                    </b>
                                </Typography>
                            </div>
                            <AvatarWrapper style={{ backgroundColor: "rgb(241 210 99)" }}>
                                <Box color="inherit" fontSize="large">
                                    <People />
                                </Box>
                            </AvatarWrapper>
                        </BudgetCardContent>
                        <CardContent>
                            <Typography variant="caption"> Total Number Of Users</Typography>
                        </CardContent>
                    </RootCard>
                </Grid>

            </Grid>
        </div>
    );
};

export default Metrics;

