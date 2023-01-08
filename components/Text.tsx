type Props = {
  children: React.ReactNode;
};

export const Text = ({ children }: Props) => {
  return <p className="text-gray-300 text-lg">{children}</p>;
};
