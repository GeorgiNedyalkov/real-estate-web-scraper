import { screen, render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Title from "./Title";

describe("Title", () => {
  it.todo("renders a title with a city prop", () => {
    render(<Title city="Burgas" />);
    const headerElement = screen.getByText(
      "Today's real estate listings prices in Burgas"
    );
    expect(headerElement).toBe("");
  });
});
