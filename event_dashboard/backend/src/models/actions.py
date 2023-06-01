from pydantic import BaseModel


class Action(BaseModel):
    userId: int
    type: str
