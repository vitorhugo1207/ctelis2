import MobileMenu from "./mobileMenu";


export default function AuthLayout({ children }) {
    return (
        <main className="relative overflow-hidden">
            <MobileMenu className={"md:hidden"} />
            {children}
        </main>
    );
}
