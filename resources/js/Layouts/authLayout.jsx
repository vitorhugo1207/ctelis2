import MobileMenu from "./mobileMenu";


export default function AuthLayout({ children }) {
    return (
        <main className="relative">
            <MobileMenu className={"md:hidden"} />
            {children}
        </main>
    );
}
