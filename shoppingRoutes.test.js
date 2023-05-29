process.env.NODE_ENV = "test";
const request = require("supertest");
const app = require("./app");

describe("GET /items", () => {
  test("Get all items", async () => {
    const res = await request(app).get("/items");
    expect(res.statusCode).toBe(200);
  });
});

describe("POST /items", () => {
  test("Post new item", async () => {
    const res = await request(app).post("/items").send({
      name: "yummy",
      price: 21.45,
    });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({
      added: {
        name: "yummy",
        price: 21.45,
      },
    });
  });
});

