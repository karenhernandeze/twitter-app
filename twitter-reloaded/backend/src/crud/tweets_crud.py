from ..database.config import TwitterDB as db


class TweetsCRUD:   
    def create_tweet(cls, content: str, userId: int):
        query = """
        INSERT INTO tweets (content, userId)
        VALUES (?, ?)
        RETURNING *;
        """
        values = (content, userId)
        row = db.execute_query_values(query, values)
        return row
    
    def get_latest_tweets(cls):
        query = """
        SELECT * FROM tweets
        ORDER BY createdAt DESC
        LIMIT 10 OFFSET 0;
        """
        rows = db.execute_query(query)
        return rows
    
    def get_tweets_by_offset(cls, offset: int):
        query = f"""
        SELECT * FROM tweets
        ORDER BY createdAt DESC
        LIMIT 10 OFFSET {offset};
        """
        rows = db.execute_query(query)
        return rows
    
    def get_all_tweets(cls):
        query = """
        SELECT * FROM tweets
        ORDER BY createdAt DESC;
        """
        rows = db.execute_query(query)
        return rows
