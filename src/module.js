async function start() {
    return await Promise.resolve('test !!!');
}

start().then(res => console.log(res));
