import Details from "@/app/Components/Details";
import { MovieDataDetail, getMovie } from "@/app/Utilities";

interface GenerateMetadataProps {
  params: MovieDataDetail;
}

export const generateMetadata = async ({ params }: GenerateMetadataProps) => {
  const data = await (await getMovie(params.id + "")).json();
  return { title: data.title };
};

const page = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <Details id={params.id} />
    </>
  );
};

export default page;
