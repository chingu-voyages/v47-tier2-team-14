export function loopThroughArray(arr) {
    let i = 0;
    while (i < arr.length) {
        console.log(arr[i]);
        arr.map(item => item);
        i++;
    }
}
