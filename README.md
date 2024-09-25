# Directions App

This app allows users to easily get directions between two locations using the Google Maps Directions API. Users can input their origin and destination addresses, select a travel mode, and view step-by-step directions in an easy-to-understand format.

## User Journey

1. **Access the App**: The user opens the app in their web browser.

2. **Input Origin and Destination**:
   - The user sees a form with two input fields: "Origin" and "Destination".
   - The user enters the starting point address in the "Origin" field.
   - The user enters the destination address in the "Destination" field.

3. **Select Travel Mode**:
   - The user selects their preferred mode of travel from a dropdown menu. Options include:
     - Driving
     - Walking
     - Bicycling
     - Transit

4. **Get Directions**:
   - The user clicks the "Get Directions" button.
   - A loading indicator appears while the app retrieves directions.

5. **View Directions**:
   - Once the directions are retrieved, the app displays:
     - A summary of the route.
     - The estimated duration and distance.
     - A step-by-step list of instructions for the journey.
   - Each step includes:
     - Instruction text.
     - Distance and duration for that step.

6. **Responsive Design**:
   - The app is responsive and adjusts to different screen sizes, ensuring a user-friendly experience on desktop and mobile devices.

7. **Error Handling**:
   - If there is an error retrieving the directions (e.g., invalid addresses), an error message is displayed.
   - The user can correct the input and try again.

## Features

- **Simple Interface**: Easy-to-use form for inputting origin and destination.
- **Multiple Travel Modes**: Support for driving, walking, bicycling, and transit directions.
- **Real-Time Directions**: Retrieves the latest route information using the Google Maps Directions API.
- **Detailed Instructions**: Provides comprehensive, step-by-step navigation instructions.
- **Responsive Design**: Optimized for both desktop and mobile use.

## How to Use

1. Open the app in your web browser.
2. Enter your starting location in the "Origin" field.
3. Enter your destination in the "Destination" field.
4. Select your preferred travel mode.
5. Click "Get Directions" and wait for the directions to load.
6. Review the route summary and step-by-step instructions.
7. Follow the instructions to reach your destination.