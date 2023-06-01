from ..database.config import EventsKV as kv


def get_open_actions():
    query = """
    SELECT COUNT(*) as openCount
    FROM actions
    WHERE actionType = 'open';
    """
    row = kv.execute_query(query)
    return dict(row)
