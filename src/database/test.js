const Database = require('./db');
const saveOrphanages = require('./saveOrphanage')

Database.then(async db => {
    //insert 
    await saveOrphanages(db, {
        lat: "-25.7680999",
        lng: "-53.5352639",
        name: "Casa Lar",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "123456789",
        images: [
            "https://images.unsplash.com/photo-1597553161987-5993dc9da24e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1594750018712-77643025beb6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar",
        opening_hours: "Horário de visitas das 10h até 8h",
        open_on_weekends: "0"
    })

    //consult
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //consult just 1
    //const orphanage = await db.all('SELECT * FROM orphanages WHERE id ="3"')
    //console.log(orphanage)

    //delete
    //console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))
})