export function MockReactRouter() {
  vi.mock("react-router-dom", () => ({
    ...vi.importActual("react-router-dom"),
    createBrowserRouter: () => vi.fn(),
    createMemoryRouter: () => vi.fn(),
    RouterProvider: () => vi.fn(),
    useNavigate: () => vi.fn(),
  }));
}


