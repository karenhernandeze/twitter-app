from ..database.config import TwitterDB as db


class UsersCRUD:
    def get_user_by_id(userId: int):
        query = """
        SELECT userId, username FROM users
        WHERE userId = ?;
        """
        values = (userId,)
        row = db.execute_query_values(query, values)
        return row
    
    def get_user_by_name(username: str):
        query = """
        SELECT userId, username FROM users
        WHERE username = ?;
        """
        values = (username,)
        row = db.execute_query_values(query, values)
        return row
