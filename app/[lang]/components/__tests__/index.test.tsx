import { render } from "@testing-library/react";
import LocaleSwitcher from "../locale-switcher";

describe("LocaleSwitcher", () => {
  it("render result match snapshot", () => {
    const { baseElement } = render(<LocaleSwitcher />);
    expect(baseElement).toMatchSnapshot();
  });
});
