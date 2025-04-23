"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function RecentActivity() {
  const activities = [
    {
      id: "act-01",
      description: "Hub-01 a envoyé 120 messages MQTT",
      timestamp: "Il y a 5 minutes",
    },
    {
      id: "act-02",
      description: "Capteur Température 01 validé par admin@example.com",
      timestamp: "Il y a 30 minutes",
    },
    {
      id: "act-03",
      description: "Hub-03 est passé hors ligne",
      timestamp: "Il y a 2 heures",
    },
    {
      id: "act-04",
      description: "Nouveau capteur détecté sur Hub-02",
      timestamp: "Il y a 3 heures",
    },
    {
      id: "act-05",
      description: "Demande d'accès approuvée pour dev@example.com",
      timestamp: "Il y a 5 heures",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Activité récente</CardTitle>
        <CardDescription>Derniers événements du système</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
              <div className="space-y-1">
                <div className="text-sm">{activity.description}</div>
                <div className="text-xs text-muted-foreground">{activity.timestamp}</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
