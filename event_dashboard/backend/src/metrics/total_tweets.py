from ..database.config import EventsKV as kv


def get_total_tweet_count():
    query = """
    SELECT COUNT(*) as totalTweets
    FROM actions
    WHERE actionType = 'create';
    """
    row = kv.execute_query(query)
    return dict(row)
