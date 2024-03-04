from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, scoped_session

SQLALCHEMY_DATABASE_URL = "postgresql://myuser:mypassword@localhost:5432/tennis_school_management_db"

engine = create_engine(SQLALCHEMY_DATABASE_URL) # acts as central source of connections

Session = sessionmaker(autocommit=False, autoflush=False, bind=engine) # establishes all conversations with the database

ScopedSession = scoped_session(Session)

Base = declarative_base() # base class which contains MetaData where newly defined Table objects are collected. The object is intended to be accessed directly to issue CREATE statements for all tables.
