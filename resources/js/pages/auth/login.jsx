import { useEffect } from 'react';
import { useForm } from '@inertiajs/react';
import { FloatLabel } from 'primereact/floatlabel';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Head } from '@inertiajs/react'
import { Message } from 'primereact/message';
import { Checkbox } from "primereact/checkbox";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <>
            <Head title="Entrar" />

            <div className='w-full flex flex-col gap-5 justify-end'>
                <div className='flex justify-center'>
                    <img src="/favicon.ico" alt="logo" width="200" height="200" />
                </div>
                <div>
                    <div className='flex justify-center'>
                        <form onSubmit={submit} className='flex flex-col gap-6 w-full items-center'>
                            <div className='text-left w-80 leading-none'>
                                <h1>Olá,</h1>
                                <h1>Bem-vindo ao CT L's</h1>
                            </div>
                            <div>
                                <FloatLabel>
                                    <InputText id="username" className='w-80' value={data.email} autoComplete='username' autoFocus onChange={(e) => setData('email', e.target.value)} />
                                    <label htmlFor="username">E-mail</label>
                                </FloatLabel>
                                {errors.email && <div className='pt-1'><Message severity="error" text={errors.email} className='w-80' /></div>}
                            </div>
                            <div>
                                <FloatLabel>
                                    <Password id='password' pt={{ input: { className: 'w-80' } }} toggleMask feedback={false} value={data.password} autoComplete='current-password' onChange={(e) => setData('password', e.target.value)} />
                                    <label htmlFor="password">Senha</label>
                                </FloatLabel>
                                {errors.password && <div className='pt-1'><Message severity="error" text={errors.password} className='w-80' /></div>}
                            </div>
                            <div className='flex w-80 justify-start gap-3'>
                                <Checkbox name='remember' onChange={(e) => setData('remember', e.checked)} checked={data.remember} />
                                <label htmlFor="remember">Relembra-me</label>
                            </div>
                            <div className='pt-5 flex justify-center'>
                                <Button type='submit' label="Entrar" className='w-80' disabled={processing} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
