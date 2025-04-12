import AuthLayout from '@/Layouts/authLayout';
import { Head } from '@inertiajs/react'


export default function Index() {
    return (
        <>
            <Head title="Dashboard" />

            <h1>Dashboard</h1>
        </>
    );
}
Index.layout = (page) => <AuthLayout children={page} />
