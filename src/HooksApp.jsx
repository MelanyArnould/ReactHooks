import { CounterApp } from "./components/CounterApp"
import { FormsApp } from "./components/FormsApp"
import { FetchApp } from "./components/FetchApp"

export const HooksApp = () => {
  return (
        <>
            <h1>Aplicación de Hooks: Vite + React + Bootstrap</h1>
            <hr />
            <CounterApp/>
            <hr />
            <FormsApp/>
            <hr />
            <FetchApp/>
        </>  
    )
}
