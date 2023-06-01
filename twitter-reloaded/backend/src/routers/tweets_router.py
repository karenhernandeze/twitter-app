from fastapi import APIRouter, status
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder

from ..services.users_service import UsersService
from ..services.tweets_service import TweetsService
from ..services.replies_service import RepliesService
from ..models.tweet_model import TweetContent, TweetOffset, TweetReply, TweetID


router = APIRouter(
    prefix="/api", tags=["tweets"], responses={404: {"description": "Not found"}}
)


@router.post(
    "/{username}/new",
    status_code=status.HTTP_201_CREATED,
    response_description="Create a new tweet",
)
def new_tweet(username: str, body: TweetContent):
    body = jsonable_encoder(body)
    user = UsersService.user_by_name(username)
    new_tweet = TweetsService.insert_tweet(user, body["content"])
    encoded_tweet = jsonable_encoder(new_tweet)

    return JSONResponse(
        status_code=status.HTTP_201_CREATED,
        content={
            "status": status.HTTP_201_CREATED,
            "message": "Tweet created successfully",
            "data": encoded_tweet,
        },
    )

@router.get(
    "/{username}/tweets",
    status_code=status.HTTP_200_OK,
    response_description="Get most recent tweets",
)
def latest(username: str):
    user = UsersService.user_by_name(username)
    tweets = TweetsService.latest_tweets()
    encoded_tweets = jsonable_encoder(tweets)

    return JSONResponse(
        status_code=status.HTTP_200_OK,
        content={
            "status": status.HTTP_200_OK,
            "message": "Tweets retrieved successfully",
            "user": user["username"],
            "data": encoded_tweets,
        },
    )
    
@router.post(
    "/{username}/tweetOffset",
    status_code=status.HTTP_200_OK,
    response_description="Get tweets by offset",
)
def offset_tweets(username: str, body: TweetOffset):
    body = jsonable_encoder(body)
    user = UsersService.user_by_name(username)
    tweets = TweetsService.tweets_by_offset(body["offset"])
    encoded_tweets = jsonable_encoder(tweets)

    return JSONResponse(
        status_code=status.HTTP_200_OK,
        content={
            "status": status.HTTP_200_OK,
            "message": "Tweets retrieved successfully",
            "user": user["username"],
            "data": encoded_tweets,
        },
    )
    
@router.get(
    "/{username}/allTweets",
    status_code=status.HTTP_200_OK,
    response_description="Get all tweets",
)
def all_tweets(username: str):
    user = UsersService.user_by_name(username)
    tweets = TweetsService.all_tweets()
    encoded_tweets = jsonable_encoder(tweets)

    return JSONResponse(
        status_code=status.HTTP_200_OK,
        content={
            "status": status.HTTP_200_OK,
            "message": "All tweets retrieved successfully",
            "user": user["username"],
            "data": encoded_tweets,
        },
    )
    
@router.post(
    "/{username}/replies",
    status_code=status.HTTP_200_OK,
    response_description="Get all tweet replies",
)
def replies(username: str, body: TweetID):
    body = jsonable_encoder(body)
    user = UsersService.user_by_name(username)
    replies = RepliesService.tweet_replies(body["tweetId"])
    encoded_replies = jsonable_encoder(replies)

    return JSONResponse(
        status_code=status.HTTP_200_OK,
        content={
            "status": status.HTTP_200_OK,
            "message": "All tweets retrieved successfully",
            "user": user["username"],
            "data": encoded_replies,
        },
    )
    
@router.post(
    "/{username}/reply",
    status_code=status.HTTP_201_CREATED,
    response_description="Insert tweet reply",
)
def reply(username: str, body: TweetReply):
    body = jsonable_encoder(body)
    user = UsersService.user_by_name(username)
    reply = RepliesService.insert_reply(body["parentId"], body["replyId"])
    encoded_reply = jsonable_encoder(reply)

    return JSONResponse(
        status_code=status.HTTP_201_CREATED,
        content={
            "status": status.HTTP_201_CREATED,
            "message": "Reply created successfully",
            "user": user["username"],
            "data": encoded_reply,
        },
    )
