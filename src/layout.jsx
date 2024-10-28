import CustomNavbar from "./frontend/components/CustomNavbar.jsx";

export const Layout = ({children}) => (
    <>
        <CustomNavbar/>
        <main>
            {children}
        </main>
    </>
)