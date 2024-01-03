import {
  HeaderContainer,
  HeaderContent,
  NewTransactionsButton,
} from "./styles";

import * as Dialog from "@radix-ui/react-dialog";

import logoImg from "../../assets/logo.svg";
import { NewTransactionsModal } from "../NewTransactionsModal";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="Logo Dt Money" />

        <Dialog.Root>
          <Dialog.DialogTrigger asChild>
            <NewTransactionsButton>Nova Transação</NewTransactionsButton>
          </Dialog.DialogTrigger>

          <NewTransactionsModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
