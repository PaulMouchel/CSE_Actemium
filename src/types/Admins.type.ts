import { Timestamp } from "@firebase/firestore"

export type Admins = {
    createdAt: Timestamp
    list: string[]
}