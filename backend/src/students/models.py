from sqlalchemy import Column, Date, Integer, String
from src.database import Base

class StudentEntity(Base):
    __tablename__ = "student"

    id = Column(Integer, primary_key=True, autoincrement=True)
    full_name = Column(String)
    email = Column(String, unique=True)
    day_of_birth = Column(Date)
    phone_number = Column(String)
    address = Column(String)
    tennis_level = Column(String)
    profile_picture = Column(String)
    