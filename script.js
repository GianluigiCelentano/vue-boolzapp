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
        messages: [],
        addMessage: "",
        currentContact:0,
        currentContactAns:0
    },
    methods: {
        getMessages(index) {
            let contact = this.contacts[index];
            let messages = contact.messages;
            this.messages = messages;
            this.currentContact = index
            this.currentContactAns = index
            // this.messages = this.contacts[index].messages
        },
        addThing: function () {
            this.contacts[this.currentContact].messages.push ({
                date: this.getCurrentDateTime(),
                text: this.addMessage,
                status: "sent",
            })
            this.addMessage = ''
            if (this.contacts[this.currentContact].messages.push) {
                this.contacts[this.currentContactAns].messages.push ({
                    date: this.getCurrentDateTime(),
                    text: "ok",
                    status: "received",
                })
            }
        },
        getCurrentDateTime: function () {
            const dateTimeNow = dayjs();
            return dateTimeNow.format("DD/MM/YYYY HH:mm:ss");
        },
        searchRightName: function () { 
            this.contacts[name].filter ((filter)=>{
            if(filter.name === "Michele") {
                return true
            }
        })}
    }
})
