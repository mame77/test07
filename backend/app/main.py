print("✅ main.py 動いたよ！")
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return { "Hello from FastAPI!"}