import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import './Metrics.css'
import { AccountBalance, AdsClick, MapsUgc, People, ReplyAll, SentimentSatisfiedAlt } from '@mui/icons-material';
import { styled } from '@mui/system';
import { Card, CardContent, Typography, Avatar, Box } from '@mui/material';


const RootCard = styled(Card)(({ theme }) => ({
    backgroundColor: 'white',
    color: '#rgb(17, 25, 39)',
    minHeight: '200px',
    height: '100%', // Set a fixed height for the cards
}));

const BudgetCardContent = styled(CardContent)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
});

const AvatarWrapper = styled(Avatar)(({ theme }) => ({
    backgroundColor: 'rgb(240, 68, 56)',
    height: 56,
    width: 56,
}));


const Metrics = () => {
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
                                        username.name
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
                                <Typography variant="body2">
                                    <b>
                                        well meaning and kindly.
                                        a benevolent smile
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
                                        123,343
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
                                        32,401
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
                                        1,712
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
                                        24
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
            {/* </Grid> */}
        </div>
    );
};

export default Metrics;

