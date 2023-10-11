const page = ({ params }: { params: { id: string } }) => {
  return <div>id is {params.id}</div>;
};

export default page;
