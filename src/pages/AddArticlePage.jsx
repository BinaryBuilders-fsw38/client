import Footer from "../components/Footer";
import Navbar from "../components/Nav";
import AdminAddArtcile from "../components/AdminAddArticle";

const AddArticle = () => {
  return (
    <>
      <Navbar />

      <div className="LoginPage">
        <AdminAddArtcile />
      </div>
      <Footer />
    </>
  );
};

export default AddArticle;
