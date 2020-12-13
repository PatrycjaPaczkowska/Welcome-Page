## Hello! 

This is link to website: https://patrycjapaczkowska.github.io/Welcome-Page/

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Short Description

I built this site to show a wide range of my skills. 
The page can be set up as the start page of your browser and control your savings or tasks to do every day.

The page has 4 main sections:

1. Application to savings money.
2. Link to my another project - To Do Application
3. Two calculators - usual and currency with current exchange rates (api from http://api.nbp.pl/api/exchangerates/tables/a).
4. Current Weather (api form Open Weather Map).

Additionally, it is possible to add a personalized greeting.

## Savings 
The first field is used to enter the purpose of saving money, the second one - its price. In the next step you need to enter into the only input  the amount of money that you put into your wallet at once.

This section was created with the React Context.

## Calculators
There are 2 calculators available on the website

Usual - built on state component
Currency - built with hooks. The Data are downloading from API NBP.

## Weather
This section downloading data from Open Wather Map.

In this section I want to show:
1. How I use Fetch and Api from external source
2. How I use class component.

## Technologies 
* React Create App 16.13.1
* Styled Components 5.2.1
* Material Ui 4.11.0
* React Spring 8.0.27 - for the future, I planned add animations

## Setup
To run this project, install it locally using npm:

1. Download zip or write on cli:
```
gh repo clone PatrycjaPaczkowska/Welcome-Page
```
2. Install dependencies
```
npm install
```
3. Run project
```
npm start
```
