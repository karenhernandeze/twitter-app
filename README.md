# Twitter Reloaded and Event Dashboard

This monorepo contains four different projects: a simple **Twitter** clone, an **event dashboard** tracking the events of the former, and two **FastAPI backend services** for both of the applications.

## Usage
1. Prior to executing anything, it is important to set the **environment variables** that each specific project uses for configuration. Following is a list of the `.env` files you need to create, with their respective path and environment variable names:

    * `twitter-reloaded/backend`
        
        * EVENTS_API_URL
        * DB_TWEETS_PATH

    * `twitter-reloaded/frontend`

        * PORT
        * REACT_APP_API_KEY

    * `event_dashboard/backend`

        * DB_EVENTS_PATH

    * `event_dashboard/frontend`

        * PORT
        * REACT_APP_API_KEY
        * REACT_APP_API_KEY_2

2. Execute the following command to run all containers at once:

    `docker compose up -d --build`

    With that, all four project Dockerfile's have been built and launched.

3. To access the services, visit their respective URL:

    * **Twitter Reloaded**: [`http://localhost:3000`](http://localhost:3000)
    * **Event Dashboard**: [`http://localhost:3001`](http://localhost:3001)
    * **Twitter Reloaded Backend**: [`http://localhost:8080`](http://localhost:8080)
    * **Event Dashboard Backend**: [`http://localhost:8181`](http://localhost:8181)

    You can also visit an interactive API documentation page for each of the backend services by visiting the `/docs` endpoint on each service respectively.

    In order to switch the user that is currently logged in, you can change the URL subpath from `/guest` to one of the following registered users:

    * `/guest`
    * `/admin`
    * `/karen`
    * `/santi`
    * `/mario`

    For any other (not registered) user, tweets won't be displayed, and creating a new tweet will fail.

4. To stop all containers, execute the following command:

    `docker compose down`

    If you want to execute the containers again without having to rebuild them every time, remove the `--build` flag from the `docker compose up` command.

## Testing
1. Before running the test suite, make sure you activate your Python virtual environment and run the following command on the backend directory of both projects to install the required testing dependencies:

    `python -m pip install -r requirements.txt`

2. Now all you have to do is run the following command to execute unit testing, executing the command once per backend directory:

    `python -m pytest -v`

## SOLID Principles

Both each of the services and the system as a whole covers the five SOLID principles to their fullest extent. Next up we explain why this is the case for each principle.
- __Single-responsibility__: The program complies given each of the classes has only one specific job (route requests, handle business logic, perform database operations, render components).
- __Open-closed__: Because of the use of .env files, the program can be easily configured to run in different environments without having to modify the code.
- __Liskov substitution__: Although we do not have child classes implemented in the system, all models can be replaced by the BaseModel class from which they directly inherit.
- __Interface segregation__: All methods enforced in each one of the components of the application are used by the classes that implement them, and none of them are left unused.
- __Dependency inversion__: None of the classes implemented throughout the program rely on previous concretions, allowing them to be decoupled and depend only on higher-level abstractions.

## Design Patterns

### Singleton (Creational)

This pattern is used to ensure only a single instance of a class is created, and that it is globally accessible. It was implemented through the use of a centralized database class for each backend service, which is used by all other classes that need to perform database operations.

### Proxy (Structural)

With the use of a proxy, we control requests and objects throughout their whole lifecycle, updating or modifying them as needed. This pattern was implemented by setting middleware functions in all our requests, as well as managing the state of the application through startup and shutdown events.

### Chain of responsibility (Behavioral)

Lastly, this principle allows us to have multiple handlers decide the lifecycle of a request or action, passing the resulting object along to the next handler. This pattern was implemented by using a MVC architecture, where the request is first handled by the router, then by the service, and finally by the DAO, only to return the chain of objects all the way back to the router.

## Contributors

- [Karen Hernández](https://github.com/karenhernandeze)
- [Santiago Alcérreca](https://github.com/santiadlv)