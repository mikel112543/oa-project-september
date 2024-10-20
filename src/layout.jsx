import CustomNavbar from "./components/CustomNavbar.jsx";

export const Layout = ({children}) => (
    <>
        <CustomNavbar/>
        <main>
            {children}
        </main>
    </>
)