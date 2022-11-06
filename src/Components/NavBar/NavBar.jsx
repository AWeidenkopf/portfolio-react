import MobileNav from "./MobileNavBar";
import NormalNav from "./NormalNav";

const NavBar = ({ setDetailsPage, detailsPage }) => {
  return (
    <>
      <NormalNav detailsPage={detailsPage} setDetailsPage={setDetailsPage} />
      <MobileNav detailsPage={detailsPage} setDetailsPage={setDetailsPage} />
    </>
  )
}

export default NavBar