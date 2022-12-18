



export const imgToBase64 = async ({ e, setter }) => {

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });

        //Base64
    };
    const file = e.target.files[0];
    if (file?.size <= 61748) {

        const base64 = await convertBase64(file);
        setter(base64);
    }


}