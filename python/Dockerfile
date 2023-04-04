FROM python:alpine

RUN mkdir /venv

RUN apk add --no-cache musl-dev g++ gcc lapack-dev

RUN python -m venv /opt/venv
ENV PATH="/opt/venv/bin:$PATH"

WORKDIR /app

COPY requirements/backend.in .

RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r backend.in

COPY . .

CMD ["uvicorn", "spaceship.main:app", "--host=0.0.0.0", "--port=8080"]