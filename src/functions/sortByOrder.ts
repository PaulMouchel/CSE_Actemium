export const sortByOrder = (array: Array<{ order: number }>) => {
    return array.sort((a, b) => {

        if (a.order < b.order) return -1;
        if (a.order > b.order) return 1;

        return 0
    });
}