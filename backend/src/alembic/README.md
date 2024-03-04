# Alembic

Alembic is a database migrations versioning tool.

To generate a new migration the command is:

```
alembic revision -m "migration_name"
```

The command will add a new file to the versions folder. Then we should change the contents of the "upgrade" and "downgrade" methods to translate the sqlalchemy code of the migration.

Then to apply the migration we can run:

```
alembic upgrade head
```

or

```
alembic upgrade <target_revision>
```

The first command uses the keyword "head" which will indicate to alembic that we want to apply all the pending migrations until the latest one. The second command tells alembic to run apply the changes of the given "target_revision" migration.

Then if we want to revert a migration we can run:

```
alembic downgrade <target_revision>
```
