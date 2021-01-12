# Weather App:  Trying out async Javascript

## Description

![](weather-app.JPG)

Create an app that uses [openweather.org](https://openweathermap.org/guide) to grab the current weather in a location of your choice.

> #### Tools
> - [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
> - [Bootstrap](https://getbootstrap.com/)
> - [Async Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)      
    
## Walkthrough

### Step 1: Get the API

1. Head over to [openweather.org](https://openweathermap.org/guide) and sign up to use their free API.
2. Find the [API key](https://home.openweathermap.org/api_keys) page and generate a key to use. Paste it as a variable in your code as we will need it later.
3. Read through the [documentation](https://openweathermap.org/current) about using the current weather data, and practice an API call in either Postman or your browser. 
``` javascript
api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
```
Replace the `={city name}` and `={API key}` with the city you want and your API key. 
> Remove the curly brackets


### Step 2: Create the HTML and CSS

1. Create a page using a text input, a submit button, and a space for the data to be displayed. 
2. Create a template card that will be used to display the data


#### Test Your Code!
 Now is a good chance to test your page, open your `index.html` on your favourite browser or run `open index.html` from your terminal inside the weather-app folder. You may need to *hardcode* some expected data from the API.


### Step 3: Implement the Javascript structure

1. Target all the required elements using `document.querySelector()`
2. Add an eventListener with the argument of `click` to the submit button 
3. Assign a variable that stores the value of the input field once the button has been clicked
> Make use of `console.log()` in these steps!
4. Outside of the event listener, create a new function `const createCardHtml = (text) =>` It will take in the parameters of the API data, but for now just pass the user submitted input as an argument.  
5. In `createCardHtml` return the template card that was created in the html. Pass in the input value as one of the parts of your card to make sure it works!   
> You will need to return the string using template literals and the `return` keyword if you have not used the one line function style.
5. In the event listener call the function passing in the input value. `const cardHtml = createCardHtml(cityInput.value);`
6. As the last line of the event listener, render the template card. `weatherContainer.innerHTML = cardHtml;`

### Step 4: Use the API's response

Read through the [using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) guide on mdn, or the [async await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await) if you would prefer the newer methods.

1. Create a new function that fetches the weather info from the API. Use either fetch or async await.
2. Using template literals for the API url, insert the query parameters you have 
``` javascript
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}&units=metric`)
```
3. Format the response into a usable format with `.then(response => response.json());`
4. `console.log()` the `json` formatted response and make a note of what data you want to use. For example, the temperature is under `data.main.temp` It is important to find the correct data as not all API's will respond with the same format. 
5. Call the function in the event listener, passing in the input from the text field. 
6. Instead of using `console.log()` for the data, pass the required information into the `createCardHtml` function that was made earlier. 
7. You may need to change the arguments for this function, and it should now look something like this: `const cardHtml = createCardHtml(name, emoji, temp, feelsLike, description);`
8. Fill in the template literals in the `createCardHtml` function so that the card is populated with the data from the API.


### Step 5: Optional extras

1. It is important to keep up with the latest versions of the technology you use. Refactor the code to use Async Await
2. Implement error handling with the API response
3. Try using a geoLocation button that checks for the user's current location.
4. Recreate the project using other technologies: [Example](https://github.com/aar9nk/weather-app-react)


## Example

Stuck? Check out the provided example in the [example/](example/) folder!
