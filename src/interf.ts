type User = {
    readonly id: number;
    name: string;
    isAdmin: boolean;
};

type Address = {
    street: string;
    houseNr: number;
    town: string;
    country?: string;
}

type UserWithAddress = User & Address & {
    postCode: string;
};

const User: UserWithAddress = {
    id: 1,
    name: 'Jane',
    isAdmin: true,
    houseNr: 123,
    street: '123 Main St',
    town: 'London',
    postCode: '1234',
};

interface UserInterface {
    readonly id: number;
    name: string;
    isAdmin: boolean;
}

interface AddressInterface {
    street: string;
    houseNr: number;
    town: string;
    country?: string;
}

interface UserWithAddressInterface extends UserInterface, AddressInterface {
    postCode: string;
}

const usr1: UserWithAddressInterface = {
    id: 2,
    name: 'Bob',
    isAdmin: false,
    houseNr: 111,
    street: '111 Side St',
    town: 'London',
    postCode: '1357',
};