export const redirect = (path, history) => {
    history.push(path)
}

export const spliteUrl = (url) => {
    let splitedUrl = url.split('/');
    return splitedUrl[splitedUrl.length - 2];
};
