import { Timestamp } from "@firebase/firestore"

export type TeamMember = {
    createdAt: Timestamp
    executive: boolean
    fullName: string
    holder: boolean
    imageUrl: string
    order: number
    president: boolean
    role: string
    storageId: string
}