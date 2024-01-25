export const sortByOrder = <T extends { order: number }>(array: Array<T>) => {
    return array.sort((a, b) => {

        if (a.order < b.order) return -1;
        if (a.order > b.order) return 1;

        return 0
    });
}