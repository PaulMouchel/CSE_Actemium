import { Timestamp } from "@firebase/firestore"

export type Cssct = {
    createdAt: Timestamp
    imageUrl: string
    storageId: string
    text: string
    title: string
}