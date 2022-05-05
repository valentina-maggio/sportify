import React from "react";
import { render, screen } from "@testing-library/react";
import Calendar from "../components/Calendar";

test("shows the date and time picker", () => {

// Need to find out how to mock the date in react testing library
//   render(<Calendar />);

//   const date = "05/05/2022 12:06 pm";

//  const calendar = screen.get(/select workout date & time/i);

//   expect(calendar.value).toBe(date);
});


// Refer: Specify a now timestamp.

// In app code:

// // element
// <div id="mockedDate"></div>

// // script
// document.getElementById('mockedDate').innerText = new Date();
// it('stub date', () => {
//     cy.clock(new Date(2020, 6, 24, 22, 19, 0).getTime());
//     cy.visit('http://localhost:8081/?j=test');
//     cy.get('#mockedDate').invoke('text').then(cy.log);
// });