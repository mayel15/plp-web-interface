"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, X } from "lucide-react"

export function AccessRequests() {
  const requests = [
    {
      id: "req-01",
      developer: "dev@example.com",
      sensorId: "sensor-01",
      sensorName: "Température 01",
      requestDate: "2023-04-08T14:30:00Z",
      status: "pending",
    },
    {
      id: "req-02",
      developer: "partner@example.com",
      sensorId: "sensor-03",
      sensorName: "Pression 01",
      requestDate: "2023-04-08T15:45:00Z",
      status: "pending",
    },
    {
      id: "req-03",
      developer: "dev@example.com",
      sensorId: "sensor-05",
      sensorName: "CO2 01",
      requestDate: "2023-04-09T09:15:00Z",
      status: "pending",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Demandes d'accès</CardTitle>
        <CardDescription>Demandes d'accès aux capteurs en attente</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {requests.map((request) => (
            <div key={request.id} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
              <div className="space-y-1">
                <div className="font-medium">{request.developer}</div>
                <div className="text-sm text-muted-foreground">Demande pour: {request.sensorName}</div>
                <div className="text-xs text-muted-foreground">
                  {new Date(request.requestDate).toLocaleString("fr-FR")}
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                  <Check className="h-4 w-4 text-green-500" />
                  <span className="sr-only">Approuver</span>
                </Button>
                <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                  <X className="h-4 w-4 text-red-500" />
                  <span className="sr-only">Refuser</span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
