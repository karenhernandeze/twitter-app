from dotenv import load_dotenv

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from contextlib import asynccontextmanager

from .database.config import TwitterDB as db

from .routers import tweets_router, users_router


@asynccontextmanager
async def lifespan(app: FastAPI):
    load_dotenv(".env", verbose=True)
    db.create_connection()
    yield
    db.close_connection()

app = FastAPI(title="Twitter Reloaded", version="0.1.0", lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/")
def root():
    return {"messsage" : "Welcome!"}

app.include_router(router=tweets_router.router)
app.include_router(router=users_router.router)

# import uvicorn


# if __name__ == "__main__":
#     uvicorn.run(app, host="127.0.0.1", port=8546)
