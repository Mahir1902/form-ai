import Logo from "@/components/Logo"
import { UserButton } from "@clerk/nextjs"


type LayoutProps = {
    children: React.ReactNode
}

export default function Layout({children} : LayoutProps) {
  return (
    <div className="min-h-screen min-w-full max-h-screen flex flex-col bg-background ">
        <nav className="border-border border flex justify-between h-[60px] items-center px-4 md:px-10">
            <Logo/>
            <UserButton/>
        </nav>
        <main className="flex w-full flex-grow  px-6 md:px-14">{children}</main>
    </div>
  )
}
