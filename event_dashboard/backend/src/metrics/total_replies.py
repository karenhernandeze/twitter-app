from ..database.config import EventsKV as kv


def get_total_reply_actions():
    query = """
    SELECT COUNT(*) as totalReplies
    FROM actions
    WHERE actionType = 'reply';
    """
    row = kv.execute_query(query)
    return dict(row)
