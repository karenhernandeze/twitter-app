from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .database.config import TwitterDB as db


app = FastAPI(title="Twitter Reloaded", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.on_event('shutdown')
async def shutdown_db_client():
    db.close_connection()

@app.get("/")
async def root():
    return {"messsage" : "Welcome!"}
