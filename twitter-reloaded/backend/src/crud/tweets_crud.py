from ..database.config import TwitterDB as db


class TweetsCRUD:   
    def create_tweet(userId: int, content: str):
        query = """
        INSERT INTO tweets (userId, content)
        VALUES (?, ?)
        RETURNING *;
        """
        values = (userId, content)
        row = db.execute_query_values(query, values)
        return row
    
    def get_latest_tweets():
        query = """
        SELECT * FROM tweets
        ORDER BY createdAt DESC
        LIMIT 10 OFFSET 0;
        """
        rows = db.execute_query(query)
        return rows
    
    def get_tweets_by_offset(offset: int):
        query = f"""
        SELECT * FROM tweets
        ORDER BY createdAt DESC
        LIMIT 10 OFFSET {offset};
        """
        rows = db.execute_query(query)
        return rows
    
    def get_all_tweets():
        query = """
        SELECT * FROM tweets
        ORDER BY createdAt DESC;
        """
        rows = db.execute_query(query)
        return rows
