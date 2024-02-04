export function loopThroughObject(obj) {
    Object.entries(obj).forEach(item => {
        console.log("Item: ", item, typeof item);
        return item;
    });
}
