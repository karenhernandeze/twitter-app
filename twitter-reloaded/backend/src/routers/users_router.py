from fastapi import APIRouter, status
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder

from ..models.user_model import UserID
from ..services.users_service import UsersService


router = APIRouter(
    prefix="/user", tags=["users"], responses={404: {"description": "Not found"}}
)


@router.post(
    "/get",
    status_code=status.HTTP_200_OK,
    response_description="Get username by id",
)
def get_username(body: UserID):
    body = jsonable_encoder(body)
    user = UsersService.user_by_id(body["userId"])
    encoded_user = jsonable_encoder(user)

    return JSONResponse(
        status_code=status.HTTP_200_OK,
        content={
            "status": status.HTTP_200_OK,
            "message": "User retrieved successfully",
            "data": encoded_user,
        },
    )
