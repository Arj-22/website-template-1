"use client";
import { cn } from "@/lib/utils";
// import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { Router, useRouter } from "next/router";

 

export function MainNav({
    className, 
    ...props
}: React.HTMLAttributes<HTMLElement>){

    const pathname = usePathname(); 
    const params = useParams();

    const routes = [
    // {
    //     href: `/${params.storeId}`,
    //     label: "Home",
    //     active: pathname === `/${params.storeId}`
    // },
    {
        href: `/`,
        label: "Home",
        active: pathname === `/`
    },
    {
        href: `/products`,
        label: "Products",
        active: pathname === `/products`
    },
    {
        href: `/blog`,
        label: "Blog",
        active: pathname === `/blog`
    }

]; 
    return(
        <nav className='mx-6 flex items-center space-x-4 lg:space-x-6'>
        {routes.map((route) => (
            <Link key={route.href} href={route.href} className={cn(
                "text-sm font-medium transition-colors hover:text-black", 
                route.active ? "text-black" : "text-neutral-500"
            )}>
                {route.label}
            </Link>
        ))}
    </nav>
    )
}