"use client";
import React, { useState, useEffect } from 'react'
import { Button } from './ui/button'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import SideBar from './sidebar'
function MobileSideBar() {

    const [isMounted, setIsMounted] = useState(false);
    
    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null
    }

    return (
        <Sheet>
            <SheetTrigger>
                <Button className='md:hidden'>
                    <Menu />
                </Button>
            </SheetTrigger>

            <SheetContent side='right' className='p-0 second-purple text-white md:hidden'>
                <SideBar apiLimitCount={0} />
            </SheetContent>
        </Sheet>
    )
}

export default MobileSideBar