import * as React from "react";
import { Desc, Message, ModalBody, ModalContent } from "./style";

interface I_SharedModalBundle {
  open: boolean;
  setOpen: (open: boolean) => void;
  component: React.ReactElement;
  inputValue: string;
}

interface ModalProps {
  onSubmit?: () => void;
  onCancel?: () => void;
  loading?: boolean;
  children?: React.ReactElement;
  head?: React.ReactElement;
  heading?: string;
  description?: string;
  back?: string;
}

export function SharedModal(props: ModalProps): I_SharedModalBundle {
  const [open, setOpen] = React.useState<boolean>(false);

  const [inputValue, setInputValue] = React.useState<string>("");
  const {
    loading,
    children,
    onCancel,
    heading,
    description,
    head,
    onSubmit,
    back,
  } = props;

  const component = (
    <ModalBody show={open} onMouseDown={() => setOpen(false)}>
      <ModalContent
        withMargin={!description ? "true" : "false"}
        back={back ? "true" : "false"}
      >
        {heading ? (
          <Message withMargin={head ? "true" : "false"}>{heading}</Message>
        ) : null}
        {description ? <Desc>{description}</Desc> : null}
        {children ? children : null}
      </ModalContent>
    </ModalBody>
  );

  return { open, setOpen, component, inputValue };
}
