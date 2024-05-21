import Logo from "@/components/Logo"
import { UserButton } from "@clerk/nextjs"


type LayoutProps = {
    children: React.ReactNode
}

export default function Layout({children} : LayoutProps) {
  return (
    <div className="border border-white min-h-screen min-w-full max-h-screen flex flex-col bg-background">
        <nav className="border-border border-b flex justify-between px-4 h-[60px] items-center py-2">
            <Logo/>
            <UserButton afterSignOutUrl="/login"/>
        </nav>
        <main className="flex w-full">{children}</main>
    </div>
  )
}
