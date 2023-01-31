interface Props {
  comp: React.ReactNode
}

const BasePage = ({comp}: Props) => {
  return (
    <div className="main-container">
      {comp}
    </div>
  );
};

export default BasePage;