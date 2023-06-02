from fastapi import status


def test_open_metric(test_app):
    response = test_app.get("/events/open")
    assert response.status_code == status.HTTP_200_OK
    assert response.json()['message'] == "Open event count retrieved successfully"
    assert response.json()['data'] is not None

def test_user_count(test_app):
    response = test_app.get("/events/users")
    assert response.status_code == status.HTTP_200_OK
    assert response.json()['message'] == "User count retrieved successfully"
    assert response.json()['data'] is not None
