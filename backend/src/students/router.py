from typing import List
from fastapi import APIRouter
from dependencies import SessionDep
from exceptions import NotFoundException
from students.schemas import Student, StudentCreate
from . import service as student_service
import logging

router = APIRouter()

logger = logging.getLogger("StudentRouter")

@router.get("/students", response_model=List[Student], status_code=200)
def read_students(session: SessionDep):
    logger.debug("Getting all students.")
    return student_service.get_all(db_session=session)

@router.post("/students", response_model=Student, status_code=201)
def create_student(session: SessionDep, student: StudentCreate):
    logger.info("Creating a student registry.")
    return student_service.create_student(db_session=session, student_in=student)

@router.get("/students/{student_id}", status_code=200)
def read_student_by_id(session: SessionDep, student_id: int):
    logger.debug(f"Getting student with id {student_id}")
    student = student_service.get_by_id(db_session=session, student_id=student_id)
    if not student:
        raise NotFoundException("Student with id {0} not found.".format(student_id))
    return student

@router.delete("/students/{student_id}", status_code=204)
def delete_student(session: SessionDep, student_id: int):
    logger.info(f"Deletting student with id {student_id}")
    success = student_service.delete_student(db_session=session, student_id=student_id)
    if not success:
        raise NotFoundException("Student with id {0} not found.".format(student_id))
