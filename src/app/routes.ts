import { createBrowserRouter } from "react-router";
import { createElement } from "react";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Work } from "./pages/Work";
import { CaseStudy } from "./pages/CaseStudy";
import { ScotiaTarjetas } from "./pages/ScotiaTarjetas";
import { TealeafEssity } from "./pages/TealeafEssity";
import { TransferenciasScotiamovil } from "./pages/TransferenciasScotiamovil";
import { Leadership } from "./pages/Leadership";
import { Contact } from "./pages/Contact";
import { AtsCV } from "./pages/AtsCV";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";
import { Outlet } from "react-router";

function Root() {
  return createElement(
    ThemeProvider,
    null,
    createElement(
      LanguageProvider,
      null,
      createElement(Outlet)
    )
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/",
        Component: Layout,
        children: [
          { index: true, Component: Home },
          { path: "about", Component: About },
          { path: "work", Component: Work },
          { path: "work/:slug", Component: CaseStudy },
          { path: "work/scotia-tarjetas", Component: ScotiaTarjetas },
          { path: "work/tealeaf-essity", Component: TealeafEssity },
          { path: "work/transferencias-scotiamovil", Component: TransferenciasScotiamovil },
          { path: "leadership", Component: Leadership },
          { path: "contact", Component: Contact },
          { path: "cv-ats", Component: AtsCV },
        ],
      }
    ],
  },
]);