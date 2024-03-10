from typing import List, Optional
from sqlalchemy.orm import Session
from src.students.models import StudentEntity
from src.students.schemas import Student, StudentCreate

def get_all(*, db_session : Session) -> List[Optional[Student]]:
    """Returns all registered students."""
    return db_session.query(StudentEntity).all()

def create_student(*, db_session: Session, student_in: StudentCreate) -> Student:
    """Creates a new student registry"""
    db_student = StudentEntity(
        full_name=student_in.full_name,
        email=student_in.email,
        day_of_birth=student_in.day_of_birth,
        phone_number=student_in.phone_number,
        address=student_in.address,
        tennis_level=student_in.tennis_level,
        profile_picture=student_in.profile_picture
    )
    try:
        db_session.add(db_student)
        db_session.commit()
    except Exception as e:
        db_session.rollback()
        raise e
    return db_student


def get_by_id(*, db_session: Session, student_id: int) -> Optional[Student]:
    """Returns student with passed id."""
    return db_session.query(StudentEntity).get(student_id)

def delete_student(*, db_session: Session, student_id: int) -> bool:
    """Deletes a student registry"""
    try: 
        student_to_delete = db_session.query(StudentEntity).filter(StudentEntity.id == student_id).one_or_none()
        if student_to_delete:
            db_session.delete(student_to_delete)
            db_session.commit()
            return True
        else:
            print("User not found.")
            return False
    except Exception as e:
        db_session.rollback()
        raise e