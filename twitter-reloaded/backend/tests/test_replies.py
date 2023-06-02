from fastapi import status


def test_tweet_replies(test_app):
    user = "guest"
    tweet = {"tweetId": 1}
    response = test_app.post(f"/api/{user}/replies", json=tweet)
    assert response.status_code == status.HTTP_200_OK
    assert response.json()['message'] == "Tweet replies retrieved successfully"
    assert response.json()['data'] is not None

def test_tweet_reply_ids(test_app):
    user = "guest"
    response = test_app.get(f"/api/{user}/replyIds")
    assert response.status_code == status.HTTP_200_OK
    assert response.json()['message'] == "All reply ids retrieved successfully"
    assert response.json()['data'] is not None
