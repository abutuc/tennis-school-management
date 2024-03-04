from fastapi import FastAPI
import logging
from students.router import router as studentsRouter
from exceptions import GenericTennisSchoolException
from exception_handler import exception_handler

app = FastAPI()

app.include_router(studentsRouter)
app.exception_handler(GenericTennisSchoolException)(exception_handler)

logging.basicConfig(level=logging.DEBUG, format='[%(levelname)s](%(name)s): %(message)s')