import DesktopMenu from "./dasktopMenu";
import MobileMenu from "./mobileMenu";


export default function AuthLayout({ children }) {
    return (
        <>
            <DesktopMenu className={"hidden md:block md:fixed"} />
            <MobileMenu className={"md:hidden"} />
            <div className="hidden md:block mt-24"/>
            {children}
        </>
    );
}
