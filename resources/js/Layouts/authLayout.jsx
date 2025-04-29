import DesktopMenu from "./dasktopMenu";
import MobileMenu from "./mobileMenu";


export default function AuthLayout({ children }) {
    return (
        <>
            <DesktopMenu className={"hidden md:fixed"} />
            <MobileMenu className={"md:hidden"} />
            {children}
        </>
    );
}
