from .config import TwitterDB as db


def generate_db():
    tables = []

    create_users_table = """
    CREATE TABLE IF NOT EXISTS users (
        userId INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
        username TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
    );
    """
    tables.append(create_users_table)

    create_tweets_table = """
    CREATE TABLE IF NOT EXISTS tweets (
        tweetId INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
        createdAt DATE NOT NULL DEFAULT (datetime('now','localtime')),
        content TEXT NOT NULL,
        userId INTEGER NOT NULL,
        FOREIGN KEY(userId) REFERENCES users(userId)
    );
    """
    tables.append(create_tweets_table)

    create_replies_table = """
    CREATE TABLE IF NOT EXISTS replies (
        parentId INTEGER NOT NULL,
        replyId INTEGER NOT NULL,
        FOREIGN KEY (parentId) REFERENCES tweets(tweetId),
        FOREIGN KEY (replyId) REFERENCES tweets(tweetId)
        PRIMARY KEY (parentId, replyId)
    );
    """
    tables.append(create_replies_table)

    #conn = create_connection()

    for table in tables:
        db.execute_query(table)
        
    #conn.close()

    print("Database generated successfully")


def fill_db():
    usersQuery = """
    INSERT INTO users (username, password)
    VALUES (?, ?);
    """
    
    users = [
        ("guest", "guest"),
        ("admin", "admin"),
        ("karen", "Test123"),
        ("santi", "Test321"),
        ("mario", "Pwd987"),
    ]
    
    tweetsQuery = """
    INSERT INTO tweets (content, userId)
    VALUES (?, ?);
    """

    tweets = [
        ("Lorem ipsum dolor sit amet", 1),
        ("Consectetur adipiscing elit", 2),
        ("Sed do eiusmod tempor incididunt", 3),
        ("Ut labore et dolore magna aliqua", 3),
        ("Ut enim ad minim veniam", 3),
        ("Quis nostrud exercitation ullamco", 4),
        ("Laboris nisi ut aliquip ex ea commodo", 4),
        ("Duis aute irure dolor in reprehenderit", 4),
        ("Voluptate velit esse cillum", 5),
        ("Eu fugiat nulla pariatur", 5),
    ]
    
    
    repliesQuery = """
    INSERT INTO replies (parentId, replyId)
    VALUES (?, ?);
    """
    
    replies = [
      (1, 2),
      (1, 3),
      (4, 5),
      (6, 7),
      (8, 9),
      (8, 10),
    ]
    
    #conn = create_connection()
    
    db.execute_many_query(usersQuery, users)
    db.execute_many_query(tweetsQuery, tweets)
    db.execute_many_query(repliesQuery, replies)
    
    #conn.close()
    
    print("Database filled successfully")


if __name__ == "__main__":
    generate_db()
    fill_db()
    db.close_connection()
