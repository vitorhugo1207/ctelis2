import MobileMenu from "./mobileMenu";


export default function AuthLayout({ children }) {
    return (
        <>
            <MobileMenu className={"md:hidden"} />
            {children}
        </>
    );
}
