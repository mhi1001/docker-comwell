'use client'

import Script from 'next/script'
import React, { useState, useEffect } from 'react';
import Image from 'next/image'

import {Navbar} from '@/app/components/navbar/navbar'
import { BackgroundImage } from '@/app/components/backgroundimg'



export default function Home() {


  return (
    <main className="flex relative min-w-screen min-h-screen flex-col items-center">
      
      <BackgroundImage />
      <Navbar/>
    </main>
  )
}
