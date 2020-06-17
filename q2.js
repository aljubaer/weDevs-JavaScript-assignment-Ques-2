let arr = [1, 2, 2, 3, 4, 4, 5];

let prev = -1;
arr = arr.filter(item => {
    let res = item != prev;
    prev = item;
    return res;
});

console.log(arr);
