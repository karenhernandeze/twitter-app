import sqlite3
from sqlite3 import Error


class SingletonMeta(type):
    _instances = {}

    def __call__(cls, *args, **kwargs):
        if cls not in cls._instances:
            instance = super().__call__(*args, **kwargs)
            cls._instances[cls] = instance
        return cls._instances[cls]


class Database(metaclass=SingletonMeta):
    def __init__(cls):
        cls.path: str = "./twitter-reloaded/backend/src/database/app.db"
        cls.connection: sqlite3.Connection = cls.create_connection()

    def create_connection(cls):
        connection = None
        try:
            connection = sqlite3.connect(cls.path)
            connection.row_factory = sqlite3.Row
            print("Connection to database successful")
        except Error as e:
            print(f"Error '{e}' occurred")

        return connection

    def close_connection(cls):
        cls.connection.close()
        print("Connection to database closed successfully")

    def execute_query(cls, query: str):
        cursor = cls.connection.cursor()
        try:
            with cls.connection:
                cursor.execute(query)
                print("Query executed successfully")
                rows = cursor.fetchall()
                return rows
        except Error as e:
            print(f"Error '{e}' occurred")
            
    def execute_query_values(cls, query: str, values: tuple):
        cursor = cls.connection.cursor()
        try:
            with cls.connection:
                cursor.execute(query, values)
                print("Query executed successfully")
                row = cursor.fetchone()
                return row
        except Error as e:
            print(f"Error '{e}' occurred")

    def execute_many_query(cls, query: str, data: list):
        cursor = cls.connection.cursor()
        try:
            with cls.connection:
                cursor.executemany(query, data)
                print("Queries executed successfully")
        except Error as e:
            print(f"Error '{e}' occurred")


TwitterDB: Database = Database()
