import React from "react";
import { render, screen } from "@testing-library/react";
import FormCalendar from "../components/FormCalendar";

test("inputs should be initially empty", () => {
  render(<FormCalendar />);
  const inputNamePlaceholder = screen.getByPlaceholderText(/name/i);
  const inputTypePlaceholder = screen.getByPlaceholderText(/type/i);
  const inputDurationPlaceholder = screen.getByPlaceholderText(/duration/i);
  const inputIntensityPlaceholder = screen.getByPlaceholderText(/intensity/i);
  const inputUrlPlaceholder = screen.getByPlaceholderText(/url/i);

  expect(inputNamePlaceholder.value).toBe("");
  expect(inputTypePlaceholder.value).toBe("");
  expect(inputDurationPlaceholder.value).toBe("");
  expect(inputIntensityPlaceholder.value).toBe("");
  expect(inputUrlPlaceholder.value).toBe("");
});

test("should display a submit workout button", () => {
  render(<FormCalendar />);
  const buttonSubmitWorkout = screen.getByDisplayValue(/save workout/i);

  expect(buttonSubmitWorkout.value).toBe("Save workout");
});
