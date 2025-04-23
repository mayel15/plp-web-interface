import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { RegisterHubDialog } from "@/components/hub/register-hub-dialog"

export default function HubsPage() {
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
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Gestion des Hubs</h1>
        <RegisterHubDialog />
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Hubs Raspberry Pi</CardTitle>
          <CardDescription>Liste des hubs enregistrés dans le système</CardDescription>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Rechercher un hub..." className="pl-8" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nom</TableHead>
                <TableHead>Localisation</TableHead>
                <TableHead>Adresse MAC</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead>Capteurs</TableHead>
                <TableHead>Dernière activité</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {hubs.map((hub) => (
                <TableRow key={hub.id}>
                  <TableCell className="font-medium">{hub.name}</TableCell>
                  <TableCell>{hub.location}</TableCell>
                  <TableCell>{hub.mac}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        hub.status === "online" ? "success" : hub.status === "offline" ? "destructive" : "outline"
                      }
                    >
                      {hub.status === "online" ? "En ligne" : hub.status === "offline" ? "Hors ligne" : "En attente"}
                    </Badge>
                  </TableCell>
                  <TableCell>{hub.sensors}</TableCell>
                  <TableCell>{hub.lastSeen}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/hubs/${hub.id}`}>Détails</Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
