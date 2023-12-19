# Stage for installing Python dependencies
FROM python:3.9-alpine as python-script-install

WORKDIR /seed-db

# Install Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Stage for running the Python script
FROM python:3.9-alpine as python-script

WORKDIR /seed-db

# Copy installed dependencies from the previous stage
COPY --from=python-script-install /usr/local /usr/local

# Copy the Python script
COPY populatedb.py .

# Run the Python script
CMD ["python", "populatedb.py"]
