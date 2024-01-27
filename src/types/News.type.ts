import { Timestamp } from "@firebase/firestore"

export type News = {
    galleryUrl: string[]
    order: number
    storageId: string
    subTitle: string
    text: string
    title: string
    createdAt: Timestamp
}