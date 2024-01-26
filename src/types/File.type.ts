import { StorageReference } from "firebase/storage";

export type FileType = {
    file: File & {
        lastModifiedDate?: Date | undefined;
        name?: string | undefined;
    };
    fileName: string;
    status: 'CREATED' | 'UPLOADING' | 'FINISH';
    storageRef: StorageReference | null;
    url: string;
    downloadURL: string;
    description: string;
}