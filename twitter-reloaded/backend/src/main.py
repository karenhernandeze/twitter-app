from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .database.config import TwitterDB as db

from .routers import tweets_router


app = FastAPI(title="Twitter Reloaded", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.on_event('shutdown')
def shutdown_db_client():
    db.close_connection()

@app.get("/")
def root():
    return {"messsage" : "Welcome!"}

app.include_router(router=tweets_router.router)

# import uvicorn


# if __name__ == "__main__":
#     uvicorn.run(app, host="127.0.0.1", port=8546)
