import Friend from "./Friend";

const friends = () => {
  return (
    <ul className="nav w-100 flex-grow-1  py-0 my-0">
      <Friend active={false} />
      <Friend active={true} />
      <Friend active={false} />
      <Friend active={false} />
      <Friend active={false} />
      <Friend active={false} />
      <Friend active={false} />
      <Friend active={false} />
      <Friend active={false} />
      <Friend active={false} />
      <Friend active={false} />
    </ul>
  );
};

export default friends;
