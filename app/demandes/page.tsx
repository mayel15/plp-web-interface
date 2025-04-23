import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Search, Check, X } from "lucide-react"

export default function DemandesPage() {
  const requests = [
    {
      id: "req-01",
      developer: "dev@example.com",
      developerName: "Jean Dupont",
      sensorId: "sensor-01",
      sensorName: "Température 01",
      requestDate: "2023-04-08T14:30:00Z",
      status: "pending",
      reason: "Développement d'une application de monitoring de température",
    },
    {
      id: "req-02",
      developer: "partner@example.com",
      developerName: "Marie Martin",
      sensorId: "sensor-03",
      sensorName: "Pression 01",
      requestDate: "2023-04-08T15:45:00Z",
      status: "pending",
      reason: "Intégration avec notre système de prévision météo",
    },
    {
      id: "req-03",
      developer: "dev@example.com",
      developerName: "Jean Dupont",
      sensorId: "sensor-05",
      sensorName: "CO2 01",
      requestDate: "2023-04-09T09:15:00Z",
      status: "pending",
      reason: "Monitoring de la qualité de l'air",
    },
    {
      id: "req-04",
      developer: "external@example.com",
      developerName: "Sophie Petit",
      sensorId: "sensor-02",
      sensorName: "Humidité 01",
      requestDate: "2023-04-09T10:30:00Z",
      status: "approved",
      reason: "Projet de recherche sur l'humidité ambiante",
    },
    {
      id: "req-05",
      developer: "test@example.com",
      developerName: "Pierre Lefort",
      sensorId: "sensor-01",
      sensorName: "Température 01",
      requestDate: "2023-04-07T11:20:00Z",
      status: "rejected",
      reason: "Tests de développement",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Demandes d'accès</h1>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Demandes d'accès aux capteurs</CardTitle>
          <CardDescription>Gérez les demandes d'accès aux données des capteurs</CardDescription>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Rechercher une demande..." className="pl-8" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Développeur</TableHead>
                <TableHead>Capteur</TableHead>
                <TableHead>Motif</TableHead>
                <TableHead>Date de demande</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {requests.map((request) => (
                <TableRow key={request.id}>
                  <TableCell>
                    <div className="font-medium">{request.developerName}</div>
                    <div className="text-sm text-muted-foreground">{request.developer}</div>
                  </TableCell>
                  <TableCell>{request.sensorName}</TableCell>
                  <TableCell className="max-w-xs truncate">{request.reason}</TableCell>
                  <TableCell>{new Date(request.requestDate).toLocaleString("fr-FR")}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        request.status === "approved"
                          ? "success"
                          : request.status === "rejected"
                            ? "destructive"
                            : "outline"
                      }
                    >
                      {request.status === "approved"
                        ? "Approuvée"
                        : request.status === "rejected"
                          ? "Refusée"
                          : "En attente"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    {request.status === "pending" ? (
                      <div className="flex justify-end gap-2">
                        <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                          <Check className="h-4 w-4 text-green-500" />
                          <span className="sr-only">Approuver</span>
                        </Button>
                        <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                          <X className="h-4 w-4 text-red-500" />
                          <span className="sr-only">Refuser</span>
                        </Button>
                      </div>
                    ) : (
                      <Button variant="ghost" size="sm">
                        Détails
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
