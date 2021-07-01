Vue.config.devtools = true

const app = new Vue ({
    el: '#app',
    data: {
        contacts: [
            {
                name: 'Michele',
                avatar: 'img/avatar_1.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: 'img/avatar_2.jpg',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: 'img/avatar_3.jpg',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: 'img/avatar_4.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],
        messages: []
    },
        methods: {
            // ho creato una funzione con la quale attraverso l'indice clickando sull'icona
            // dell'utente mi stampa i messages inerenti all'utente con quel valore di indice 
        getMessages(index) { //questo index nell'html è nel v-for, solo in questo modo riesco 
            // a rendere dinamico il click
            //console.log(index)
            // ho assegnato all'indice dei contatti una variabile contact
            // quindi contact è uguale all'indice di contacts
            let contact = this.contacts[index];
            // adesso con questo this.contacts[index] sono all'interno dell'array contacts
            //console.log(contact.messages);
            // adesso che sono all'interno dell'array contacts con un'altra variabile vado a prendere
            // il valore messages che è dentro contacts
            let messages = contact.messages; //this.contacts[index].messages
            // adesso associo l'array contacts.messages all'array vuoto in modo da permettermi
            // di vedere solo i messaggi all'interno del contacts che ho cliccato in quel momento
            this.messages = messages; //this.contacts[index].messages = messages
            //console.log(this.messages)
        },
    }
})
