interface CartListProps {
  children?: React.ReactNode;
}

const CartList = ({ children }: CartListProps) => {
  return <div className="flex flex-col gap-5">{children}</div>;
};

export default CartList;