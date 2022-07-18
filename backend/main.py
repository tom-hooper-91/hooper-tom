from typing import List

from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Person(BaseModel):
  id: int
  name: str
  age: int

DB: List[Person] = [
  Person(id=1, name="Tom", age=30),
  Person(id=2, name="Kirsty", age=30),
  Person(id=3, name="Ella", age=25),
  Person(id=4, name="Jacob", age=30)
]

@app.get("/api")
def read_root():
    return DB
    