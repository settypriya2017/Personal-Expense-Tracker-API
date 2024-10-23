const request = require("supertest");
const app = require("../server");

describe("Transaction API", () => {
  it("should return all transactions", async () => {
    const res = await request(app).get("/transactions");
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });
});
