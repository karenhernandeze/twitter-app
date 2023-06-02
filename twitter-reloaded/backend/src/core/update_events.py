import os
from requests import Session, Response


def insert_action(userId: int, actionType: str):
    url = f'{os.getenv("EVENTS_API_URL")}/events/new'
    response: Response = None
    
    with Session() as session:
        response = session.post(
            url,
            json={"userId": userId, "type": actionType},
        )
    
    print(f"Event created: {response.json()}")
    return response.json()
