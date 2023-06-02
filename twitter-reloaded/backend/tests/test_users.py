from fastapi import status


def test_get_username(test_app):
    user = {"userId": 1}
    response = test_app.post("/user/get", json=user)
    assert response.status_code == status.HTTP_200_OK
    assert response.json()['message'] == "User retrieved successfully"
    assert response.json()['data'] == {"userId": 1, "username": "guest"}
