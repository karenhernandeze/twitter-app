from ..database.config import EventsKV as kv


def insert_new_action(userId: int, actionType: str):
    query = """
    INSERT INTO actions (userId, actionType)
    VALUES (?, ?)
    RETURNING *;
    """
    #kv.create_connection()
    values = (userId, actionType)
    row = kv.execute_query_values(query,values)
    #kv.close_connection()
    return dict(row)
