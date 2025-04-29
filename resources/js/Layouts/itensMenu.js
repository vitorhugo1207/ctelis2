import { Inertia } from '@inertiajs/inertia';

const items = [
    {
        label: 'Sair',
        icon: 'pi pi-sign-out',
        className: 'first:bg-red-500',
        command: () => {
            Inertia.post(route('logout'));
        }
    },
    {
        label: 'Alunos',
        icon: 'pi pi-users',
        command: () => {
            Inertia.get(route('alunos'));
        }
    },
    {
        label: 'Dashboard',
        icon: 'pi pi-home',
        command: () => {
            Inertia.get(route('dashboard'));
        }
    }
];

export default items;
