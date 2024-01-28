
# CodeSandBox Deployed Link - https://codesandbox.io/p/sandbox/github/nutankumari211/PizzaApp/tree/main/
# Hosting Link - https://effulgent-truffle-fe7276.netlify.app/

# Pizza App Application
This is a React application simulating a pizza restaurant's behavior, allowing users to place pizza orders and track their progress through different stages. The application includes features such as order configuration, order tracking, time calculation, and manual stage transitions.

Setup
1. Clone the repository:
2. git clone <repository_url>
3. cd pizzaapp
4. Install dependencies: npm install
5. npm start

Open your browser and visit http://localhost:3000 to view the Pizza App application.

# Features
1. Placing a Pizza Order
Use the provided form to configure and place a pizza order.
Options include selecting the type (Veg/Non-Veg), size (Large, Medium, Small), and base (Thin, Thick).

2. Order Capacity Limit
The restaurant can handle a maximum of 10 orders simultaneously. If this limit is reached, a message is displayed: "Not taking any order for now. Maximum orders reached."

3. Stages of Pizza
Orders go through four stages: Order Placed, Order in Making, Order Ready, and Order Picked.

4. Red Highlight for Delay
Pizza cards in the same stage for more than 3 minutes are highlighted in red.

5. Time Spent Calculation
Time spent in each stage is displayed on each pizza card, updating in real-time.

6. Main Display
Displays all pizzas in progress with their remaining time and order ID.

7. Shows the total number of pizzas delivered today.

8. Order Cancellation
Orders can be canceled at any time before reaching the "Order Ready" stage from the main section.

9. Manual Stage Transitions
Pizza can be moved from one stage to another manually using buttons (Next, Picked, Cancel).


# Technologies Used
React

Redux

CSS
