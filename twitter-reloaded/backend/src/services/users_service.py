from sqlite3 import Row
from fastapi import HTTPException, status

from ..crud.users_crud import UsersCRUD


class UsersService():    
    def user_by_name(username: str) -> Row | None:
        user = UsersCRUD.get_user_by_name(username)     
        if user is None:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="User not found"
            )
        return user
    
    def user_by_id(user_id: int) -> Row | None:
        user = UsersCRUD.get_user_by_id(user_id)
        if user is None:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="User not found"
            )
        return user
