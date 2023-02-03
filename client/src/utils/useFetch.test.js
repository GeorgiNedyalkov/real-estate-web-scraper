import { renderHook } from "@testing-library/react-hooks";
import { useFetch } from "./useFetch";

describe("useFetch", () => {
  it("should return correct initial values", async () => {
    const { result } = renderHook(() => useFetch());

    expect(result.current.apartments).toEqual([]);
    expect(result.current.loading).toEqual(true);
  });
});
