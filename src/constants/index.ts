// user
export const currentUser = {
    id: "9910197196",
    name: "John Doe",
    photo: "",
    spent: 0,
    debt: 0,
    connections: [
        {
            id: "9891161674",
            name: "Sally Sillipants",
            photo: "",
            spent: 0,
            debt: 0
        },
        {
            id: "9891161678",
            name: "Dear Donna",
            photo: "",
            spent: 0,
            debt: 0
        },
        {
            id: "9891161676",
            name: "Hotty Cupcake",
            photo: "",
            spent: 0,
            debt: 0
        }
    ]
}

export const mockUsers = [
    {
        id: "9910197196",
        name: "John Doe",
        photo: "",
        spent: 0,
        debt: 0,
        expect: 0,
        friends: [
            {
                id: "",
                spent: 0,
                toRecieve: 0
            }
        ]
    },
    {
        id: "9891161674",
        name: "Sally Sillipants",
        photo: "",
        spent: 0,
        debt: 0,
        expect: 0
    },
    {
        id: "9891161678",
        name: "Dear Donna",
        photo: "",
        spent: 0,
        debt: 0,
        expect: 0
    },
    {
        id: "9891161676",
        name: "Hotty Cupcake",
        photo: "",
        spent: 0,
        debt: 0,
        expect: 0
    }
]

export const expense1 = {
    paidBy: "9910197196",
    amount: 100,
    bearers: ["9910197196", "9891161674", "9891161678", "9891161676"],
    splitType: "="
}

export const createExpense = (id: string, amount: number) => ({
    paidBy: id,
    amount: amount,
    bearers: ["9910197196", "9891161674", "9891161678", "9891161676"],
    splitType: "="
})

export const connections = [
    {
        id: "id of connection",
        id1: "id1",
        id2: "id2",
        // user1 = amount
        // user2 = amount
    }
]
