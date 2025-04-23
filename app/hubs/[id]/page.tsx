import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Power, RefreshCw, Trash2 } from "lucide-react"
import Link from "next/link"

export default function HubDetailPage({ params }: { params: { id: string } }) {
  // Dans une application réelle, vous récupéreriez les données du hub à partir de l'API
  const hub = {
    id: params.id,
    name: "Hub-01",
    location: "Bâtiment A - Étage 1",
    status: "online",
    mac: "00:1B:44:11:3A:B7",
    model: "Raspberry Pi 4",
    os: "Raspberry Pi OS Lite",
    version: "2023-05-03",
    ip: "192.168.1.101",
    lastSeen: "Il y a 2 minutes",
    sensors: [
      {
        id: "sensor-01",
        name: "Température 01",
        type: "Température",
        status: "validated",
        lastValue: "22.5°C",
        lastUpdate: "Il y a 2 minutes",
      },
      {
        id: "sensor-02",
        name: "Humidité 01",
        type: "Humidité",
        status: "validated",
        lastValue: "45%",
        lastUpdate: "Il y a 2 minutes",
      },
    ],
    deployments: [
      {
        id: "deploy-01",
        name: "Monitoring Agent",
        status: "running",
        image: "monitoring-agent:1.2.3",
        deployedAt: "2023-04-05T10:30:00Z",
      },
    ],
    logs: [
      {
        id: "log-001",
        timestamp: "2023-04-09T14:30:25Z",
        level: "info",
        message: "Hub connecté au broker MQTT",
      },
      {
        id: "log-002",
        timestamp: "2023-04-09T14:31:05Z",
        level: "info",
        message: "Capteur Température 01 a envoyé une mesure: 22.5°C",
      },
    ],
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" asChild>
            <Link href="/hubs">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Retour</span>
            </Link>
          </Button>
          <h1 className="text-3xl font-bold tracking-tight">{hub.name}</h1>
          <Badge variant={hub.status === "online" ? "success" : hub.status === "offline" ? "destructive" : "outline"}>
            {hub.status === "online" ? "En ligne" : hub.status === "offline" ? "Hors ligne" : "En attente"}
          </Badge>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <RefreshCw className="mr-2 h-4 w-4" />
            Redémarrer
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="text-red-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950"
          >
            <Power className="mr-2 h-4 w-4" />
            Éteindre
          </Button>
          <Button variant="destructive" size="sm">
            <Trash2 className="mr-2 h-4 w-4" />
            Supprimer
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Informations</CardTitle>
            <CardDescription>Détails techniques du hub</CardDescription>
          </CardHeader>
          <CardContent>
            <dl className="grid grid-cols-2 gap-4">
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Modèle</dt>
                <dd>{hub.model}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Système d'exploitation</dt>
                <dd>{hub.os}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Version</dt>
                <dd>{hub.version}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Adresse MAC</dt>
                <dd>{hub.mac}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Adresse IP</dt>
                <dd>{hub.ip}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Localisation</dt>
                <dd>{hub.location}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Dernière activité</dt>
                <dd>{hub.lastSeen}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground">Capteurs connectés</dt>
                <dd>{hub.sensors.length}</dd>
              </div>
            </dl>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Statistiques</CardTitle>
            <CardDescription>Performances et utilisation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">CPU</div>
                  <div className="text-sm text-muted-foreground">25%</div>
                </div>
                <div className="mt-2 h-2 w-full rounded-full bg-secondary">
                  <div className="h-2 rounded-full bg-primary" style={{ width: "25%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">Mémoire</div>
                  <div className="text-sm text-muted-foreground">512MB / 2GB</div>
                </div>
                <div className="mt-2 h-2 w-full rounded-full bg-secondary">
                  <div className="h-2 rounded-full bg-primary" style={{ width: "25%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">Stockage</div>
                  <div className="text-sm text-muted-foreground">4GB / 16GB</div>
                </div>
                <div className="mt-2 h-2 w-full rounded-full bg-secondary">
                  <div className="h-2 rounded-full bg-primary" style={{ width: "25%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">Réseau</div>
                  <div className="text-sm text-muted-foreground">2.5 MB/s</div>
                </div>
                <div className="mt-2 h-2 w-full rounded-full bg-secondary">
                  <div className="h-2 rounded-full bg-primary" style={{ width: "25%" }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="sensors">
        <TabsList>
          <TabsTrigger value="sensors">Capteurs</TabsTrigger>
          <TabsTrigger value="deployments">Applications déployées</TabsTrigger>
          <TabsTrigger value="logs">Logs</TabsTrigger>
        </TabsList>
        <TabsContent value="sensors" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Capteurs connectés</CardTitle>
              <CardDescription>Liste des capteurs associés à ce hub</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {hub.sensors.map((sensor) => (
                  <div
                    key={sensor.id}
                    className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{sensor.name}</span>
                        <Badge variant={sensor.status === "validated" ? "success" : "outline"}>
                          {sensor.status === "validated" ? "Validé" : "En attente"}
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">{sensor.type}</div>
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
        </TabsContent>
        <TabsContent value="deployments" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Applications déployées</CardTitle>
              <CardDescription>Applications conteneurisées exécutées sur ce hub</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {hub.deployments.map((deployment) => (
                  <div
                    key={deployment.id}
                    className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{deployment.name}</span>
                        <Badge variant={deployment.status === "running" ? "success" : "destructive"}>
                          {deployment.status === "running" ? "En cours d'exécution" : "Arrêté"}
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">Image: {deployment.image}</div>
                      <div className="text-xs text-muted-foreground">
                        Déployé le: {new Date(deployment.deployedAt).toLocaleString("fr-FR")}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        Logs
                      </Button>
                      <Button size="sm" variant="outline" className="text-red-500">
                        Arrêter
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="logs" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Logs du hub</CardTitle>
              <CardDescription>Événements récents de ce hub</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {hub.logs.map((log) => (
                  <div key={log.id} className="flex items-start justify-between border-b pb-4 last:border-0 last:pb-0">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Badge
                          variant={
                            log.level === "info" ? "success" : log.level === "warning" ? "warning" : "destructive"
                          }
                        >
                          {log.level === "info" ? "Info" : log.level === "warning" ? "Avertissement" : "Erreur"}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {new Date(log.timestamp).toLocaleString("fr-FR")}
                        </span>
                      </div>
                      <div className="text-sm">{log.message}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
