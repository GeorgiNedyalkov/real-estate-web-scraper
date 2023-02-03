import { useFetch } from "./useFetch";

describe("useFetch", () => {
  it.todo("should return correct initial values", async () => {
    const { result } = renderHook(() => useFetch());

    expect(result.current.apartments).toEqual([]);
    expect(result.current.loading).toEqual(true);
  });
});
