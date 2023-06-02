from fastapi import status


def test_offset_tweets(test_app):
    user = "guest"
    req = { "offset": 10 }
    response = test_app.post(f"/api/{user}/tweetOffset", json=req)
    assert response.status_code == status.HTTP_200_OK
    assert response.json()['message'] == "Tweets retrieved successfully"
    assert response.json()['data'] is not None

def test_all_tweets(test_app):
    user = "guest"
    response = test_app.get(f"/api/{user}/allTweets")
    assert response.status_code == status.HTTP_200_OK
    assert response.json()['message'] == "All tweets retrieved successfully"
    assert response.json()['data'] is not None
