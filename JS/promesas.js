// crear promesa
const promesa1 = new Promise((resolve, reject) => {
    setTimeout(() => {

        // let correcto = true;

        const usuarios = [
            {
                id: 1,
                nombre:'fernando',
                email: 'f@gmail.com'
            },
            {
                id: 2,
                nombre:'Juan',
                email: 'j@gmail.com'
            },
            {
                id: 3,
                nombre:'Iram',
                email: 'i@gmail.com'
            },
        ];

        if(usuarios.length > 0) {
            const resp = {
                msg:'usuarios obtenidos',
                data:usuarios,
            };
            resolve(resp);
        } else {
            const resp = {
                msg:'lista vacia',
                data:[],
            };
            reject(resp);
        }

    }, 3000);
});

// consumir promesa
promesa1
    .then((resultado) => {
        console.log(resultado)
    }).catch((error) => {
        console.log(error)
});