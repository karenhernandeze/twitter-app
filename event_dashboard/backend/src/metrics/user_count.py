from ..database.config import EventsKV as kv


def get_user_count():
    query = """
    SELECT COUNT(DISTINCT userId) as userCount
    FROM actions;
    """
    row = kv.execute_query(query)
    return dict(row)
