import { ReactNode } from "react";

interface BotaoProps {
  children: ReactNode;
  type: "CE" | "NUMERO" | "OPERADOR" | "IGUAL";
}

export function Botao({ children, type }: BotaoProps) {
  return (
    <div
      className={`grid h-16 w-16 cursor-pointer place-items-center rounded-full bg-purple-900 ${type}`}
    >
      {children}
    </div>
  );
}
