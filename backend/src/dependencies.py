from typing import Annotated, Generator
from fastapi import Depends
from database import ScopedSession
from sqlalchemy.orm import Session


def get_db() -> Generator[Session, None, None]:
    with ScopedSession() as session:
        yield session

SessionDep = Annotated[Session, Depends(get_db)]