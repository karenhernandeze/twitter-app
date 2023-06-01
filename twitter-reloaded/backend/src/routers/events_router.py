from fastapi import APIRouter, status
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder

from event_dashboard.backend.src.metrics.most_events import get_most_events
from event_dashboard.backend.src.metrics.most_replies import get_most_replies
from event_dashboard.backend.src.metrics.open_app import get_open_actions
from event_dashboard.backend.src.metrics.total_replies import get_total_reply_actions
from event_dashboard.backend.src.metrics.total_tweets import get_total_tweet_count
from event_dashboard.backend.src.metrics.user_count import get_user_count


router = APIRouter(
    prefix="/events", tags=["events"], responses={404: {"description": "Not found"}}
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
