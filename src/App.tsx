import { ReactNode } from "react";
import { Divide, Equals, Minus, Plus, PlusMinus, X } from "phosphor-react";
import { Botao } from "./components/Botao";

export function App() {
  const botoes: {
    text: string | ReactNode;
    type: "CE" | "NUMERO" | "OPERADOR" | "IGUAL";
  }[] = [
    { text: "CE", type: "CE" },
    { text: "C", type: "NUMERO" },
    { text: "%", type: "NUMERO" },
    { text: <Divide size={28} />, type: "OPERADOR" },
    { text: "7", type: "NUMERO" },
    { text: "8", type: "NUMERO" },
    { text: "9", type: "NUMERO" },
    { text: <X size={28} />, type: "OPERADOR" },
    { text: "4", type: "NUMERO" },
    { text: "5", type: "NUMERO" },
    { text: "6", type: "NUMERO" },
    { text: <Minus size={28} />, type: "OPERADOR" },
    { text: "1", type: "NUMERO" },
    { text: "2", type: "NUMERO" },
    { text: "3", type: "NUMERO" },
    { text: <Plus size={28} />, type: "OPERADOR" },
    { text: <PlusMinus size={28} />, type: "NUMERO" },
    { text: "0", type: "NUMERO" },
    { text: ",", type: "NUMERO" },
    { text: <Equals size={28} />, type: "IGUAL" },
  ];

  return (
    <div className="calc flex h-[566px] w-[356px] flex-col items-center gap-[26px] rounded-[48px] bg-purple-900">
      <div className="mt-[54px] h-[86px] w-72"></div>
      <div className="grid w-full grid-cols-4 gap-3 px-8">
        {botoes.map((botao, index) => (
          <Botao key={index} type={botao.type}>
            {botao.text}
          </Botao>
        ))}
      </div>
    </div>
  );
}
