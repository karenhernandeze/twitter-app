from sqlite3 import Row
from fastapi import HTTPException, status

from ..crud.replies_crud import RepliesCRUD


class RepliesService():
    Rows = list[Row]
    
    def insert_reply(parentId: int, replyId: int) -> Row | None:
        reply = RepliesCRUD.create_reply(parentId, replyId)
        
        if reply is None:
            raise HTTPException(
                status_code=status.HTTP_409_CONFLICT,
                detail="Reply already exists and could not be created"
            )
        
        return reply
    
    def tweet_replies(tweetId: int) -> Rows | None:
        replies = RepliesCRUD.get_tweet_replies(tweetId)
        
        if replies is None:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="No replies to tweet found"
            )
        
        return replies

    def tweet_reply_id_list():
        reply_list = RepliesCRUD.get_all_reply_ids()
        
        if reply_list is None:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="No replies found"
            )
            
        reply_ids = [reply["replyId"] for reply in reply_list]
        return reply_ids
