from ..database.config import EventsKV as kv


def get_most_events():
    query = """
    SELECT userId, COUNT(*) as eventsCount
    FROM actions
    GROUP BY userId
    ORDER BY eventsCount DESC
    LIMIT 1;
    """
    row = kv.execute_query(query)
    return dict(row)
