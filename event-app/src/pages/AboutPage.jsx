import { useParams } from "react-router";

const AboutPage = () => {
   const { id } = useParams();
   return (
      <div>
         {!id ? <div> params not found</div> : <div> param id: {id}</div>}
      </div>
   );
};
export default AboutPage;
