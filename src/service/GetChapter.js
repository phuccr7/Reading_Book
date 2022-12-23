export async function getListChapter() {
    // await fetch('https://ebook4u-server.onrender.com/api/book/all')
    try {
        const response = await fetch('https://ebook4u-server.onrender.com/api/book/all', {
            // const response = await fetch('https://randomuser.me/api', {
            method: 'GET',
            headers: {
                accept: 'application/json',
            },
        });


        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result);
        return result;
    } catch (err) {
        console.log(err);
    }
}