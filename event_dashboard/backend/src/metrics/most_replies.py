from ..database.config import EventsKV as kv


def get_most_replies():
    query = """
    SELECT userId, COUNT(*) as repliesCount
    FROM actions
    WHERE actionType = 'reply'
    GROUP BY userId
    ORDER BY repliesCount DESC
    LIMIT 1;
    """
    row = kv.execute_query(query)
    return dict(row)
