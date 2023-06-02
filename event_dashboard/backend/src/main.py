from dotenv import load_dotenv

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from contextlib import asynccontextmanager

from .database.config import EventsKV as kv

from .routers import events_router


@asynccontextmanager
async def lifespan(app: FastAPI):
    load_dotenv(".env", verbose=True)
    kv.create_connection()
    yield
    kv.close_connection()

app = FastAPI(title="Event Dashboard", version="0.1.0", lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"messsage": "Welcome!"}


app.include_router(router=events_router.router)

# import uvicorn

# if __name__ == "__main__":
#     uvicorn.run(app, host="127.0.0.1", port=8547)
