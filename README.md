# Name API

This API, written in Node.js, allows you to retrieve the meaning of names. The API has a single endpoint, `/name-meaning`, which returns the meaning of a given name.

## API URL
<a href="https://names-api-openai.onrender.com/name-meaning">https://names-api-openai.onrender.com/name-meaning</a>

```

## Usage

To use this API, make a GET request to the `/name-meaning` endpoint, providing the `name` parameter with the desired name. The API will then respond with the meaning associated with that name.

### `/name-meaning`

#### Method

- POST

#### Parameters

- `name` (required): The name for which you want to retrieve the meaning.

#### Response

The API will respond with a JSON object containing the following information:

- `name`: The name for which the meaning is being retrieved.
- `meaning`: The meaning associated with the name.

#### Example

Request:

```json
POST /name-meaning
{
    "name": "John"
}
```

Response:

```json
{
    "name": "John",
    "meaning": "God is gracious"
}
```

## Usage

To use this API, make a POST request to the `/name-meaning` endpoint, providing the `name` with the desired name in the request body. The API will then respond with the meaning associated with that name.

## Running the API

To run the API, follow these steps:

1. Install Node.js on your machine if you haven't already.
2. Clone the repository or download the source code.
3. Open a terminal and navigate to the project directory.
4. Install the dependencies by running the command `npm install`.
5. create and env file and put set your OPENAI_API_KEY
6. Start the API by running the command `npm start`.
7. The API will be running on `http://localhost:3000`.

