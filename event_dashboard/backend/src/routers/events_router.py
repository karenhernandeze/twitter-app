from fastapi import APIRouter, status
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder

from ..core.new_action import insert_new_action

from ..metrics.most_events import get_most_events
from ..metrics.most_replies import get_most_replies
from ..metrics.open_app import get_open_actions
from ..metrics.total_replies import get_total_reply_actions
from ..metrics.total_tweets import get_total_tweet_count
from ..metrics.user_count import get_user_count

from ..models.actions import Action


router = APIRouter(
    prefix="/events", tags=["events"], responses={404: {"description": "Not found"}}
)

@router.post(
    "/new",
    status_code=status.HTTP_201_CREATED,
    response_description="Insert new action",
)
def new_action(body: Action):
    body = jsonable_encoder(body)
    user = body["userId"]
    actionType = body["type"]
    action = insert_new_action(user, actionType)
    encoded_action = jsonable_encoder(action)
    
    return JSONResponse(
        status_code=status.HTTP_201_CREATED,
        content={
            "status": status.HTTP_201_CREATED,
            "message": "Action created successfully",
            "data": encoded_action,
        }
    )

@router.get(
    "/most_events",
    status_code=status.HTTP_200_OK,
    response_description="Get user with most events",
)
def most_events():
    data = get_most_events()
    encoded_metric = jsonable_encoder(data)

    return JSONResponse(
        status_code=status.HTTP_200_OK,
        content={
            "status": status.HTTP_200_OK,
            "message": "Most events retrieved successfully",
            "data": encoded_metric,
        },
    )
    
@router.get(
    "/most_replies",
    status_code=status.HTTP_200_OK,
    response_description="Get user with most replies",
)
def most_replies():
    data = get_most_replies()
    encoded_metric = jsonable_encoder(data)

    return JSONResponse(
        status_code=status.HTTP_200_OK,
        content={
            "status": status.HTTP_200_OK,
            "message": "Most replies retrieved successfully",
            "data": encoded_metric,
        },
    )
    
@router.get(
    "/open",
    status_code=status.HTTP_200_OK,
    response_description="Get count of open events",
)
def get_open():
    data = get_open_actions()
    encoded_metric = jsonable_encoder(data)

    return JSONResponse(
        status_code=status.HTTP_200_OK,
        content={
            "status": status.HTTP_200_OK,
            "message": "Open event count retrieved successfully",
            "data": encoded_metric,
        },
    )
    
@router.get(
    "/total_reply",
    status_code=status.HTTP_200_OK,
    response_description="Get total reply count",
)
def total_reply():
    data = get_total_reply_actions()
    encoded_metric = jsonable_encoder(data)

    return JSONResponse(
        status_code=status.HTTP_200_OK,
        content={
            "status": status.HTTP_200_OK,
            "message": "Total replies retrieved successfully",
            "data": encoded_metric,
        },
    )
    
@router.get(
    "/total_tweet",
    status_code=status.HTTP_200_OK,
    response_description="Get total tweet count",
)
def total_tweet():
    data = get_total_tweet_count()
    encoded_metric = jsonable_encoder(data)

    return JSONResponse(
        status_code=status.HTTP_200_OK,
        content={
            "status": status.HTTP_200_OK,
            "message": "Total tweets retrieved successfully",
            "data": encoded_metric,
        },
    )
    
@router.get(
    "/users",
    status_code=status.HTTP_200_OK,
    response_description="Get total user count",
)
def user_count():
    data = get_user_count()
    encoded_metric = jsonable_encoder(data)

    return JSONResponse(
        status_code=status.HTTP_200_OK,
        content={
            "status": status.HTTP_200_OK,
            "message": "User count retrieved successfully",
            "data": encoded_metric,
        },
    )
