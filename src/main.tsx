import { Provider } from "@/components/ui/provider"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Page from "./App"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Provider>
        <Page />
      </Provider>
  </StrictMode>,
)
