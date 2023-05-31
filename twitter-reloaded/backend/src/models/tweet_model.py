from pydantic import BaseModel


class TweetContent(BaseModel):
    content: str

class TweetReply(BaseModel):
    parentId: int
    replyId: int

class TweetOffset(BaseModel):
    offset: int
