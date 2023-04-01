import { calculateStatus } from './App';

describe('Background color based on date', () => {
  test.each([
    ["2022-04-02", "green"],
    ["2022-04-03", "green"],
    ["2022-04-04", "green"],
    ["2022-04-05", "green"],
  ])('should have background color %s for date %s', (date, expectedColor) => {
    // Create a new Date object based on the test date
    const testDate = new Date(date);

    // Call the calculateStatus function with the test date
    const result = calculateStatus(testDate);

    // Check if the result has the expected background color
    expect(result.backgroundColor).toBe(expectedColor);
  });
});
