import sys
print("Current sys.path:", sys.path)

from fastapi import FastAPI
import logging
from src.students.router import router as studentsRouter
from src.exceptions import GenericTennisSchoolException
from src.exception_handler import exception_handler

app = FastAPI()

app.include_router(studentsRouter)
app.exception_handler(GenericTennisSchoolException)(exception_handler)

logging.basicConfig(level=logging.DEBUG, format='[%(levelname)s](%(name)s): %(message)s')