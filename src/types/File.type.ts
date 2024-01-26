export type FileType = {
    file: File & {
        lastModifiedDate?: Date | undefined;
        name?: string | undefined;
    };
    fileName: string;
    status: string;
    storageRef: string;
    url: string;
    downloadURL: string;
    description: string;
}