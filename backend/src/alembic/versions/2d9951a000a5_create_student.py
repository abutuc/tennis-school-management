"""create_student

Revision ID: 2d9951a000a5
Revises: 
Create Date: 2024-03-03 18:57:13.512934

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '2d9951a000a5'
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.create_table(
        'student',
        sa.Column('id', sa.Integer, primary_key=True, autoincrement=True),
        sa.Column('full_name', sa.String),
        sa.Column('email', sa.String, unique=True),
        sa.Column('day_of_birth', sa.Date),
        sa.Column('phone_number', sa.String),
        sa.Column('address', sa.String),
        sa.Column('tennis_level', sa.String),
        sa.Column('profile_picture', sa.String)
    )


def downgrade() -> None:
    op.drop_table('student')
