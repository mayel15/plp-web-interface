"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface HubsOverviewProps extends React.HTMLAttributes<HTMLDivElement> {}

export function HubsOverview({ className, ...props }: HubsOverviewProps) {
  const hubs = [
    {
      id: "hub-01",
      name: "Hub-01",
      location: "Bâtiment A - Étage 1",
      status: "online",
      mac: "00:1B:44:11:3A:B7",
      model: "Raspberry Pi 4",
      sensors: 8,
      lastSeen: "Il y a 2 minutes",
    },
    {
      id: "hub-02",
      name: "Hub-02",
      location: "Bâtiment A - Étage 2",
      status: "online",
      mac: "00:1B:44:22:5C:D9",
      model: "Raspberry Pi 4",
      sensors: 12,
      lastSeen: "Il y a 5 minutes",
    },
    {
      id: "hub-03",
      name: "Hub-03",
      location: "Bâtiment B - Étage 1",
      status: "offline",
      mac: "00:1B:44:33:7F:E1",
      model: "Raspberry Pi 4",
      sensors: 6,
      lastSeen: "Il y a 2 heures",
    },
    {
      id: "hub-04",
      name: "Hub-04",
      location: "Bâtiment B - Étage 2",
      status: "online",
      mac: "00:1B:44:44:8A:F2",
      model: "Raspberry Pi 4",
      sensors: 10,
      lastSeen: "Il y a 1 minute",
    },
    {
      id: "hub-05",
      name: "Hub-05",
      location: "Bâtiment C - Étage 1",
      status: "pending",
      mac: "00:1B:44:55:9B:G3",
      model: "Raspberry Pi 4",
      sensors: 0,
      lastSeen: "Jamais",
    },
  ]

  return (
    <Card className={cn("", className)} {...props}>
      <CardHeader>
        <CardTitle>Aperçu des Hubs</CardTitle>
        <CardDescription>État actuel des hubs Raspberry Pi connectés</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {hubs.map((hub) => (
            <div key={hub.id} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{hub.name}</span>
                  <Badge
                    variant={hub.status === "online" ? "success" : hub.status === "offline" ? "destructive" : "outline"}
                  >
                    {hub.status === "online" ? "En ligne" : hub.status === "offline" ? "Hors ligne" : "En attente"}
                  </Badge>
                </div>
                <div className="text-sm text-muted-foreground">{hub.location}</div>
                <div className="text-xs text-muted-foreground">MAC: {hub.mac}</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium">{hub.sensors} capteurs</div>
                <div className="text-xs text-muted-foreground">Vu: {hub.lastSeen}</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
