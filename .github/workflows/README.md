# GitActions Documentation

## test_on_pr Workflow

This workflow runs on pull requests to main branch. It will use a ubuntu image to set up python, install and cache the requirements.txt found in the backend folder and run the backend tests with pytest.

The workflow is used to approve pull requests and to assert that changes will not break the functional state of the main branch.
