from fastapi import status


def test_total_tweets(test_app):
    response = test_app.get("/events/total_tweet")
    assert response.status_code == status.HTTP_200_OK
    assert response.json()['message'] == "Total tweets retrieved successfully"
    assert response.json()['data'] is not None

def test_most_events(test_app):
    response = test_app.get("/events/most_events")
    assert response.status_code == status.HTTP_200_OK
    assert response.json()['message'] == "Most events retrieved successfully"
    assert response.json()['data'] is not None
