from fastapi import Request
from fastapi.responses import JSONResponse

from exceptions import GenericTennisSchoolException

async def exception_handler(request: Request, exc: GenericTennisSchoolException):
    return JSONResponse(
        status_code=exc.status_code,
        content={"exception": exc.__class__.__name__,"message": exc.detail},
    )