import { ShoppingCartButton } from "../../app/components/ShoppingCartButton";
import { render, screen } from "@testing-library/react";
import { MockReactRouter } from "../settings/setup";
import { useShoopingCart } from "../../app/hooks/useShoppingCart";

describe("ShoppingCartButton", async () => {
  beforeEach(() => {
    MockReactRouter();
    vi.mock("../../app/hooks/useShoppingCart");
    vi.mocked(useShoopingCart).mockReturnValue({
      total: 8888,
      products: [],
      addProductToCart: vi.fn(),
      removeProductToCart: vi.fn(),
      getUnitsNumber: vi.fn(),
    });
  });

  test("Rendering with correct data.", () => {
    render(<ShoppingCartButton style="read-only" />);
    const shoppingCartButton = screen.getByText("$ 8.888");
    expect(shoppingCartButton).toBeDefined();
  });

  test("Button Collapse", () => {
    render(<ShoppingCartButton style="read-only" />);
    const shoppingCartButton = screen.queryByTestId("shoppingCartButton");
    const collapseButton = screen.queryByTestId("collapseButtonShoppingCart");
    expect(shoppingCartButton).toBeDefined();
    expect(collapseButton).toBeNull();
  });

  test("Button Expanded", () => {
    render(<ShoppingCartButton style="close" />);
    const shoppingCartButton = screen.getByTestId("shoppingCartButton");
    const collapseButton = screen.getByTestId("collapseButtonShoppingCart");
    expect(shoppingCartButton).toBeDefined();
    expect(collapseButton).toBeDefined();
  });
});
