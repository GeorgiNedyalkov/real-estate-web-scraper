import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Task from "./Task";

let task, onChange, onDelete;

// beforeEach(() => {
//   task = {
//     id: 1,
//     taskText: "Test task",
//     completed: false,
//   };
//   onChange = jest.fn();
//   onDelete = jest.fn();
// });

it.todo("renders task text", () => {
  const { getByText } = render(
    <Task task={task} onChange={onChange} onDelete={onDelete} />
  );

//   expect(getByText("Test task")).toBeInTheDocument();
// });

// it("calls onChange with correct arguments when task checkbox is clicked", () => {
//   const { getByLabelText } = render(
//     <Task task={task} onChange={onChange} onDelete={onDelete} />
//   );

//   const checkbox = getByLabelText("Test task");
//   fireEvent.click(checkbox);

//   expect(onChange).toHaveBeenCalledWith({
//     ...task,
//     completed: true,
//   });
// });

// it("calls onChange with correct arguments when task text is edited", () => {
//   const { getByText, getByPlaceholderText } = render(
//     <Task task={task} onChange={onChange} onDelete={onDelete} />
//   );

//   const editButton = getByText("Edit");
//   fireEvent.click(editButton);

//   const input = getByPlaceholderText("Test task");
//   fireEvent.change(input, { target: { value: "Updated task" } });

//   const saveButton = getByText("Save");
//   fireEvent.click(saveButton);

//   expect(onChange).toHaveBeenCalledWith({
//     ...task,
//     taskText: "Updated task",
//   });
// });

// it("calls onDelete with correct argument when delete button is clicked", () => {
//   const { getByText } = render(
//     <Task task={task} onChange={onChange} onDelete={onDelete} />
//   );

//   const deleteButton = getByText("Delete");
//   fireEvent.click(deleteButton);

//   expect(onDelete).toHaveBeenCalledWith(1);
// });
