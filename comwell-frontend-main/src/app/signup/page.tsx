'use client'

import Script from 'next/script'
import React, { useState, useEffect } from 'react';
import { FormEvent } from 'react'

import { Navbar } from '@/app/components/navbar/navbar'
import { BackgroundImage } from '@/app/components/backgroundimg'
import { NavbarPrimary } from '../components/navbar/navbarprimary';

export default function Signup() {

    function sendform(event: FormEvent<HTMLFormElement>){
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        console.log(JSON.stringify(formData))
        fetch('http://127.0.0.1:3000/users/register', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
                .then(response => response.json())
                .then(response => console.log(response))
    }

    return (
        <main className="flex relative min-w-screen flex-col items-center">
            <BackgroundImage />
            <Navbar />

            <div className="flex w-full h-full justify-center items-center align-middle mt-[100px]">
                <div className="flex bg-gray-100 rounded-2xl p-[20px] shadow-lg flex-col">
                    <div className="text-slate-900 font-bold text-center text-[18px]"><span>Register your information below</span></div>
                    <form method='POST' onSubmit={sendform} className="flex flex-col items-center justify-center mt-[20px] gap-y-[10px]">
                        <input className="shadow-lg rounded-xl px-[10px] py-[5px] w-full" type="text" placeholder="Full name" name="fullname"></input>
                        <input className="shadow-lg rounded-xl px-[10px] py-[5px] w-full" type="text" placeholder="Phone number" name="phonenumber"></input>
                        <input className="shadow-lg rounded-xl px-[10px] py-[5px] w-full" type="email" placeholder="Email" name="email"></input>
                        <input className="shadow-lg rounded-xl px-[10px] py-[5px] w-full" type="text" placeholder="Username" name="username"></input>
                        <input className="shadow-lg rounded-xl px-[10px] py-[5px]  w-full" type="password" placeholder="Password" name="password"></input>
                        <button className="mt-[20px] text-white shadow-lg rounded-lg bg-slate-800 w-fit py-2 px-[20px]" type="submit">Sign up</button>
                    </form>
                    <div className="mt-[10px] w-[60%] place-self-end text-[12px]">already have an account?&nbsp;
                        <a className="whitespace-nowrap underline" href="/login">log in</a>
                    </div>
                </div>
            </div>

        </main>
    )
    
}

