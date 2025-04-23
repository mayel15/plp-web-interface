"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus } from "lucide-react"

export function RegisterHubDialog() {
  const [open, setOpen] = useState(false)
  const [macAddress, setMacAddress] = useState("")
  const [hubName, setHubName] = useState("")
  const [location, setLocation] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Ici, vous implémenteriez la logique pour enregistrer le hub
    console.log("Enregistrement du hub:", { macAddress, hubName, location })
    setOpen(false)
    // Réinitialiser le formulaire
    setMacAddress("")
    setHubName("")
    setLocation("")
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Ajouter un Hub
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Enregistrer un nouveau Hub</DialogTitle>
          <DialogDescription>
            Entrez les informations du hub Raspberry Pi à enregistrer dans le système.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="mac-address" className="text-right">
                Adresse MAC
              </Label>
              <Input
                id="mac-address"
                value={macAddress}
                onChange={(e) => setMacAddress(e.target.value)}
                placeholder="00:00:00:00:00:00"
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="hub-name" className="text-right">
                Nom du Hub
              </Label>
              <Input
                id="hub-name"
                value={hubName}
                onChange={(e) => setHubName(e.target.value)}
                placeholder="Hub-XX"
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="location" className="text-right">
                Localisation
              </Label>
              <Input
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Bâtiment - Étage"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Enregistrer</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
