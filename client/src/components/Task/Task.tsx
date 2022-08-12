interface IProps {
  name: string;
}

const Task = (props: IProps) => {
  const { name } = props;
  return <>{name}</>;
};

export default Task;
