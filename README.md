
## Prerequisites

- [Docker](https://www.docker.com/get-started)

The database should be seeded automatically by db-seed so you shouldn't need to do anything about data.<br>

Access commwell with localhost:3000. Alternatively use your own machine IP, e.g: 192.168.1.100:3000

## Test User to login
username: testuser<br>
password: testpassword
### Step 1: Clone the Repository

```bash
git clone https://github.com/mhi1001/docker-comwell.git
cd docker-comwell
```
### Step 2: Build Docker Containers

```bash
docker-compose build
```

### Step 3: Run Docker Containers

```bash
docker-compose up
```
