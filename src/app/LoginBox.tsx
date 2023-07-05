'use client'
import { useState } from 'react'
import { PersonFill, LockFill } from 'react-bootstrap-icons'

function Input(props: any) {
    return (
        <div className="join w-full">
            <div className='label-icon'>
                {props.iconComponent}
            </div>
            <input type={props.type} placeholder={props.placeholder} className="input input-bordered input-primary join-item w-full" />
        </div>
    )
}

export default function LoginBox() {
    const [action, setAction] = useState<'login' | 'register'>('login')

    return (
        <section className='flex justify-center py-10 px-2'>
            <div className='bg-white flex flex-col gap-2 justify-center p-8 drop-shadow-md w-[500px]'>
                <form method='post' action={action} className='bg-child-input-inherit space-y-4'>
                    <Input
                        iconComponent={<PersonFill />}
                        type='text'
                        placeholder='Username'
                    />
                    <Input
                        iconComponent={<LockFill />}
                        type='password'
                        placeholder='Password'
                    />
                    {action === 'register' &&
                        <Input
                            iconComponent={<LockFill />}
                            type='password'
                            placeholder='Confirm your password'
                        />
                    }
                    <div className="flex gap-3">
                        <button className="btn btn-primary flex-1">{action}</button>
                        <button type='reset' className="btn btn-outline btn-primary flex-1">Clear</button>
                    </div>
                </form>
                <div className="divider"></div>
                <div className="flex flex-col items-center">
                    {action === 'register' ?
                        <button onClick={() => setAction('login')} className="btn btn-outline btn-primary w-full">Cancel</button>
                        :
                        <>
                            <p className='mb-3'>
                                If you have not yet signed up
                            </p>
                            <button onClick={() => setAction('register')} className="btn btn-outline btn-primary w-full">Register</button>
                        </>
                    }
                </div>
            </div>
        </section>
    )
}
