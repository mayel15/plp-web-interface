import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Search, Download } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function LogsPage() {
  const logs = [
    {
      id: "log-001",
      timestamp: "2023-04-09T14:30:25Z",
      level: "info",
      source: "hub-01",
      message: "Hub connecté au broker MQTT",
    },
    {
      id: "log-002",
      timestamp: "2023-04-09T14:31:05Z",
      level: "info",
      source: "hub-01",
      message: "Capteur Température 01 a envoyé une mesure: 22.5°C",
    },
    {
      id: "log-003",
      timestamp: "2023-04-09T14:32:15Z",
      level: "warning",
      source: "hub-03",
      message: "Connexion instable détectée",
    },
    {
      id: "log-004",
      timestamp: "2023-04-09T14:35:00Z",
      level: "error",
      source: "hub-03",
      message: "Perte de connexion avec le broker MQTT",
    },
    {
      id: "log-005",
      timestamp: "2023-04-09T14:40:12Z",
      level: "info",
      source: "admin",
      message: "Capteur Luminosité 01 validé par admin@example.com",
    },
    {
      id: "log-006",
      timestamp: "2023-04-09T14:45:30Z",
      level: "info",
      source: "system",
      message: "Demande d'accès approuvée pour dev@example.com au capteur Température 01",
    },
    {
      id: "log-007",
      timestamp: "2023-04-09T14:50:45Z",
      level: "warning",
      source: "hub-02",
      message: "Capteur Pression 01 n'a pas envoyé de données depuis 10 minutes",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Logs & Événements</h1>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Exporter les logs
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Journal des événements</CardTitle>
          <CardDescription>Consultez les logs et événements du système</CardDescription>
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Rechercher dans les logs..." className="pl-8" />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Niveau" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les niveaux</SelectItem>
                <SelectItem value="info">Information</SelectItem>
                <SelectItem value="warning">Avertissement</SelectItem>
                <SelectItem value="error">Erreur</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Source" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes les sources</SelectItem>
                <SelectItem value="hub">Hubs</SelectItem>
                <SelectItem value="admin">Administrateurs</SelectItem>
                <SelectItem value="system">Système</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date & Heure</TableHead>
                <TableHead>Niveau</TableHead>
                <TableHead>Source</TableHead>
                <TableHead>Message</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {logs.map((log) => (
                <TableRow key={log.id}>
                  <TableCell>{new Date(log.timestamp).toLocaleString("fr-FR")}</TableCell>
                  <TableCell>
                    <Badge
                      variant={log.level === "info" ? "success" : log.level === "warning" ? "warning" : "destructive"}
                    >
                      {log.level === "info" ? "Info" : log.level === "warning" ? "Avertissement" : "Erreur"}
                    </Badge>
                  </TableCell>
                  <TableCell>{log.source}</TableCell>
                  <TableCell>{log.message}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
