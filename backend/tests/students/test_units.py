import pytest
from sqlalchemy.orm import Session

from src.students.service import get_all
from src.students.models import StudentEntity


@pytest.fixture
def db_session(mocker):
    return mocker.MagicMock(spec=Session)

@pytest.fixture
def test_student_data():
    return {
        "full_name": "Test Student",
        "email": "test@example.com",
        "day_of_birth": "2000-01-01",
        "phone_number": "1234567890",
        "address": "Test Address",
        "tennis_level": "Beginner",
        "profile_picture": "test.jpg"
    }

def test_get_all(db_session, mocker):
    query_mock = mocker.MagicMock()
    db_session.query.return_value = query_mock

    query_mock.all.return_value = [StudentEntity()]

    result = get_all(db_session=db_session)

    assert result