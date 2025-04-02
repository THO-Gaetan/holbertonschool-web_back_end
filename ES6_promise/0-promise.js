export default function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        const sucess = true;
        if (sucess) {
            resolve('Success');
        } else {
            reject(new Error('Failed'));
        }
    });
}