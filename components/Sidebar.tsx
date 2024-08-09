'use client';
import { sidebarLinks } from "@/constants"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Sidebar = ({user}: SiderbarProps) => {

  const pathName = usePathname();

  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="flex mb-12 cursor-pointer items-center gap-2">
          <Image src="/icons/logo.svg" width={34} height={34} alt="logo" className="size-[24px] max-xl:size-14"/>
          <h1 className="sidebar-logo">Banking</h1>
        </Link>
        {sidebarLinks.map(x => {

          const isActive = pathName === x.route || pathName.startsWith(`${x.route}/`)
          return (
            <Link href={x.route} key={x.label} className={cn('sidebar-link', {'bg-bank-gradient' : isActive})}>
              <div className="relative size-6">
                <Image src={x.imgURL} alt={x.label} fill className={cn({'brightness-[3] invert-0' : isActive})} />
              </div>
              <p className={cn('sidebar-label', {'!text-white' : isActive})}>
                {x.label}
              </p>
            </Link>
          )
        })}

        USER
      </nav>
      FOOTER
    </section>
  )
}

export default Sidebar