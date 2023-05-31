from sqlite3 import Row
from fastapi import HTTPException, status

from ..crud.tweets_crud import TweetsCRUD


class TweetsService():
    Rows = list[Row]
    
    def insert_tweet(user: dict, content: str) -> Row | None:                  
        if len(content) > 300:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Tweet content exceeds 300 characters"
            )
        
        new_tweet = TweetsCRUD.create_tweet(user["userId"], content)
        return new_tweet
    
    def latest_tweets() -> Rows | None:
        latest_tweets = TweetsCRUD.get_latest_tweets()
        
        if latest_tweets is None:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="No tweets found"
            )
        
        return latest_tweets
    
    def tweets_by_offset(offset: int) -> Rows | None:
        tweets = TweetsCRUD.get_tweets_by_offset(offset)
        
        if tweets is None:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Offset exceeds number of tweets"
            )
        
        return tweets
    
    def all_tweets() -> Rows | None:
        tweets = TweetsCRUD.get_all_tweets()
        
        if tweets is None:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="No tweets found"
            )
        
        return tweets
