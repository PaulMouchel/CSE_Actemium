import { Timestamp } from "@firebase/firestore"

export type Quotation = {
    author: string
    createdAt: Timestamp
    text: string
}