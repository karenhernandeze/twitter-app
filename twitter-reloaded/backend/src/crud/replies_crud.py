from ..database.config import TwitterDB as db


class RepliesCRUD:   
    def create_reply(parentId: int, replyId: int):
        query = """
        INSERT INTO replies (parentId, replyId)
        VALUES (?, ?)
        RETURNING *;
        """
        values = (parentId, replyId)
        row = db.execute_query_values(query, values)
        return row
    
    def get_tweet_replies(tweetId: int):
        query = """
        SELECT t.* 
        FROM tweets as t
        JOIN replies as r ON t.tweetId = r.replyId
        WHERE r.parentId = ?
        ORDER BY t.createdAt DESC;
        """
        values = (tweetId,)
        rows = db.execute_query_values_all(query, values)
        return rows
    
    def get_all_reply_ids():
        query = """
        SELECT DISTINCT replyId FROM replies;
        """
        rows = db.execute_query(query)
        return rows
