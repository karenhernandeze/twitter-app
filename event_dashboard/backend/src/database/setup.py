import random
from .config import EventsKV as kv


def generate_db():
    create_actions_table = """
    CREATE TABLE IF NOT EXISTS actions (
        actionId INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
        userId INTEGER NOT NULL,
        actionType TEXT NOT NULL CHECK(actionType IN ('create','reply','open')),
        createdAt DATE NOT NULL DEFAULT (datetime('now','localtime'))
    );
    """

    kv.execute_query(create_actions_table)
    print("Database generated successfully")


def fill_db():
    actionsQuery = """
    INSERT INTO actions (userId, actionType)
    VALUES (?, ?);
    """

    actions = []

    for _ in range(100):
        userId = random.randint(1, 5)
        actionType = random.choice(["create", "reply", "open"])
        actions.append((userId, actionType))

    kv.execute_many_query(actionsQuery, actions)
    print("Database filled successfully")


if __name__ == "__main__":
    generate_db()
    fill_db()
    kv.close_connection()
