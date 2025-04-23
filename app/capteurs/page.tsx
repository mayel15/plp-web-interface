import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Search, Check, X } from "lucide-react"
import Link from "next/link"

export default function CapteurPage() {
  const sensors = [
    {
      id: "sensor-01",
      name: "Température 01",
      type: "Température",
      hubId: "hub-01",
      hubName: "Hub-01",
      status: "validated",
      lastValue: "22.5°C",
      lastUpdate: "Il y a 2 minutes",
    },
    {
      id: "sensor-02",
      name: "Humidité 01",
      type: "Humidité",
      hubId: "hub-01",
      hubName: "Hub-01",
      status: "validated",
      lastValue: "45%",
      lastUpdate: "Il y a 2 minutes",
    },
    {
      id: "sensor-03",
      name: "Pression 01",
      type: "Pression",
      hubId: "hub-02",
      hubName: "Hub-02",
      status: "validated",
      lastValue: "1013 hPa",
      lastUpdate: "Il y a 5 minutes",
    },
    {
      id: "sensor-04",
      name: "Luminosité 01",
      type: "Luminosité",
      hubId: "hub-02",
      hubName: "Hub-02",
      status: "pending",
      lastValue: "N/A",
      lastUpdate: "N/A",
    },
    {
      id: "sensor-05",
      name: "CO2 01",
      type: "CO2",
      hubId: "hub-04",
      hubName: "Hub-04",
      status: "validated",
      lastValue: "450 ppm",
      lastUpdate: "Il y a 1 minute",
    },
    {
      id: "sensor-06",
      name: "Mouvement 01",
      type: "Mouvement",
      hubId: "hub-04",
      hubName: "Hub-04",
      status: "pending",
      lastValue: "N/A",
      lastUpdate: "N/A",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Gestion des Capteurs</h1>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Capteurs</CardTitle>
          <CardDescription>Liste des capteurs enregistrés dans le système</CardDescription>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Rechercher un capteur..." className="pl-8" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nom</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Hub</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead>Dernière valeur</TableHead>
                <TableHead>Dernière mise à jour</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sensors.map((sensor) => (
                <TableRow key={sensor.id}>
                  <TableCell className="font-medium">{sensor.name}</TableCell>
                  <TableCell>{sensor.type}</TableCell>
                  <TableCell>{sensor.hubName}</TableCell>
                  <TableCell>
                    <Badge variant={sensor.status === "validated" ? "success" : "outline"}>
                      {sensor.status === "validated" ? "Validé" : "En attente"}
                    </Badge>
                  </TableCell>
                  <TableCell>{sensor.lastValue}</TableCell>
                  <TableCell>{sensor.lastUpdate}</TableCell>
                  <TableCell className="text-right">
                    {sensor.status === "pending" ? (
                      <div className="flex justify-end gap-2">
                        <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                          <Check className="h-4 w-4 text-green-500" />
                          <span className="sr-only">Valider</span>
                        </Button>
                        <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                          <X className="h-4 w-4 text-red-500" />
                          <span className="sr-only">Refuser</span>
                        </Button>
                      </div>
                    ) : (
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/capteurs/${sensor.id}`}>Détails</Link>
                      </Button>
                    )}
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
