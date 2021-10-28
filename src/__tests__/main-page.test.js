import React from "react"
import { rest } from "msw"
import { setupServer } from "msw/node"
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react"

import { MainPage } from "../components/main-page"

const fakeQuotes = [
  { quote: "Gah, stupid sexy Flanders!" },
  { quote: "Eat my shorts" },
  { quote: "Shup up, brain. I got friends now. I don't nedd you anymore" },
  { quote: "Doughnuts? I told you I don't like ethnic food" },
]

const server = setupServer(
  rest.get("/quotes", (req, res, ctx) => {
    return res(ctx.json(fakeQuotes))
  })
)

beforeEach(() => render(<MainPage />))

//Enable API moking before test
beforeAll(() => server.listen())

//Disable API mocking after the tests are done
afterAll(() => server.close())


describe("Quote List", () => {
  it("must contain quote value", async () => {
    const [firstQuote, secondQuote, thirdQuote] = await screen.findAllByRole("listitem")
    const [fakeOne, fakeTwo, fakeThird] = fakeQuotes
    expect(firstQuote.textContent).toBe("You're turning me into a criminal when all I want to be is a petty thug.")
    expect(secondQuote.textContent).toBe("And this is the snack holder where I can put my beverage or, if you will, cupcake.")
    expect(thirdQuote.textContent).toBe("Me fail English? That's unpossible.")
  })
})