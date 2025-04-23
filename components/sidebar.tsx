"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, HardDrive, Cpu, Users, FileText, BarChart, Settings, LogOut } from "lucide-react"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()

  return (
    <div className={cn("pb-12 w-64 border-r bg-background hidden md:block", className)}>
      <div className="space-y-4 py-4">
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-xl font-semibold tracking-tight">Plateforme IoT</h2>
          <div className="space-y-1">
            <Button
              variant={pathname === "/" ? "secondary" : "ghost"}
              size="sm"
              className="w-full justify-start"
              asChild
            >
              <Link href="/">
                <LayoutDashboard className="mr-2 h-4 w-4" />
                Tableau de bord
              </Link>
            </Button>
            <Button
              variant={pathname === "/hubs" ? "secondary" : "ghost"}
              size="sm"
              className="w-full justify-start"
              asChild
            >
              <Link href="/hubs">
                <HardDrive className="mr-2 h-4 w-4" />
                Hubs
              </Link>
            </Button>
            <Button
              variant={pathname === "/capteurs" ? "secondary" : "ghost"}
              size="sm"
              className="w-full justify-start"
              asChild
            >
              <Link href="/capteurs">
                <Cpu className="mr-2 h-4 w-4" />
                Capteurs
              </Link>
            </Button>
            <Button
              variant={pathname === "/demandes" ? "secondary" : "ghost"}
              size="sm"
              className="w-full justify-start"
              asChild
            >
              <Link href="/demandes">
                <Users className="mr-2 h-4 w-4" />
                Demandes d'accès
              </Link>
            </Button>
            <Button
              variant={pathname === "/logs" ? "secondary" : "ghost"}
              size="sm"
              className="w-full justify-start"
              asChild
            >
              <Link href="/logs">
                <FileText className="mr-2 h-4 w-4" />
                Logs & Événements
              </Link>
            </Button>
            <Button
              variant={pathname === "/statistiques" ? "secondary" : "ghost"}
              size="sm"
              className="w-full justify-start"
              asChild
            >
              <Link href="/statistiques">
                <BarChart className="mr-2 h-4 w-4" />
                Statistiques
              </Link>
            </Button>
          </div>
        </div>
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">Paramètres</h2>
          <div className="space-y-1">
            <Button
              variant={pathname === "/parametres" ? "secondary" : "ghost"}
              size="sm"
              className="w-full justify-start"
              asChild
            >
              <Link href="/parametres">
                <Settings className="mr-2 h-4 w-4" />
                Paramètres
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start text-red-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Déconnexion
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
