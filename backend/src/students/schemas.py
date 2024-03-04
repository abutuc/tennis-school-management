import datetime
from pydantic import BaseModel

class StudentBase(BaseModel):
    full_name: str
    email: str
    day_of_birth: datetime.date
    phone_number: str 
    address: str
    tennis_level: str
    profile_picture: str | None = None

class StudentCreate(StudentBase):
    pass

class Student(StudentBase):
    id: int
    