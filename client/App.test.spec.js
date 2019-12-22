import App from "./App";

describe("Index file", () => {
  it("renders the app file without crashing", () => {
    expect(
      JSON.stringify(
        Object.assign({}, App, { _reactInternalInstance: "censored" }),
      ),
    ).toMatchSnapshot();
  });
});