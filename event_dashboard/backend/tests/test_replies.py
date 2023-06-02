from fastapi import status


def test_most_replies(test_app):
    response = test_app.get("/events/most_replies")
    assert response.status_code == status.HTTP_200_OK
    assert response.json()['message'] == "Most replies retrieved successfully"
    assert response.json()['data'] is not None

def test_total_replies(test_app):
    response = test_app.get("/events/total_reply")
    assert response.status_code == status.HTTP_200_OK
    assert response.json()['message'] == "Total replies retrieved successfully"
    assert response.json()['data'] is not None
