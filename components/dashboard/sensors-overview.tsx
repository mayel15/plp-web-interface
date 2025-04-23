"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface SensorsOverviewProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SensorsOverview({ className, ...props }: SensorsOverviewProps) {
  const sensors = [
    {
      id: "sensor-01",
      name: "Température 01",
      type: "Température",
      hubId: "hub-01",
      status: "validated",
      lastValue: "22.5°C",
      lastUpdate: "Il y a 2 minutes",
    },
    {
      id: "sensor-02",
      name: "Humidité 01",
      type: "Humidité",
      hubId: "hub-01",
      status: "validated",
      lastValue: "45%",
      lastUpdate: "Il y a 2 minutes",
    },
    {
      id: "sensor-03",
      name: "Pression 01",
      type: "Pression",
      hubId: "hub-02",
      status: "validated",
      lastValue: "1013 hPa",
      lastUpdate: "Il y a 5 minutes",
    },
    {
      id: "sensor-04",
      name: "Luminosité 01",
      type: "Luminosité",
      hubId: "hub-02",
      status: "pending",
      lastValue: "N/A",
      lastUpdate: "N/A",
    },
    {
      id: "sensor-05",
      name: "CO2 01",
      type: "CO2",
      hubId: "hub-04",
      status: "validated",
      lastValue: "450 ppm",
      lastUpdate: "Il y a 1 minute",
    },
  ]

  return (
    <Card className={cn("", className)} {...props}>
      <CardHeader>
        <CardTitle>Aperçu des Capteurs</CardTitle>
        <CardDescription>État actuel des capteurs connectés</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {sensors.map((sensor) => (
            <div key={sensor.id} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{sensor.name}</span>
                  <Badge variant={sensor.status === "validated" ? "success" : "outline"}>
                    {sensor.status === "validated" ? "Validé" : "En attente"}
                  </Badge>
                </div>
                <div className="text-sm text-muted-foreground">
                  {sensor.type} - Hub: {sensor.hubId}
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium">{sensor.lastValue}</div>
                <div className="text-xs text-muted-foreground">{sensor.lastUpdate}</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
