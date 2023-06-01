from pydantic import BaseModel


class UserID(BaseModel):
    userId: int
